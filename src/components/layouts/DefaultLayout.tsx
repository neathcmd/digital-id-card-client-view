import { ReactNode } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Head from "next/head";

interface DefaultLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  headerClassName?: string;
  footerClassName?: string;
  contentClassName?: string;
  backgroundColor?: string;
}

const DefaultLayout = ({
  children,
  title = "Digital ID Card - Next Gen Identity Solutions",
  description = "Secure digital identity verification and management solutions for the modern world",
  className = "",
  showHeader = true,
  showFooter = true,
  headerClassName = "",
  footerClassName = "",
  contentClassName = "",
  backgroundColor = "bg-white",
}: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>

      <div className={`w-full min-h-screen ${backgroundColor} ${className}`}>
        {/* Fixed Header */}
        {showHeader && (
          <div className={`fixed top-0 left-0 w-full z-50 ${headerClassName}`}>
            <Header />
          </div>
        )}

        {/* Main Content */}
        <main
          className={`
            ${showHeader ? "pt-14" : ""} 
            ${contentClassName}
          `}
        >
          {children}
        </main>

        {/* Footer */}
        {showFooter && (
          <div className={footerClassName}>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default DefaultLayout;
