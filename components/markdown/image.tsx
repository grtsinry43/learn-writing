import { ComponentProps } from "react";
import NextImage from "next/image";

type MarkdownImageProps = Omit<
  ComponentProps<"img">,
  "src" | "alt" | "width" | "height"
> & {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function Image({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  ...props
}: MarkdownImageProps) {
  if (!src) return null;
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={40}
      {...props}
    />
  );
}
