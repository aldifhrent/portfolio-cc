export default function ExperienceCard() {
  return (
    <div className="px-2 py-[30px] border-[1px] min-w-[400px] max-h-[600px] rounded-lg">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-y-[30px]">
          <div className="flex items-center gap-[30px]">
            <img src="./google.svg" className="w-8 h-8" alt="Google Logo" />
            <h1 className="text-lg text-white lg:text-2xl text-nowrap">
              Lead Software Engineer at Google
            </h1>
          </div>

          {/* Tanggal */}
          <p className="text-white ">Nov 2019 - Present</p>
        </div>

        {/* Deskripsi */}
        <p className="text-white text-lg mt-7">
          As a Senior Software Engineer at Google, I played a pivotal role in
          developing innovative solutions for Google's core search algorithms.
          Collaborating with a dynamic team of engineers, I contributed to the
          enhancement of search accuracy and efficiency, optimizing user
          experiences for millions of users worldwide.
        </p>
      </div>
    </div>
  );
}
