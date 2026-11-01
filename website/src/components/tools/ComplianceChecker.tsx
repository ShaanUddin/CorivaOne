"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { GA_EVENTS, trackEvent } from "@/lib/analytics";
import { napsRates } from "@/lib/rates";

export function ComplianceChecker() {
  const [headcount, setHeadcount] = useState(50);
  const [checked, setChecked] = useState(false);

  const n = Math.max(0, Math.floor(headcount));
  const mandatory = n >= napsRates.minEmployeesMandatory;
  const minApprentices = Math.ceil(n * 0.025);
  const maxApprentices = Math.floor(n * 0.15);

  function runCheck() {
    setChecked(true);
    trackEvent(GA_EVENTS.complianceCheck, {
      headcount: n,
      mandatory,
      min_apprentices: mandatory ? minApprentices : 0,
      max_apprentices: mandatory ? maxApprentices : Math.floor(n * 0.15),
    });
  }

  return (
    <div className="rounded-lg border border-[#dce5f0] bg-white p-6 shadow-sm">
      <div>
        <Label htmlFor="headcount">Total workforce headcount (including contract staff)</Label>
        <Input
          id="headcount"
          type="number"
          min={0}
          value={headcount}
          onChange={(e) => {
            setHeadcount(Number(e.target.value));
            setChecked(false);
          }}
        />
      </div>
      <p className="mt-3 text-sm text-gray">
        Establishments with {napsRates.minEmployeesMandatory}+ workers must engage apprentices within
        the {napsRates.obligationBand} band of total strength.
      </p>
      <div className="mt-4">
        <Button type="button" onClick={runCheck}>
          Check obligation
        </Button>
      </div>
      {checked ? (
        <div className="mt-5 space-y-3 rounded-md border border-[#dce5f0] bg-surface p-4">
          {mandatory ? (
            <>
              <p className="font-semibold text-navy">
                Likely mandatory — your establishment appears to fall under the apprenticeship
                obligation.
              </p>
              <ul className="space-y-1 text-sm text-gray">
                <li>
                  Minimum apprentices (≈2.5%): <strong className="text-navy">{minApprentices}</strong>
                </li>
                <li>
                  Maximum apprentices (≈15%): <strong className="text-navy">{maxApprentices}</strong>
                </li>
              </ul>
            </>
          ) : n >= 4 ? (
            <p className="font-semibold text-navy">
              Optional engagement — with {n} workers you may engage apprentices, but the mandatory
              band typically applies from {napsRates.minEmployeesMandatory}+ employees.
            </p>
          ) : (
            <p className="font-semibold text-navy">
              Below typical eligibility thresholds for establishment engagement. Re-check once
              headcount grows.
            </p>
          )}
          <p className="text-xs text-gray">
            Indicative only. Exact obligation depends on how “worker” is counted under the
            Apprentices Act and current rules. Coriva One runs a formal eligibility & obligation
            audit before programme design.
          </p>
        </div>
      ) : null}
    </div>
  );
}
