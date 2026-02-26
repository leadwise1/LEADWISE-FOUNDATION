import React from 'react'
import { ShieldCheckIcon, UserGroupIcon, EyeIcon, ScaleIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function UserTermsPage() {
  return (
    <main className="bg-cream min-h-screen py-24 px-6 md:px-24 text-navy">
      <h1 className="font-cinzel text-5xl mb-16">User Terms</h1>

      <section className="mb-16">
        <div className="flex items-center mb-4">
          <ShieldCheckIcon className="h-8 w-8 mr-3" />
          <h2 className="font-cinzel text-3xl">Purpose and Applicability</h2>
        </div>
        <p className="font-oswald text-lg leading-relaxed">
          These User Terms govern your access to and use of our services. By using our services, you agree to comply with these terms, which apply to all users.
        </p>
      </section>

      <section className="mb-16">
        <div className="flex items-center mb-4">
          <UserGroupIcon className="h-8 w-8 mr-3" />
          <h2 className="font-cinzel text-3xl">Acceptance of Terms</h2>
        </div>
        <p className="font-oswald text-lg leading-relaxed">
          By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these User Terms and any applicable policies.
        </p>
      </section>

      <section className="mb-16">
        <div className="flex items-center mb-4">
          <EyeIcon className="h-8 w-8 mr-3" />
          <h2 className="font-cinzel text-3xl">Use of Services</h2>
        </div>
        <p className="font-oswald text-lg leading-relaxed">
          You agree to use our services in compliance with all applicable laws and regulations and not to misuse or interfere with the proper functioning of the services.
        </p>
      </section>

      <section className="mb-16">
        <div className="flex items-center mb-4">
          <EyeIcon className="h-8 w-8 mr-3" />
          <h2 className="font-cinzel text-3xl">Privacy</h2>
        </div>
        <p className="font-oswald text-lg leading-relaxed">
          We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and safeguard your information.
        </p>
      </section>

      <section className="mb-16">
        <div className="flex items-center mb-4">
          <UserGroupIcon className="h-8 w-8 mr-3" />
          <h2 className="font-cinzel text-3xl">User Responsibilities</h2>
        </div>
        <p className="font-oswald text-lg leading-relaxed">
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-16">
        <div className="flex items-center mb-4">
          <ScaleIcon className="h-8 w-8 mr-3" />
          <h2 className="font-cinzel text-3xl">Limitation of Liability</h2>
        </div>
        <p className="font-oswald text-lg leading-relaxed">
          To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services.
        </p>
      </section>

      <section>
        <div className="flex items-center mb-4">
          <EnvelopeIcon className="h-8 w-8 mr-3" />
          <h2 className="font-cinzel text-3xl">Contact</h2>
        </div>
        <p className="font-oswald text-lg leading-relaxed">
          If you have any questions about these User Terms, please contact us at{' '}
          <a href="mailto:mentor@letsleadwise.org" className="underline hover:text-navy/80">
            mentor@letsleadwise.org
          </a>.
        </p>
      </section>
    </main>
  )
}
