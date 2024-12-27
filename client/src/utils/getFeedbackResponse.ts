import { feedbackResponses } from "../constants/feedbackResponses";

export function getFeedbackResponse(score: number) {
  const feedback = feedbackResponses.find((data) => score >= data.minScore);

  if (!feedback) {
    return {
      feedbackMessage: "No feedback available",
      feedbackColor: "text-gray-600",
      feedbackBg: "bg-gray-600",
    };
  }

  return {
    feedbackMessage: feedback.feedbackMessage,
    feedbackColor: feedback.feedbackColor,
    feedbackBg: feedback.feedbackBg,
  };
}
