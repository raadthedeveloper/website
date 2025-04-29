import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">Raad Fakhrian</h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Welcome to my portfolio! I'm a passionate developer focused on creating elegant solutions 
            to complex problems. Through my work, I strive to make a positive impact in the tech world.
          </p>
          <div className="flex gap-4">
            <a 
              href="/contact" 
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Get in Touch
            </a>
            <a 
              href="/work" 
              className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600">Description of the first project goes here.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600">Description of the second project goes here.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-600">Description of the third project goes here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
