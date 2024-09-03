import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full bg-orange-50 px-4 md:px-8 py-12 flex md:flex-row flex-col items-top justify-between">
      <div className="flex flex-col md:w-3/12">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="w-3/12"
        />
        <h3 className="text-xl font-bold text-yellow-950 mt-2">
          Coffee and Joy
        </h3>
        <p className="text-sm mt-4 text-black/50">
          Strada Doctor Panait Iatropol 29, București 050538
        </p>
        {/* blooming solutions mark */}
        <Link
          href="https://blooming-solutions.ro"
          className="mt-8 w-full flex items-center justify-start gap-2"
        >
          <Image
            priority
            className="w-1/12"
            src="/Blooming_Solutions_Logo.png"
            width={400}
            height={400}
          ></Image>
          <p className="font-semibold text-sm">Powered by Blooming Solutions</p>
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Navigație</h3>
        <Link
          href="/"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Acasa
        </Link>
        <Link
          href="/produse"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Produse
        </Link>
        <Link
          href="/despre"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Despre
        </Link>
        <Link
          href="/locatie"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Locatie
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Rețele Sociale</h3>
        <Link
          href="https://www.facebook.com/p/Wanda-Coffee-and-joy-100083211436695/?_rdr"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Facebook
        </Link>
        <Link
          href="https://www.instagram.com/wandacoffeeandjoy?igsh=ejkzaGtobG9xdmZv"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Instagram
        </Link>
        <Link
          href="https://www.tiktok.com/@wanda.coffee.and.joy"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Tiktok
        </Link>
      </div>

      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Pentru colaborări</h3>
        <Link
          href="mailto:wandacoffeeandjoy@gmail.com?subject=Colaborare"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          wandacoffeeandjoy@gmail.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
