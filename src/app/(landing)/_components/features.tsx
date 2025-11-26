"use client";

import { Features } from "@/config/features";
import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <Wrapper className="py-20 lg:py-32 relative">
      <div className="flex flex-col items-center gap-6 text-center mb-16">
        <AnimationContainer animation="fadeUp" delay={0.1}>
          <SectionBadge title="Features" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-clip-text bg-gradient-to-r from-white to-neutral-400 text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-transparent">
              Understand Your Audience
            </span>
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Comprehensive analytics tools designed to help you make data-driven decisions
            and grow your business.
          </p>
        </AnimationContainer>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Features.map((feature, index) => (
          <AnimationContainer
            key={index}
            animation="fadeUp"
            delay={0.1 * (index + 1)}
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all duration-300"
            >
              {/* Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          </AnimationContainer>
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturesSection;
