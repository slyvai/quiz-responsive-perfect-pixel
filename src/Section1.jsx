import { use, useEffect } from "react";
import Video from "./assets/phone_video/phone_video.mp4"
import gsap from "gsap";
import "./Section1.css"
function Section1 () {
  return (
    useEffect(() => {
      gsap.fromTo(".section1-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(".video", { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 0.5, duration: 1 });
    }, []),
    <>
    <div className="section1">
      <div className="section1-text">
        <h1>iPhone</h1>
        <p>Didesain untuk dicintai.</p>
      </div>
      <div className="video">
        <video autoPlay loop muted playsInline>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
    </>
  )
}

export default Section1;