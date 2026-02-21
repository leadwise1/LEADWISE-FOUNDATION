              onClick={handleDonateClick}
              className="btn-primary shadow-lg hover:shadow-x1 animate-fadeInUp"
            >
              Donate
            </button>
          </div>

          {/* Column 2: Single Full-Length Image */}
          <div className="relative aspect-[720/600] lg:aspect-[300/600] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero.png"
              alt="Leadership Development"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Column 3: Two Stacked Images */}
          <div className="space-y-4">
            <div className="relative aspect-[290/300] lg:aspect-[300/300] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero2.svg"
                alt="Collaborative Learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[290/300] lg:aspect-[300/300] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero3.svg"
                alt="Mentorship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
