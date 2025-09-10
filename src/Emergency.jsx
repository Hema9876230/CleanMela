import React, { useEffect, useState } from "react";
const API = "http://localhost:5000";

export default function Emergency(){
  const [log, setLog] = useState([]);
  const [note, setNote] = useState("");
  const [location, setLocation] = useState("Gate 2, Sector A");

  const load = async () => {
    const r = await fetch(`${API}/api/sos`);
    setLog(await r.json());
  };
  useEffect(() => { load(); const id=setInterval(load,4000); return ()=>clearInterval(id); }, []);

  const send = async (type) => {
    await fetch(`${API}/api/sos`, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ type, location, note })
    });
    setNote("");
    load();
    alert(`${type} notified.`);
  };

  return (
    <div className="card">
      <h2>🚨 Emergency SOS</h2>
      <div style={{display:"flex", gap:8, margin:"8px 0"}}>
        <input placeholder="Your location" value={location} onChange={e=>setLocation(e.target.value)} style={{flex:1, padding:10, borderRadius:10, border:"1px solid #233"}}/>
        <input placeholder="Note (optional)" value={note} onChange={e=>setNote(e.target.value)} style={{flex:1, padding:10, borderRadius:10, border:"1px solid #233"}}/>
      </div>
      <div style={{display:"flex", gap:8, margin:"8px 0"}}>
        <button className="btn red" onClick={()=>send("Medical")}>Call Doctor 🚑</button>
        <button className="btn" onClick={()=>send("Police")}>Call Police 🚔</button>
      </div>
      <h3 style={{marginTop:18}}>Recent Alerts</h3>
      {log.map(item=>(
        <div key={item.id} style={{margin:"8px 0", padding:"10px", background:"#7694e7ff", borderRadius:10}}>
          <strong>{item.type}</strong> at <em>{item.location}</em> — {new Date(item.ts).toLocaleString()}
          {item.note ? <div className="muted">“{item.note}”</div> : null}
        </div>
      ))}
    </div>
  );
}
