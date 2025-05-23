import Section from "./Section";
import { Heading } from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useTranslation } from "react-i18next";

export const Benefits = () => {
  const { t } = useTranslation();

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title={t("benefits.title")}
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="block relative p-0.5 md:max-w-[24rem] lg:max-w-[22.5rem]"
            >
              <img
                src={benefit.backgroundUrl}
                alt=""
                className="absolute inset-0 w-full h-full z-0"
                width={384}
                height={366}
                style={{ objectFit: "fill" }}
              />
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">
                  {t(
                    `benefits.cards.${
                      benefit.id === "0" || benefit.id === "4"
                        ? "askAnything"
                        : benefit.id === "1" || benefit.id === "5"
                        ? "improveEveryday"
                        : benefit.id === "2"
                        ? "connectEverywhere"
                        : "fastResponding"
                    }.title`
                  )}
                </h5>
                <p className="body-2 mb-6 text-n-3">
                  {t(
                    `benefits.cards.${
                      benefit.id === "0" || benefit.id === "4"
                        ? "askAnything"
                        : benefit.id === "1" || benefit.id === "5"
                        ? "improveEveryday"
                        : benefit.id === "2"
                        ? "connectEverywhere"
                        : "fastResponding"
                    }.text`
                  )}
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={benefit.iconUrl}
                    width={48}
                    height={48}
                    alt={benefit.title}
                  />
                  <p className="ml-auto font-code text-xs text-n-1 uppercase tracking-wider">
                    {t("benefits.exploreMore")}
                  </p>
                  <Arrow />
                </div>
              </div>

              {benefit.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 duration-300">
                  {benefit.imageUrl && (
                    <img
                      src={benefit.imageUrl}
                      alt={benefit.title}
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
