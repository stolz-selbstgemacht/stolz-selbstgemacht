const produkte = [
  {
    name: "Kinderpullover",
    preis: "39 €",
    beschreibung:
      "Selbstgenähter Kinderpullover aus hochwertigen Stoffen. Bequem und ideal für den Alltag.",
  },
  {
    name: "Kinderweste",
    preis: "29 €",
    beschreibung:
      "Gemütliche Kinderweste zum Überziehen. Praktisch und vielseitig kombinierbar.",
  },
  {
    name: "Babyset",
    preis: "49 €",
    beschreibung:
      "Liebevoll zusammengestelltes und selbstgenähtes Set für Babys.",
  },
  {
    name: "Umhängetasche",
    preis: "25 €",
    beschreibung:
      "Praktische selbstgenähte Umhängetasche für unterwegs.",
  },
];

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
            <div className="product-image">
              Foto folgt
            </div>

            <div className="product-content">
              <h2>{produkt.name}</h2>

              <p>{produkt.beschreibung}</p>

              <div className="product-price">
                {produkt.preis}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}