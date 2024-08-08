import Image from "next/image";

const Produse_Second_Section = () => {
  return (
    <div className=" bg-yellow-950 py-24 md:py-12  w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  ">
      <h1 className="font-bold w-full text-center text-white text-4xl ">
        Explorează Colecția Noastră de Delicii
      </h1>
      <div className="flex md:flex-row flex-col items-start justify-center gap-4 md:w-8/12 mx-auto mt-12">
        <div className="md:w-1/3">
          <Image
            className="w-full rounded-md border-2 border-orange-100 md:mt-24 "
            src="/cafea_1.svg"
            width={2400}
            height={3400}
            alt="Croissant si Placinta"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            className="w-full rounded-md border-2 border-orange-100 "
            src="/cafea_2.svg"
            width={2400}
            height={3400}
            alt="Croissant si Cafea"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            className="w-full rounded-md border-2 border-orange-100 md:mt-24 "
            src="/cafea_3.svg"
            width={2400}
            height={3400}
            alt="Placinta"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-4 items-start justify-center gap-4 md:w-8/12 mx-auto md:mt-12">
        <div className="md:w-1/3">
          <Image
            className="w-full rounded-md border-2 border-orange-100 "
            src="/patiserie_1.svg"
            width={2400}
            height={3400}
            alt="Croissant si Placinta"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            className="w-full rounded-md border-2 border-orange-100  md:mt-24 "
            src="/patiserie_2.svg"
            width={2400}
            height={3400}
            alt="Croissant si Cafea"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            className="w-full rounded-md border-2 border-orange-100  "
            src="/patiserie_3.svg"
            width={2400}
            height={3400}
            alt="Placinta"
          />
        </div>
      </div>
    </div>
  );
};

export default Produse_Second_Section;
