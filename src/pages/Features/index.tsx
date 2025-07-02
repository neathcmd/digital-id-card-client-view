import Header from "@/components/Header";
import Features from "./components/features";

export default function FeaturesPage() {
  return (
    <div className="w-full min-h-screen bg-gray-300">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main content of the pricing page */}
      <div className="pt-14 bg-white"></div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
