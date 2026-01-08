import React from 'react'
import Podcast1 from '../assets/Podcast.jpeg';

const Podcast = () => {
   return (
    <section className="w-full bg-gradient-to-br from-[#1B0F2E] via-[#2E145D] to-[#FF6A3D] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-white">
          <p className="text-sm uppercase tracking-wide text-orange-400 mb-2">
            Ignite Pro Community
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            The Ignite Room
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Leadership Podcast
          </h2>

          <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full mb-4">
            First Episode
          </span>

          <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
            Faith, Creativity & Cultural Influence
          </h3>

          <p className="text-orange-300 font-medium mb-4">
            Becoming a Kingdom-Minded Creative in Today’s Media Landscape
          </p>

          <p className="text-gray-200 leading-relaxed mb-6">
            In this debut episode of The Ignite Room Leadership Podcast, we explore
            the intersection of faith, creativity, and cultural influence. This
            conversation inspires creatives and leaders to shape culture with
            purpose, integrity, and intentional storytelling.
          </p>

          <p className="text-sm text-gray-300 mb-4">
            <strong>With:</strong> Obinna Okerekeocha — Founder, Naija AI Film Festival
          </p>

          <p className="text-sm text-gray-300 mb-6">
            <strong>Release Date:</strong> January 27, 2026
          </p>

          {/* CTA */}
          <a
            href="https://www.youtube.com/@IgniteProCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-medium"
          >
            ▶ Watch on YouTube
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={Podcast1}
            alt="Ignite Room Podcast Episode"
            className="w-full rounded-xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Podcast