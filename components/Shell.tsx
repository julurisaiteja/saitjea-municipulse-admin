"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Service Desk"],["/cases","Cases"],["/permits","Permits"],["/inspections","Inspections"],["/departments","Departments"],["/alerts","Alerts"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"Permit backlog zoning","a":"Zoning queue 41. Open Saturday clinic; auto-assign simple renewals to Level 1."},{"q":"Pothole SLA breach ward 4","a":"Reassign 2 crews from ward 2; publish ETA banner on resident portal."},{"q":"Inspection no-access spike","a":"No-access 18%. Require photo confirm on booking; SMS day-before checklist."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell">
      <header className="banner">
        <div>
          <div className="brand">Munici<span>Pulse</span></div>
          <p style={{ margin: "0.25rem 0 0", fontSize: 12, opacity: 0.85 }}>Municipal service desk · <LiveClock /></p>
        </div>
        <div className="seal" aria-hidden>CITY</div>
      </header>
      <nav className="nav" aria-label="Primary">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
        ))}
      </nav>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="MuniciPulse" prompts={PROMPTS} />
    </div>
  );
}
