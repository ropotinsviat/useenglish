import { useNavigate } from "react-router-dom";
import { levels, types } from "../../../constants/testEnums";

function TypeCardList() {
  const navigate = useNavigate();

  function handleNavigate(url: string) {
    navigate(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="py-[50px] xl:py-[200px] bg-[#F5F5DC] relative flex flex-col xl:flex-row px-4 gap-y-[25px] items-start gap-x-[15px] lg:mx-0 ">
      {types.map((type, idx) => {
        return (
          <div
            key={type.name}
            className={`xl:h-[350px] text-[#434343] px-10 py-8 bg-white w-fit flex-1 w-full flex flex-col max-w-[1000px] ${
              idx === 1 ? "ml-auto" : ""
            } relative transition-all justify-between shadow-xl hover:shadow-2xl duration-300 ease-in-out`}
          >
            <div>
              <div className={`${type.colorText} text-5xl font-bold`}>
                {type.name}
              </div>
              <div className={`my-6 text-xl`}>{type.slogan}</div>
            </div>
            <div className="mt-auto">
              <div className={`my-4 text-lg`}>Choose your level</div>
              <div className={`flex space-x-10  `}>
                {levels.map((level) => (
                  <div
                    key={level.code}
                    onClick={() =>
                      handleNavigate(
                        `/tests?type=${type.name.toLowerCase()}&level=${level.code.toLowerCase()}`
                      )
                    }
                    className={`${type.colorText} font-semibold text-2xl cursor-pointer `}
                  >
                    {level.code}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TypeCardList;
