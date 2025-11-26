"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";

const Hero = () => {
  const features = [
    { icon: Zap, text: "Real-time Analytics" },
    { icon: Shield, text: "Privacy First" },
    { icon: BarChart3, text: "Easy Integration" },
  ];

  return (
    <Wrapper className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            <AnimationContainer animation="fadeUp" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-neutral-300 text-sm">Live Analytics Platform</span>
              </div>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text bg-gradient-to-r from-white via-white to-neutral-400 text-transparent">
                  Analytics Made
                </span>
                <br />
                <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent">
                  Simple & Powerful
                </span>
              </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.3}>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Track visitor behavior, monitor key metrics, and gain actionable insights
                with our privacy-focused analytics platform. No cookies, no tracking scripts—just clean, accurate data.
              </p>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-base font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 rounded-lg"
                >
                  View Demo
                </Button>
              </div>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.5}>
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-neutral-400"
                  >
                    <feature.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </AnimationContainer>
          </div>

          {/* Right Visual */}
          <AnimationContainer animation="fadeRight" delay={0.3} className="flex-1">
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-2xl">
                {/* Mock Dashboard Preview */}
                <div className="h-full flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500" />
                      <div>
                        <div className="h-3 w-24 bg-neutral-700 rounded mb-2" />
                        <div className="h-2 w-16 bg-neutral-800 rounded" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded bg-neutral-800" />
                      <div className="w-8 h-8 rounded bg-neutral-800" />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50"
                      >
                        <div className="h-2 w-12 bg-neutral-700 rounded mb-3" />
                        <div className="h-6 w-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded mb-2" />
                        <div className="h-2 w-16 bg-neutral-700 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50 h-32">
                    <div className="h-2 w-16 bg-neutral-700 rounded mb-4" />
                    <div className="flex items-end justify-between gap-2 h-20">
                      {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            delay: 0.6 + i * 0.1,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10" />
              </div>
            </div>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
