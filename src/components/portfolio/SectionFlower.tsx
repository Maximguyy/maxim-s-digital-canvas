import { useTheme } from "./ThemeProvider";
import flowerDark from "@/assets/flower-dark.png";
import flowerLight from "@/assets/flower-light.svg";

export function SectionFlower() {
  const { theme } = useTheme();
  
  return (
    <img
      src={theme === "dark" ? flowerDark : flowerLight}
      alt="Decorative flower"
      width="25"
      height="25"
      className="animate-spin"
      style={{ animationDuration: '7s' }}
    />
  );
}
