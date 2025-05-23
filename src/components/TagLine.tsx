import brackets from "../assets/svg/Brackets";

interface TagLineProps {
  className?: string;
  children: React.ReactNode;
}

export const TagLine = ({ className, children }: TagLineProps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
        {brackets('left')}
        <div className="mx-3 text-n-3 ">
            {children}
        </div>
        {brackets('right')}
    </div>
  )
};
