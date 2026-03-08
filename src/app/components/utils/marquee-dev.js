import Image from "next/image";
import Marquee from "react-fast-marquee";
import { imagens } from "./icons-LP";

export default function MarqueeDev() {
  return (
    <div className="border-t border-border py-8 overflow-hidden">
      <Marquee gradient={false} speed={35} pauseOnHover>
        {Object.entries(imagens).map(([name, url]) => (
          <div key={name} className="mx-6 opacity-50 hover:opacity-90 transition-opacity duration-200">
            <Image src={url} alt={name} width={36} height={36} className="object-contain" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
