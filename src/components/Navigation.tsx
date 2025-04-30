import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition">
          Raad Fakhrian
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition">About</Link>
          <Link href="/work" className="text-gray-700 hover:text-gray-900 transition">Work</Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 