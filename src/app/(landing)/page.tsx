import React from "react";
import Hero from "./_components/hero";
import Features from "./_components/features";
import Stats from "./_components/stats";
import FAQ from "./_components/faq";
import CTA from "./_components/cta";

const HomePage = () => {
  return (
    <div className="relative flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="w-full">
        <Hero />
      </section>

      {/* Stats Section */}
      <section id="stats" className="w-full">
        <Stats />
      </section>

      {/* Features Section */}
      <section id="features" className="w-full">
        <Features />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full">
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <CTA />
      </section>
    </div>
  );
};

export default HomePage;
