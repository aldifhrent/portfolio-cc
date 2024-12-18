const Hero = () => {
  return (
    <section className="w-screen mt-20">
      <div className="container">
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center gap-y-10">
        <div className="flex flex-col gap-5 lg:gap-10 p-2">
          <h1 className="text-[28px] sm:text-5xl md:text-6xl">
            Hi, I’am
            <span className="text-[28px] sm:text-5xl md:text-6xl font-extrabold">
              {" "}
              Aldi Fahrizi{" "}
            </span>
          </h1>
          <h1 className="flex gap-4 text-[28px] sm:text-5xl md:text-6xl text-nowrap">
            <span className="font-extrabold">FullStack</span>
            <span className="text-outline-black">Web Developer</span>
          </h1>

          <h1 className="text-[28px] sm:text-5xl md:text-6xl">
            Based In <span className="font-extrabold">Indonesia</span>
          </h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, ad iusto error eum delectus quos ipsum et provident
            veniam illum aspernatur dolorem! A commodi cupiditate ipsam totam
            deleniti. Tempore, inventore?
          </p>
          <button className="p-2 bg-[#202020] text-white max-w-[200px] h-12 rounded-lg text-xl ">
            Contact Me
          </button>
        </div>
        <div>
          <img
            src="./hero-img.svg"
            className="min-w-[500px]"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
