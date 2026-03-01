import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

export default function EmojiSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // This creates a button that shows the current emoji and opens the picker when clicked.
  return (
    <div ref={wrapRef} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer",
          fontSize: 18,
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {value || "😀"} <span style={{ fontSize: 12 }}>▾</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            zIndex: 9999,
            top: "110%",
            left: 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            borderRadius: 12,
            overflow: "hidden",
          }}
          role="dialog"
          aria-label="Emoji picker"
        >
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              // emoji-picker-react gives you emojiData.emoji
              onChange(emojiData.emoji);
              setOpen(false);
            }}
            searchDisabled={false}
            skinTonesDisabled={false}
            lazyLoadEmojis={true}
          />
        </div>
      )}
    </div>
  );
}