import { ITestSummary } from "../../types/test";
import withLoadingAndError from "../hoc/withLoadingAndError";
import TestCard from "./test-card/TestCard";

interface TestListProps {
  tests: ITestSummary[];
}

function TestList({ tests }: TestListProps) {
  return (
    <div className="px-[15px] flex flex-col items-center gap-10 mb-[200px]">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
}

export default withLoadingAndError(TestList);
