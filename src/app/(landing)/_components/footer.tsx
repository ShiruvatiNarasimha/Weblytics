"use client";

import { Github, Mail } from "lucide-react";
import Link from "next/link";
import AnimationContainer from "@/components/globals/animation-container";
import Wrapper from "@/components/globals/wrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#" },
      { label: "Documentation", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    Resources: [
      { label: "FAQ", href: "#faq" },
      { label: "Support", href: "#" },
      { label: "Contact", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950/50">
      <Wrapper className="py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <AnimationContainer animation="fadeUp" delay={0.1}>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
                </div>
                <span className="bg-clip-text bg-gradient-to-r from-white to-neutral-400 font-semibold text-transparent text-lg">
                  Weblytics
                </span>
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Privacy-first analytics platform that helps you understand your
                audience without compromising their privacy.
              </p>
            </AnimationContainer>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category}>
              <AnimationContainer
                animation="fadeUp"
                delay={0.1 * (categoryIndex + 2)}
              >
                <h3 className="text-white font-semibold mb-4 text-sm">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AnimationContainer>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <AnimationContainer animation="fadeUp" delay={0.5}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-400 text-sm">
                &copy; {currentYear} Weblytics. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="https://github.com/Mihir2423/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:mihirraj444@gmail.com"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimationContainer>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
