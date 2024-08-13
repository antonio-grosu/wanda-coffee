import Image from "next/image";
import Link from "next/link";
const Home_Third_Section = () => {
  return (
    <div className="py-12 md:py-60  w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 ">
      <div className="w-full flex md:flex-row flex-col gap-8 justify-between md:mb-12 ">
        {/* div text */}
        <div className="md:w-5/12">
          <h1 className="font-bold text-yellow-950 text-4xl">
            Un Colț de Liniște în Inima Orașului
          </h1>
          <div className="my-8">
            <Image
              src="/locatie_3.png"
              alt="Poza cafenea"
              width={800}
              height={533}
              className="w-full md:hidden block rounded-sm shadow-md"
            />
          </div>
          <p className="my-8">
            Wanda te așteaptă într-o locație primitoare, situată chiar în inima
            orașului. Fie că vrei să te bucuri de o cafea de calitate sau să
            petreci timp cu cei dragi, cafeneaua noastră este locul perfect
            pentru a scăpa de agitația cotidiană. Atmosfera caldă și decorul
            intim te vor face să te simți ca acasă, indiferent de momentul
            zilei. Te așteptăm să descoperi un spațiu unde timpul parcă se
            oprește, iar fiecare vizită devine un moment de răsfăț.
          </p>
        </div>
        {/* div locatie */}
        <div className="w-5/12">
          <Image
            src="https://iili.io/d177zml.png"
            alt="Poza cafenea"
            width={800}
            height={533}
            className="w-full md:block hidden rounded-sm shadow-md"
          />
        </div>
      </div>
      {/* viziteaza-ne */}
      <div>
        <h1 className="font-bold text-yellow-950 text-4xl mt-12">
          Vizitează-ne!
        </h1>
        <div className="flex gap-2 mt-4">
          <Link
            href="https://www.google.com/maps/dir//Wanda,+Strada+Doctor+Panait+Iatropol+29,+Bucure%C8%99ti+050538/@44.4317881,25.9951893,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40b1ff1ad48e644d:0x3ad551da9091ca8!2m2!1d26.071407!2d44.4317881?entry=ttu"
            className="px-4 py-2  w-full md:w-3/12 text-center inline-flex items-center justify-center gap-2 rounded-lg hover:rounded-2xl transition-all bg-orange-500 text-white"
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Maps
          </Link>
          <Link
            href="https://waze.com/ul?q=Strada%20Doctor%20Panait%20Iatropol%2029%2C%20Bucure%C8%99ti%20050538&ll=44.4317919,26.0688321&navigate=yes"
            className=" px-4 py-2  w-full md:w-3/12 inline-flex text-center items-center justify-center gap-2 rounded-lg hover:rounded-2xl transition-all bg-sky-500 text-white"
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
                clip-rule="evenodd"
              />
            </svg>
            Waze
          </Link>
        </div>
        <div className="mt-4 border-t-2  border-gray-300/10 pt-4  text-yellow-950/50 flex items-center justify-start gap-2">
          <svg
            className="w-6 h-6  "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Strada Doctor Panait Iatropol 29, București 050538</p>
        </div>
      </div>
    </div>
  );
};

export default Home_Third_Section;
