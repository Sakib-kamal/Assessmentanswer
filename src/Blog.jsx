import React from 'react'

const Blog = () => {
  return (
    <div>
         <div className="min-h-screen bg-gray-100">
 
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to My Awesome Page</h1>
          <p className="text-lg mb-12">Discover the power of React and Tailwind CSS</p>
          <button className="bg-white text-blue-900 py-3 px-6 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      </section>

     
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Features</h2>
          <div className="flex justify-center">
            <div className="w-1/3 p-6">
              <i className="fas fa-code text-5xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-700">
              making a dummy blog
              </p>
            </div>
            <div className="w-1/3 p-6">
              <i className="fas fa-cogs text-5xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Flexible Configuration</h3>
              <p className="text-gray-700">
                Tailwind CSS 
              </p>
            </div>
            <div className="w-1/3 p-6">
              <i className="fas fa-rocket text-5xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-gray-700">
                React's virtual DOM and Tailwind CSS's optimized styles ensure fast rendering and minimal CSS bloat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Blog