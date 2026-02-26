'use client'

import { Shield, Users, Eye, Scale } from 'lucide-react'

export default function AIPolicy() {
  return (
    <main className="bg-cream min-h-screen py-24">
      <div className="container-custom max-w-4xl">
        <h1 className="font-cinzel text-4xl font-bold mb-4 text-navy">AI Ethics & Governance Policy</h1>
        <p className="font-oswald text-navy/60 mb-12 italic text-sm">
          LeadWise Foundation is a 501(c)(3) nonprofit. This policy ensures our technology serves our mission of equity.
        </p>

        <div className="font-oswald space-y-10 text-navy/80 leading-relaxed">
          {/* Purpose Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-peach-600" />
              <h2 className="text-2xl font-bold text-navy">Purpose and Applicability</h2>
            </div>
            <p>
              This policy applies to all staff, volunteers, and contractors using AI tools in LeadWise Foundation programs. 
              Our goal is to ensure AI supports our mission of empowering individuals from marginalized communities 
              while protecting learner rights and promoting equity.
            </p>
          </section>

          {/* AI Use Section */}
          <section>
             <div className="flex items-center gap-3 mb-4">
              <Eye className="text-peach-600" />
              <h2 className="text-2xl font-bold text-navy">How We Use AI</h2>
            </div>
            <p>
              AI tools are used to personalize career pathways, match learners with opportunities, and analyze labor market trends. 
              All AI-generated recommendations are advisory; learners retain the right to request human consultation at any time.
            </p>
          </section>

          {/* Ethics Section */}
          <section>
             <div className="flex items-center gap-3 mb-4">
              <Scale className="text-peach-600" />
              <h2 className="text-2xl font-bold text-navy">Ethical Oversight & Bias Prevention</h2>
            </div>
            <p>
              To prevent discrimination, regular bias audits are conducted quarterly by internal analysts and annually 
              by third-party experts. Diverse teams, including community representatives, are involved in decisions 
              about data use to ensure technology benefits the communities we serve.
            </p>
          </section>

          <section>
             <div className="flex items-center gap-3 mb-4">
              <Shield className="text-peach-600" />
              <h2 className="text-2xl font-bold text-navy">Data Privacy & User Rights</h2>
            </div>
            <p>
               Learners retain ownership of their personal data. All information collected is used solely to provide career guidance and program support. Users can request access, corrections, or deletion of their data at any time.
            </p>
          </section>

          {/* Accountability Section */}
          <section className="bg-navy text-cream p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-peach" />
              <h2 className="text-2xl font-bold">Accountability</h2>
            </div>
            <p className="mb-4">
              The Executive Director and senior leadership maintain ultimate accountability. High-stakes decisions, 
              such as program eligibility, always require human review and validation.
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 opacity-80">
                <li>Human oversight for all high-stakes program decisions</li>
                <li>Quarterly impact assessments of AI performance</li>
                <li>Formal feedback mechanisms allowing learners to report concerns</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-peach-600" />
              <h2 className="text-2xl font-bold text-navy">Contact</h2>
            </div>
            <p>
              For questions or concerns, please contact us at <a href="mailto:mentor@letsleadwise.org" className="underline">mentor@letsleadwise.org</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
