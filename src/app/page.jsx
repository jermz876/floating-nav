import Hero from "@/components/hero/Hero";
import Newsletter from "@/components/newsletter/Newsletter";
import NewSection from "@/components/section/NewSection";
import SectionTwo from "@/components/section/SectionTwo";

export default function Home() {
    return (
        <main className="  ">
            <Hero />
            <NewSection />
            <Newsletter />
            <SectionTwo />

            <section id="services"></section>
        </main>
    );
}
