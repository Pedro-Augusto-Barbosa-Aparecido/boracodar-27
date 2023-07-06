import BackgroundSVG from "@next-app/assets/Background.png";
import Image from "next/image";

export async function Background() {
  return (
    <Image
      alt="background" 
      src={BackgroundSVG}
      fill
      className="-z-[9999999]"
    />    
  );
}
