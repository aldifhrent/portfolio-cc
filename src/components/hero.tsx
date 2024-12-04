const Hero = () => {
  return (
    <section className="p-3 sm:p-6 max-w-screen xl:max-w-[1440px] mx-auto">
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center gap-y-10">
        <div className="flex flex-col gap-10 p-6">
          <h1 className="text-5xl gap-4">
            Hi, I’am
            <span className="text-6xl font-extrabold"> Aldi Fahrizi</span>
          </h1>
          <h1 className="text-5xl">FullStack Developer</h1>
          <h1 className="text-5xl">
            Based In <span className="font-extrabold">Indonesia</span>
          </h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, ad iusto error eum delectus quos ipsum et provident
            veniam illum aspernatur dolorem! A commodi cupiditate ipsam totam
            deleniti. Tempore, inventore?
          </p>
          <button className="p-2 bg-[#202020] text-white max-w-[200px] h-12 rounded-lg ">
            Contact Me
          </button>
        </div>
        <div>
          <img
            src="./hero-img.svg"
            className="max-w-[580px] lg:max-w-screen-sm lg:max-h-[556px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
