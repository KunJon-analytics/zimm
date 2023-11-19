import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="title-style-eleven">
        <div className="sc-title">ABOUT US</div>
        <h2 className="main-title tx-dark">
          Fostering Hope <br /> Through Compassionate Action.
        </h2>
      </div>
      <div className="d-flex mt-70 mb-40 lg-mt-40 lg-mb-10">
        <Image
          src="/images/shape/shape_164.svg"
          alt=""
          className="lazy-img d-none d-lg-block"
          width={122}
          height={110}
        />
        <p className="text-lg m0 ps-lg-5">
          We&apos;re dedicated to instilling hope in Gaza&apos;s adversity. Join
          us in crafting a brighter future
        </p>
      </div>
    </>
  );
};

export default Intro;
