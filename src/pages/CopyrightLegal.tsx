import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const CopyrightLegal = () => (
  <main className="pt-16">
    <SEOHead
      title="Copyright & Legal Protection"
      description="Ayodhya Serenity's copyright ownership, intellectual property protections, and legal enforcement policies for its digital ecosystem."
      canonical="https://ayodhyaserenity.vercel.app/copyright-legal"
    />

    <section className="section-padding max-w-4xl mx-auto">
      <SectionHeading label="Legal" title="Copyright & Legal Protection" subtitle="Protecting Ayodhya's digital heritage" />

      <div className="prose prose-lg max-w-none space-y-10 text-foreground/85">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Copyright Ownership</h3>
          <p className="text-muted-foreground">
            All content, design systems, branding assets, visual identities, and digital architecture created under the Ayodhya Serenity ecosystem are protected by applicable copyright laws. This includes all temple and landmark websites developed and managed by the platform.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Unauthorised Use</h3>
          <p className="text-muted-foreground">The following activities are strictly prohibited without prior written consent:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Copying or reproducing website content in any form</li>
            <li>Duplicating website design, layout, or user interface elements</li>
            <li>Scraping or extracting information for commercial purposes</li>
            <li>Republishing photographs or visual media without attribution or permission</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Legal Enforcement</h3>
          <p className="text-muted-foreground">
            Ayodhya Serenity reserves the right to pursue legal action against any individual or organisation found engaging in:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Copyright infringement of any Ayodhya Serenity property</li>
            <li>Impersonation of the Ayodhya Serenity brand or its affiliates</li>
            <li>Misuse or fraudulent display of Ayodhya Serenity authenticity badges</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Reporting Violations</h3>
          <p className="text-muted-foreground">
            If you become aware of any unauthorised use of Ayodhya Serenity content or branding, please report it to{" "}
            <a href="mailto:legal@ayodhyaserenity.com" className="text-primary hover:underline">legal@ayodhyaserenity.com</a>. We take all reports seriously and will investigate promptly.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default CopyrightLegal;
