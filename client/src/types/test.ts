import { IMedia } from "./media";
import { IQuestion } from "./question";

export interface ITestSummary {
  id: number;
  title: string;
  picture: string;
  description: string;
  level: "a1" | "a2" | "b1" | "b2";
  type: "listening" | "writing" | "reading";
  score?: number;
}

export interface ITest extends ITestSummary {
  questions: IQuestion[];
  media?: IMedia;
}
