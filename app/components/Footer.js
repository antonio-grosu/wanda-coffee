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
      </div>
      {/* <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Rețele Sociale</h3>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Linkedin
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Twitter
        </Link>
      </div> */}
      {/* <div className="flex flex-col md:mt-0 mt-8 md:items-center  gap-2">
        <h3 className="font-semibold">Proiectele noastre</h3>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Web Design
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Aplicații Web de succces
        </Link>
        <Link href="/" className="text-sm hover:text-teal-500 transition-all ">
          Aplicații de Management eficiente
        </Link>
      </div> */}
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Pentru colaborări</h3>
        <Link
          href="mailto:contact@blooming-solutions.ro?subject=Colaborare&body=Buna%20ziua%20"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          contact@wanda-coffee.ro
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
