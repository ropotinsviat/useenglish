import Title from "../../components/common/Title";
import useQueryParams from "../../hooks/useQueryParams";
import { useTestList } from "../../hooks/useTestList";
import TestList from "../../components/test-list/TestList";

function TestSearchPage() {
  const { getParam } = useQueryParams();
  const level = getParam("level") || "";
  const type = getParam("type") || "";

  const { tests, loading, error } = useTestList(level, type);

  return (
    <>
      <Title>
        {type} {level}
      </Title>
      <TestList loading={loading} error={error} tests={tests} />
    </>
  );
}

export default TestSearchPage;
