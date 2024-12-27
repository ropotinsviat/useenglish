interface ExplanationProps {
  explanation: string;
}

function Explanation({ explanation }: ExplanationProps) {
  return (
    <div className="px-8 py-5 bg-[#f3f3f3] border-[2px] border-[#555] rounded-md shadow-lg mt-4">
      <div className="text-2xl text-[#444]">Explanation</div>
      <div className="text-xl text-[#555] mt-3">{explanation}</div>
    </div>
  );
}

export default Explanation;
