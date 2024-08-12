import Image from "next/image";

const Home_Third_Section = () => {
  return (
    <div className="py-24 md:py-60  w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 ">
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
            src="/locatie_3.png"
            alt="Poza cafenea"
            width={800}
            height={533}
            className="w-full md:block hidden rounded-sm shadow-md"
          />
        </div>
      </div>
      <div className="md:flex-row flex-col  w-full flex items-center justify-between gap-8 mb-12">
        <Image
          src="/locatie_2.png"
          alt="Poza cafenea"
          width={800}
          height={533}
          className="md:w-5/12 rounded-sm shadow-md"
        />
        <p className="md:w-5/12">
          La Wanda, fiecare detaliu este gândit pentru a-ți oferi o experiență
          memorabilă. De la aromele delicate ale cafelei până la muzica
          liniștită ce completează atmosfera, totul contribuie la crearea unui
          loc în care te poți relaxa și reîncărca. Indiferent dacă vii pentru o
          întâlnire rapidă sau pentru a petrece ore întregi în compania
          prietenilor, vei găsi mereu un colț confortabil unde să te simți în
          largul tău.
        </p>
      </div>
      <div className="md:flex-row   flex-col-reverse mt-8 w-full flex items-center justify-between gap-8">
        <p className="md:w-5/12">
          {" "}
          Întreaga noastră echipă este dedicată să îți ofere cele mai bune
          servicii, asigurându-se că fiecare vizită la Wanda este una de
          neuitat. Ne dorim ca, odată ce ai intrat pe ușă, să te simți binevenit
          și răsfățat, iar grija noastră pentru tine să se reflecte în fiecare
          ceașcă de cafea, fiecare preparat savurat și fiecare zâmbet
          întâmpinat. Te invităm să revii ori de câte ori ai nevoie de o pauză
          binevenită în inima orașului.
        </p>
        <Image
          src="/locatie_1.png"
          alt="Poza cafenea"
          width={800}
          height={533}
          className="md:w-5/12 rounded-sm shadow-md"
        />
      </div>
      <h1 className="font-bold text-yellow-950 text-4xl mt-12">
        Vizitează-ne!
      </h1>
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
  );
};

export default Home_Third_Section;
