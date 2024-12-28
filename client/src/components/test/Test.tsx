import { useRef } from "react";
import { useTestLogic } from "../../hooks/useTestLogic";
import Button from "../common/Button";
import Title from "../common/Title";
import Feedback from "./feedback/Feedback";
import Media from "./media/Media";
import QuestionList from "./question-list/QuestionList";
import { ITest } from "../../types/test";
import withLoadingAndError from "../hoc/withLoadingAndError";

interface TestProps {
  test: ITest | null;
}

function Test({ test }: TestProps) {
  const toScrollRef = useRef<HTMLDivElement | null>(null);
  const {
    testFinished,
    selectedOptions,
    selectOption,
    selectedCorrectCount,
    correctOptionCount,
    handleFinishTest,
  } = useTestLogic(test);

  return (
    <div className="mb-[150px]">
      <Title>{test?.title}</Title>
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
            onOptionSelect={(...args) => {
              if (!testFinished) selectOption(...args);
            }}
            testFinished={testFinished}
          />
        )}
        {!testFinished && (
          <div className="mx-auto w-fit mt-10">
            <Button onClick={() => handleFinishTest(toScrollRef)}>
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default withLoadingAndError(Test);
