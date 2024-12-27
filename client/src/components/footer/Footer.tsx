import { useNavigate } from "react-router-dom";
import { levels, types } from "../../constants/testEnums";
import { infoLinks } from "../../constants/infoLinks";

function Footer() {
  const navigate = useNavigate();

  function handleNavigate(url: string) {
    navigate(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-[#464E47] py-4 px-4 relative text-white">
      <div
        className={`grid 
            grid-rows-[auto_auto_auto_auto_auto_auto_auto]
            md:h-[400px] md:grid-rows-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr_auto_1fr]
            lg:h-[200px] lg:grid-rows-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]
            w-full max-w-[1000px] mx-auto`}
      >
        <div
          className={`flex flex-col gap-5 text-center md:text-left
            order-last md:col-span-6  
            self-center  
            lg:order-none lg:col-span-1`}
        >
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

        <div
          className={`border-[#aaa]
            order-6 my-8
            w-full border-t-[1px] md:my-0 md:mt-10 md:col-span-5 
            lg:h-full lg:border-l-[1px] lg:mx-4 lg:my-0 lg:col-span-1 lg:order-none lg:border-t-0`}
        />

        <div className="md:mt-8 md:ml-3 text-center md:text-left">
          <div>Info</div>
          {infoLinks.map((link) => (
            <div
              key={link.path}
              onClick={() => handleNavigate(link.path)}
              className="cursor-pointer text-[#aaa] hover:text-[#FFF6E8]"
            >
              {link.label}
            </div>
          ))}
        </div>

        <div
          className={`border-[#aaa] my-8
            w-full border-t-[1px] md:my-0 
            md:h-full md:border-l-[1px] md:mx-4 md:my-0 md:col-span-1 md:order-none md:border-t-0`}
        />

        <div className="md:mt-8 md:ml-3 text-center md:text-left">
          <div>Skills</div>
          <div>
            {types.map((type) => (
              <div
                key={type.name}
                onClick={() =>
                  handleNavigate(
                    `/tests?level=${type.name.toLocaleLowerCase()}`
                  )
                }
                className="text-[#C8A2C8] cursor-pointer text-[#aaa] hover:text-[#FFF6E8]"
              >
                {type.name}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`border-[#aaa] my-8
            w-full border-t-[1px] md:my-0 
            md:h-full md:border-l-[1px] md:mx-4 md:my-0 md:col-span-1 md:order-none md:border-t-0`}
        />

        <div className="md:mt-8 md:ml-3 text-center md:text-left">
          <div>Levels</div>
          <div>
            {levels.map((level) => (
              <div
                key={level.code}
                onClick={() =>
                  handleNavigate(
                    `/tests?level=${level.code.toLocaleLowerCase()}`
                  )
                }
                className="text-[#C8A2C8] cursor-pointer text-[#aaa] hover:text-[#FFF6E8]"
              >
                {level.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
