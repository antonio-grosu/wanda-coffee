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
        {/* bauturi calde */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">
            Bauturi Calde Italian Blend | Decof / Specialities
          </h3>
          <Produs
            nume="Espresso / Ristretto"
            descriere="7gr Cafea, 30ml Apa / 7gr Cafea, 15ml Apa"
            pret="8 | 10"
          />
          <Produs
            nume="Doppio"
            descriere="14gr Cafea, 40ml Apa / 14gr Cafea, 60ml Apa"
            pret="12 | 15"
          />
          <Produs
            nume="Macchiato / Cortado"
            descriere="Espresso, 15ml Lapte / Espresso, 30ml Lapte"
            pret="10 | 12"
          />
          <Produs nume="Con Panna " descriere="Espresso, Frisca" pret="10" />
          <Produs
            nume="Cappuccino / Cappuccino Freddo "
            descriere="Espresso, 90ml Lapte Cald / Espresso 90ml Lapte Rece"
            pret="12 | 14"
          />
          <Produs nume="Latte" descriere="Espresso, Lapte" pret="14 | 16" />
          <Produs
            nume="Latte Arome"
            descriere="Latte, Ciocolata Calda, Oreo / Bounty / Mars / Snickers / Kitkat "
            pret="20"
          />
          <Produs
            nume="Flat White / Mocha"
            descriere="Dopio, Late / Dopio, Late, sos Ciocolata"
            pret="14/16/18"
          />
          <Produs
            nume="Americano Single / Double shot"
            descriere="Espresso, 90ml Apa / Dopio, 90ml Apa"
            pret="9/12"
          />

          <Produs nume="Ceai Vrac" descriere="Fructe, Negru, Verde" pret="15" />
          <Produs
            nume="Ceai Stick"
            descriere="Fructe, Negru, Verde"
            pret="10"
          />

          <Produs nume="Ciocolata Calda" pret="12" />
          <Produs nume="Ciocolata Calda cu Frisca" pret="15" />
          <Produs nume="Chai Latte" pret="20" />
          <Produs nume="Lapte Vegan" pret="3" />
          <Produs nume="Arome" pret="3" />
        </div>
        {/* bauturi reci */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Bauturi Reci</h3>
          <Produs
            nume="Frappe"
            descriere="Dopio, Lapte, Inghetata, Frisca, Gheata"
            pret="20"
          />
          <Produs
            nume="Frappe Arome"
            descriere="Oreo / Bounty / Mars / Snickers / Kitkat"
            pret="25"
          />
          <Produs nume="Limonada" pret="20" />
          <Produs nume="Limonada cu Arome" pret="25" />
          <Produs nume="Fresh" pret="20" />
          <Produs nume="Sirop Zmeura / Visine / Soc" pret="10" />
          <Produs nume="Pepsi / Mirinda / 7Up / Prigat" pret="10" />
          <Produs nume="Rockstar Energizant" pret="10" />
          <Produs nume="Apa Plata / Minerala 330ml" pret="8" />
          <Produs nume="Apa Plata / Minerala 750ml" pret="12" />
        </div>
        {/* mic dejun */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Mic Dejun</h3>
          <Produs nume="Sendvis cu sunca si cascaval" pret="10" />
          <Produs nume="Oua ochiuri" pret="15" />
          <Produs nume="Oua ochiuri WANDA, sunca, cascaval" pret="20" />
          <Produs nume="Omleta WANDA, sunca, cascaval" pret="20" />
          <Produs nume="Omleta Simpla" pret="15" />
          <Produs nume="Croissant cu Ciocolata" pret="8" />
          <Produs nume="Croissant cu Unt" pret="6" />
          <Produs nume="Croissant cu Unt, sunca si cascaval" pret="10" />
        </div>
        {/* prajituri de casa */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">
            Prajituri de Casa
          </h3>
          <Produs nume="Tiramisu" descriere="140 gr" pret="18" />
          <Produs nume="Creme a la creme" descriere="140 gr" pret="18" />
          <Produs nume="Chec" descriere="100 gr" pret="8" />
          <Produs
            nume="Placinta cu branza sarata / dulce"
            descriere="100 gr"
            pret="8"
          />
          <Produs nume="Rulada Pavlova" descriere="140 gr" pret="20" />
          <Produs nume="Tortul casei" descriere="100 gr" pret="12" />
        </div>
        {/* cocktail */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Cocktails</h3>
          <Produs
            nume="Mojito"
            descriere="350 ml | Rom alb, Zahar brun, Menta, Apa minerala, Gheata"
            pret="30"
          />
          <Produs
            nume="Dark Mojito"
            descriere="350 ml | Rom negru, Zahar brun, Menta, Apa Minerala, Gheata"
            pret="30"
          />
          <Produs
            nume="Hugo"
            descriere="350 ml | Prosecco, Apa Minerala, sirop Monin cu aroma de soc, Lime, Menta, Gheata"
            pret="30"
          />
          <Produs
            nume="Cuba Libre"
            descriere="350 ml | Rom, Pepsi, Lime, Gheata"
            pret="30"
          />
          <Produs
            nume="Aperol Spritz"
            descriere="350 ml | Aperol, Prosecco, Portocala, Apa Minerala, Gheata"
            pret="30"
          />
          <Produs
            nume="Campari Spritz"
            descriere="350 ml | Campari, Prosecco, Portocala, Apa Minerala, Gheata"
            pret="30"
          />
          <Produs
            nume="Campari Orange"
            descriere="350 ml | Campari, suc de Portocale, Portocala, Gheata"
            pret="30"
          />
          <Produs
            nume="Gin Tonic"
            descriere="350 ml | Gin, Apa Tonica, Lime, Gheata"
            pret="30"
          />
          <Produs
            nume="Jager & Pepsi"
            descriere="350 ml | Jagermeister, Pepsi, Portocala, Gheata"
            pret="30"
          />
          <Produs
            nume="Jager Tonic"
            descriere="350 ml | Jagermeister, Apa Tonica, Lime, Gheata"
            pret="30"
          />
        </div>
        {/* vin  */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Vin</h3>
          <Produs nume="Alb / Rosu / Rose " descriere="750 ml" pret="100" />
          <Produs nume="Pahar " descriere="150 ml" pret="20" />
          <Produs nume="Prosecco" descriere="150 ml" pret="25" />
        </div>
        {/* bere */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">Bere</h3>
          <Produs nume="Csikisor Bere Blonda" descriere="500 ml" pret="15" />
          <Produs nume="Birra Morretti " descriere="330 ml" pret="13" />
          <Produs nume="Heineken" descriere="330 ml" pret="15" />
        </div>
        {/* whiskey and more
         */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-yellow-950">
            Whiskey and More
          </h3>
          <Produs nume="Gin" descriere="40 ml" pret="15" />
          <Produs nume="Rom" descriere="40 ml" pret="15" />
          <Produs nume="Vodka" descriere="40 ml" pret="15" />
          <Produs nume="Tequila" descriere="40 ml" pret="15" />
          <Produs nume="Whiskey" descriere="40 ml" pret="15" />
          <Produs nume="Jagermeister" descriere="40 ml" pret="15" />
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
        <span className="font-bold text-sm text-end">{pret} RON</span>
      </p>
      <p className="text-xs text-yellow-950/50">{descriere}</p>
    </div>
  );
};

export default Produse_Third_Section;
