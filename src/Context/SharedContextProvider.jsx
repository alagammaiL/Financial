import { SharedContext } from "./SharedContext";
import { useState } from "react";
import { theme } from "./SharedContext";
export default function SharedContextProvider({ children }) {
  const [role, setRole] = useState("admin");
  const [mode, setMode] = useState("light");
  function handleRole(roleVal) {
    console.log(roleVal);
    setRole(roleVal);
  }
  function handleMode() {
    setMode((pre) => (pre === "light" ? "dark" : "light"));
  }
  const ctxValue = {
    role: role,
    mode: mode,
    modeTheme: theme[mode],
    handleRole,
    handleMode,
  };
  return (
    <SharedContext.Provider value={ctxValue}>{children}</SharedContext.Provider>
  );
}
