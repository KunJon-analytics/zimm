import Image from "next/image";

import About from "@/components/about";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";
import Quote from "@/components/about/Quote";

const AboutUsPage = () => {
  return (
    <>
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header />

      {/* 
        =============================================
        Theme Inner Banner
        ============================================== 
        */}
      <div className="inner-banner-one text-center">
        <div className="container">
          <h2 className="title fw-500 tx-dark">About Us</h2>
        </div>
      </div>
      {/* /.inner-banner-one */}

      {/* 
        =============================================
        Feature Section Forty Six
        ============================================== 
        */}
      <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-20 pb-180 lg-pt-20 md-pb-130">
            <Quote />
            {/* /.quote-wrapper */}

            <div className="shapes shape-two" />

            <Image
              width={187}
              height={187}
              src="/images/assets/sticker_02.png"
              alt="sticker"
              className="lazy-img shapes shape-four"
            />
            <div className="shapes shape-five" />
            <div className="shapes shape-six" />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Forty Eight
        ============================================== 
        */}
      <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <About />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/*
        =====================================================
        Team Section Three
        =====================================================
        */}
      <div className="team-section-three position-relative pt-40 md-pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xxl-8 col-md-7 col-sm-9 m-auto"
              data-aos="fade-up"
            >
              <div className="title-style-five text-center pb-50 lg-pb-20">
                <h2 className="main-title fw-500 tx-dark">
                  Our mission: unite through compassion, build through
                  solidarity.
                </h2>
              </div>
              {/* /.title-style-five */}
            </div>
          </div>
          {/* /.row */}
        </div>
      </div>

      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <Footer />
    </>
  );
};

export default AboutUsPage;
