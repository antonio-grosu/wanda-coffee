import Image from "next/image";

const Produse_Second_Section = () => {
  return (
    <div className=" bg-yellow-950/50 py-24 md:py-12  w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  ">
      <h1 className="font-bold w-full text-center text-white text-4xl ">
        Explorează Colecția Noastră de Delicii
      </h1>
      <div className="flex md:flex-row flex-col items-start justify-center gap-4 md:w-8/12 mx-auto mt-12">
        <div className="md:w-1/3">
          <Image
            unoptimized
            className="w-full rounded-sm shadow-md  md:mt-24 "
            src="https://iili.io/d175LzB.png"
            width={2400}
            height={3400}
            alt="Croissant si Placinta"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            unoptimized
            className="w-full shadow-sm  "
            src="https://iili.io/d175POQ.png"
            width={2400}
            height={3400}
            alt="Croissant si Cafea"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            unoptimized
            className="w-full rounded-sm shadow-md  md:mt-24 "
            src="https://iili.io/d175ibV.png"
            width={2400}
            height={3400}
            alt="Cafea"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-4 items-start justify-center gap-4 md:w-8/12 mx-auto md:mt-12">
        <div className="md:w-1/3">
          <Image
            unoptimized
            className="w-full rounded-sm shadow-md  "
            src="https://iili.io/d177cdb.png"
            width={2400}
            height={3400}
            alt="Croissant si Placinta"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            unoptimized
            className="w-full rounded-sm shadow-md   md:mt-24 "
            src="https://iili.io/d177GIV.png"
            width={2400}
            height={3400}
            alt="Croissant si Cafea"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            unoptimized
            className="w-full rounded-sm shadow-md   "
            src="https://iili.io/d177MhB.png"
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
