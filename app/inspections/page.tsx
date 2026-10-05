"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">MuniciPulse</p>
        <h1>Inspections</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"I-90","type":"Building","ward":"3","access":"OK","status":"Scheduled"},{"id":"I-91","type":"Fire","ward":"5","access":"No-access","status":"Retry"},{"id":"I-92","type":"Health","ward":"2","access":"OK","status":"Complete"},{"id":"I-93","type":"Building","ward":"4","access":"No-access","status":"Retry"}]} columns={[{"key":"id","label":"Inspection"},{"key":"type","label":"Type"},{"key":"ward","label":"Ward"},{"key":"access","label":"Access"},{"key":"status","label":"Status"}]} searchKeys={["id","type","ward","access","status"]} />
</section>
    </div>
  );
}
