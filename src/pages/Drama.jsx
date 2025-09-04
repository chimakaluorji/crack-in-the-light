import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Drama() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.dailymotion) {
      window.dailymotion
        .createPlayer("my-dailymotion-player", {
          video: "x9pxrju", // Dailymotion video ID
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
          position: "fixed", // ✅ stays on top even on mobile
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
          zIndex: 9999, // ✅ ensures it's above the iframe
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
          marginTop: "50px", // ✅ pushes video down so button doesn’t overlap
          aspectRatio: "16 / 7", // slimmer ratio
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
    </div>
  );
}

export default Drama;
