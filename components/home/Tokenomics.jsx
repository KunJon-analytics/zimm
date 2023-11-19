"use client";

import Image from "next/image";
import { PieChart } from "react-minimal-pie-chart";

import { tokenomicsCategory } from "@/data/tokenomics";
import Category from "./Category";

const Tokenomics = () => {
  return (
    <>
      {/* 
			=============================================
			Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative" id="tokenomics">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9 wow fadeInLeft">
              <p className="blog-pubish-date">
                Empowering Change, One Transaction at a Time
              </p>
              <h2 className="blog-heading-one tx-dark">
                Understanding HopeHaven Tokenomics
              </h2>
            </div>
          </div>
        </div>
        {/* /.container */}

        <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          width={208}
          height={135}
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-details-one mt-80 lg-mt-60">
        <div className="container">
          <div className="border-bottom">
            <div className="row gx-xl-5">
              <div className="col-lg-6">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <article className="blog-details-content">
                    <PieChart
                      data={tokenomicsCategory}
                      style={{ height: "400", width: "400" }}
                    />
                    ;
                  </article>
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-6 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <Category />
                  </div>
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
