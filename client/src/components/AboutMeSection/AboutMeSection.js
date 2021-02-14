import React, { useRef, useEffect } from "react";
import "./css/aboutMeSection.css";
import img1 from "./assets/img1.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutMeSection() {
  const profilePicRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.from(profilePicRef.current, {
      autoAlpha: 0,
      xPercent: -100,
      ease: "slow",
      rotation: -360,
      duration: 1.2,
      scrollTrigger: {
        trigger: profilePicRef.current,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(paragraphRef.current, {
      autoAlpha: 0,
      yPercent: 5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: paragraphRef.current,
        scrub: 1,
      },
    });

    // const t2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: paragraphRef.current,
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    // t2.from(paragraphRef.current, {
    //   autoAlpha: 0,
    //   yPercent: 100,
    //   ease: "power3.out",
    // });
    // ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <div className="aboutMe">
        <div className="image">
          <img ref={profilePicRef} className="profilePic" src={img1} alt="" />
          {console.log(paragraphRef)}
        </div>
        <h2 className="heading"> About Me </h2>
        <p ref={paragraphRef} className="paragraph">
          A level-headed software engineer with a knack for conquering the
          unknown with a positive and childlike optimism. I'm proficient in the
          MERN stack in addition too Ruby, Git, Vscode, Heroku, OOP JavaScript,
          CSS, HTML aswell as basic algorithms, data structures and industry
          best practices. Outside of full-stack development I enjoy spending my
          time at the gym practicing Brazilian Jiu Jitsu as I have been for the
          past 6 years and learning business strategies that could one day help
          me build my own. I've dabbled in the Amazon Marketplace as well as
          drop shipping and wholesale using Shopify as my ecommerce platform and
          Facebook and Google ads for my marketing. These are just a few things
          that have piqued my interest in the past few years and I hope to
          continue to venture the unknown in search of novelty and my expansion
          of knowledge to guide me into a bigger better and brighter future.
        </p>
      </div>
    </>
  );
}

export default AboutMeSection;
