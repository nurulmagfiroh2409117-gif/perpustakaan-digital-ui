import Header from '@/components/Header';
import Button from '@/components/Button';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Selamat Datang di Perpustakaan Digital
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Layanan sistem informasi katalog dan koleksi buku digital interaktif.
        </p>
        <div className="flex justify-center gap-4">
          <Button label="Eksplorasi Katalog" />
          <Button label="Pelajari Lebih Lanjut" variant="secondary" />
        </div>
      </main>
    </div>
  );
}