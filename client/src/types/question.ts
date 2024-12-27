import { IOption } from "./option";

export interface IQuestion {
  id: number;
  content: string;
  options: IOption[];
  explanation: string;
}
