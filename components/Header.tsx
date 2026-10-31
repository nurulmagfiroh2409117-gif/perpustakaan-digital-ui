import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Perpustakaan Digital</h1>
        <nav className="flex gap-4">
          <Link href="/" className="hover:text-blue-300 transition">Beranda</Link>
          <Link href="/catalog" className="hover:text-blue-300 transition">Katalog</Link>
          <Link href="/about" className="hover:text-blue-300 transition">Tentang</Link>
          <Link href="/contact" className="hover:text-blue-300 transition">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}