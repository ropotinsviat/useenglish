import { useState, useMemo } from "react";
import { ITest } from "../types/test";
import { saveScore } from "../utils/scoreUtils";
import {
  countCorrectOptionsAndSelections,
  calculateScore,
} from "../utils/testCalculations";
import { useSelectedOptions } from "./useSelectedOptions";

export function useTestLogic(test: ITest | null) {
  const { selectedOptions, selectOption } = useSelectedOptions(test);
  const [testFinished, setTestFinished] = useState(false);

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
  }, [testFinished, selectedOptions, test]);

  function handleFinishTest(toScrollRef: React.RefObject<HTMLDivElement>) {
    toScrollRef.current?.scrollIntoView({ behavior: "smooth" });
    setTestFinished(true);
  }

  return {
    testFinished,
    selectedOptions,
    selectOption,
    selectedCorrectCount,
    correctOptionCount,
    handleFinishTest,
  };
}
