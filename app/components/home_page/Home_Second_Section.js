import Image from "next/image";

const Home_Second_Section = () => {
  return (
    <div className=" py-24 md:py-12  w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 ">
      <h1 className="text-4xl text-start w-full text-yellow-950 font-bold">
        Gustul care te cucerește de la prima înghițitură
      </h1>
      <div className="mt-16 flex md:flex-row flex-col items-center justify-between gap-24">
        {/* div-ul cu poze */}
        <div className="w-full  text-yellow-950 gap-4 flex justify-center md:justify-start">
          <div className="md:w-3/12  p-1 ">
            <Image
              src="/grid-portrait.svg"
              className="object-cover rounded-md shadow-sm border-orange-100 border-2"
              alt=""
              width={2200}
              height={4600}
            />
          </div>
          <div className="flex flex-col md:w-5/12 gap-4  justify-between">
            <Image
              className="w-full rounded-md shadow-sm border-orange-100 border-2"
              src="/grid-l-1.svg"
              alt=""
              width={4096}
              height={2200}
            />
            <Image
              className="w-full rounded-md shadow-sm border-orange-100 border-2"
              src="/grid-l-2.svg"
              alt=""
              width={4096}
              height={2200}
            />
          </div>
        </div>
        <div className="md:w-7/12">
          <p>
            {" "}
            La Wanda, cafeaua noastră îți oferă în fiecare zi un moment de pură
            plăcere, pregătită cu grijă și pasiune. Alături de aceasta,
            savurează produsele noastre de patiserie, pregătite în casă, cu
            ingrediente atent alese. Într-un loc unde aromele se îmbină perfect,
            te invităm să te bucuri de o experiență autentică și reconfortantă.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home_Second_Section;
