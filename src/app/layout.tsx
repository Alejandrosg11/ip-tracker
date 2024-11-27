import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "IP Address Tracker",
  description: "Track any IP address or domain and get location data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
