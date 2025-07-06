import React, { Fragment } from "react";
import HeroSection from "./sections/Hero";
import FeatureSection from "./sections/Feature";
import CtaSection from "./sections/CTA";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function MainLanding() {
  return (
    <DefaultLayout
      title="Digital ID Card - Next Gen Identity Solutions"
      description="Secure digital identity verification and management solutions for the modern world"
      contentClassName="bg-white"
      backgroundColor="bg-gray-300"
    >
      <Fragment>
        <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
          {/*  Hero Section */}
          <HeroSection />

          {/*  Features Section */}
          <FeatureSection />

          {/*  Call to Action */}
          <CtaSection />
        </main>
      </Fragment>
    </DefaultLayout>
  );
}
