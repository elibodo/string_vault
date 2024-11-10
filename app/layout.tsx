import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeContext";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Use weights as per your design
});

export const metadata: Metadata = {
  title: "String Vault",
  description: "Guitar Collections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png/" />
      </head>
      <body className={`${robotoMono.className} antialiased`}>
        <main>
          <ThemeProvider>
            <NavBar />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
