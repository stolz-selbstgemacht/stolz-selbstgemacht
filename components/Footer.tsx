import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} stolz.selbstgemacht</p>

      <nav>
        <Link href="/datenschutz">Datenschutz</Link>
        <Link href="/impressum">Impressum</Link>
      </nav>
    </footer>
  );
}