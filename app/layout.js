import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const head = Archivo({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-head" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-body" });

export const metadata = {
  title: `${site.name} | Civil Work, Interior, Plumbing, Painting & Supplies`,
  description:
    "Government contractor and supplier in Bangladesh. Civil work, interior design and development, plumbing, painting and all types of supplies, as contractor or subcontractor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
