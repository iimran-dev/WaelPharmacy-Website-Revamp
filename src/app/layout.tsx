import type { Metadata } from "next";
import { Playfair_Display, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Wael Pharmacy Co. W.L.L. | Healthcare Excellence Since 1966",
  description:
    "Bahrain's trusted pharmaceutical distribution and healthcare solutions partner with 58+ years of excellence, 40+ global brand partnerships, and 1500+ products. GDP certified, 24/7 support.",
  keywords: [
    "Wael Pharmacy",
    "Bahrain pharmacy",
    "pharmaceutical distribution",
    "healthcare solutions Bahrain",
    "medical devices",
    "laboratory solutions",
    "GDP certified",
    "Bahrain healthcare",
  ],
  authors: [{ name: "Wael Pharmacy Co. W.L.L." }],
  openGraph: {
    title: "Wael Pharmacy Co. W.L.L. | Delivering Healthcare Excellence Since 1966",
    description:
      "Bahrain's trusted pharmaceutical distribution and healthcare solutions partner with global partnerships and decades of excellence.",
    url: "https://waelpharmacy.com",
    siteName: "Wael Pharmacy Co. W.L.L.",
    type: "website",
    locale: "en_BH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wael Pharmacy Co. W.L.L. | Healthcare Excellence Since 1966",
    description:
      "Bahrain's trusted pharmaceutical distribution and healthcare solutions partner.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wael Pharmacy Co. W.L.L.",
              url: "https://waelpharmacy.com",
              logo: "https://waelpharmacy.com/logo.png",
              description:
                "Bahrain's trusted pharmaceutical distribution and healthcare solutions partner since 1966.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Manama",
                addressCountry: "BH",
              },
              foundingDate: "1966",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 200,
                maxValue: 250,
              },
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${jakarta.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
