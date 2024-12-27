import { useState, useEffect } from "react";
import { useAsync } from "./useAsync";
import { fetchTests } from "../api/testService";
import { ITestSummary } from "../types/test";
import { changeSelectedColorByType } from "../utils/styleUtils";
import { getScores } from "../utils/scoreUtils";

export function useTestList(level: string, type: string) {
  const [tests, setTests] = useState<ITestSummary[]>([]);

  const { loading, error, execute } = useAsync(async () => {
    const tests = await fetchTests(level, type);

    const scores = getScores();

    const testsWithScores = tests.map((test) => {
      const score = scores[test.id];
      if (score === undefined) return test;
      return { ...test, score };
    });

    setTests(testsWithScores);
  });

  useEffect(() => {
    changeSelectedColorByType(type);
  }, [type]);

  useEffect(() => {
    execute();
  }, [level, type]);

  return { tests, loading, error };
}
