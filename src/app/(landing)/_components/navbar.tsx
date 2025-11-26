"use client";

import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "@/components/globals/wrapper";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 inset-x-0 w-full border-b border-neutral-800/50 bg-[#101010]/80 backdrop-blur-xl">
      <Wrapper className="flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="Weblytics Logo"
              className="group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="bg-clip-text bg-gradient-to-r from-white via-white to-neutral-400 font-semibold text-transparent text-xl">
            Weblytics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
          >
            FAQ
          </Link>
          <Link
            href="https://github.com/Mihir2423/analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
          >
            GitHub
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/projects">
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg"
            >
              Get Started
            </Button>
          </Link>
          <Link
            href="https://github.com/Mihir2423/analytics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              variant="outline"
              className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 rounded-lg"
            >
              <Github className="w-4 h-4 mr-2" />
              Star
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </Wrapper>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-800 bg-[#101010]/95 backdrop-blur-xl"
          >
            <Wrapper className="flex flex-col gap-4 py-6">
              <Link
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors py-2"
              >
                Features
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors py-2"
              >
                FAQ
              </Link>
              <Link
                href="https://github.com/Mihir2423/analytics"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors py-2"
              >
                GitHub
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-neutral-800">
                <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </Wrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
