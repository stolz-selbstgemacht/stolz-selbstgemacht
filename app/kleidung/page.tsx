"use client";

import { useState } from "react";

const produkte = [
  {
    name: "Kinderpullover",
    beschreibung:
      "Selbstgenähte Kinderpullover aus hochwertigen Stoffen. Bequem und ideal für den Alltag.",
    bilder: [
      "/images/Kinderpullover_4_2.jpg",
    ],
  },
  {
    name: "Kinderwesten",
    beschreibung:
      "Gemütliche Kinderwesten zum Überziehen. Praktisch und vielseitig kombinierbar.",
    bilder: [
      "/images/Kinderweste_Birnen_1.jpg",
      "/images/Kinderweste_Blumen_1.jpg",
      "/images/Kinderweste_Blumen_3.jpg",
      "/images/Kinderweste_Blumen_4.jpg",
      "/images/Kinderweste_Tulpen_blau_1.jpg",
      "/images/Kinderweste_Tulpen_blau_2.jpg",
      "/images/Kinderweste_Tulpen_rot_1.jpg",
      "/images/Kinderweste_Tulpen_rot_2.jpg",
      "/images/Kinderweste_Detail_1.jpg",
      "/images/Kinderweste_Detail_2.jpg",
    ],
  },
  {
    name: "Babyoutfits",
    beschreibung:
      "Liebevoll zusammengestellte und selbstgenähte Outfits für Babys.",
    bilder: [
      "/images/Babyset_Federn_1.jpg",
      "/images/Babyset_1.jpg",
      "/images/Babyset_Birnen_1.jpg",
      "/images/Babyset_blau_1.jpg",
      "/images/Wickeljacke_1.jpg",
      "/images/Walkpumphose_1.jpg",
    ],
  },
  {
    name: "Mützen und Stirnbänder",
    beschreibung:
      "Kuschelig warme, handgenähte Mützen aus weichen Stoffen – perfekt für kalte Herbst- und Wintertage. Weiche, handgenähte Stirnbänder, die angenehm wärmen und gleichzeitig ein echter Hingucker sind.",
    bilder: [
      "/images/Muetze_Blumen_1.jpg",
      "/images/Muetze_Gaense_1.jpg",
      "/images/Muetze_Leo_1.jpg",
      "/images/Muetze_Dinos_1.jpg",
      "/images/Stirnbaender.jpg",
    ],
  },

{
    name: "Handschuhe",
    beschreibung:
      "Kuschelig warme, handgenähte Handschuhe aus weichem Wollfleece – perfekt für kalte Herbst- und Wintertage.",
    bilder: [
      "/images/Handschuhe_1.jpg",
      "/images/Handschuhe_2.jpg",
      "/images/Handschuhe_3.jpg",
    ],
  },

  {
    name: "Damenwesten",
    beschreibung:
      "Bequeme, handgenähte Damenwesten aus hochwertigen Stoffen – vielseitig kombinierbar und perfekt für jede Jahreszeit.",
    bilder: [
      "/images/Weste_Gepard_1.jpg",
      "/images/Weste_Gepard_2.jpg",
    ],
  },

   {
    name: "Accessoires",
    beschreibung:
      "Liebevoll handgenähte Accessoires wie Schlüsselanhänger, Scrunchies und Brillenetuis – praktisch, individuell und mit viel Liebe zum Detail.",
    bilder: [
      "/images/Schluesselanhaenger_0.jpg",
      "/images/Schluesselanhaenger_1.jpg",
      "/images/Schluesselanhaenger_2.jpg",
      "/images/Scrunchies_1.jpg",
      "/images/Brillenetuis_1.jpg",
      "/images/Brillenetuis_2.jpg",
      "/images/Kleinaufbewahrung.jpg",
    ],
  },

{
    name: "Utensilos",
    beschreibung:
      "Schön aufgeräumt und immer griffbereit: liebevoll genähte Utensilos für Bad, Kinderzimmer, Schreibtisch und mehr.",
    bilder: [
      "/images/Utensilos_1.jpg",
      "/images/Utensilos_2.jpg",

    ],
  },

  {
    name: "Kosmetiktaschen",
    beschreibung:
      "Praktische, handgenähte Kosmetiktaschen – perfekt für Kosmetik, Pflegeprodukte und kleine Alltagsbegleiter.",
    bilder: [
      "/images/Kosmetiktasche.jpg",
      "/images/Kosmetiktasche1.jpg",
      "/images/Kosmetiktasche2.jpg",
      "/images/Kosmetiktasche3.jpg",
      "/images/Kosmetiktasche4.jpg",
      "/images/Kosmetiktasche5.jpg",
      "/images/Kosmetiktasche6.jpg",

    ],
  },

  {
    name: "Kulturtaschen",
    beschreibung:
      "Für Reisen und unterwegs bestens geeignet: geräumige Kulturtaschen für Kosmetik, Pflegeprodukte und alles, was mit muss.",
    bilder: [
      "/images/Kulturtasche1.jpg",
      "/images/Kulturtasche2.jpg",
    ],
  },

    {
    name: "Reiseetuis",
    beschreibung:
      "Praktische, handgenähte Reiseetuis – ideal für unterwegs, um kleine Dinge ordentlich und griffbereit aufzubewahren.",
    bilder: [
      "/images/Reiseetui.jpg",
      "/images/Reiseetui1.jpg",
      "/images/Reiseetui2.jpg",
    ],
  },

   {
    name: "Aufbewahrung für Stifte",
    beschreibung:
      "Alles griffbereit und schön verstaut: liebevoll genähte Stifteetuis für Schule, Büro und unterwegs.",
    bilder: [
      "/images/Stifteetui.jpg",
      "/images/Stifteetui1.jpg",
      "/images/Stifteetui2.jpg",
    ],
  },


];

function ProduktGalerie({
  bilder,
  name,
}: {
  bilder: string[];
  name: string;
}) {
  const [aktuellesBild, setAktuellesBild] = useState(0);

  const vorherigesBild = () => {
    setAktuellesBild((bild) =>
      bild === 0 ? bilder.length - 1 : bild - 1
    );
  };

  const naechstesBild = () => {
    setAktuellesBild((bild) =>
      bild === bilder.length - 1 ? 0 : bild + 1
    );
  };

  return (
    <div className="product-gallery">
      <div className="product-image">
        <img src={bilder[aktuellesBild]} alt={`${name} – Bild ${aktuellesBild + 1}`} />

        {bilder.length > 1 && (
          <>
            <button
              className="gallery-button gallery-button-left"
              onClick={vorherigesBild}
              aria-label="Vorheriges Bild"
            >
              ‹
            </button>

            <button
              className="gallery-button gallery-button-right"
              onClick={naechstesBild}
              aria-label="Nächstes Bild"
            >
              ›
            </button>

            <div className="gallery-counter">
              {aktuellesBild + 1} / {bilder.length}
            </div>
          </>
        )}
      </div>

      {bilder.length > 1 && (
        <div className="gallery-thumbnails">
          {bilder.map((bild, index) => (
            <button
              key={bild}
              className={`gallery-thumbnail ${
                index === aktuellesBild ? "active" : ""
              }`}
              onClick={() => setAktuellesBild(index)}
              aria-label={`Bild ${index + 1} anzeigen`}
            >
              <img src={bild} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Kleidung() {
  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">stolz.selbstgemacht</p>

        <h1>Kleidung & Accessoires</h1>

        <p>
          Eine kleine Auswahl meiner selbstgenähten Kleidung und
          Accessoires.
        </p>
      </section>

      <section className="products">
        {produkte.map((produkt) => (
          <article className="product-card" key={produkt.name}>
            <ProduktGalerie
              bilder={produkt.bilder}
              name={produkt.name}
            />

            <div className="product-content">
              <h2>{produkt.name}</h2>

              <p>{produkt.beschreibung}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}