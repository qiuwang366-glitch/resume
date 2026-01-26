import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Lu Liu | Senior Fixed Income Portfolio Manager",
  description: "8 years of global banking and capital markets experience. Directing $50B+ multi-asset fixed income portfolios with consistent alpha generation.",
  keywords: ["Fixed Income", "Portfolio Manager", "Quantitative Finance", "Investment Management", "Asset Management"],
  authors: [{ name: "Lu Liu" }],
  openGraph: {
    title: "Lu Liu | Senior Fixed Income Portfolio Manager",
    description: "Merging Macro Strategy with Quantitative Rigor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
