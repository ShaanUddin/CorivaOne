import { NextResponse } from "next/server";
import { appendEnquiryRow, type EnquiryPayload } from "@/lib/sheets";

const recent = new Map<string, number>();

function rateLimited(ip: string) {
  const now = Date.now();
  const last = recent.get(ip) ?? 0;
  if (now - last < 8000) return true;
  recent.set(ip, now);
  return false;
}

function isValid(payload: EnquiryPayload) {
  if (!payload.fullName?.trim()) return false;
  if (!payload.workEmail?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.workEmail)) {
    return false;
  }
  if (!payload.phone?.trim() || payload.phone.replace(/\D/g, "").length < 10) return false;
  if (!payload.companyName?.trim()) return false;
  if (!payload.employeeCount?.trim()) return false;
  if (!payload.industry?.trim()) return false;
  if (!payload.interest?.trim()) return false;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ ok: false, error: "Please wait a moment and try again." }, { status: 429 });
    }

    const body = (await request.json()) as EnquiryPayload & { website?: string };
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const payload: EnquiryPayload = {
      fullName: String(body.fullName ?? ""),
      workEmail: String(body.workEmail ?? ""),
      phone: String(body.phone ?? ""),
      companyName: String(body.companyName ?? ""),
      employeeCount: String(body.employeeCount ?? ""),
      industry: String(body.industry ?? ""),
      interest: String(body.interest ?? ""),
      message: body.message ? String(body.message) : "",
      pageSource: body.pageSource ? String(body.pageSource) : "",
      utmSource: body.utmSource ? String(body.utmSource) : "",
      utmMedium: body.utmMedium ? String(body.utmMedium) : "",
      utmCampaign: body.utmCampaign ? String(body.utmCampaign) : "",
      referrer: body.referrer ? String(body.referrer) : "",
    };

    if (!isValid(payload)) {
      return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
    }

    const result = await appendEnquiryRow(payload);
    return NextResponse.json({ ok: true, mode: result.mode });
  } catch (error) {
    console.error("enquiry_error", error);
    return NextResponse.json(
      { ok: false, error: "Unable to save enquiry right now. Please email us directly." },
      { status: 500 },
    );
  }
}