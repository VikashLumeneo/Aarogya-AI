import { useLayoutEffect, useRef } from "react";
import "./Outcome.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 👇 SVG IMPORTS
import Product1 from "../assets/images/Product1.svg";
import Product2 from "../assets/images/Product2.svg";
import Product3 from "../assets/images/Product3.svg";
import Product4 from "../assets/images/Product4.svg";
import Product5 from "../assets/images/Product5.svg";
import Product6 from "../assets/images/Product6.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Outcome(){

  const sectionRef = useRef();

  useLayoutEffect(()=>{

    const ctx = gsap.context(()=>{

      const cards = gsap.utils.toArray(".outcome-row");

      gsap.set(cards,{
        yPercent:(i)=> i === 0 ? 0 : 100
      });

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:sectionRef.current,
          start:"top top",
          end:`+=${cards.length * 120}%`,
          scrub:true,
          pin:true,
          invalidateOnRefresh:true
        }
      });

      cards.forEach((card,i)=>{
        if(i === 0) return;

        tl.to(card,{
          yPercent:0,
          ease:"none"
        });
      });

    },sectionRef);

    return ()=> ctx.revert();

  },[]);

  return(

    <section className="outcome" ref={sectionRef}>

      <div className="outcome-container">

        <div className="outcome-header">

          <p className="outcome-tag">
            The Outcome-Driven Angle
          </p>

          <h2 className="outcome-title">
            <span>Arogya AI</span> to deliver faster care & better outcomes.
          </h2>

        </div>

        <div className="outcome-cards">

          <div className="outcome-row">
            <div className="outcome-text">
              <h3>The encounter starts before the patient arrives.</h3>
              <p>
                AI Intake manages appointment confirmations, captures patient history, analyses vitals trends and flags chronic conditions so the clinician walks in already informed.
              </p>
            </div>
            <div className="image-box">
              <img src={Product1} alt="Product1" />
            </div>
          </div>

          <div className="outcome-row">
            <div className="outcome-text">
              <h3>Every word captured. Every field complete.</h3>
              <p>
                AI Scribe listens to the consultation in real time and converts it into structured clinical notes automatically — History of Present Illness, Review of Systems, Physical Exam — without the doctor touching a keyboard.
              </p>
            </div>
            <div className="image-box light">
              <img src={Product2} alt="Product2" />
            </div>
          </div>

          <div className="outcome-row">
            <div className="outcome-text">
              <h3>The right diagnosis. Surfaced faster.</h3>
              <p>
                AI Diagnostics synthesises symptoms, history, lab results and live notes into ranked differential diagnoses with confidence scores, red-flag alerts and suggested investigations delivered at the point of care.
              </p>
            </div>
            <div className="image-box light">
              <img src={Product3} alt="Product3" />
            </div>
          </div>

          <div className="outcome-row">
            <div className="outcome-text">
              <h3>Scans read. Findings highlighted. Reports ready. </h3>
              <p>
                AI Radiology retrieves CT and MRI studies the moment they're available, segments organs using deep learning, detects abnormalities and generates structured reports for physician review in a fraction of the time.
              </p>
            </div>
            <div className="image-box light">
              <img src={Product4} alt="Product4" />
            </div>
          </div>

          <div className="outcome-row">
            <div className="outcome-text">
              <h3>Safer prescribing. At the moment of decision. </h3>
              <p>
                AI Medication analyses the live consultation transcript for drug interactions, flags dosage concerns, surfaces antibiotic resistance alerts and connects directly to pharmacy systems for post-approval ordering.
              </p>
            </div>
            <div className="image-box light">
              <img src={Product5} alt="Product5" />
            </div>
          </div>

          <div className="outcome-row">
            <div className="outcome-text">
              <h3>The loop closed. Nothing left outstanding.</h3>
              <p>
                AI Care Coordinator handles clinical coding from consultation notes, sends medication adherence check-ins, follows up on outstanding lab and imaging orders and schedules necessary follow-ups automatically.
              </p>
            </div>
            <div className="image-box light">
              <img src={Product6} alt="Product6" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}