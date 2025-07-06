"use client";

import { Shield, Smartphone, Zap, Lock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FeatureSection = () => {
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
  return (
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
  );
};

export default FeatureSection;
