import { getFeedbackResponse } from "../../../utils/getFeedbackResponse";
import { calculateScore } from "../../../utils/testCalculations";

interface FeedbackProps {
  selectedCorrectCount: number;
  correctOptionCount: number;
}

function Feedback({ selectedCorrectCount, correctOptionCount }: FeedbackProps) {
  const score = calculateScore(correctOptionCount, selectedCorrectCount);

  const { feedbackMessage, feedbackColor } = getFeedbackResponse(score);

  return (
    <div className="my-10 flex flex-col gap-5">
      <div className={`text-3xl font-semibold ${feedbackColor}`}>
        {feedbackMessage}
      </div>
      <div className="text-2xl text-[#222]">
        Score: {selectedCorrectCount}/{correctOptionCount} ({score}%)
      </div>
      <div className="text-xl text-[#444]">Check your answers:</div>
    </div>
  );
}

export default Feedback;
