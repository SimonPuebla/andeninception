import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andén Inception | Lanzamiento Junio 2026",
  description:
    "Las primeras 50 empresas de la primera zona económica digital de Latam empiezan acá. Una zona digital con compliance resuelto, beneficios fiscales activos y un ecosistema operando desde el día uno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-white">
      <body className="antialiased">{children}</body>
    </html>
  );
}
