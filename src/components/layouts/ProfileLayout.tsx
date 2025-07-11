import { ReactNode } from "react";
import Head from "next/head";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import "@/style/globals.css";

interface DefaultLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const DefaultLayout = ({
  children,
  title = "Digital ID",
  description = "Digital ID System",
}: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex items-center justify-center">
        <main className="flex-1">{children}</main>
        {/* <Footer /> Uncomment if you have a footer */}
      </div>
    </>
  );
};

export default DefaultLayout;
