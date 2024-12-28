interface SectionProps {
  title: string;
  items: {}[];
  handleClick: (link: string) => void;
}

function Section({ title, items, handleClick }: SectionProps) {
  return (
    <div
      className="lg:pt-6 lg:pl-[25px] h-full w-max text-center flex-1 
                lg:text-left lg:border-l-[1px] lg:flex-none border-[#aaa]"
    >
      <div>{title}</div>
      <div>
        {items.map((item: any) => (
          <div
            key={item.key || item.path || item.name || item.code}
            onClick={() => handleClick(item)}
            className="text-[#aaa] cursor-pointer text-[#aaa] hover:text-[#FFF6E8]"
          >
            {item.label || item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
