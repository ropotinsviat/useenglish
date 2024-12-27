import { IQuestion } from "../types/question";

export function calculateScore(
  correctOptionCount: number,
  selectedCorrectCount: number
) {
  if (correctOptionCount === 0) return 0;

  const score = (selectedCorrectCount / correctOptionCount) * 100;

  return Math.round(score);
}

export function countCorrectOptionsAndSelections(
  selectedOptions: number[][],
  questions: IQuestion[]
): { correctOptionCount: number; selectedCorrectCount: number } {
  let correctOptionCount = 0;
  let selectedCorrectCount = 0;

  questions.forEach((question, index) => {
    const correctOptions = question.options.filter((option) => option.correct);
    correctOptionCount += correctOptions.length;

    const selectedOptionIds = selectedOptions[index] || [];

    selectedCorrectCount += correctOptions.filter((option) =>
      selectedOptionIds.includes(option.id)
    ).length;
  });

  return { correctOptionCount, selectedCorrectCount };
}
