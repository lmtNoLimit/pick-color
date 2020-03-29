import React from "react";
import { Row, Col } from "antd";
import IntroImage from "assets/images/intro.svg";

const Jumbotron = () => {
  return (
    <Row>
      <Col span={12}>
        <img src={IntroImage} alt='Intro' className='w-10/12' />
      </Col>
      <Col span={12}>
        <p className='jumbotron__p-font mt-32 uppercase font-black text-5xl break-normal'>
          You haven't found your favorite{" "}
          <span className='text-orange-700'>color?</span>
        </p>
        <button className='mt-5 py-3 px-20 text-3xl font-semibold text-white rounded-full bg-orange-700 border-none'>
          See more
        </button>
      </Col>
    </Row>
  );
};

export default Jumbotron;
