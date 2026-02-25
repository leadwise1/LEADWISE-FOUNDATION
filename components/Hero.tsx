 {/* ===== HERO ===== */}
      <section
        className="bg-cream pt-32 pb-20"
        role="region"
        aria-label="Hero Section - LeadWise Foundation"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 items-center">

            {/* Column 1: Text */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="font-fashionista text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-navy">
                Empowering Communities Through Free Technology Education, Career Mentorship, and Workforce Training
              </h1>

              <h3 className="font-oswald text-xl font-bold text-navy uppercase tracking-wide">
                LeadWise Foundation is a 501(c)(3) nonprofit providing free digital skills training, career mentorship, and workforce development programs.
              </h3>

              <h4 className="font-oswald text-lg font-light text-navy tracking-wide">
                We equip learners of all ages and backgrounds with practical technical skills, professional mentorship, and career confidence, helping them overcome barriers and build sustainable economic opportunities.
              </h4>

              {/* CTA Section */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="https://mentors.letsleadwise.org"
                  target="_self"
                  rel="noopener noreferrer"
                  aria-label="Join Our Mentorship Programs"
                  className="btn-primary shadow-lg hover:shadow-xl inline-block"
                >
                  Join Our Mentorship Programs
                </a>

                <a
                  href="https://services.letsleadwise.org"
                  target="_self"
                  rel="noopener noreferrer"
                  aria-label="Explore Free Career Training Programs"
                  className="btn-secondary shadow-lg hover:shadow-xl inline-block"
                >
                  Explore Free Career Training Programs
                </a>

                <a
                  href="https://donation.letsleadwise.org"
                  target="_self"
                  rel="noopener noreferrer"
                  aria-label="Donate to Support LeadWise Foundation"
                  className="text-navy underline text-sm inline-block"
                >
                  Donate to Support LeadWise Foundation
                </a>
              </div>
            </div>

            {/* Column 2: Hero Image */}
            <div className="relative aspect-[720/600] lg:aspect-[300/600] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.webp"
                alt="Students participating in technology education and mentorship program"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Column 3: Supporting Images */}
            <div className="space-y-4">
              <div className="relative aspect-[290/300] lg:aspect-[300/300] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero2.webp"
                  alt="Mentor guiding student in digital skills training"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[290/300] lg:aspect-[300/300] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero3.webp"
                  alt="Workforce development session in progress"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
