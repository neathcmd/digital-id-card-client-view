import Doc from "./components/doc";
import Header from "@/components/Header";

export default function PricingPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-16 bg-white w-full min-h-screen">
        <Doc />
      </div>
    </div>
  );
}
