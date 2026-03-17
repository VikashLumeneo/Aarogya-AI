import React, { useState } from "react";
import "./About.css";

import consultIcon from "../assets/images/Consultation Intelligence.svg";
import diagnosisIcon from "../assets/images/AI-Assisted Diagnosis.svg";
import radiologyIcon from "../assets/images/Radiology AI.svg";
import careIcon from "../assets/images/Full Care Continuum.svg";
import safetyIcon from "../assets/images/Safety & Trust.svg";

export default function About() {

const featuresData = [
{
title:"Consultation Intelligence",
icon:consultIcon,
heading:"Stop typing. Start listening.",
small:"",
content:[
"AI Scribe listens to every word of the consultation and instantly converts it into complete, structured clinical documentation — without the doctor touching a keyboard.",
"Every field mapped. Every detail captured. Nothing missed."
]
},

{
title:"AI-Assisted Diagnosis",
icon:diagnosisIcon,
heading:"Every signal. Surfaced instantly.",
small:"",
content:[
"Arogya AI synthesises symptoms, history, lab results, and vitals trends into ranked diagnostic suggestions — the same way a specialist thinks, at the speed of software.",
"Red flags are detected in real time. Missing clinical information is surfaced before the patient leaves.",
"The doctor decides. Always."
]
},

{
title:"Radiology AI",
icon:radiologyIcon,
heading:"Scans analysed. Findings highlighted.",
small:"CT and MRI interpretation at a fraction of the time.",
content:[
"Automatic DICOM Retrieval — Arogya AI integrates directly with PACS systems and retrieves imaging studies the moment they’re available — no manual download, no waiting.",
"Deep Learning Organ Segmentation — Organs are segmented and abnormalities are detected using models trained on clinical imaging datasets. Lesions are highlighted directly on the scan.",
"Structured Radiology Reports — Reports are auto-generated in physician-reviewable format, reducing interpretation time while maintaining clinical precision."
]
},

{
title:"Full Care Continuum",
icon:careIcon,
heading:"Before. During. After.",
small:"",
content:[
"Pre-Appointment — Automated confirmations, vitals trend analysis, and family history verification before the patient arrives.",
"During Appointment — Ambient scribing, live medication interaction detection, and preventative care prompts surfaced in real time.",
"Assessment & Plan — AI synthesis combines history, labs, and live notes to identify care gaps and streamline ordering.",
"Post-Appointment — Medication adherence check-ins, lab follow-up reminders, and frictionless scheduling of necessary follow-ups."
]
},

{
title:"Safety & Trust",
icon:safetyIcon,
heading:"AI proposes. Humans decide.",
small:"",
content:[
"A rigorous human-in-the-loop architecture ensures every output is clinician-authorised.",
"Adversarial AI continuously audits outputs for clinical errors, achieving hallucination rates below 1 in 100,000.",
"Every automated summary, diagnosis, or note requires explicit physician review before it enters the record.",
"The system proposes — the clinician authorises. No exceptions."
]
}
];

const [active,setActive] = useState(0);

return (

<section className="about">

<div className="about-container">

{/* TOP */}

<div className="about-top">

<div className="about-left">
<h1>It listens.</h1>
<h1>It understands.</h1>
<h1 className="highlight">It assists.</h1>
</div>

<div className="about-right">
<p>
Arogya AI works alongside doctors at every stage of care from
patient conversations to radiology analysis. One platform.
End-to-end clinical intelligence.
</p>
</div>

</div>


{/* BOTTOM */}

<div className="about-bottom">

{/* FEATURES */}

<div className="features">

{featuresData.map((item,index)=>(
<div
key={index}
className={`feature-item ${active===index ? "active" : ""}`}
onClick={()=>setActive(index)}
>

<img src={item.icon} alt="" />
<span>{item.title}</span>

</div>
))}

</div>


{/* DETAILS */}

<div className="details">

<p className="tag">{featuresData[active].title}</p>

<h2>{featuresData[active].heading}</h2>

{featuresData[active].small && (
<p className="small">{featuresData[active].small}</p>
)}

{featuresData[active].content.map((text,i)=>(
<p key={i}>{text}</p>
))}

</div>

</div>

</div>

</section>

);
}