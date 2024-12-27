import { Link } from "react-router-dom";
import { ITestSummary } from "../../../types/test";
import { getFeedbackResponse } from "../../../utils/getFeedbackResponse";

interface TestCardProps {
  test: ITestSummary;
}

function TestCard({ test }: TestCardProps) {
  const { feedbackBg } = getFeedbackResponse(Number(test?.score));

  return (
    <Link
      to={`/tests/${test.id}`}
      className="hover-selected-text selected-bottom-border border-b-[6px] 
                cursor-pointer bg-white w-full max-w-[1100px] lg:h-[300px] 
                flex flex-col lg:flex-row items-end rounded-tr-2xl rounded-bl-2xl 
                overflow-hidden relative"
    >
      {Number.isInteger(test.score) && (
        <div
          className={`absolute top-0 left-0 px-6 py-3   rounded-br-xl  
                    text-[#222] text-lg font-semibold text-white ${feedbackBg}`}
        >
          {test.score}%
        </div>
      )}
      <div className="overflow-hidden h-[300px] w-full lg:w-[400px] min-h-[300px] min-w-[400px]">
        <img className="w-full h-full object-cover" src={test.picture} />
      </div>
      <div className="w-[95%] lg:h-[80%] mt-[-40px] lg:mt-0 lg:ml-[-40px] bg-white px-8 py-6 rounded-tl-2xl">
        <div className="text-3xl font-semibold transition-colors">
          {test.title}
        </div>
        <div className="mt-3 text-xl text-[#636363]">{test.description}</div>
      </div>
    </Link>
  );
}

export default TestCard;
