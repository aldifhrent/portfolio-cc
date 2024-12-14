export default function AboutMe() {
  return (
    <section className="py-[60px] px-6 lg:px-[112px] w-screen mx-auto mt-20">
      <div className="flex flex-col xl:flex-row gap-[80.55px]">
        <img src="./about-me.svg" className="max-w-[600px]" />
        <div className="flex flex-col space-y-5 ">
          <h1 className="text-[28px] md:text-5xl">
            About <span className="font-bold">Me</span>
          </h1>
          <p className="text-base md:text-lg">
            I'm a passionate, self-proclaimed designer w ho specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="text-base lg:text-lg">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="text-base lg:text-lg">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}
