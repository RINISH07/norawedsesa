import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Nikah Invitation",
  description: "A heartfelt invitation to celebrate a blessed Nikah.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
