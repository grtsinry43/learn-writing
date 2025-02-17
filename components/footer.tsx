import Link from "next/link";
import {buttonVariants} from "./ui/button";
import {CommandIcon, TriangleIcon} from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t w-full h-16">
            <div
                className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
                <div className="flex items-center gap-3">
                    <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground"/>
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} grtsinry43.
                        Powered by{" "}
                        <Link
                            className="px-1 underline underline-offset-2"
                            href="https://github.com/nisabmohd/Aria-Docs"
                        >
                            AriaDocs
                        </Link>
                        . The source code is available on{" "}
                        <Link
                            className="px-1 underline underline-offset-2"
                            href="https://github.com/grtsinry43/learn-writing"
                        >
                            GitHub
                        </Link>
                        .
                    </p>
                </div>

                <div className="gap-4 items-center hidden md:flex">
                    <FooterButtons/>
                </div>
            </div>
        </footer>
    );
}

export function FooterButtons() {
    return (
        <>
            <div className="flex gap-2 flex-col sm:flex-row items-center justify-center">
                <span>
                You can also
            </span>
                <Link
                    href="https://vercel.com/templates/next.js/documentation-template"
                    className={buttonVariants({variant: "outline", size: "sm"})}
                >
                    <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current"/>
                    Deploy
                </Link>
                <span>
                for yourself.
            </span>
            </div>
        </>
    );
}
