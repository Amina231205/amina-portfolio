import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LensProvider } from "@/components/providers/lens-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SITE, CONTACT, EDUCATION } from "@/lib/data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Separate from `metadata` per Next.js 15 — themeColor/width/initialScale
// live on the dedicated `viewport` export now; keeping them on `metadata`
// is deprecated and silently ignored.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0e14" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Amina Emad",
  },
  description: SITE.description,
  keywords: [
    "Amina Emad",
    "AI student portfolio",
    "Cybersecurity student",
    "Data Analyst intern",
    "Machine Learning portfolio",
    "SOC analyst aspirant",
    "Delta University for Science and Technology",
  ],
  authors: [{ name: SITE.name, url: CONTACT.github }],
  creator: SITE.name,
  robots: { index: true, follow: true },
  // openGraph/twitter image is supplied automatically by app/opengraph-image.tsx
  // (Next.js file-convention) — a proper 1200x630 generated card instead of
  // reusing the portrait-oriented profile photo, which social platforms would
  // crop awkwardly.
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  alternates: { canonical: SITE.url },
};

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    email: CONTACT.email,
    image: `${SITE.url}/images/avatar.jpg`,
    jobTitle: "AI, Cybersecurity & Data Analysis Student",
    sameAs: [CONTACT.github, CONTACT.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: EDUCATION.institution,
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Network Security",
      "Data Analysis",
      "Python",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <PersonJsonLd />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LensProvider>
            <MotionProvider>
              <TooltipProvider delayDuration={150}>
                <a
                  href="#top"
                  className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-lens focus:px-4 focus:py-2 focus:text-sm focus:text-lens-foreground"
                >
                  Skip to content
                </a>
                <Nav />
                <main>{children}</main>
                <Footer />
              </TooltipProvider>
            </MotionProvider>
          </LensProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
