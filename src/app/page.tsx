import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Raad Fakhrian</h1>
          <p className="text-xl text-gray-700 max-w-2xl mb-8">
            Welcome to my portfolio! I'm a passionate developer focused on creating elegant solutions 
            to complex problems. Through my work, I strive to make a positive impact in the tech world.
          </p>
          <div className="flex gap-4">
            <a 
              href="/contact" 
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Get in Touch
            </a>
            <a 
              href="/work" 
              className="border border-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Project 1</h3>
              <p className="text-gray-700 mb-4">Description of the first project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 font-medium">React</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 font-medium">Node.js</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Project 2</h3>
              <p className="text-gray-700 mb-4">Description of the second project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 font-medium">Next.js</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 font-medium">TypeScript</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Project 3</h3>
              <p className="text-gray-700 mb-4">Description of the third project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 font-medium">Python</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 font-medium">Django</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
