import Image from "next/image";
import Link from "next/link";
const Despre_First_Section = () => {
  return (
    <div className="py-36  min-h-screen w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 ">
      <h1 className="text-4xl mb-12  font-bold text-yellow-950 w-full text-center ">
        Wanda - Oază de Relaxare într-un Cadru Familial
      </h1>
      <div className="md:flex-row flex-col  w-full flex items-center justify-between gap-8 mb-12">
        <Image
          src="/locatie_2.png"
          alt="Poza cafenea"
          width={800}
          height={533}
          className="md:w-5/12 rounded-sm shadow-md"
        />
        <p className="md:w-5/12">
          La Wanda, fiecare detaliu este gândit cu dragoste pentru a-ți oferi o
          experiență memorabilă, într-un cadru cald și familial. De la aromele
          delicate ale cafelei, până la muzica liniștită ce completează
          atmosfera, totul contribuie la crearea unui loc în care te poți relaxa
          și reîncărca. Indiferent dacă vii pentru o întâlnire rapidă sau pentru
          a petrece ore întregi în compania prietenilor și familiei, vei găsi
          mereu un colț confortabil unde să te simți ca acasă.
        </p>
      </div>
      <div className="md:flex-row   flex-col-reverse mt-8 w-full flex items-center justify-between gap-8">
        <p className="md:w-5/12">
          {" "}
          Întreaga noastră echipă, formată din membrii familiei, este dedicată
          să îți ofere cele mai bune servicii, asigurându-se că fiecare vizită
          la Wanda este una de neuitat. Ne dorim ca, odată ce ai intrat pe ușă,
          să te simți binevenit și răsfățat, iar grija noastră pentru tine să se
          reflecte în fiecare ceașcă de cafea, fiecare preparat savurat și
          fiecare zâmbet întâmpinat. Te invităm să revii ori de câte ori ai
          nevoie de o pauză binevenită, într-un loc primitor, în inima orașului
          nostru.
        </p>
        <Image
          src="/locatie_1.png"
          alt="Poza cafenea"
          width={800}
          height={533}
          className="md:w-5/12 rounded-sm shadow-md"
        />
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

export default Despre_First_Section;
