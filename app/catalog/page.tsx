import Header from '@/components/Header';
import BookCard, { BookCardProps } from '@/components/BookCard';

const booksData: BookCardProps[] = [
  {
    title: "Pemrograman Web Modern dengan Next.js",
    author: "Rian Prasetyo",
    category: "Teknologi",
    isAvailable: true,
  },
  {
    title: "Prinsip Desain Antarmuka Pengguna",
    author: "Siti Rahma",
    category: "Desain UI/UX",
    isAvailable: false,
  },
  {
    title: "Struktur Data dan Algoritma",
    author: "Budi Santoso",
    category: "Ilmu Komputer",
    isAvailable: true,
  },
];

export default function CatalogPage() {
  return (
    <div>
      <Header />
      <main className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Katalog Perpustakaan</h1>
        <p className="text-gray-600 mb-6">Daftar koleksi buku digital yang tersedia.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {booksData.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              category={book.category}
              isAvailable={book.isAvailable}
            />
          ))}
        </div>
      </main>
    </div>
  );
}