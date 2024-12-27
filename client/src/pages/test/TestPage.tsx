import { useParams } from "react-router-dom";
import Test from "../../components/test/Test";
import { useTest } from "../../hooks/useTest";

function TestPage() {
  const { testId } = useParams();
  const { test, loading, error } = useTest(Number(testId));

  return <Test loading={loading} error={error} test={test} />;
}

export default TestPage;
