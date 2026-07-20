import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Andén Inception | Lanzamiento Junio 2026",
  description:
    "Las primeras 50 empresas de la primera zona económica digital de Latam empiezan acá. Una zona digital con compliance resuelto, beneficios fiscales activos y un ecosistema operando desde el día uno.",
  icons: {
    icon: "/logos/iso-5.png",
    shortcut: "/logos/iso-5.png",
    apple: "/logos/iso-5.png",
  },
  openGraph: {
    title: "Andén Inception | Lanzamiento Junio 2026",
    description:
      "Las primeras 50 empresas de la primera zona económica digital de Latam empiezan acá. Una zona digital con compliance resuelto, beneficios fiscales activos y un ecosistema operando desde el día uno.",
    images: [
      {
        url: "/logos/logo-5.png",
        width: 1200,
        height: 630,
        alt: "Andén Inception",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andén Inception | Lanzamiento Junio 2026",
    description:
      "Las primeras 50 empresas de la primera zona económica digital de Latam empiezan acá.",
    images: ["/logos/logo-5.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-white">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
