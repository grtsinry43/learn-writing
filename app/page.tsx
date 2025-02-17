import {buttonVariants} from "@/components/ui/button";
import {page_routes} from "@/lib/routes-config";
import {MoveUpRightIcon, TerminalSquareIcon} from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
            <Link
                href="https://github.com/grtsinry43/learn-writing"
                target="_blank"
                className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
            >
                在 GitHub 同步查看 {" "}
                <MoveUpRightIcon className="w-4 h-4 font-extrabold"/>
            </Link>
            <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
                Grtsinry43&lsquo;s Learning Notes
            </h1>
            <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
                云笺漫录三更雨·竹牖轻收万壑风 /
                Cloud-Paged Journals Whisper Midnight Rain, Bamboo Windows Gather Valley Winds in Veils
                <br/>
                记录了我在学习过程中的所思所想，以及一些技术分享。
            </p>
            <div className="flex flex-row items-center gap-5">
                <Link
                    href={`/docs${page_routes[0].href}`}
                    className={buttonVariants({className: "px-6", size: "lg"})}
                >
                    让我们开始吧
                </Link>
                <Link
                    href="/blog"
                    className={buttonVariants({
                        variant: "secondary",
                        className: "px-6",
                        size: "lg",
                    })}
                >
                    看看文章捏
                </Link>
            </div>
            <span
                className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-9 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium border rounded-full p-2.5 px-5 bg-muted/55">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5"/>
                {"git clone https://github.com/grtsinry43/learn-writing.git"}
      </span>
        </div>
    );
}
