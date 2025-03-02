import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
 
const pillTabs = [
  "Hobbies",
  "Work",
  "Projects",
  "This is a loooooooooong item",
  "Languages",
];
 
export function PillTabs() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
 
  const tabsComponents = pillTabs.map((text, i) => {
    return (
      <button
        key={text}
        onMouseEnter={() => setHoveredIndex(i)}
        style={{
          position: "relative",
          padding: "0.65rem 0.75rem",
          backgroundColor: "black",
          color: "white",
          border: 0,
          borderRadius: "999px"
        }}
      >
        {hoveredIndex === i && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.35 }}
          >
            <span
              style={{
                borderRadius: "999px",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                backgroundColor: "white",
                mixBlendMode: "difference"
              }}
            />
          </MagicTabSelect>
        )}
        {text}
      </button>
    );
  });
 
  return (
    <div style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
      {tabsComponents}
    </div>
  );
}