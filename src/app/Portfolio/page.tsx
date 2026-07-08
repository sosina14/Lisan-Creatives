import Footer from "@/sections/Footer";
import Navbar2 from "@/sections/Navbar2";
import PortfolioHero from "@/sections/PortfolioHero";
import ProjectGrid from "@/sections/ProjectGrid";
import CaseStudyDetailStrategy from "@/sections/Strategy";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar2 />
            <PortfolioHero />
            <ProjectGrid />
            <CaseStudyDetailStrategy />
            {/* <CaseStudyDetail /> */}
            <Footer />
        </main>
    );
}
