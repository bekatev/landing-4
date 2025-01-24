import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Buy from "./components/Buy";
import LearnMore from "./components/LearnMore";
import Footer from "./components/Footer";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Buy />
        <Trending />
        <LearnMore />
        <Footer />
        {children}
      </body>
    </html>
  );
}
