import { AuthGuard } from "./auth/AuthGuard";
import Footer from "./components/Foot/Footer";
import NavBar from "./components/Nav/NavBar";
import "./globals.css";

export const metadata = {
  title: "Study 4 Pass",
  description: "Get Your IT Certified Exams and Video Courses...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <AuthGuard >
          {children}
          </AuthGuard>
        <Footer />
      </body>
    </html>
  );
}
