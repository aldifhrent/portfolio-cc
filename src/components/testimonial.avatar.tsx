import { TestimonialAvatarProps } from "@/types/types";

export default function TestimonialAvatar(props: TestimonialAvatarProps) {
  return (
    <div className="w-24 h-24 rounded-full border-2 border-black relative overflow-visible">
      {/* Gambar Avatar */}
      <img
        src={props.image}
        alt="Testimonial Avatar"
        className="w-full h-full object-cover rounded-full"
      />
      {/* Ikon Kutipan */}
      <div className="absolute bottom-0 right-[-5%] w-8 h-8 bg-black text-white text-lg font-bold flex items-center justify-center rounded-full mx-auto">
        ❝
      </div>
    </div>
  );
}
