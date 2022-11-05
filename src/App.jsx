import QR from "./images/image-qr-code.png";

export default () => {
  return (
    <>
      <div className="bg-white max-w-[315px] w-full h-auto p-[15px] rounded-[20px] text-center shadow-xl">
        <div className="w-full h-[300px] overflow-hidden rounded-[10px]">
          <img
            src={QR}
            alt="qr-code"
            draggable="false"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-[25px] px-[10px]">
          <h1 className="text-[22px] font-outfit text-darkBlue mb-5 font-bold">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-base font-outfit text-grayishBlue font-normal">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 text-center font-outfit opacity-60">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="font-semibold"> Frontend Mentor </a>
        . Coded by <a href="https://github.com/morphiezy" className="font-semibold">Yardan</a>.
      </div>
    </>
  );
};
