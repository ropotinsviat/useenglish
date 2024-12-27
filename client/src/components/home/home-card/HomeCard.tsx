import imagePath from "../../../assets/img/home.jpg";

function HomeCard() {
  return (
    <div
      className={`relative bg-cover bg-center w-full overflow-hidden
                relative flex flex-col justify-center gap-4 px-5
                   h-[calc(100vh-80px)]
                sm:h-[calc(100vh-100px)]
                lg:h-[calc(100vh-100px)]
                xl:h-[calc(100vh-112px)]`}
    >
      <div
        className="absolute inset-0 z-0  m-[-15px] blur-[7px] bg-cover"
        style={{ backgroundImage: `url(${imagePath})` }}
      />
      <div className="absolute inset-0 z-0 bg-cover bg-[rgb(0,0,0,0.6)]" />

      <div className="relative text-white sm:text-center text-3xl md:text-4xl font-bold uppercase">
        Practice tests
      </div>
      <div className="relative text-[#F7F7FF] sm:text-center text-xl text-[#565264] font-semibold">
        Discover your proficiency level, improve your skills, and achieve your
        language goals.
      </div>
    </div>
  );
}

export default HomeCard;
