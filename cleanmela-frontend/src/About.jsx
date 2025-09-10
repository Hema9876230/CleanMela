import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 px-6 py-12">
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          maxWidth: "1000px",
          textAlign: "center",
          margin: "0 auto",
          display: "block",
        }}
      >
        {/* Banner Image */} 
        <img src="/clme.png"  alt="CleanMela About" style={{ width: "100%", height: "auto", borderRadius: "12px", marginBottom: "10px", }}/>
        {/* Title */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1f2937",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          About CleanMela
        </h1>

        {/* Description */}
        <p
          style={{
            marginTop: "16px",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#374151",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <strong>CleanMela</strong> is a smart sanitation and emergency support
          platform designed for the <strong>Mahakumbh Mela</strong>. It empowers
          visitors by enabling them to:
        </p>

        {/* Features with Icons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
            textAlign: "left",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {/* Feature 1 */}
          <div style={{ padding: "10px" }}>
            <img src="/sanitation.jpg" alt="Sanitation" style={{ width: "80px" }} />
            <p style={{ marginTop: "8px", color: "#374151",boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            ✅ Report sanitation issues instantly
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{ padding: "10px" }}>
            <img src="/emergency.jpg" alt="Emergency" style={{ width: "110px" }} />
            <p style={{ marginTop: "8px", color: "#374151",boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
              ✅ Request emergency support with one click
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{ padding: "10px" }}>
            <img src="/alert.jpg" alt="Alerts" style={{ width: "110px" }} />
            <p style={{ marginTop: "8px", color: "#374151",boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
              ✅ View real-time safety alerts & crowd updates
            </p>
          </div>

          {/* Feature 4 */}
          <div style={{ padding: "10px" }}>
            <img src="/community.jpg" alt="Community" style={{ width: "110px" }} />
            <p style={{ marginTop: "8px", color: "#374151" ,boxShadow: "0 4px 12px rgba(0,0,0,0.15)"}}>
              ✅ Help organizers keep the event clean & safe
            </p>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p
          style={{
            marginTop: "30px",
            fontSize: "16px",
            color: "#374151",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
        >
          With CleanMela, our mission is to make the Mahakumbh experience
          cleaner, safer, and more organized for millions of devotees and
          visitors. CleanMela empowers visitors and event organizers alike. By
          enabling quick reporting and faster response, it helps reduce health
          risks, improve safety, and ensure that the Mahakumbh remains a{" "}
          <strong>memorable spiritual experience</strong> instead of a
          logistical challenge. It’s not just an app — it’s a step toward a{" "}
          <strong>smarter and safer India</strong>.
        </p>

        {/* Final Note */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "16px",
            color: "#111827",
            fontWeight: "600",
          }}
        >
          Together, let’s make the Mahakumbh Mela{" "}
          <em>cleaner, safer, and better</em> — with CleanMela.
        </p>

        {/* Swiper Image Slider at Bottom */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          style={{ marginTop: "30px", borderRadius: "12px" }}
        >
          <SwiperSlide>
            <img
              src="/kumbh1.jpeg"
              alt="Kumbh Mela 1"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/kumbh2.jpg"
              alt="Kumbh Mela 2"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/kumbh3.webp"
              alt="Kumbh Mela 3"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </SwiperSlide>
        </Swiper>
              {/* Footer */}
      <footer
        style={{
          backgroundColor: "#111827",
          color: "white",
          textAlign: "center",
          padding: "12px",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} CleanMela | Built for a Smarter, Safer Mela
      </footer>
      </div>
    </main>
  );
}
