import { ArrowRight } from "lucide-react";
import { BaseButton } from "@/components/shared/BaseButton";

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
