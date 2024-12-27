import { IQuestion } from "../../../types/question";
import Explanation from "./explanation/Explanation";
import OptionList from "./option-list/OptionList";

interface QuestionListProps {
  questions: IQuestion[];
  testFinished: boolean;
  selectedOptions: (number[] | null)[];
  onOptionSelect: (questionIndex: number, optionId: number) => void;
}

function QuestionList({
  questions,
  testFinished,
  selectedOptions,
  onOptionSelect,
}: QuestionListProps) {
  return (
    <div className="flex flex-col gap-14">
      {questions.map((question, idx) => (
        <div key={question.id}>
          <div className="flex items-center gap-5 text-xl mb-5">
            <div className="selected-bg flex text-white items-center justify-center w-8 h-8 md:w-11 md:h-11 rounded-full font-semibold">
              {idx + 1}
            </div>
            <div>
              {question.content}
              {question.options.filter((o) => o.correct).length > 1 && (
                <div className="font-bold inline">
                  {" "}
                  (Pick {question.options.filter((o) => o.correct).length}{" "}
                  options)
                </div>
              )}
            </div>
          </div>
          <OptionList
            options={question.options}
            selectedOption={selectedOptions[idx] || []}
            testFinished={testFinished}
            onSelect={(optionId: number) => onOptionSelect(idx, optionId)}
          />

          {testFinished && (
            <>
              {!selectedOptions[idx]?.length && (
                <div className="text-lg text-[#444] border-[3px] border-[red] w-fit my-4  rounded-2xl font-semibold text-[red] bg-[#FDEBEB] px-5 py-3">
                  Not answered
                </div>
              )}
              <Explanation explanation={question.explanation} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
