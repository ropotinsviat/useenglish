function Divider({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <div
      className={`lg:hidden border-[#aaa] mx-0 w-full h-[1px] border-t-[1px]
                  my-5 md:my-0 ${
                    horizontal ? "" : `md:w-[1px] md:h-full md:border-l-[1px]`
                  }`}
    />
  );
}

export default Divider;
