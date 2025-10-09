"use client";

import React, { useState, useEffect } from 'react'
import { reviews } from './ReviewsData';

const Reviews: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(interval)
  }, [autoplay])

  const goToReview = (index: number) => {
    setCurrentReviewIndex(index)
    setAutoplay(false) // Pause autoplay on manual navigation
  }

  const goToPrevious = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    setAutoplay(false)
  }

  const currentReview = reviews[currentReviewIndex]

  return (
    <section id="reviews" className="bg-cream py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold mb-6 text-navy">
            We Don't Just Talk About Change : We Create It
          </h2>
          <p className="font-oswald text-lg lg:text-xl font-light text-navy max-w-3xl mx-auto leading-relaxed">
            Hear from the leaders we've empowered who are now transforming their industries and communities.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-3xl p-8 lg:p-12 shadow-xl border border-peach/20 relative overflow-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-cream/10">
              {/* You can replace this with an actual SVG icon if you have one */}
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.209.854-4.202 1.889-5.04 3.971 1.397 1.629 2.307 3.724 2.307 6.278 0 3.976-3.224 7.2-7.2 7.2s-7.2-3.224-7.2-7.2h2.5c0 2.71 2.19 4.9 4.9 4.9zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.209.854-4.202 1.889-5.04 3.971 1.397 1.629 2.307 3.724 2.307 6.278 0 3.976-3.224 7.2-7.2 7.2s-7.2-3.224-7.2-7.2h2.5z"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-peach rounded-full flex items-center justify-center text-navy font-cinzel font-semibold text-xl">
                    {currentReview.initials}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="flex mb-3" role="img" aria-label={`${currentReview.rating} out of 5 stars`}>
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <blockquote className="font-oswald text-lg lg:text-xl text-cream/90 leading-relaxed font-light italic">
                      "{currentReview.content}"
                    </blockquote>
                  </div>
                  <div>
                    <div className="font-cinzel font-semibold text-xl text-peach">
                      {currentReview.name}
                    </div>
                    <div className="font-oswald text-cream/80">
                      {currentReview.title} at {currentReview.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-navy text-cream p-3 rounded-full hover:bg-navy/80 transition-all duration-300 shadow-lg" aria-label="Previous review">
            {/* Left Arrow Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-navy text-cream p-3 rounded-full hover:bg-navy/80 transition-all duration-300 shadow-lg" aria-label="Next review">
            {/* Right Arrow Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReviewIndex ? 'bg-navy scale-125' : 'bg-navy/30 hover:bg-navy/60'}`}
                aria-label={`Go to review ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Autoplay Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setAutoplay(!autoplay)}
            className="flex items-center gap-2 font-oswald text-sm text-navy/70 hover:text-navy transition-colors"
            aria-label={autoplay ? 'Pause reviews autoplay' : 'Start reviews autoplay'}
          >
            {autoplay ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            )}
            <span>{autoplay ? 'PAUSE' : 'PLAY'}</span>
          </button>
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-xl p-6 shadow-lg">
            <div className="font-cinzel text-2xl font-bold text-peach mb-2">4.9/5</div>
            <div className="font-oswald text-cream/80 text-sm uppercase tracking-wide">Average Rating</div>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-xl p-6 shadow-lg">
            <div className="font-cinzel text-2xl font-bold text-peach mb-2">98%</div>
            <div className="font-oswald text-cream/80 text-sm uppercase tracking-wide">Recommend Us</div>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-xl p-6 shadow-lg">
            <div className="font-cinzel text-2xl font-bold text-peach mb-2">1+ Years</div>
            <div className="font-oswald text-cream/80 text-sm uppercase tracking-wide">Above Average Growth</div>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-xl p-6 shadow-lg">
            <div className="font-cinzel text-2xl font-bold text-peach mb-2">15+</div>
            <div className="font-oswald text-cream/80 text-sm uppercase tracking-wide">Success Stories</div>
          </div>
        </div>
        <p className="text-navy/70 text-sm mt-4 text-center">Stats reflect programs and impact since launch in 2024.</p>
      </div>
    </section>
  )
}

export default Reviews