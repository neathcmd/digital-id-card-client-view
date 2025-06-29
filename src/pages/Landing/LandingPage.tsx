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
import { BaseButton } from "../../components/BaseButton";

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

  const stats = [
    { number: "10M+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Countries" },
    { number: "2s", label: "Avg. Verification" },
  ];

  return (
    <div className="min-h-screen bg-white text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent tracking-tight">
            Your Identity,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-gray-500 bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of digital identification with
            quantum-secured, AI-powered verification that works everywhere,
            instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <BaseButton variant="primary" className="px-8 py-4">
              Start Free Trial <ArrowRight className="inline ml-2 h-5 w-5" />
            </BaseButton>

            <BaseButton variant="secondary" className="px-8 py-4">
              Watch Demo
            </BaseButton>
          </div>

          {/* Floating ID Card */}
          <div className="relative mx-auto perspective-1000">
            <img src={animateIdCard.src.src} alt={animateIdCard.alt} />
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="transform hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-500/50 to-gray-400/50 py-8 rounded-xl backdrop-blur-md border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-gray-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 px-6 py-20 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                    activeFeature === index
                      ? "text-purple-400"
                      : "text-gray-400"
                  }`}
                />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Demo */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">See It In Action</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Biometric authentication in 0.3 seconds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Cross-platform synchronization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Offline verification capability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Blockchain-secured identity ledger</span>
                </div>
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
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 backdrop-blur-md border border-white/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Transform Your Identity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions who have already made the switch to secure, instant
            digital identification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Your Free Trial
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/20 transition-all duration-300 backdrop-blur-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalIDLanding;
