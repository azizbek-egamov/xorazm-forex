import CorporateHeader from "@/components/redesign/CorporateHeader"
import HeroSection from "@/components/redesign/HeroSection"
import CoursesSection from "@/components/redesign/CoursesSection"
import PropAccountsSection from "@/components/redesign/PropAccountsSection"
import FloatingLeadBar from "@/components/redesign/FloatingLeadBar"
import { AcademySection, ContactSection, CorporateProofSection, Footer, ProcessSection, ResultsSection, RiskAndFaqSection } from "@/components/redesign/CorporateContent"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <CorporateHeader />
      <HeroSection />
      <AcademySection />
      <CoursesSection />
      <ProcessSection />
      <PropAccountsSection />
      <ResultsSection />
      <CorporateProofSection />
      <RiskAndFaqSection />
      <ContactSection />
      <Footer />
      <FloatingLeadBar />
    </main>
  )
}
