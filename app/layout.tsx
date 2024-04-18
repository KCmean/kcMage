import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Variable } from "lucide-react";

const IMBPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata: Metadata = {
  title: "kcmage",
  description: "AI image generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ 
      variables : { colorPrimary: '#624cf5'}
    }}> 
    <html lang="en">
      <body className={cn("font-IMBPlex antialiased", IMBPlex.variable)}>
        {children}
      </body>
    </html>
    </ClerkProvider> 

  );
}
