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
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="bg-orange-50 mulish">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
