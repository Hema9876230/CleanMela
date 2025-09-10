import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("cleanmelaUser", form.email);
    navigate("/");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #E0F2FE, #DCFCE7)", // soft gradient
        padding: "20px",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          width: "100%",
          maxWidth: "400px",
          display: "grid",
          gap: "16px",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "8px",
          }}
        >
          Login
        </h1>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "16px",
            outline: "none",
            transition: "all 0.2s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #2563EB")}
          onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "16px",
            outline: "none",
            transition: "all 0.2s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #2563EB")}
          onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
        />

        {/* Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#2563EB",
            color: "white",
            fontWeight: "600",
            fontSize: "16px",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1D4ED8")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563EB")}
        >
          Login
        </button>
      </form>
    </main>
  );
}
