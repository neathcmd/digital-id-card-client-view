import Landing from "./Landing/page";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Doc from "./Doc/doc";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-300">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main content of the landing page */}
      <div className="pt-14 bg-white">
        <Landing />
        {/* <Doc /> */}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
