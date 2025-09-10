import React, { useEffect, useState } from "react";
const API = "http://localhost:5000";

export default function Bins(){
  const [bins, setBins] = useState([]);
  const load = async () => {
    const r = await fetch(`${API}/api/bins`);
    setBins(await r.json());
  };
  useEffect(() => { load(); const id=setInterval(load,5000); return ()=>clearInterval(id); }, []);

  const simulate = async (id, level) => {
    await fetch(`${API}/api/bins/${id}`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ level }) });
    load();
  };

  return (
    <div className="card">
      <h2>🗑️ Smart Bin Status</h2>
      {bins.map(b => (
        <div key={b.id} style={{margin:"12px 0", padding:"12px", background:"#0f1629", borderRadius:12}}>
          <div><strong>📍 {b.location}</strong></div>
          <div>Level: <strong>{b.level}%</strong> {b.level>=80 ? <span className="pill bad">FULL</span> : b.level>=60 ? <span className="pill warn">High</span> : <span className="pill ok">OK</span>}</div>
          <div style={{marginTop:8, display:"flex", gap:8}}>
            <button className="btn" onClick={()=>simulate(b.id, Math.min(100,b.level+20))}>+20%</button>
            <button className="btn" onClick={()=>simulate(b.id, Math.max(0,b.level-20))}>-20%</button>
          </div>
        </div>
      ))}
    </div>
  );
}
