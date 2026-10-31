export interface BookCardProps {
  title: string;
  author: string;
  category: string;
  isAvailable: boolean;
}

export default function BookCard({ title, author, category, isAvailable }: BookCardProps) {
  return (
    <div className="border rounded-lg p-5 shadow-sm bg-white flex flex-col justify-between hover:shadow-md transition">
      <div>
        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
          {category}
        </span>
        <h3 className="text-xl font-bold mt-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">Penulis: {author}</p>
      </div>
      
      <div className="mt-4 flex justify-between items-center pt-3 border-t">
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            isAvailable
              ? 'bg-green-100 text-green-800 border border-green-300'
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}
        >
          {isAvailable ? 'Tersedia' : 'Dipinjam'}
        </span>
      </div>
    </div>
  );
}