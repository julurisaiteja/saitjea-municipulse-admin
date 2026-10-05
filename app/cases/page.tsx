"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">MuniciPulse</p>
        <h1>Cases</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"C-9021","type":"Pothole","ward":"4","age":"5d","status":"Breach"},{"id":"C-9010","type":"Pothole","ward":"4","age":"3d","status":"Breach"},{"id":"C-9017","type":"Sidewalk","ward":"1","age":"4d","status":"Watch"},{"id":"C-9012","type":"Permit","ward":"1","age":"5d","status":"Review"},{"id":"C-9015","type":"Water","ward":"5","age":"1d","status":"Assigned"}]} columns={[{"key":"id","label":"Case"},{"key":"type","label":"Type"},{"key":"ward","label":"Ward"},{"key":"age","label":"Age"},{"key":"status","label":"Status"}]} searchKeys={["id","type","ward","age","status"]} />
</section>
    </div>
  );
}
