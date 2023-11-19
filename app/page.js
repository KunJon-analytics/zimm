import Image from "next/image";

import Header from "@/components/header/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Timeline from "@/components/home/Timeline";
import IntroAction from "@/components/home/IntroAction";
import IntroVideo from "@/components/home/IntroVideo";
import Counter from "@/components/home/Counter";
import BrandSlider from "@/components/home/BrandSlider";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/footer";
import Tokenomics from "@/components/home/Tokenomics";

const charity = () => {
  return (
    <div className="pattern-bg-one">
      {/* <!--  =============================================
        Theme Header Menu
        ============================================== 	--> */}
      <Header />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />

      {/* 
        =============================================
        Feature Section Fourteen
        ============================================== 
        */}
      <div className="fancy-feature-fourteen position-relative">
        <div className="container">
          <div className="row">
            <Features />
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Feature Section Fifteen
        ============================================== 
        */}
      <div className="fancy-feature-fifteen  mt-140 lg-mt-70">
        <Image
          src="/images/shape/shape_76.svg"
          alt="shape"
          width={163}
          height={233}
          className="lazy-img shapes shape-one"
        />
        <div className="container">
          <IntroAction />
          <IntroVideo />
          <Counter />
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Timeline Section Fourteen
        ============================================== 
        */}
      <div className="container mt-40">
        <div className="row">
          <Timeline />
        </div>
      </div>

      <Tokenomics />

      {/* 
			=============================================
				Partner Section Three
			============================================== 
			*/}
      <div className="partner-section-three position-relative pt-170 lg-pt-100">
        <div className="container">
          <div className="title tx-dark text-uppercase text-center mb-55 lg-mb-30">
            Over <span>200+</span> partner currently have us
          </div>
          <div className="partner_slider_one row">
            <BrandSlider />
          </div>
        </div>
        {/* /.container */}
      </div>

      {/*
			=====================================================
				CalltoActions Banner Seven
			=====================================================
			*/}
      <CallToAction />

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <Footer />
    </div>
    // End page wrapper
  );
};

export default charity;
