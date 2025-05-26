import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased vsc-initialized`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
