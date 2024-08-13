import Image from "next/image";

const Produse_First_Section = () => {
  return (
    <div className="py-36 md:py-12 min-h-screen w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex items-center md:flex-row flex-col md:justify-between gap-24">
      {/* div text */}
      <div className="md:w-5/12">
        <h1 className="text-4xl font-bold text-yellow-950">
          Delicii Autentice pentru Fiecare Gust
        </h1>

        {/* vizibil mobile
         */}
        <div className="md:hidden mt-8  flex itesm-center justify-between gap-4">
          <div>
            <Image
              src="https://iili.io/d177rBt.gif"
              unoptimized
              className="w-full rounded-2xl  shadow-md"
              width={400}
              height={400}
              alt="Video Espresso"
            />
          </div>
          <div>
            <Image
              unoptimized
              src="https://iili.io/d177XB1.gif"
              className="w-full rounded-2xl shadow-md"
              width={400}
              height={400}
              alt="Video Framantare Coca"
            />
          </div>
        </div>
        <p className="mt-8">
          La Wanda, ne mândrim cu o selecție diversificată de produse, fiecare
          pregătit cu atenție și pasiune pentru a-ți oferi o experiență unică.
          De la cafeaua noastră aromată, la produsele de patiserie pregătite în
          casă, fiecare alegere îți va răsfăța simțurile. Descoperă și înghețata
          libaneză, cremoasă și plină de arome exotice, sau relaxează-te cu un
          cocktail creativ, perfect pentru orice moment al zilei. Indiferent de
          preferințe, la Wanda găsești mereu ceva care să te încânte.
        </p>
      </div>
      <div className="md:w-5/12 hidden md:flex itesm-center justify-center gap-4">
        <div>
          <Image
            src="https://iili.io/d177rBt.gif"
            className="w-full rounded-md shadow-md"
            width={400}
            height={400}
            alt="Video Espresso"
          />
        </div>
        <div>
          <Image
            src="https://iili.io/d177XB1.gif"
            className="w-full rounded-md shadow-md"
            width={400}
            height={400}
            alt="Video Framantare Coca"
          />
        </div>
      </div>
    </div>
  );
};

export default Produse_First_Section;
