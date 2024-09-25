import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConfigureAmplifyClientSide from "@/app/amplify-cognito-config";

export const metadata: Metadata = {
    title: "PseudoLawyer",
    description: "Use AI to generate legal contracts for free.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <>
                    <ConfigureAmplifyClientSide />
                    {children}
                </>
            </body>
        </html>
    );
}
