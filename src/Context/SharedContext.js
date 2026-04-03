import { createContext } from "react";
export const theme = {
  light: {
    backgroundColor: "#fff",
    color: "#233d65",
  },
  dark: {
    backgroundColor: "#11171d",
    color: "#fff",
  },
};
export const SharedContext = createContext({
  role: "admin",
  mode: "light",
  modeTheme: theme["light"],
  handleRole: () => {},
  handleMode: () => {},
});
