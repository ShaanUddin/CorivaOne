"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { GA_EVENTS, trackEvent } from "@/lib/analytics";
import { napsRates } from "@/lib/rates";

export function StipendCalculator() {
  const [apprentices, setApprentices] = useState(10);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const a = Math.max(0, Math.floor(apprentices));
    const m = Math.max(0, Math.floor(months));
    const annual = a * napsRates.govtShareMaxPerMonthInr * m;
    setResult(annual);
    trackEvent(GA_EVENTS.calculatorUse, {
      apprentices: a,
      months: m,
      estimate_inr: annual,
      scheme: "NAPS",
    });
  }

  return (
    <div className="rounded-lg border border-[#dce5f0] bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="apprentices">Number of apprentices</Label>
          <Input
            id="apprentices"
            type="number"
            min={0}
            value={apprentices}
            onChange={(e) => setApprentices(Number(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="months">Programme months</Label>
          <Input
            id="months"
            type="number"
            min={0}
            max={36}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
          />
        </div>
      </div>
      <p className="mt-3 text-sm text-gray">
        Uses the NAPS 2.0 government share cap of ₹
        {napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")} per apprentice per month (
        {napsRates.govtSharePercent}% of stipend, capped).
      </p>
      <div className="mt-4">
        <Button type="button" onClick={calculate}>
          Estimate subsidy
        </Button>
      </div>
      {result !== null ? (
        <div className="mt-5 rounded-md border border-orange/30 bg-orange/5 p-4">
          <p className="text-sm font-semibold text-navy">Estimated government share (max)</p>
          <p className="mt-1 text-3xl font-extrabold text-orange">
            ₹{result.toLocaleString("en-IN")}
          </p>
          <p className="mt-2 text-xs text-gray">
            Illustrative maximum based on the ₹{napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")}{" "}
            / month / apprentice cap × {Math.max(0, Math.floor(apprentices))} apprentices ×{" "}
            {Math.max(0, Math.floor(months))} months. Actual DBT depends on prescribed stipend,
            eligibility, and timely employer share payments.
          </p>
        </div>
      ) : null}
    </div>
  );
}
