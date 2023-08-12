import DrImage from "../assets/DrImage.png";

const welcomeSlide = () => {
  return (
    <>
      <div className="relative w-full h-80">
        <div className="absolute inset-0 flex w-full h-full flex-col justify-center items-center gap-3 text-[#444444]">
          <h1 className="font-extrabold text-6xl lg:text-7xl">Welcome</h1>
          <p className="font-thin text-xl lg:text-3xl">Check your doctors availability</p>
          <div className="lg:hidden">
          <img src={DrImage} alt="" className="h-[200px]" />
        </div>
        </div>
        <div className="relative  hidden lg:flex top-10 h-full justify-center ml-[600px]">
          <img src={DrImage} alt="" className="h-[500px]" />
        </div>
        
      </div>
    </>
  );
};

export default welcomeSlide;
