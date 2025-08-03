import React from 'react'
import { Link } from 'react-router-dom'

export default function PortfolioCards() {
  const cards = [
    {
      title: 'Wedding',
      image: '/img/w_image1.webp', // replace with your actual image
      link: '/portfolio/wedding',
    },
    {
      title: 'Pre-Wedding',
      image: '/img/p_image0.webp',
      link: '/portfolio/prewedding',
    },
    {
      title: 'Product',
      image: '/img/p_image12.webp',
      link: '/portfolio/product',
    },
  ]

  return (
    <section className="bg-black py-12 px-4 md:px-12 lg:px-20 text-white">
      <h2 className="text-4xl md:text-4xl font-semibold text-center mb-10 underline">
        Gallery
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-400">click to <br />Explore {card.title} Photography</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
