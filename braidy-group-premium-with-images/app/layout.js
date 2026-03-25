import "./globals.css";

export const metadata = {
  title: "Braidy Group",
  description: "Demolition, bulk excavation, detail excavation and shoring experts in Sydney NSW.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}