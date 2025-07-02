import MainLanding from "./Landing";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Head from "next/head";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gray-300">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main content of the landing page */}
      <div className="pt-14 bg-white">
        {/* <Head>
          <title>Digital ID Card - Next Gen Identity Solutions</title>
          <meta
            name="description"
            content="Secure digital identity verification"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <MainLanding />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

// import { redirect } from "next/navigation";

// export default function IndexPage() {
//   redirect("/landing");
// }
