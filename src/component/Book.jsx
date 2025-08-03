import React, { useState } from 'react'
import {
  Calendar, Camera, Clock, MapPin, User,
  Mail, Phone, MessageSquare, X
} from 'lucide-react'
import Footer from './Footer'
import Nav from './Nav'

export default function Book() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', sessionType: '',
    date: '', time: '', location: '', message: ''
  })

  const sessionTypes = [
    { id: 'portrait', name: 'Portrait Session', duration: '1-2 hrs', price: '₹2000-4000' },
    { id: 'wedding', name: 'Wedding Photography', duration: '6-8 hrs', price: '₹15000-30000' },
    { id: 'event', name: 'Event Photography', duration: '3-5 hrs', price: '₹5000-12000' },
    { id: 'family', name: 'Family Session', duration: '1-2 hrs', price: '₹2500-4500' },
    { id: 'corporate', name: 'Corporate Headshots', duration: '2-3 hrs', price: '₹3000-6000' },
    { id: 'product', name: 'Product Photography', duration: '2-4 hrs', price: '₹4000-8000' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    console.log('Booking submitted:', formData)
    alert('Thank you! We’ll contact you within 24 hours.')
    setIsModalOpen(false)
    setFormData({
      name: '', email: '', phone: '', sessionType: '',
      date: '', time: '', location: '', message: ''
    })
  }

  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-purple-700/30 via-black to-pink-700/30 blur-2xl"></div>

        <Camera className="w-16 h-16 text-purple-500 mb-4 z-10" />
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text z-10">
          Capture Your Moments
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl z-10">
          We Frame Your Emotions To Cheers FOREVER
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 z-10"
        >
          <span className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book Your Session
          </span>
        </button>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full z-10">
          {[
            {
              icon: <Clock className="w-8 h-8 text-purple-400" />,
              title: 'Quick Response',
              text: 'We respond to booking requests within 24 hours.'
            },
            {
              icon: <MapPin className="w-8 h-8 text-pink-400" />,
              title: 'Flexible Locations',
              text: 'Studio, outdoor, or your own venue.'
            },
            {
              icon: <Camera className="w-8 h-8 text-purple-400" />,
              title: 'Professional Quality',
              text: 'High-end cameras & expert editing.'
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition"
            >
              <div className="mb-3 flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-zinc-900 text-white rounded-xl w-full max-w-2xl overflow-y-auto max-h-[90vh] shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-white/10 relative">
              <h2 className="text-2xl font-bold">Book Your Photography Session</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-gray-300"
              >
                <X />
              </button>
              <p className="text-sm text-gray-400">We’ll get back to you shortly!</p>
            </div>

            {/* Form */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Full Name *" name="name" value={formData.name} onChange={handleInputChange} icon={User} />
                <Input label="Email Address *" name="email" value={formData.email} onChange={handleInputChange} icon={Mail} />
              </div>
              <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} icon={Phone} />

              <div>
                <Label text="Session Type *" icon={Camera} />
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a session</option>
                  {sessionTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name} – {type.duration} ({type.price})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="date" label="Preferred Date *" name="date" value={formData.date} onChange={handleInputChange} icon={Calendar} />
                <div>
                  <Label text="Preferred Time" icon={Clock} />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9–12)</option>
                    <option value="afternoon">Afternoon (12–5)</option>
                    <option value="evening">Evening (5–8)</option>
                    <option value="golden-hour">Golden Hour</option>
                  </select>
                </div>
              </div>

              <Input label="Location Preference" name="location" value={formData.location} onChange={handleInputChange} icon={MapPin} />

              <div>
                <Label text="Additional Details" icon={MessageSquare} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-zinc-800 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105"
                >
                  Submit Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  )
}

// Reusable input
function Input({ label, name, value, onChange, icon: Icon, type = 'text' }) {
  return (
    <div>
      <Label text={label} icon={Icon} />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        required={label.includes('*')}
      />
    </div>
  )
}

// Label with icon
function Label({ text, icon: Icon }) {
  return (
    <label className="block text-sm font-medium mb-1 text-gray-300">
      <Icon className="inline w-4 h-4 mr-2 mb-1" />
      {text}
    </label> 
  )
}
