export function getScores(): Record<number, number> {
  return JSON.parse(localStorage.getItem("scores") || "{}");
}

export function saveScore(testId: number, score: number): void {
  const scores = getScores();

  if (!scores[testId] || score > scores[testId]) scores[testId] = score;

  localStorage.setItem("scores", JSON.stringify(scores));
}
