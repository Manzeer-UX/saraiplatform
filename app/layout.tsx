import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarai Group | Digital Transformation",
  description: "Sarai Group connects digital products, data, AI, and specialist expertise from idea to implementation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top">{children}</body></html>;
}
