"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/config/faq";
import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="flex flex-col items-center gap-6 text-center mb-16">
        <AnimationContainer animation="fadeUp" delay={0.1}>
          <SectionBadge title="FAQ" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-clip-text bg-gradient-to-r from-white to-neutral-400 text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-transparent">
              Questions
            </span>
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Everything you need to know about our analytics platform. Can't find
            the answer you're looking for? Contact our support team.
          </p>
        </AnimationContainer>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4 w-full">
          {FAQS.map((item, index) => (
            <AnimationContainer
              key={index}
              animation="fadeUp"
              delay={0.1 * (index + 1)}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-neutral-900/50 border border-neutral-800 px-6 rounded-2xl hover:border-neutral-700 transition-colors"
              >
                <AccordionTrigger className="py-6 font-medium text-white text-left hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-base md:text-lg">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400 text-left pb-6 pl-8 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimationContainer>
          ))}
        </Accordion>
      </div>
    </Wrapper>
  );
};

export default FAQ;
