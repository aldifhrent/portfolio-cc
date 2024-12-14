import { ITestimonialCard } from "@/types/types";
import TestimonialAvatar from "./testimonial.avatar";

export const TestimonialCard = (props: ITestimonialCard) => {
  return (
    <div className="w-[370px] h-[398px] p-10 border-2 border-zinc-300 rounded-lg shadow-xl group hover:bg-black hover:border-white transition-colors duration-300">
      <div className="flex flex-col items-center justify-center">
        <TestimonialAvatar image={props.image} />
        <p className="mt-6 text-center text-black group-hover:text-white transition-colors duration-300">
          {props.text}
        </p>
        <hr className="w-[120px] border-2 border-black mt-6 group-hover:border-white transition-colors duration-300" />
        <h2 className="mt-2 font-bold text-[20px] text-black group-hover:text-white transition-colors duration-300">
          {props.name}
        </h2>
        <h3 className="mt-2 font-bold text-zinc-500 group-hover:text-white transition-colors duration-300">
          {props.role}
        </h3>
      </div>
    </div>
  );
};
