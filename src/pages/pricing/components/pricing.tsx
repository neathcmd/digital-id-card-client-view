import React, { useState, useEffect } from "react";
import {
  Check,
  X,
  Star,
  Zap,
  Shield,
  Crown,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  unavailableFeatures?: string[];
  popular?: boolean;
  enterprise?: boolean;
  color: string;
  icon: React.ReactNode;
  cta: string;
}

// Mock Header component since we don't have access to the original
const Header: React.FC = () => (
  <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 px-6 py-4">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">Digital ID Card</span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Features
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Security
        </a>
        <a href="#" className="text-blue-600 font-medium">
          Pricing
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Support
        </a>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      name: "Personal",
      price: isAnnual ? "$9" : "$12",
      period: isAnnual ? "/month" : "/month",
      description:
        "Perfect for individuals who want secure digital identity management",
      features: [
        "Secure digital ID card",
        "Basic biometric authentication",
        "Mobile app access",
        "Standard encryption",
        "Email support",
        "5 identity verifications/month",
      ],
      unavailableFeatures: [
        "Advanced analytics",
        "API access",
        "Custom branding",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: <Users className="w-6 h-6" />,
      cta: "Start Personal Plan",
    },
    {
      name: "Professional",
      price: isAnnual ? "$29" : "$35",
      period: isAnnual ? "/month" : "/month",
      description:
        "Ideal for professionals and small businesses requiring enhanced security",
      features: [
        "Everything in Personal",
        "Advanced biometric authentication",
        "Quantum-secured encryption",
        "Priority support",
        "Advanced verification methods",
        "50 identity verifications/month",
        "Multi-device sync",
        "Custom security settings",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: <Zap className="w-6 h-6" />,
      cta: "Choose Professional",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description:
        "Comprehensive solution for large organizations with custom requirements",
      features: [
        "Everything in Professional",
        "Unlimited verifications",
        "Custom API integration",
        "White-label solution",
        "Dedicated account manager",
        "24/7 priority support",
        "Advanced analytics dashboard",
        "Custom compliance features",
        "Multi-tenant architecture",
        "SSO integration",
      ],
      enterprise: true,
      color: "from-amber-500 to-orange-500",
      icon: <Crown className="w-6 h-6" />,
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "How secure is the quantum encryption?",
      answer:
        "Our quantum encryption uses 256-bit keys that are mathematically unbreakable, even by future quantum computers.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "We offer a 14-day free trial for all plans, no credit card required.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "Your data remains accessible for 30 days after cancellation, giving you time to export if needed.",
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div className="pt-20 w-full min-h-screen">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Save 20% with annual billing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Choose the perfect plan for your digital identity needs. All plans
              include our core security features with quantum-level encryption
              and biometric authentication.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-16">
              <span
                className={`text-sm font-medium ${
                  !isAnnual ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  isAnnual ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Annual
                <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl border transition-all duration-500 hover:scale-105 ${
                  tier.popular
                    ? "border-purple-200 shadow-2xl shadow-purple-500/10 ring-2 ring-purple-500"
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon and Name */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-white`}
                    >
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                      <span className="text-gray-500">{tier.period}</span>
                    </div>
                    {isAnnual && !tier.enterprise && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ${tier.name === "Personal" ? "36" : "72"} annually
                      </p>
                    )}
                  </div>

                  <p className="text-gray-600 mb-8">{tier.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                    {tier.unavailableFeatures?.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3 opacity-50"
                      >
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      tier.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg"
                        : tier.enterprise
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trusted by 10M+ Users Worldwide
              </h3>
              <p className="text-gray-600 mb-8">
                Join millions who trust our quantum-secured platform for their
                digital identity needs.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>GDPR Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>ISO 27001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
