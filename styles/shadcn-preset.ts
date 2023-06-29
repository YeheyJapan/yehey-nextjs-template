import { Config } from "tailwindcss"
// @ts-ignore
import animatePlugin from "tailwindcss-animate"
import { shadcnPlugin } from "./shadcn-plugin";

const shadcnPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;

export default shadcnPreset