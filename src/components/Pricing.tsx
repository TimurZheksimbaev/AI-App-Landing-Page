import Section from "./Section";
import smallSphere from "../assets/4-small.png";
import stars from "../assets/pricing/stars.svg";
import { Heading } from "./Heading";
import { PricingList } from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { useTranslation } from "react-i18next";

export const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="small sphere"
            width={255}
            height={255}
            className="relative z-1"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none ">
            <img
              src={stars}
              alt=""
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading tag="Get started with Brainwave" title={t("pricing.title")} />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};
