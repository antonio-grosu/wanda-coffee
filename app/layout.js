import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "WANDA Coffee",
  description: "Coffee and Joy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="bg-gray-50 mulish">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
