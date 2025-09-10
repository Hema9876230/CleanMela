import React, { useEffect, useState } from "react";
const API = "http://localhost:5000";

export default function Toilets(){
  const [toilets, setToilets] = useState([]);
  const load = async () => {
    const r = await fetch(`${API}/api/toilets`);
    setToilets(await r.json());
  };
  useEffect(() => { load(); const id=setInterval(load,5000); return ()=>clearInterval(id); }, []);

  const setStatus = async (id, status) => {
    await fetch(`${API}/api/toilets/${id}`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ status }) });
    load();
  };

  return (
    <div className="card">
      <h2>🚻 Toilet Status</h2>
      {toilets.map(t => (
        <div key={t.id} style={{margin:"12px 0", padding:"12px", background:"#7a95e0ff", borderRadius:12}}>
          <div><strong>📍 {t.location}</strong></div>
          <div>Status: {t.status === "Dirty" ? <span className="pill bad">DIRTY</span> : t.status === "Busy" ? <span className="pill warn">BUSY</span> : <span className="pill ok">CLEAN</span>}</div>
          <div className="muted">Last cleaned: {new Date(t.lastCleaned).toLocaleString()}</div>
          <div style={{marginTop:8, display:"flex", gap:8}}>
            <button className="btn green" onClick={()=>setStatus(t.id,"Clean")}>Mark Clean</button>
            <button className="btn red" onClick={()=>setStatus(t.id,"Dirty")}>Mark Dirty</button>
            <button className="btn" onClick={()=>setStatus(t.id,"Busy")}>Mark Busy</button>
          </div>
        </div>
      ))}
          
    </div>
  );
}
