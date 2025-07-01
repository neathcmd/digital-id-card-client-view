import React, { useState, useEffect } from "react";
import {
  Shield,
  Smartphone,
  Zap,
  Lock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import IdCardGif from "@/assets/Tokenization_Hero_1.gif";
import { BaseButton } from "../components/BaseButton";
import Link from "next/link";

const animateIdCard = {
  src: IdCardGif,
  alt: "Animated ID Card",
};

const DigitalIDLanding = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Military-grade encryption protects your digital identity with quantum-resistant algorithms.",
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description:
        "Verify your identity in under 2 seconds with our AI-powered recognition system.",
    },
    {
      icon: Smartphone,
      title: "Universal Access",
      description:
        "Access your ID from any device, anywhere in the world, with seamless cloud sync.",
    },
  ];

  const featureList = [
    {
      label: "Biometric authentication in 0.3 seconds",
    },
    {
      label: "Cross-platform synchronization",
    },
    {
      label: "Offline verification capability",
    },
    {
      label: "Blockchain-secured identity ledger",
    },
  ];

  const stats = [
    { number: "10M+", label: "Active Users", color: "bg-green-500" },
    { number: "99.9%", label: "Uptime", color: "bg-blue-500" },
    { number: "150+", label: "Countries", color: "bg-purple-500" },
    { number: "2s", label: "Avg. Verification", color: "bg-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-white text-white overflow-hidden">
      {/* Hero Section */}
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
                <span className="font-semibold text-purple-700">
                  AI-powered
                </span>{" "}
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

                <Link href="/Demo/page">
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

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 px-6 py-20 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-semibold max-w-2xl mx-auto">
            Experience next-generation digital identity with features that
            redefine security and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-105 ${
                  activeFeature === index
                    ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/50 shadow-2xl"
                    : "bg-white/5 border-white/20 hover:bg-white/10"
                }`}
              >
                <Icon
                  className={`h-12 w-12 mb-4 transition-colors duration-300 ${
                    activeFeature === index ? "text-blue-500" : "text-gray-400"
                  }`}
                />
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Demo */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/40 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                See It In Action
              </h3>
              <div className="space-y-4">
                {featureList.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-gray-600 leading-relaxed font-semibold">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/20 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <Lock className="h-5 w-5 text-purple-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gradient-to-r from-purple-400 to-transparent rounded w-3/4 animate-pulse"></div>
                  <div className="h-2 bg-gradient-to-r from-pink-400 to-transparent rounded w-1/2 animate-pulse delay-200"></div>
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-transparent rounded w-2/3 animate-pulse delay-400"></div>
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center animate-spin">
                    <Shield className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/40 rounded-3xl p-12 backdrop-blur-md border border-white/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Ready to Transform Your Identity?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-semibold mb-8 max-w-2xl mx-auto">
            Join millions who have already made the switch to secure, instant
            digital identification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              variant="primary"
              className="px-8 py-4 text-lg font-semibold"
            >
              Start Your Free Trial
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </BaseButton>

            <BaseButton
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold"
            >
              Contact us
            </BaseButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalIDLanding;
