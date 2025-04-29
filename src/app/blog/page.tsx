export default function Blog() {
  const posts = [
    {
      title: "Getting Started with Next.js and TypeScript",
      excerpt: "A comprehensive guide to setting up a new project with Next.js and TypeScript, including best practices and common pitfalls to avoid.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Development"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development, from AI integration to new frameworks.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      title: "Building Scalable Applications",
      excerpt: "Learn the key principles and practices for building applications that can scale effectively as your user base grows.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Architecture"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 hover:text-gray-600">
                <a href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                  {post.title}
                </a>
              </h2>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <a 
                href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                className="text-black font-medium hover:underline"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {['Development', 'Technology', 'Architecture', 'Design', 'Career'].map((category) => (
              <a
                key={category}
                href={`/blog/category/${category.toLowerCase()}`}
                className="bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 