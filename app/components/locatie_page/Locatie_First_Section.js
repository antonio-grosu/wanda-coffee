import Image from "next/image";
import Link from "next/link";
const Locatie_First_Section = () => {
  return (
    <div className="pb-12 pt-36 md:flex-row-reverse  md:pt-12 min-h-screen w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex items-center justify-between gap-24">
      {/* div text */}

      <div className="md:w-5/12 text-yellow-950 ">
        <h1 className="text-3xl md:text-4xl font-bold ">
          Găsește-ne în Inima Orașului{" "}
        </h1>
        {/* imagine mobile */}
        <div className="w-full my-4 md:hidden">
          <Image
            priority
            width={1991}
            height={2790}
            src="https://iili.io/d177zml.png"
            className="w-full"
          />
        </div>
        <p className="my-8">
          Wanda te așteaptă într-un loc deosebit, situat strategic în centrul
          orașului, la doar câțiva pași de cele mai vibrante atracții. Cafeneaua
          noastră este un refugiu urban, perfect pentru a te deconecta și a
          savura momente de liniște.
        </p>

        {/* link mobile  */}
        <Link
          href="https://www.google.com/maps/dir//Wanda,+Strada+Doctor+Panait+Iatropol+29,+Bucure%C8%99ti+050538/@44.4317881,25.9951893,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40b1ff1ad48e644d:0x3ad551da9091ca8!2m2!1d26.071407!2d44.4317881?entry=ttu"
          className="px-4 py-2  w-full text-center md:hidden inline-flex items-center justify-center gap-2 rounded-lg hover:rounded-2xl transition-all bg-orange-500 text-white"
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
          className=" mt-2 px-4 py-2  w-full text-center md:hidden inline-flex items-center justify-center gap-2 rounded-lg hover:rounded-2xl transition-all bg-sky-500 text-white"
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
        {/* link desktop */}
        <Link
          href="https://www.google.com/maps/dir//Wanda,+Strada+Doctor+Panait+Iatropol+29,+Bucure%C8%99ti+050538/@44.4317881,25.9951893,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40b1ff1ad48e644d:0x3ad551da9091ca8!2m2!1d26.071407!2d44.4317881?entry=ttu"
          className="px-4 py-2    hidden md:inline-flex items-center justify-start gap-2 rounded-lg hover:rounded-2xl transition-all bg-orange-500 text-white"
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
          className="px-4 py-2 ml-2   hidden md:inline-flex items-center justify-start gap-2 rounded-lg hover:rounded-2xl transition-all bg-blue-500 text-white"
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
        <div className="mt-8 md:mt-24 border-t-2  border-gray-300/10 pt-4  text-yellow-950/50 flex items-center justify-start gap-2">
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
        <div className="mt-4  text-yellow-950 flex items-center justify-start gap-2">
          <p className="flex items-center justify-center gap-1 font-semibold">
            4.9
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>{" "}
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>{" "}
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>{" "}
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
          </p>
          <svg
            className="w-6 h-6 text-yellow-950 "
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
        </div>
      </div>
      {/* div ilustratie */}
      <div className="hidden md:block w-6/12">
        <Image
          priority
          width={1991}
          height={2790}
          src="https://iili.io/d177zml.png"
          className="w-full rounded-sm shadow-md"
        />
      </div>
    </div>
  );
};

export default Locatie_First_Section;
