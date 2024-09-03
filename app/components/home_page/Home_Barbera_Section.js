import Image from "next/image";
const Home_Barbera_Section = () => {
  return (
    <div className=" py-24 md:py-12   w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 ">
      {/* primul div */}
      <div className="flex w-full  flex-col md:flex-row-reverse md:items-center md:justify-between">
        <div className="md:w-5/12">
          <h1 className="text-4xl font-bold text-yellow-950">
            Savurează gustul autentic al cafelei Barbera, direct în cafeneaua
            noastră
          </h1>
          <Image
            priority
            className="mt-8 w-full md:hidden block  rounded-sm shadow-md"
            width={450}
            height={450}
            src="/barbera-principal.png"
            alt="Barbera Poza Principala"
          ></Image>
          <p className="mt-8 text-yellow-950">
            Vino să experimentezi tradiția și măiestria italiană în fiecare
            sorbitură, într-o atmosferă caldă și primitoare, unde povestea
            continuă să fie scrisă cu fiecare ceașcă pe care ți-o servesc.
          </p>
        </div>
        <div className="hidden w-5/12 md:flex md:justify-start">
          <Image
            priority
            className="w-10/12  rounded-sm shadow-md"
            width={450}
            height={450}
            src="/barbera-principal.png"
            alt="Poza principala Barbera"
          ></Image>
        </div>
      </div>
      {/* al doilea div */}
      <div className="flex w-full mt-24  flex-col-reverse md:flex-row md:items-center md:justify-between">
        <p className="mt-8 md:mt-0 md:w-5/12">
          Povestea cafelei Barbera începe în 1870 când Domenico Barbera s-a
          stabilit în sudul Italiei și a început să prăjească boabele de cafea
          cu o mașină manuală. De asemenea, cunoscut sub numele de Magicianul
          cafelei, Dl. Barbera a început să facă afaceri cu abordarea tipică
          meticuloasă a Italiei de Nord și apoi mai târziu, cu trăsăturile sale
          mediteraneene adoptate. Prima mașină de prăjire, numită Tornado, a
          fost capabilă să prăjească 30 de kilograme de cafea la acea vreme.
          Tornado simboliza mândria și bucuria Dl-ului Barbera. Chiar dacă a
          decedat în mod neașteptat la o vârstă fragedă, acesta a transmis
          cunoștințele și pasiunea pentru cafea copiilor săi și trăiește astăzi
          prin intermediul afacerii de familie care îi poartă numele.
        </p>
        <div className=" md:w-5/12 md:flex md:justify-start">
          <Image
            priority
            className="w-full rounded-sm shadow-md"
            width={450}
            height={450}
            src="/barbera-second.png"
            alt="Poza Barbera Secundara"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Home_Barbera_Section;
