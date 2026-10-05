"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">MuniciPulse</p>
        <h1>Alerts</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><div className="alert-list"><div className="alert"><span className="badge">CRIT</span> Ward 4 pothole SLA breach cluster</div><div className="alert"><span className="badge">WARN</span> Zoning permit queue 41</div><div className="alert"><span className="badge">WARN</span> Inspection no-access 18%</div><div className="alert"><span className="badge">INFO</span> Resident portal banner published</div></div></section><section className="panel"><h2>Signal density</h2><Heatmap seed={9}/></section>
    </div>
  );
}
