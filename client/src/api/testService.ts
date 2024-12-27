import { ITest, ITestSummary } from "../types/test";
import api from "./api";

export async function fetchTests(
  level?: string,
  type?: string
): Promise<ITestSummary[]> {
  const { data } = await api.get<ITestSummary[]>("/tests", {
    params: { level, type },
  });
  return data;
}

export async function fetchOneTest(id: number): Promise<ITest> {
  const { data } = await api.get<ITest>(`/tests/${id}`);
  return data;
}
