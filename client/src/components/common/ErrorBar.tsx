import { Link } from "react-router-dom";
import withDynamicHeight from "../hoc/withDynamicHeight";

interface ErrorBarProps {
  error: string;
}

function ErrorBar({ error }: ErrorBarProps) {
  return (
    <div className="h-full w-full px-4 flex items-center justify-center">
      <div
        className="w-full max-w-[700px] text-center
             border-[5px] border-[#AA0022] bg-[#fff] rounded-lg
             py-[30px] flex flex-col gap-y-4 px-2"
      >
        <div className="text-3xl text-[#AA0022] font-bold">Error!</div>
        <div className="text-3xl text-[#555] font-semibold">{error}</div>
        <div className="text-md text-[#555]">
          If you face a persistent issue please contact{" "}
          <Link to="/contact">
            <b className="cursor-pointer text-[#111]">me</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withDynamicHeight(ErrorBar);
