import { testimonialsData } from "../const/const";
import { TestimonialCard } from "./testimonial.card";
import Marquee from "../components/ui/marquee";

export default function Testimonials() {
  return (
    <section className="py-[60px] px-6 lg:px-[112px] max-w-screen xl:max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl">
          My <span className="font-bold">Testimonial</span>
        </h1>

        <div className="relative flex mt-[60px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {testimonialsData.map((item, index) => (
              <TestimonialCard
                key={index}
                image={item.image}
                text={item.text}
                name={item.name}
                role={item.role}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
