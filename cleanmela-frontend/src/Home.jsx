import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // ✅ added
import i18n from "i18next"; // ✅ added
const API = "http://localhost:5000";

export default function Home() {
  const { t } = useTranslation(); // ✅ added
  const [hoverLogin, setHoverLogin] = useState(false);
  const [hoverRegister, setHoverRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: t("botGreeting") },
  ]);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("cleanmelaUser");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("cleanmelaUser");
    setUser(null);
    navigate("/");
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { from: "user", text: input };
    setMessages([...messages, newMsg]);

    let reply = t("botDefaultReply");
    if (input.toLowerCase().includes("toilet"))
      reply = t("botToilet");
    else if (input.toLowerCase().includes("emergency"))
      reply = t("botEmergency");
    else if (input.toLowerCase().includes("clean"))
      reply = t("botClean");

    setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    setInput("");
  };
  
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-50 to-green-50">
      {/* Center Card */}
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          margin: "auto",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        {/* Language Switcher */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <button
            onClick={() => i18n.changeLanguage("en")}
            style={{
              marginRight: "8px",
              backgroundColor: "#2563EB",
              color: "white",
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("hi")}
            style={{
              backgroundColor: "#16A34A",
              color: "white",
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            HI
          </button>
        </div>

        {/* Logo */}
        <img
          src="/cleanmela.png"
          alt="CleanMela Logo"
          style={{
            width: "120px",
            height: "120px",
            margin: "0 auto",
            display: "block",
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1f2937",
            marginTop: "16px",
          }}
        >
          {t("welcome")}
        </h1>
        <p style={{ color: "#4b5563", marginTop: "8px", fontSize: "14px" }}>
          {t("description")}
        </p>

        {/* Show logged-in user */}
        {user ? (
          <>
            <p
              style={{
                marginTop: "16px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#16A34A",
              }}
            >
              {t("loggedInAs")}: {user}
            </p>
            <button
              onClick={handleLogout}
              style={{
                marginTop: "16px",
                backgroundColor: "#DC2626",
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                width: "100%",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {t("logout")}
            </button>
          </>
        ) : (
          <div style={{ marginTop: "24px" }}>
            {/* Login */}
            <Link
              to="/login"
              onMouseEnter={() => setHoverLogin(true)}
              onMouseLeave={() => setHoverLogin(false)}
              style={{
                backgroundColor: hoverLogin ? "#1D4ED8" : "#2563EB",
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
                padding: "14px",
                borderRadius: "8px",
                display: "block",
                width: "100%",
                textAlign: "center",
                textDecoration: "none",
                marginBottom: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "background-color 0.3s ease",
              }}
            >
              {t("login")}
            </Link>

            {/* Register */}
            <Link
              to="/register"
              onMouseEnter={() => setHoverRegister(true)}
              onMouseLeave={() => setHoverRegister(false)}
              style={{
                backgroundColor: hoverRegister ? "#15803D" : "#16A34A",
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
                padding: "14px",
                borderRadius: "8px",
                display: "block",
                width: "100%",
                textAlign: "center",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "background-color 0.3s ease",
              }}
            >
              {t("register")}
            </Link>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#111827",
          color: "white",
          textAlign: "center",
          padding: "15px",
          fontSize: "14px",
          margin:"0",
          
        }}
      >
        © {new Date().getFullYear()} CleanMela | {t("footerText")}
      </footer>

      {/* Chatbot Floating Button + Window */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
        <button
          onClick={() => setChatOpen(!chatOpen)}
          style={{
            backgroundColor: "#dce2efff",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <img
            src="/chatbot.png"
            alt="Chatbot"
            style={{ width: "32px", height: "32px", color: "white" }}
          />
        </button>

        {chatOpen && (
          <div
            style={{
              width: "300px",
              height: "400px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                flex: 1,
                padding: "10px",
                overflowY: "auto",
                fontSize: "14px",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: msg.from === "user" ? "right" : "left",
                    margin: "5px 0",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      backgroundColor: msg.from === "user" ? "#DCFCE7" : "#E5E7EB",
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chatPlaceholder")}
                style={{
                  flex: 1,
                  border: "none",
                  padding: "10px",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  backgroundColor: "#16A34A",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  cursor: "pointer",
                }}
              >
                ➤
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
