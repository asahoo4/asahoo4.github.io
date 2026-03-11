import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abhilash Sahoo",
  description:
    "Associate Research Scientist at the Flatiron Institute (Simons Foundation), working on multiscale molecular simulations and machine learning for biophysics.",
  openGraph: {
    title: "Abhilash Sahoo",
    description:
      "Associate Research Scientist at the Flatiron Institute, working on multiscale molecular simulations and machine learning for biophysics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className="antialiased bg-white text-[#333]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
