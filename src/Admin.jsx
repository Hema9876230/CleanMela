import React, { useEffect, useState } from "react";
const API = "http://localhost:5000";

export default function Admin(){
  const [bins, setBins] = useState([]);
  const [toilets, setToilets] = useState([]);
  const [sos, setSos] = useState([]);

  const load = async () => {
    const [b, t, s] = await Promise.all([
      fetch(`${API}/api/bins`).then(r=>r.json()),
      fetch(`${API}/api/toilets`).then(r=>r.json()),
      fetch(`${API}/api/sos`).then(r=>r.json())
    ]);
    setBins(b); setToilets(t); setSos(s);
  };
  useEffect(()=>{ load(); const id=setInterval(load,4000); return ()=>clearInterval(id); },[]);

  const fullBins = bins.filter(b=>b.level>=80).length;
  const dirtyToilets = toilets.filter(t=>t.status==="Dirty").length;

  return (
    <div className="grid grid-2">
      <div className="card">
        <h2>📊 Overview</h2>
        <div>Bins: {bins.length} — <span className={fullBins? "pill bad":"pill ok"}>{fullBins} full</span></div>
        <div>Toilets: {toilets.length} — <span className={dirtyToilets? "pill bad":"pill ok"}>{dirtyToilets} dirty</span></div>
        <div>Active SOS: <span className="pill warn">{sos.length}</span></div>
      </div>
      <div className="card">
        <h2>🗑️ Bins</h2>
        {bins.map(b => (
          <div key={b.id} className="muted">• {b.location} — {b.level}%</div>
        ))}
      </div>
      <div className="card">
        <h2>🚻 Toilets</h2>
        {toilets.map(t => (
          <div key={t.id} className="muted">• {t.location} — {t.status} (last: {new Date(t.lastCleaned).toLocaleTimeString()})</div>
        ))}
      </div>
      <div className="card">
        <h2>🚨 SOS Feed</h2>
        {sos.map(x => (
          <div key={x.id} className="muted">• {x.type} at {x.location} — {new Date(x.ts).toLocaleTimeString()}</div>
        ))}
      </div>
    </div>
  );
}
