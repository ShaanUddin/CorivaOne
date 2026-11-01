"use client";

import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/Input";
import { getUtmParams, trackEnquirySubmit } from "@/lib/analytics";

type Errors = Partial<Record<string, string>>;

const employeeOptions = ["1–29", "30–99", "100–499", "500+"];
const industryOptions = ["Manufacturing", "Logistics", "IT & Software", "Other"];
const interestOptions = ["NAPS", "NATS", "Both", "Not sure"];

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  const initial = useMemo(
    () => ({
      fullName: "",
      workEmail: "",
      phone: "",
      companyName: "",
      employeeCount: "",
      industry: "",
      interest: "",
      message: "",
      website: "",
    }),
    [],
  );
  const [form, setForm] = useState(initial);

  function validate(): Errors {
    const next: Errors = {};
    if (!form.fullName.trim()) next.fullName = "Name is required";
    if (!form.workEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) {
      next.workEmail = "Valid work email is required";
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Valid phone / WhatsApp is required";
    }
    if (!form.companyName.trim()) next.companyName = "Company name is required";
    if (!form.employeeCount) next.employeeCount = "Select employee count";
    if (!form.industry) next.industry = "Select industry";
    if (!form.interest) next.interest = "Select interest";
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError("");
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    if (form.website) return;

    setStatus("loading");
    const utm = getUtmParams();
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageSource: pathname,
          utmSource: utm.utm_source,
          utmMedium: utm.utm_medium,
          utmCampaign: utm.utm_campaign,
          referrer: utm.referrer,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Unable to submit enquiry");
      }
      trackEnquirySubmit({
        industry: form.industry,
        interest: form.interest,
        employee_band: form.employeeCount,
      });
      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-900">
        Thanks — we will respond within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
          />
          <FieldError>{errors.fullName}</FieldError>
        </div>
        <div>
          <Label htmlFor="workEmail">Work email</Label>
          <Input
            id="workEmail"
            type="email"
            value={form.workEmail}
            onChange={(e) => setForm((f) => ({ ...f, workEmail: e.target.value }))}
          />
          <FieldError>{errors.workEmail}</FieldError>
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          <FieldError>{errors.phone}</FieldError>
        </div>
        <div>
          <Label htmlFor="companyName">Company name</Label>
          <Input
            id="companyName"
            value={form.companyName}
            onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
          />
          <FieldError>{errors.companyName}</FieldError>
        </div>
        <div>
          <Label htmlFor="employeeCount">Approximate employee count</Label>
          <Select
            id="employeeCount"
            value={form.employeeCount}
            onChange={(e) => setForm((f) => ({ ...f, employeeCount: e.target.value }))}
          >
            <option value="">Select</option>
            {employeeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          <FieldError>{errors.employeeCount}</FieldError>
        </div>
        <div>
          <Label htmlFor="industry">Industry</Label>
          <Select
            id="industry"
            value={form.industry}
            onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
          >
            <option value="">Select</option>
            {industryOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          <FieldError>{errors.industry}</FieldError>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <Label htmlFor="interest">Interested in</Label>
          <Select
            id="interest"
            value={form.interest}
            onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
          >
            <option value="">Select</option>
            {interestOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          <FieldError>{errors.interest}</FieldError>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <Label htmlFor="message">Message (optional)</Label>
          <Textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          />
        </div>
      </div>
      {serverError ? <p className="text-sm text-red-600">{serverError}</p> : null}
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Submit enquiry"}
      </Button>
    </form>
  );
}