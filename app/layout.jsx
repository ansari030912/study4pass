import { AuthGuard } from "./auth/AuthGuard";
import Footer from "./components/Foot/Footer";
import NavBar from "./components/Nav/NavBar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <AuthGuard>{children}</AuthGuard>
        <Footer />
      </body>
    </html>
  );
}
