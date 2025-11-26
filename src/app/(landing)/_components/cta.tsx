"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";
import { motion } from "framer-motion";

const benefits = [
  "No credit card required",
  "Free forever plan available",
  "Setup in under 5 minutes",
  "Privacy-first analytics",
];

const CTA = () => {
  return (
    <Wrapper className="py-20 lg:py-32 relative">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 lg:p-16">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <AnimationContainer animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-clip-text bg-gradient-to-r from-white to-neutral-400 text-transparent">
                Ready to Get Started?
              </span>
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.2}>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Join thousands of businesses using our analytics platform to make
              data-driven decisions and grow their online presence.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-base font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg"
              >
                Schedule Demo
              </Button>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-neutral-400"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default CTA;
