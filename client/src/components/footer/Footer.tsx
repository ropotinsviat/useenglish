import { useNavigate } from "react-router-dom";
import { levels, types } from "../../constants/testEnums";
import { infoLinks } from "../../constants/infoLinks";
import Divider from "./divider/Divider";
import Section from "./section/Section";

function Footer() {
  const navigate = useNavigate();

  function handleNavigate(url: string) {
    navigate(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-[#464E47] py-4 px-4 relative text-white">
      <div
        className="flex justify-around
            md:h-[350px] flex-col-reverse
            lg:h-[175px] lg:flex-row
            w-full max-w-[1000px] mx-auto"
      >
        <div className="min-w-max lg:mr-14 flex flex-col gap-5 text-center lg:text-left lg:self-center">
          <div
            onClick={() => handleNavigate("/")}
            className="text-3xl sm:text-4xl font-bold cursor-pointer text-[#FFF6E8]"
          >
            useEnglish
          </div>
          <div>
            <div>© Copyright 2024-{new Date().getFullYear()},</div>
            <div>
              Made by <strong>Ropotin Sviatoslav</strong>
            </div>
          </div>
        </div>

        <Divider horizontal={true} />

        <div
          className="flex-col items-center md:flex-row w-full flex justify-around
          lg:flex-1 lg:justify-end lg:gap-[120px]"
        >
          <Section
            title="Info"
            items={infoLinks.map((link) => ({ ...link, key: link.path }))}
            handleClick={(item: any) => handleNavigate(item.path)}
          />
          <Divider />
          <Section
            title="Skills"
            items={types.map((type) => ({ ...type, key: type.name }))}
            handleClick={(item: any) =>
              handleNavigate(`/tests?level=${item.name.toLocaleLowerCase()}`)
            }
          />
          <Divider />
          <Section
            title="Levels"
            items={levels.map((level) => ({ ...level, key: level.code }))}
            handleClick={(item: any) =>
              handleNavigate(`/tests?level=${item.code.toLocaleLowerCase()}`)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
