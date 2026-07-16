import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata = {
  title: "SR Cleaning Solutions",
  description: "Professional Home Cleaning Services",
  verification: {
    google: "rV-MHHmFxmh60wX0rj1q0HFNOTsLSCl8nHs1TZie2kw",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
