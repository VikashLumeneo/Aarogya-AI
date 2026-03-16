import { useLayoutEffect, useRef } from "react";
import "./Outcome.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

return ()=>{

ctx.revert(); // important
ScrollTrigger.getAll().forEach(t=>t.kill());

};

},[]);

return(

<section className="outcome" ref={sectionRef}>

<div className="outcome-container">

<div className="outcome-header">

<button className="outcome-tag">
The Outcome-Driven Angle
</button>

<h2 className="outcome-title">
<span>Arogya AI</span> to deliver faster care & better outcomes.
</h2>

</div>

<div className="outcome-cards">

<div className="outcome-row">
<div className="outcome-text">
<h3>The encounter starts before the patient arrives.</h3>
<p>
AI Intake manages appointment confirmations, captures patient history
and flags chronic conditions.
</p>
</div>
<div className="image-box">Product Photo</div>
</div>

<div className="outcome-row">
<div className="outcome-text">
<h3>Every word captured. Every field complete.</h3>
<p>
AI Scribe listens to consultations and converts them into structured
clinical notes automatically.
</p>
</div>
<div className="image-box light">Product Photo</div>
</div>

<div className="outcome-row">
<div className="outcome-text">
<h3>The right diagnosis. Surfaced faster.</h3>
<p>
AI Diagnostics synthesises symptoms and history into ranked diagnoses.
</p>
</div>
<div className="image-box light">Product Photo</div>
</div>

<div className="outcome-row">
<div className="outcome-text">
<h3>Scans read. Findings highlighted.</h3>
<p>
AI Radiology retrieves CT and MRI instantly and generates reports.
</p>
</div>
<div className="image-box light">Product Photo</div>
</div>

<div className="outcome-row">
<div className="outcome-text">
<h3>Safer prescribing.</h3>
<p>
AI Medication detects drug interactions and dosage issues.
</p>
</div>
<div className="image-box light">Product Photo</div>
</div>

<div className="outcome-row">
<div className="outcome-text">
<h3>The loop closed.</h3>
<p>
AI Care Coordinator handles follow-ups and scheduling automatically.
</p>
</div>
<div className="image-box light">Product Photo</div>
</div>

</div>

</div>

</section>

);

}