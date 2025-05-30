import { TagLine } from "./TagLine";

interface HeadingProps {
  className?: string;
  title: string;
  text?: string;
  tag?: string;
}

export const Heading = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center`}>
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};
