import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/app/components/footer/footer";
import PageTransition from "@/app/components/transitions/page-transition";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  if (locale === "en") {
    return {
      title: "Your partner in digital accessibility | Cardan",
      description:
        "Together we make the whole world digitally accessible and inclusive",
    };
  }

  return {
    title: "Jouw partner in digitale toegankelijkheid | Cardan",
    description:
      "Samen maken wij de hele wereld digitaal toegankelijk en inclusief",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = getMessages();
  return (
    <html lang={locale}>
      <body className={`${montserrat.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
