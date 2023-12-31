import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-banner-five text-center position-relative">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-10 m-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <h1 className="hero-heading text-white mb-50 md-mb-30">
              Join
              <span className="position-relative">
                {" "}
                Us
                <Image
                  src="/images/shape/shape_71.svg"
                  alt="shape"
                  width={254}
                  height={106}
                />
              </span>
              <br /> in Building Hope
            </h1>
          </div>
        </div>
        {/* End .row */}

        <Link
          href="/"
          className="donate-btn fw-500 tran3s"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          Donate now
        </Link>
      </div>
      {/* /.container */}
    </div>
  );
};

export default Hero;
