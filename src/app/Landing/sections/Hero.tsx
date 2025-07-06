"use client";

import IdCardGif from "@/assets/Tokenization_Hero_1.gif";
import { BaseButton } from "@/components/shared/BaseButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const animateIdCard = {
    src: IdCardGif,
    alt: "Animated ID Card",
  };

  const stats = [
    { number: "10M+", label: "Active Users", color: "bg-green-500" },
    { number: "99.9%", label: "Uptime", color: "bg-blue-500" },
    { number: "150+", label: "Countries", color: "bg-purple-500" },
    { number: "2s", label: "Avg. Verification", color: "bg-yellow-500" },
  ];

  return (
    <section className="relative z-10 px-6 py-20 w-full min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="flex flex-col space-y-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 w-fit group hover:shadow-lg transition-all duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                Next-Gen Identity Solutions
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-gray-400  to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% tracking-tight">
                  Your Identity,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600  to-gray-400 bg-clip-text text-transparent animate-gradient bg-300% delay-100">
                  Redefined
                </span>
              </h1>

              {/* Subtle underline animation */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Experience the future of digital identification with{" "}
              <span className="font-semibold text-blue-700">
                quantum-secured
              </span>
              ,{" "}
              <span className="font-semibold text-purple-700">AI-powered</span>{" "}
              verification that works everywhere, instantly.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4 text-sm">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50"
                >
                  <div className={`w-2 h-2 rounded-full ${stat.color}`}></div>
                  <span className="text-gray-700 font-medium">
                    {stat.number} {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <BaseButton
                variant="primary"
                className="px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </BaseButton>

              <Link href="/demo">
                <BaseButton
                  variant="secondary"
                  className="px-8 py-4 text-lg font-semibold"
                >
                  Watch Demo
                </BaseButton>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl transform scale-110 animate-pulse"></div>

            <div className="relative transform hover:scale-105 transition-all duration-500 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-1 shadow-xl border border-gray-200/50 backdrop-blur-sm">
                <img
                  src={animateIdCard.src.src}
                  alt={animateIdCard.alt}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
