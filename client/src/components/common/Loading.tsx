import withDynamicHeight from "../hoc/withDynamicHeight";

function Loading() {
  return (
    <div className="flex w-full h-full space-x-2 justify-center items-center dark:invert">
      <div className="h-4 w-4 bg-[#fff] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-[#fff] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-[#fff] rounded-full animate-bounce"></div>
    </div>
  );
}

export default withDynamicHeight(Loading);
