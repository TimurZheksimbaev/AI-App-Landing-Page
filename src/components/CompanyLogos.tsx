import { useTranslation } from 'react-i18next';
import { companyLogos } from '../constants';

interface CompanyLogosProps {
    className?: string;
}

export const CompanyLogos = ({ className }: CompanyLogosProps) => {
    const { t } = useTranslation();
    return (
        <div className={className}>
            <h5 className='tagline mb-6 text-center text-n-1/50'>{t("hero.quote")}</h5>
            <ul className='flex'>
                {companyLogos.map((logo, index) => (
                    <li key={index} className='flex items-center justify-center flex-1 h-[8.5rem]'>
                        <img src={logo} alt={logo} width={134} height={28} />
                    </li>
                ))}
            </ul>
        </div>
    )
}