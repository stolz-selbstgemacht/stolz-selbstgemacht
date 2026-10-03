import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="logo-link"
          aria-label="stolz.selbstgemacht – Startseite"
        >
          <Image
            src="/images/logo.png"
            alt="Logo stolz.selbstgemacht mit Nähmaschine"
            width={100}
            height={100}
            priority
            className="logo-image"
          />
        </Link>

        <nav className="main-nav">
          <Link href="/">Startseite</Link>
          <Link href="/kleidung">Kleidung & Accessoires</Link>
          <Link href="/ueber-mich">Über mich</Link>
          <Link href="/kontakt">Kontakt & Anfahrt</Link>
        </nav>
      </div>
    </header>
  );
}