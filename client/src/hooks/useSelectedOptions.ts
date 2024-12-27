import { useEffect, useState } from "react";
import { ITest } from "../types/test";

export function useSelectedOptions(test: ITest | null) {
  const [selectedOptions, setSelectedOptions] = useState<number[][]>([]);

  useEffect(() => {
    setSelectedOptions(Array(test?.questions.length).fill(null));
  }, [test]);

  function selectOption(questionIndex: number, optionId: number) {
    setSelectedOptions((prev) =>
      prev.map((opts, idx) => {
        if (idx === questionIndex) {
          const currentOpts = opts || [];
          const maxSelections =
            test?.questions[questionIndex].options.filter((o) => o.correct)
              .length || 0;

          if (currentOpts.includes(optionId))
            return currentOpts.filter((id) => id !== optionId);

          if (currentOpts.length < maxSelections) {
            return [...currentOpts, optionId];
          } else {
            return [...currentOpts.slice(1), optionId];
          }
        }
        return opts;
      })
    );
  }

  return { selectedOptions, selectOption };
}
