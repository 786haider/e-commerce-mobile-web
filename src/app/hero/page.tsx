import Image from "next/image";
import HeroImage from "../../../public/hero2.png";

export default function Hero() {
  return (
    <div className="bg-neutral-800 flex flex-wrap items-center h-auto">
      <div className="flex-1 ml-12 md:ml-48">
        <p className="text-white mt-16 font-bold">Pro.Beyond.</p>
        <h1 className="mt-5 text-4xl md:mt-7 md:text-7xl text-white">
          IPHONE 14 Pro
        </h1>
        <p className="mt-3 md:mt-5 text-sm text-white">
          Create to change everything for the <br className="md:hidden" />{" "}
          better. For everyone
        </p>
        <button
          className="mt-3 mb-5 w-36 h-12 md:mt-5 items-center text-white hover:bg-black border rounded-lg"
          style={{ border: "1px solid white" }}
        >
          Shop Now
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
}
