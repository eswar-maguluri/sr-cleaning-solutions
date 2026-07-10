import "./globals.css";

export const metadata = {
  title: "SR Cleaning Solutions",
  description: "Premium Residential Cleaning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}