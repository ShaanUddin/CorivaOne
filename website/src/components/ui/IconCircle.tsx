import type { ReactNode } from "react";

export function IconCircle({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-icon-wash text-navy">
      {children}
    </div>
  );
}