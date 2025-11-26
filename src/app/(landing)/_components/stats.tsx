"use client";

import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Active Users",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    value: "50K+",
    label: "Websites Tracked",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    value: "1M+",
    label: "Events Processed",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
    color: "from-orange-500 to-red-500",
  },
];

const StatsSection = () => {
  return (
    <Wrapper className="py-20 lg:py-32 relative">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <AnimationContainer
              key={index}
              animation="fadeUp"
              delay={0.1 * index}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative p-6 lg:p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all duration-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br ${stat.color} rounded-xl`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-3xl lg:text-4xl font-bold bg-clip-text bg-gradient-to-r text-transparent bg-gradient-to-r from-white to-neutral-400 mb-2"
                >
                  {stat.value}
                </motion.div>

                <p className="text-neutral-400 text-sm lg:text-base">
                  {stat.label}
                </p>
              </motion.div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default StatsSection;

