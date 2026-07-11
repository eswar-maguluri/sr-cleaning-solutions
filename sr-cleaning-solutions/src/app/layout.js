import "./globals.css";

export const metadata = {
  title: "SR Cleaning Solutions",
  description: "Professional Home Cleaning Services",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}