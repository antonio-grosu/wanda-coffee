"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);
  return (
    <nav className="">
      <div className=" text-yellow-950 bg-orange-50 fixed w-full top-0 px-4 md:px-8 lg:px-12 py-2 md:py-3  flex items-center justify-between lg:justify-center gap-8 shadow-sm  ">
        <Link href="/" className="hidden lg:block">
          Acasa
        </Link>
        <Link href="/produse" className="hidden lg:block">
          Produse
        </Link>

        <div className="lg:w-1/12 w-2/12 flex lg:justify-center justify-start">
          <Link href="/">
            <Image
              src="/Logo.png"
              width={80}
              height={80}
              className=" lg:w-7/12 w-9/12"
              alt="Wanda Coffee and Joy Logo"
            />
          </Link>
        </div>
        <Link href="/despre" className="hidden lg:block">
          Despre
        </Link>
        <Link href="/locatie " className="hidden lg:block">
          Locatie
        </Link>

        <svg
          onClick={() => {
            setMenu(!menu);
          }}
          className="w-6 h-6 text-blue-950 lg:hidden"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {menu && (
        <div className="z-10 fixed h-screen flex top-0 w-full">
          {/* divul de close */}
          <div
            className="bg-gray-950/50 w-3/12 p-1"
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
          {/* divul maro */}
          <div className="fixed top-0 right-0 h-screen bg-orange-50 w-9/12 px-2 py-4">
            <Image
              src="/Logo.png"
              width={80}
              height={80}
              className="mx-auto w-3/12"
              alt="Wanda Coffee and Joy Logo"
            />
            {/* primul div din meniu  */}
            <p className="px-2 mt-16 text-sm uppercase tracking-widest text-yellow-950/50">
              PAGINI
            </p>
            <div className="mt-4 flex flex-col gap-8">
              <Link
                onClick={() => {
                  setMenu(!menu);
                }}
                href="/"
                className="w-full text-yellow-950 p-2 flex items-center justify-start gap-2"
              >
                <svg
                  className="w-6 h-6 text-yellow-950"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                    clipRule="evenodd"
                  />
                </svg>
                Acasa
              </Link>
              <Link
                onClick={() => {
                  setMenu(!menu);
                }}
                href="/produse"
                className="w-full text-yellow-950 p-2  flex items-center justify-start gap-2"
              >
                <svg
                  className="w-6 h-6 text-yellow-950"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.535 7.677c.313-.98.687-2.023.926-2.677H17.46c.253.63.646 1.64.977 2.61.166.487.312.953.416 1.347.11.42.148.675.148.779 0 .18-.032.355-.09.515-.06.161-.144.3-.243.412-.1.111-.21.192-.324.245a.809.809 0 0 1-.686 0 1.004 1.004 0 0 1-.324-.245c-.1-.112-.183-.25-.242-.412a1.473 1.473 0 0 1-.091-.515 1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.401 1.401 0 0 1 13 9.736a1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.4 1.4 0 0 1 9 9.74v-.008a1 1 0 0 0-2 .003v.008a1.504 1.504 0 0 1-.18.712 1.22 1.22 0 0 1-.146.209l-.007.007a1.01 1.01 0 0 1-.325.248.82.82 0 0 1-.316.08.973.973 0 0 1-.563-.256 1.224 1.224 0 0 1-.102-.103A1.518 1.518 0 0 1 5 9.724v-.006a2.543 2.543 0 0 1 .029-.207c.024-.132.06-.296.11-.49.098-.385.237-.85.395-1.344ZM4 12.112a3.521 3.521 0 0 1-1-2.376c0-.349.098-.8.202-1.208.112-.441.264-.95.428-1.46.327-1.024.715-2.104.958-2.767A1.985 1.985 0 0 1 6.456 3h11.01c.803 0 1.539.481 1.844 1.243.258.641.67 1.697 1.019 2.72a22.3 22.3 0 0 1 .457 1.487c.114.433.214.903.214 1.286 0 .412-.072.821-.214 1.207A3.288 3.288 0 0 1 20 12.16V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-6.888ZM13 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                Produse
              </Link>
              <Link
                onClick={() => {
                  setMenu(!menu);
                }}
                href="/despre"
                className="w-full text-yellow-950 p-2 flex items-center justify-start gap-2"
              >
                <svg
                  className="w-6 h-6 text-yellow-950"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Despre
              </Link>

              <Link
                onClick={() => {
                  setMenu(!menu);
                }}
                href="/locatie"
                className="w-full text-yellow-950 p-2 flex items-center justify-start gap-2"
              >
                <svg
                  className="w-6 h-6  text-yellow-950"
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
                    clipRule="evenodd"
                  />
                </svg>
                Locatie
              </Link>
            </div>
            {/* al doilea div din meniu  */}
            <p className="px-2 mt-16 text-sm uppercase tracking-widest text-yellow-950/50">
              date de contact
            </p>
            <div className="mt-4 flex flex-col gap-8">
              <Link
                onClick={() => {
                  setMenu(!menu);
                }}
                href="/"
                className="w-full text-yellow-950 p-2  flex items-center justify-start gap-2"
              >
                <svg
                  className="w-6 h-6 text-yellow-950"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                </svg>
                contact@wanda-coffee.ro
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
