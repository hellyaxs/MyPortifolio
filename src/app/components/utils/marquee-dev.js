import Image from "next/image";
import Marquee from "react-fast-marquee";
import { imagens } from "./icons-LP";
export default function MarqueeDev() {

    return (
        <>
        <Marquee>
        {Object.entries(imagens).map(([name, url]) => (
          <Image className="mx-3 filter grayscale hover:filter-none"
           key={name} src={url} alt={name} width={54} height={54}  />
        ))}
        </Marquee>
        <div className="w-full h-1 relative -top-7 shadow-lg" />
        </>
    );

}