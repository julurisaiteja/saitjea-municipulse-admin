"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">MuniciPulse</p>
        <h1>Permits</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"P-441","type":"Zoning renewal","ward":"2","age":"6d","status":"Review"},{"id":"P-442","type":"Building","ward":"1","age":"2d","status":"Queued"},{"id":"P-443","type":"Event","ward":"3","age":"1d","status":"Approved"},{"id":"P-444","type":"Zoning new","ward":"4","age":"8d","status":"Backlog"}]} columns={[{"key":"id","label":"Permit"},{"key":"type","label":"Type"},{"key":"ward","label":"Ward"},{"key":"age","label":"Age"},{"key":"status","label":"Status"}]} searchKeys={["id","type","ward","age","status"]} />
</section>
    </div>
  );
}
