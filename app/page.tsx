"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"Open cases",values:[312,298,330,305],suffix:""},{label:"SLA met",values:[87,85,89,86],suffix:"%"},{label:"Permits queue",values:[41,38,45,36],suffix:""},{label:"Inspections",values:[56,61,52,58],suffix:""},{label:"Avg resolve",values:[2.8,3.1,2.5,2.9],suffix:"d"},{label:"Portal CSAT",values:[4.2,4.1,4.3,4],suffix:""}];
const ACTIVITY=["Case C-9021 SLA","Zoning permits 41","Ward 4 pothole crew","Inspection no-access","Portal banner live"];
const ROWS=[{id:"C-9010",type:"Pothole",ward:"4",dept:"Public Works",age:"3d",status:"Breach"},{id:"C-9011",type:"Noise",ward:"2",dept:"Code",age:"1d",status:"Open"},{id:"C-9012",type:"Permit",ward:"1",dept:"Zoning",age:"5d",status:"Review"},{id:"C-9013",type:"Trash",ward:"3",dept:"Sanitation",age:"0d",status:"Scheduled"},{id:"C-9014",type:"Tree",ward:"4",dept:"Parks",age:"2d",status:"Open"},{id:"C-9015",type:"Water",ward:"5",dept:"Utilities",age:"1d",status:"Assigned"},{id:"C-9016",type:"Permit",ward:"2",dept:"Zoning",age:"6d",status:"Review"},{id:"C-9017",type:"Sidewalk",ward:"1",dept:"Public Works",age:"4d",status:"Watch"},{id:"C-9018",type:"Inspection",ward:"3",dept:"Building",age:"0d",status:"Scheduled"},{id:"C-9019",type:"Graffiti",ward:"5",dept:"Code",age:"2d",status:"Open"},{id:"C-9020",type:"Streetlight",ward:"4",dept:"Utilities",age:"3d",status:"Assigned"},{id:"C-9021",type:"Pothole",ward:"4",dept:"Public Works",age:"5d",status:"Breach"}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>CIVIC CLARITY</p><h1>Service desk</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Clear civic casework — permits, inspections, ward SLAs.</p></header>
<div className="video-film"><img src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=1600&q=80" alt="City hall"/><div className="cap">CIVIC FILM · CITY DESK</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<section className="panel"><h2>Ward pressure</h2><div className="ward-grid">
{[["1","Stable",72],["2","Watch",81],["3","Stable",65],["4","Hot",96],["5","Watch",78]].map(([w,s,v])=><div className="ward" key={String(w)}><strong>Ward {w}</strong>{s}<Meter value={Number(v)}/></div>)}
</div></section>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+2}/></FadeIn>)}</div>
<div className="grid-2"><section className="panel"><h2>Case volume</h2><TrendArea/></section><section className="panel"><h2>Dept mix</h2><MixBars/></section></div>
<section className="panel"><h2>Case board</h2><FilterTable rows={ROWS} columns={[{key:"id",label:"Case"},{key:"type",label:"Type"},{key:"ward",label:"Ward"},{key:"dept",label:"Dept"},{key:"age",label:"Age"},{key:"status",label:"Status"}]} searchKeys={["id","type","ward","dept","status"]}/></section>
<section className="panel"><h2>Request density</h2><Heatmap seed={4}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(1);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
