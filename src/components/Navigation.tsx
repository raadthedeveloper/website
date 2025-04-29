import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-600 transition">
          Raad Fakhrian
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-600 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-600 transition">About</Link>
          <Link href="/work" className="hover:text-gray-600 transition">Work</Link>
          <Link href="/blog" className="hover:text-gray-600 transition">Blog</Link>
          <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 