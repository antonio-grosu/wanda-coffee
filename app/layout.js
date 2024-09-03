import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "WANDA",
  description: "Coffee and Joy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="wSrOt8olR5ucIcj1sF3_KkSNH9uspGEv4Fped0pnCjU"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-orange-50 mulish">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
