import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { levels, types } from "../../../constants/testEnums";

interface MobileNavProps {
  isNavOpen: boolean;
  close: () => void;
}

function MobileNav({ isNavOpen, close }: MobileNavProps) {
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (typeName: string) => setHoveredType(typeName);
  const handleMouseLeave = () => setHoveredType(null);

  const goTo = (url: string) => {
    handleMouseLeave();
    close();
    navigate(url);
  };

  return (
    <div
      className={`overflow-hidden flex items-center justify-center w-full bg-white transition-[max-height] duration-300 ${
        isNavOpen ? "max-h-[1000px]" : "max-h-0"
      }`}
    >
      <ul className="cursor-pointer w-fit flex flex-col items-center text-center h-full text-[#575757] font-semibold text-2xl">
        {types.map((type) => (
          <div
            key={type.name}
            className="z-10 text-2xl transition-colors px-6 py-10"
            onMouseEnter={() => handleMouseEnter(type.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`cursor-pointer ${type.hoverColorText}`}>
              {type.name}
            </div>
            {hoveredType === type.name && (
              <div className="z-20 bg-white shadow-xl overflow-hidden border rounded-3xl">
                {levels.map((level) => (
                  <div
                    key={level.code}
                    onClick={() =>
                      goTo(
                        `/tests?type=${type.name.toLowerCase()}&level=${level.code.toLowerCase()}`
                      )
                    }
                    className={`flex px-8 py-6 whitespace-nowrap items-center group text-[#838383] ${type.hoverColorText} transition-colors hover:bg-[#f6f6f6]`}
                  >
                    <div className="w-10 h-10 bg-[transparent]">
                      <type.icon
                        className={`svg-icon w-10 h-10 ${type.colorText}`}
                      />
                    </div>
                    <div className="ml-6">{level.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MobileNav;
