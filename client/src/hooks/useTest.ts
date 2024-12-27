import { useEffect, useState } from "react";
import { useAsync } from "./useAsync";
import { fetchOneTest } from "../api/testService";
import { ITest } from "../types/test";
import { changeSelectedColorByType } from "../utils/styleUtils";

export function useTest(testId: number | string) {
  const [test, setTest] = useState<ITest | null>(null);

  const { loading, error, execute } = useAsync(async () => {
    const res = await fetchOneTest(Number(testId));
    changeSelectedColorByType(res.type);
    setTest(res);
  });

  useEffect(() => {
    execute();
  }, [testId]);

  return { test, loading, error };
}
