export default function Contact() {
  return (
    <section className="mt-[60px] lg:px-[112px] max-w-screen min-h-fit mx-auto ">
      <div className="flex flex-col lg:flex-row  gap-[108px] mx-auto p-12 items-start xl:items-center">
        <div className="flex flex-col gap-5 px-4">
          <input
            type="text"
            className="bg-none w-[500px] h-14 border-2 border-black rounded-lg px-6 py-[18px] min-w-screen"
            placeholder="Your name"
          />
          <input
            type="text"
            className="bg-none w-[500px] h-14 border-2 border-black rounded-lg px-6 py-[18px] max-w-[500px]"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-none w-[500px] h-14 border-2 border-black rounded-lg px-6 py-[18px] max-w-[500px]"
            placeholder="Your website (If exists)"
          />
          <textarea
            placeholder="How can i help?*"
            className="bg-none min-w-[500px] h-14 border-2 border-black rounded-lg px-6 py-[18px]  overflow-y-hidden"
          />
          <div className="flex gap-6 justify-center md:justify-start ">
            <button className="px-5 py-4 bg-black text-white rounded-lg w-[173px] h-[56px] font-bold">
              Get In Touch
            </button>
            <button className="btn-socialmedia">
              <img src="./fb-social.svg" width={20} height={20} />
            </button>
            <button className="btn-socialmedia-outline">
              <img src="./reddit-social.svg" />
            </button>
            <button className="btn-socialmedia-outline ">
              <img src="./reddit-social.svg" />
            </button>
            <button className="btn-socialmedia-outline">
              <img src="./reddit-social.svg" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-12 lg:p-0">
          <h1 className="text-6xl leading-[56px] tracking-[-2%]">
            Let's <span className="text-outline-black">talk</span> for Something
            special
          </h1>
          <p>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <h2 className="text-[28px] font-bold">aldifahr@gmail.com</h2>
          <h2 className="text-[28px] font-bold">+628881882812</h2>
        </div>
      </div>
    </section>
  );
}
