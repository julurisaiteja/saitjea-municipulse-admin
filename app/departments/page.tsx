"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">MuniciPulse</p>
        <h1>Departments</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"dept":"Public Works","open":88,"sla":"82%","status":"Hot"},{"dept":"Zoning","open":41,"sla":"71%","status":"Backlog"},{"dept":"Building","open":29,"sla":"90%","status":"Stable"},{"dept":"Sanitation","open":18,"sla":"94%","status":"Stable"},{"dept":"Utilities","open":24,"sla":"87%","status":"Watch"}]} columns={[{"key":"dept","label":"Dept"},{"key":"open","label":"Open"},{"key":"sla","label":"SLA"},{"key":"status","label":"Status"}]} searchKeys={["dept","open","sla","status"]} />
</section>
    </div>
  );
}
