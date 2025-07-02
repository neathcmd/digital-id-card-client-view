import React, { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  Globe,
  Lock,
  Smartphone,
  Users,
  CheckCircle,
  ArrowRight,
  Eye,
  Clock,
  Database,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features: Feature[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum-Secured Authentication",
      description:
        "Military-grade quantum encryption ensures your digital identity remains unbreachable against future cyber threats.",
      benefits: [
        "256-bit quantum encryption",
        "Zero-knowledge verification",
        "Unhackable security protocols",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Verification",
      description:
        "Verify your identity in under 2 seconds with our AI-powered recognition system that works anywhere, anytime.",
      benefits: [
        "2-second verification",
        "99.9% accuracy rate",
        "Works offline",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Compatibility",
      description:
        "Accepted across 150+ countries with seamless integration into existing government and corporate systems.",
      benefits: [
        "150+ country support",
        "Universal standards",
        "Cross-platform sync",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description:
        "Native mobile apps with biometric integration, NFC support, and offline functionality for maximum convenience.",
      benefits: ["Biometric unlock", "NFC enabled", "Offline ready"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy by Design",
      description:
        "Your data stays yours. Zero data collection, blockchain-based verification, and complete user control.",
      benefits: [
        "Zero data collection",
        "Blockchain verified",
        "User controlled",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Decentralized Storage",
      description:
        "Distributed across multiple secure nodes with automatic backup and disaster recovery capabilities.",
      benefits: ["Distributed storage", "Auto backup", "99.99% uptime"],
      color: "from-teal-500 to-blue-500",
    },
  ];

  const stats = [
    {
      number: "10M+",
      label: "Active Users",
      icon: <Users className="w-6 h-6" />,
    },
    { number: "99.9%", label: "Uptime", icon: <Clock className="w-6 h-6" /> },
    { number: "150+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    {
      number: "2s",
      label: "Avg. Verification",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-20 pb-16 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 px-4">
            Experience the next generation of digital identity with cutting-edge
            technology that redefines security and convenience.
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:bg-white/10 cursor-pointer ${
                  activeFeature === index
                    ? "ring-2 ring-blue-400 bg-white/10"
                    : ""
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Identity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions of users who trust our quantum-secured digital
            identity platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default FeaturesPage;
