import React from 'react'

const About = () => {
  return (
    <>
      <div className="p-6 space-y-10">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Discover Your AI Career Path</h1>
        <p className="text-lg text-gray-600 mt-4">Get personalized guidance, learning resources, and mentorship to thrive in the AI industry.</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl shadow">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold text-xl">Career Quiz</h2>
          <p className="text-gray-500 mt-2">Find the perfect AI career path based on your skills and interests.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold text-xl">Learning Paths</h2>
          <p className="text-gray-500 mt-2">Access curated courses and roadmaps from beginner to expert.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold text-xl">Mentorship</h2>
          <p className="text-gray-500 mt-2">Connect with AI professionals for one-on-one guidance and advice.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
        <div className="space-y-4">
          <blockquote className="text-gray-700">"This platform helped me pivot into AI with confidence. The mentorship program was a game changer." – Sarah T.</blockquote>
          <blockquote className="text-gray-700">"I landed my first AI internship thanks to the career roadmap and resume builder!" – James K.</blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold">Ready to Launch Your AI Career?</h2>
        <button className="mt-4 px-8 py-3 bg-green-600 text-white rounded-xl shadow">Join Now – It's Free</button>
      </section>
    </div>
    </>
  )
}

export default About