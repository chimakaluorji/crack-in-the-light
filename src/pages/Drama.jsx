import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Drama() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.dailymotion) {
      window.dailymotion
        .createPlayer("my-dailymotion-player", {
          video: "x9pz6fg", // Dailymotion video ID
          width: "100%",
          height: "100%",
          params: {
            autoplay: true,
            mute: false,
            controls: true,
          },
        })
        .then((player) => {
          console.log("Dailymotion Player Ready:", player);
          player.on("play", () => console.log("Video started playing"));
        })
        .catch((e) => console.error("Dailymotion init failed:", e));
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* Go Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: "5px",
          left: "10px",
          backgroundColor: "#f26a1b",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "15px",
          zIndex: 9999,
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        ⬅ Go Back
      </button>

      {/* Responsive Video Wrapper */}
      <div
        style={{
          position: "relative",
          width: "100%",
          marginTop: "50px",
          aspectRatio: "16 / 7",
        }}
      >
        <div
          id="my-dailymotion-player"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>

      {/* Watch Full Movie Button */}
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <button
          onClick={() => navigate("/full-movie")} // ✅ route to your full movie page
          style={{
            backgroundColor: "#f26a1b",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d85a15")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f26a1b")}
        >
          🎬 Watch the Full Movie
        </button>
      </div>
    </div>
  );
}

export default Drama;
