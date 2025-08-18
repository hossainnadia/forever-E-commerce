import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[400px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At [Brand Name], we believe clothing should do more than just cover
            — it should speak. Our collection blends timeless design with modern
            comfort, made to fit your everyday lifestyle. Whether you're
            dressing up for a night out or keeping it casual at home, each piece
            is crafted with care, designed to make you feel confident,
            comfortable, and effortlessly stylish. Because your clothes should
            reflect who you truly are.
          </p>
          <p>
            Bold, free, and unapologetically original — our streetwear
            collection is made for those who walk their own path. Inspired by
            urban culture and the rhythm of the streets, each piece brings
            attitude, comfort, and statement in one. This isn’t just fashion;
            its a lifestyle.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to amplify the voices of the new generation by
            creating bold, expressive streetwear that challenges the norm and
            celebrates individuality.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We are committed to designing responsibly and producing ethically.
            Our mission is to minimize environmental impact while maximizing
            style and quality.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We are committed to designing responsibly and producing ethically.
            Our mission is to minimize environmental impact while maximizing
            style and quality.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exectional Customer service:</b>
          <p className="text-gray-600">
            We are committed to designing responsibly and producing ethically.
            Our mission is to minimize environmental impact while maximizing
            style and quality.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
