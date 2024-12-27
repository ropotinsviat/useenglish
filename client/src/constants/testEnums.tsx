import { ReactComponent as WritingIcon } from "../assets/svg/pen-line-svgrepo-com.svg";
import { ReactComponent as ListeningIcon } from "../assets/svg/headphones-svgrepo-com.svg";
import { ReactComponent as ReadingIcon } from "../assets/svg/notebook-minimalistic-svgrepo-com.svg";

export const types = [
  {
    name: "Listening",
    icon: ListeningIcon,

    colorText: "text-[#2274A5]",
    hoverColorText: "hover:text-[#2274A5]",

    slogan:
      "Increase your listening comprehensive skills watching a video or listening to an audio",
  },
  {
    name: "Reading",
    icon: ReadingIcon,

    colorText: "text-[#CB4154]",
    hoverColorText: "hover:text-[#CB4154]",

    slogan: "Test your vocabulary and context understanding reading a text",
  },
  {
    name: "Writing",
    icon: WritingIcon,

    colorText: "text-[#20652A]",
    hoverColorText: "hover:text-[#20652A]",

    slogan:
      "Challenge your grammar knowledge answering short topic-related questions",
  },
];

export const levels = [
  { code: "A1", name: "Elementary" },
  { code: "A2", name: "Pre-Intermediate" },
  { code: "B1", name: "Intermediate" },
  { code: "B2", name: "Upper-Intermediate" },
];
