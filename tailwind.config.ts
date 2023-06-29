import { Config } from "tailwindcss"
import shadcnPreset from "./styles/shadcn-preset";

const config = {
  presets: [shadcnPreset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    '../../packages/shadcn-ui/components/**/*.{ts,tsx}',
	],
} satisfies Config;

export default config