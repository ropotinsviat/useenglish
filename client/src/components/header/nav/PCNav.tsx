import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { levels, types } from "../../../constants/testEnums";

function PCNav() {
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (typeName: string) => setHoveredType(typeName);
  const handleMouseLeave = () => setHoveredType(null);

  const goTo = (url: string) => {
    handleMouseLeave();
    navigate(url);
  };

  return (
    <nav
      className="hidden xl:flex cursor-pointer gap-[60px] text-[#575757] font-semibold relative"
      onMouseLeave={handleMouseLeave}
    >
      {types.map((type) => (
        <div
          key={type.name}
          className="relative text-2xl transition-colors px-6 py-10"
          onMouseEnter={() => handleMouseEnter(type.name)}
        >
          <div className={`cursor-pointer ${type.hoverColorText}`}>
            {type.name}
          </div>
          {hoveredType === type.name && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl overflow-hidden border rounded-3xl">
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
    </nav>
  );
}

export default PCNav;
