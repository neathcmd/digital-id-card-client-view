import { ReactNode } from "react";
import Head from "next/head";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import DocSideBar from "@/components/ui/Doc-Side-Bar";

interface DocLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
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

const DocLayout = ({
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
}: DocLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>

      <div
        className={`w-full container mx-auto min-h-screen ${backgroundColor} ${className}`}
      >
        {/* Header */}
        {showHeader && (
          <div className={`fixed top-0 left-0 w-full z-50 ${headerClassName}`}>
            <Header />
          </div>
        )}

        {/* Layout Content */}
        <main
          className={`flex gap-4 ${
            showHeader ? "pt-16" : ""
          } ${contentClassName}`}
        >
          {/* Sidebar */}
          {/* {sidebar && (
            <aside className="w-64 shrink-0 sticky top-16 self-start px-4">
              {sidebar}
            </aside>
          )} */}
          <aside className="sharink-0 sticky top-16 self-start ">
            <DocSideBar />
          </aside>

          {/* Page Content */}
          <div className="flex-1 p-6">{children}</div>
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

export default DocLayout;
