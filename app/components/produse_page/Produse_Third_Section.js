import Link from "next/link";

const Produse_Third_Section = () => {
  return (
    <div
      id="menu"
      className=" bg-gray-50 py-24 md:py-12  w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  "
    >
      <h1 className="text-4xl font-bold text-yellow-950">
        Descoperă Meniul Nostru: Răsfăț pentru Toate Gusturile
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        {/* băuturi calde */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">
            Băuturi Calde Italian Blend | Decof / Specialități
          </h3>
          <Produs
            nume="Espresso / Ristretto"
            descriere="7gr Cafea, 30ml Apă / 7gr Cafea, 15ml Apă"
            pret="8 | 10"
          />
          <Produs
            nume="Doppio"
            descriere="14gr Cafea, 40ml Apă / 14gr Cafea, 60ml Apă"
            pret="12 | 15"
          />
          <Produs
            nume="Macchiato / Cortado"
            descriere="Espresso, 15ml Lapte / Espresso, 30ml Lapte"
            pret="10 | 12"
          />
          <Produs nume="Con Panna " descriere="Espresso, Frișcă" pret="10" />
          <Produs
            nume="Cappuccino / Cappuccino Freddo "
            descriere="Espresso, 90ml Lapte Cald / Espresso 90ml Lapte Rece"
            pret="12 | 14"
          />
          <Produs nume="Latte" descriere="Espresso, Lapte" pret="14 | 16" />
          <Produs
            nume="Latte Arome"
            descriere="Latte, Ciocolată Caldă, Oreo / Bounty / Mars / Snickers / Kitkat "
            pret="20"
          />
          <Produs
            nume="Flat White / Mocha"
            descriere="Doppio, Latte / Doppio, Latte, Sos Ciocolată"
            pret="14/16/18"
          />
          <Produs
            nume="Americano Single / Double Shot"
            descriere="Espresso, 90ml Apă / Doppio, 90ml Apă"
            pret="9/12"
          />

          <Produs nume="Ceai Vrac" descriere="Fructe, Negru, Verde" pret="15" />
          <Produs
            nume="Ceai Stick"
            descriere="Fructe, Negru, Verde"
            pret="10"
          />

          <Produs nume="Ciocolată Caldă" pret="12" />
          <Produs nume="Ciocolată Caldă cu Frișcă" pret="15" />
          <Produs nume="Chai Latte" pret="20" />
          <Produs nume="Lapte Vegan" pret="3" />
          <Produs nume="Arome" pret="3" />
        </div>
        {/* băuturi reci */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Băuturi Reci</h3>
          <Produs
            nume="Frappe"
            descriere="Doppio, Lapte, Înghețată, Frișcă, Gheață"
            pret="20"
          />
          <Produs
            nume="Frappe Arome"
            descriere="Oreo / Bounty / Mars / Snickers / Kitkat"
            pret="25"
          />
          <Produs nume="Limonadă" pret="20" />
          <Produs nume="Limonadă cu Arome" pret="25" />
          <Produs nume="Fresh" pret="20" />
          <Produs nume="Sirop Zmeură / Vișine / Soc" pret="10" />
          <Produs nume="Pepsi / Mirinda / 7Up / Prigat" pret="10" />
          <Produs nume="Rockstar Energizant" pret="10" />
          <Produs nume="Apă Plată / Minerală 330ml" pret="8" />
          <Produs nume="Apă Plată / Minerală 750ml" pret="12" />
        </div>
        {/* mic dejun */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Mic Dejun</h3>
          <Produs nume="Sandviș cu șuncă și cașcaval" pret="10" />
          <Produs nume="Ouă ochiuri" pret="15" />
          <Produs nume="Ouă ochiuri WANDA, șuncă, cașcaval" pret="20" />
          <Produs nume="Omletă WANDA, șuncă, cașcaval" pret="20" />
          <Produs nume="Omletă Simplă" pret="15" />
          <Produs nume="Croissant cu Ciocolată" pret="8" />
          <Produs nume="Croissant cu Unt" pret="6" />
          <Produs nume="Croissant cu Unt, șuncă și cașcaval" pret="10" />
        </div>
        {/* prăjituri de casă */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">
            Prăjituri de Casă
          </h3>
          <Produs nume="Tiramisu" descriere="140 gr" pret="18" />
          <Produs nume="Creme a la creme" descriere="140 gr" pret="18" />
          <Produs nume="Chec" descriere="100 gr" pret="8" />
          <Produs
            nume="Plăcintă cu brânză sărată / dulce"
            descriere="100 gr"
            pret="8"
          />
          <Produs nume="Ruladă Pavlova" descriere="140 gr" pret="20" />
          <Produs nume="Tortul casei" descriere="100 gr" pret="12" />
        </div>
        {/* cocktailuri */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Cocktailuri</h3>
          <Produs
            nume="Mojito"
            descriere="350 ml | Rom alb, Zahăr brun, Mentă, Apă minerală, Gheață"
            pret="30"
          />
          <Produs
            nume="Dark Mojito"
            descriere="350 ml | Rom negru, Zahăr brun, Mentă, Apă Minerală, Gheață"
            pret="30"
          />
          <Produs
            nume="Hugo"
            descriere="350 ml | Prosecco, Apă Minerală, Sirop Monin cu Aromă de Soc, Lime, Mentă, Gheață"
            pret="30"
          />
          <Produs
            nume="Cuba Libre"
            descriere="350 ml | Rom, Pepsi, Lime, Gheață"
            pret="30"
          />
          <Produs
            nume="Aperol Spritz"
            descriere="350 ml | Aperol, Prosecco, Portocală, Apă Minerală, Gheață"
            pret="30"
          />
          <Produs
            nume="Campari Spritz"
            descriere="350 ml | Campari, Prosecco, Portocală, Apă Minerală, Gheață"
            pret="30"
          />
          <Produs
            nume="Campari Orange"
            descriere="350 ml | Campari, Suc de Portocale, Portocală, Gheață"
            pret="30"
          />
          <Produs
            nume="Gin Tonic"
            descriere="350 ml | Gin, Apă Tonică, Lime, Gheață"
            pret="30"
          />
          <Produs
            nume="Jäger & Pepsi"
            descriere="350 ml | Jägermeister, Pepsi, Portocală, Gheață"
            pret="30"
          />
          <Produs
            nume="Jäger Tonic"
            descriere="350 ml | Jägermeister, Apă Tonică, Lime, Gheață"
            pret="30"
          />
        </div>
        {/* vin  */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Vin</h3>
          <Produs nume="Alb / Roșu / Rose " descriere="750 ml" pret="100" />
          <Produs nume="Pahar " descriere="150 ml" pret="20" />
          <Produs nume="Prosecco" descriere="150 ml" pret="25" />
        </div>
        {/* bere */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Bere</h3>
          <Produs nume="Csíkișör Bere Blondă" descriere="500 ml" pret="15" />
          <Produs nume="Birra Moretti " descriere="330 ml" pret="13" />
          <Produs nume="Heineken" descriere="330 ml" pret="15" />
        </div>
        {/* whiskey and more */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">
            Whiskey and More
          </h3>
          <Produs nume="Gin" descriere="40 ml" pret="15" />
          <Produs nume="Rom" descriere="40 ml" pret="15" />
          <Produs nume="Vodka" descriere="40 ml" pret="15" />
          <Produs nume="Tequila" descriere="40 ml" pret="15" />
          <Produs nume="Whiskey" descriere="40 ml" pret="15" />
          <Produs nume="Jägermeister" descriere="40 ml" pret="15" />
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

const Produs = (props) => {
  const { nume, descriere, pret } = props;
  return (
    <div className="mt-4">
      <p className="text-yellow-950 flex md:w-10/12 justify-between">
        <span> {nume}</span>
        {/* <span className="font-bold text-sm text-end">{pret} RON</span> */}
      </p>
      <p className="text-xs text-yellow-950/50">{descriere}</p>
    </div>
  );
};

export default Produse_Third_Section;
