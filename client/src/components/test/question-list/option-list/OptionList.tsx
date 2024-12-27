import { IOption } from "../../../../types/option";

interface OptionListProps {
  options: IOption[];
  testFinished: boolean;
  selectedOption: number[];
  onSelect: (optionId: number) => void;
}

function OptionList({
  options,
  selectedOption,
  testFinished,
  onSelect,
}: OptionListProps) {
  return (
    <div className="flex flex-col gap-5 ml-1 md:ml-[30px]">
      {options.map((option, idx) => (
        <div
          key={option.id}
          className={`flex w-fit text-lg 
            ${testFinished || "cursor-pointer"} text-lg text-[#444] rounded-2xl
            ${
              testFinished &&
              (option.correct
                ? selectedOption.includes(option.id)
                  ? " border-[3px] border-[green] font-semibold text-[green] bg-[#ECF5F0] px-5 py-3 "
                  : " text-[green] "
                : selectedOption.includes(option.id) &&
                  " border-[3px] border-[red] font-semibold text-[red] bg-[#FDEBEB] px-5 py-3 ")
            }`}
          onClick={() => onSelect(option.id)}
        >
          <div
            className={`flex gap-5 text-lg rounded-2xl transition-colors 
              ${testFinished || "ml-2 pr-5 md:pl-5 py-3"}`}
          >
            {String.fromCharCode(97 + idx)})
          </div>
          <div
            className={`flex gap-5 text-lg rounded-md transition-colors ml-2
              ${
                testFinished ||
                (selectedOption.includes(option.id)
                  ? " px-5 py-3 border-[2px] border-[#222] font-semibold text-[#222]"
                  : " px-5 py-3 border-[1px] border-[#444]")
              }`}
          >
            {option.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OptionList;
