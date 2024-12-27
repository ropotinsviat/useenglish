import { useMemo, useRef, useState } from "react";
import Title from "../../components/common/Title";
import Media from "./media/Media";
import QuestionList from "./question-list/QuestionList";
import { useSelectedOptions } from "../../hooks/useSelectedOptions";
import Button from "../common/Button";
import Feedback from "./feedback/Feedback";
import {
  calculateScore,
  countCorrectOptionsAndSelections,
} from "../../utils/testCalculations";
import { ITest } from "../../types/test";
import withLoadingAndError from "../hoc/withLoadingAndError";
import { saveScore } from "../../utils/scoreUtils";

interface TestProps {
  test: ITest | null;
}

function Test({ test }: TestProps) {
  const { selectedOptions, selectOption } = useSelectedOptions(test);
  const [testFinished, setTestFinished] = useState(false);
  const toScrollRef = useRef<HTMLDivElement | null>(null);

  function handleSelectOption(...args: Parameters<typeof selectOption>) {
    if (!testFinished) selectOption(...args);
  }

  const { selectedCorrectCount, correctOptionCount } = useMemo(() => {
    const result = countCorrectOptionsAndSelections(
      selectedOptions,
      test?.questions || []
    );

    if (testFinished)
      saveScore(
        Number(test?.id),
        calculateScore(result.correctOptionCount, result.selectedCorrectCount)
      );

    return result;
  }, [testFinished]);

  function handleFinishTest() {
    toScrollRef.current?.scrollIntoView({ behavior: "smooth" });
    setTestFinished(true);
  }

  return (
    <div className="mb-[150px]">
      <Title>{test?.title}</Title>
      <div className=" ">
        <div className="mx-auto w-full max-w-[1000px] bg-white md:rounded-xl px-4 md:px-10 py-8">
          <div className="text-lg font-semibold text-[#222]">
            {test?.description}
          </div>
          <div className="my-8">
            {test?.media && <Media media={test.media} />}
          </div>
          <div ref={toScrollRef}>
            {testFinished && (
              <Feedback
                selectedCorrectCount={selectedCorrectCount}
                correctOptionCount={correctOptionCount}
              />
            )}
          </div>
          {test?.questions && (
            <QuestionList
              questions={test.questions}
              selectedOptions={selectedOptions}
              onOptionSelect={handleSelectOption}
              testFinished={testFinished}
            />
          )}
          {!testFinished && (
            <div className="mx-auto w-fit mt-10">
              <Button onClick={handleFinishTest}>Submit</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withLoadingAndError(Test);
