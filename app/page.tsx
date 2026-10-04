import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">stolz.selbstgemacht</p>

          <h1>
            Selbstgenähte Kleidung
            <br />
            & Accessoires
          </h1>

          <p className="hero-text">
            Schönes, Selbstgemachtes und mit viel Sorgfalt Genähtes.
            Entdecke meine Auswahl direkt im Selbstbedienungshäuschen.
          </p>

          <a href="/kleidung" className="button">
            Kleidung & Accessoires entdecken
          </a>
        </div>

<div className="hero-image">
  <Image
    src="/images/haeuschen.jpg"
    alt="Das Selbstbedienungshäuschen von stolz.selbstgemacht"
    width={1084}
    height={1448}
    priority
    className="hero-photo"
  />
</div>
      </section>

      <section className="welcome">
        <p className="eyebrow">Willkommen bei</p>

        <h2>stolz.selbstgemacht</h2>

        <p>
          In meinem Selbstbedienungshäuschen findest du selbstgenähte
          Kleidung und Accessoires für Groß und Klein.
        </p>

        <p>
          Jedes Stück wird von mir selbst gefertigt und mit viel
          Sorgfalt hergestellt.
        </p>
      </section>

      <section className="categories">
        <div className="category-card">
          <div className="category-icon">✂</div>

          <h2>Kleidung</h2>

          <p>
            Selbstgenähte Kleidung für Babys, Kinder und Erwachsene.
          </p>

          <a href="/kleidung">Entdecken →</a>
        </div>

        <div className="category-card">
          <div className="category-icon">♡</div>

          <h2>Accessoires</h2>

          <p>
            Praktische und schöne selbstgenähte Begleiter für den
            Alltag.
          </p>

          <a href="/kleidung">Entdecken →</a>
        </div>

        <div className="category-card">
          <div className="category-icon">⌂</div>

          <h2>Selbstbedienung</h2>

          <p>
            Vorbeikommen, stöbern, aussuchen und ganz unkompliziert
            selbst bezahlen.
          </p>

          <a href="/kontakt">Anfahrt →</a>
        </div>
      </section>
            <section className="home-about">
        <div>
          <p className="eyebrow">Über mich</p>

          <h2>Mit Freude selbstgemacht</h2>

          <p>
            Hinter stolz.selbstgemacht stecke ich und meine Leidenschaft
            für selbstgenähte Kleidung und Accessoires.
          </p>

          <a href="/ueber-mich" className="text-link">
            Mehr über mich →
          </a>
        </div>

        <div className="home-about-placeholder">
          Foto folgt :)
        </div>
      </section>

      <section className="home-hut">
        <p className="eyebrow">Vorbeischauen</p>

        <h2>Mein Selbstbedienungshäuschen</h2>

        <p>
          Komm gerne vorbei, stöbere in Ruhe durch die aktuellen
          Sachen und entdecke selbstgenähte Einzelstücke.
        </p>

        <a href="/kontakt" className="button">
          Kontakt & Anfahrt
        </a>
      </section>
    </main>
  );
}