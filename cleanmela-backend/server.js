import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs"; // for password hashing
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// ===============================
// Mock "Database"
// ===============================
let dustbins = [
  { id: 1, location: "Sector A - Gate 1", level: 32 },
  { id: 2, location: "Sector B - Main Road", level: 78 },
  { id: 3, location: "Ghat 5 - Entry", level: 15 }
];

let toilets = [
  { id: 1, location: "Toilet Cluster A", status: "Clean", lastCleaned: new Date().toISOString() },
  { id: 2, location: "Toilet Cluster B", status: "Dirty", lastCleaned: new Date(Date.now() - 3600e3).toISOString() }
];

let sos = [];      // {id, type, location, note, ts}
let reports = [];  // {id, type, description, location, ts}

// For Auth
const USERS_FILE = "./users.json";
const loadUsers = () => (fs.existsSync(USERS_FILE) ? JSON.parse(fs.readFileSync(USERS_FILE)) : []);
const saveUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

// ===============================
// Auth Routes
// ===============================
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let users = loadUsers();
  const existing = users.find((u) => u.email === email);
  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashedPassword };
  users.push(newUser);
  saveUsers(users);

  return res.json({ message: "Signup successful!" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let users = loadUsers();

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  return res.json({ message: `Welcome back, ${user.name}!` });
});

// ===============================
// Sensor APIs
// ===============================

// --- Sensors: GET ---
app.get("/api/bins", (req, res) => res.json(dustbins));
app.get("/api/toilets", (req, res) => res.json(toilets));
app.get("/api/sos", (req, res) => res.json(sos.sort((a, b) => b.ts - a.ts)));
app.get("/api/reports", (req, res) => res.json(reports.sort((a, b) => b.ts - a.ts)));

// --- Sensors: UPDATE ---
app.post("/api/bins/:id", (req, res) => {
  const id = +req.params.id;
  const { level } = req.body;
  const bin = dustbins.find((b) => b.id === id);
  if (!bin) return res.status(404).json({ error: "Not found" });
  bin.level = Math.max(0, Math.min(100, +level || 0));
  return res.json({ ok: true, bin });
});

app.post("/api/toilets/:id", (req, res) => {
  const id = +req.params.id;
  const { status } = req.body; // "Clean" | "Dirty" | "Busy"
  const t = toilets.find((x) => x.id === id);
  if (!t) return res.status(404).json({ error: "Not found" });
  t.status = status || t.status;
  if (status === "Clean") t.lastCleaned = new Date().toISOString();
  return res.json({ ok: true, toilet: t });
});

// --- SOS ---
app.post("/api/sos", (req, res) => {
  const { type = "Medical", location = "Unknown", note = "" } = req.body;
  const item = { id: sos.length + 1, type, location, note, ts: Date.now() };
  sos.push(item);
  return res.json({ ok: true, sos: item });
});

// --- Reports ---
app.post("/api/reports", (req, res) => {
  const { type = "Other", description = "", location = "User Report" } = req.body;
  const item = { id: reports.length + 1, type, description, location, ts: Date.now() };
  reports.push(item);
  return res.json({ ok: true, report: item });
});

// ===============================
// Live Demo Simulation
// ===============================
setInterval(() => {
  dustbins = dustbins.map((b) => {
    const delta = Math.floor(Math.random() * 15) - 5; // -5..+9
    return { ...b, level: Math.max(0, Math.min(100, b.level + delta)) };
  });

  toilets = toilets.map((t) => {
    if (Math.random() < 0.15) t.status = t.status === "Dirty" ? "Clean" : "Dirty";
    if (t.status === "Clean") t.lastCleaned = new Date().toISOString();
    return t;
  });
}, 15000);

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
