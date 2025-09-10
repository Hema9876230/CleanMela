import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();
    alert(`Registering: ${form.name}, ${form.email}`);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #DCFCE7, #E0F2FE)", // soft green-blue gradient
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
          Register
        </h1>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "16px",
            outline: "none",
            transition: "all 0.2s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #16A34A")}
          onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
        />

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
          onFocus={(e) => (e.target.style.border = "1px solid #16A34A")}
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
          onFocus={(e) => (e.target.style.border = "1px solid #16A34A")}
          onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
        />

        {/* Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#16A34A",
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
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#15803D")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#16A34A")}
        >
          Register
        </button>
      </form>
    </main>
  );
}
