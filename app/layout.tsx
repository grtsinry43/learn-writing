import type {Metadata} from "next";
import {ThemeProvider} from "@/components/contexts/theme-provider";
import {Navbar} from "@/components/navbar";
import {Space_Mono, Space_Grotesk} from "next/font/google";
import {Footer} from "@/components/footer";
import "@/styles/globals.css";

const sansFont = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-geist-sans",
    display: "swap",
    weight: "400",
});

const monoFont = Space_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap",
    weight: "400",
});

export const metadata: Metadata = {
    title: "云笺漫录三更雨·竹牖轻收万壑风 - Grtsinry43's Learning Notes",
    metadataBase: new URL("https://docs.grtsinry43.com"),
    description:
        "Grtsinry43的学习笔记，云笺漫录三更雨·竹牖轻收万壑风 ，记录了我在学习过程中的所思所想，以及一些技术分享。",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar/>
                    <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
                        {children}
                    </main>
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    );
}
