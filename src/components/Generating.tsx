import { useTranslation } from "react-i18next";
import loading from "../assets/loading.png"

interface GeneratingProps {
  className?: string;
}

export const Generating = ({ className }: GeneratingProps) => {
  const { t } = useTranslation();
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
        <img src={loading} alt="loader" className='w-5 h-5 mr-4' />
        {t("hero.aiIsGenerating")}
    </div>
  )
}