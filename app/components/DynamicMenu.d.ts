import React from "react"; // Ensure React is imported for JSX types

export type Props = {
  menuName?: string;
  menuItems: JSX.Element[];
  openDirection?: "up" | "down";
};
