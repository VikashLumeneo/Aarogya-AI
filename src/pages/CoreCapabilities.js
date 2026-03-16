import "./CoreCapabilities.css";

import graphic1 from "../assets/images/Graphic 1.svg";
import graphic2 from "../assets/images/Graphic 2.svg";
import graphic3 from "../assets/images/Graphic 3.svg";
import graphic4 from "../assets/images/Graphic 4.svg";


function CoreCapabilities() {
  return (
    <section className="corecap">
      <div className="corecap-container">

        {/* HEADER */}

        <div className="corecap-header">
          <div className="corecap-tag">
            Core Capabilities
          </div>

          <h2 className="corecap-title">
            Every scan. Every finding. Every time.
          </h2>

          <p className="corecap-desc">
            AI Radiologist analyses every study with the same precision
            automatically, without  a<br /> queue, without fatigue.
          </p>
        </div>


        {/* ROW 1 */}

        <div className="corecap-row">

          <div className="corecap-text">

            <div className="corecap-pill">
              Automatic DICOM retrieval
            </div>

            <h3 className="corecap-main-title">
              The scan arrives.<br/>
              AI Radiologist is already waiting.
            </h3>

            <h4 className="corecap-subtitle">
              No upload. No waiting. No workflow change.
            </h4>

            <p>
              AI Radiologist integrates directly with your existing PACS system
              and retrieves imaging studies the moment they are available
              automatically, without any manual intervention from clinical staff.
            </p>

            <p>
              The system supports standard DICOM protocols and connects
              to radiology infrastructure already in place. No rip-and-replace.
              No retraining. No friction.
            </p>

            <div className="corecap-tags">
              <span>PACS Native</span>
              <span>DICOM Auto-Pull</span>
              <span className="tag-gray">Zero Manual Steps</span>
            </div>

          </div>

          <div className="corecap-image">
            <img src={graphic1} alt="Graphic 1"/>
          </div>

        </div>


        {/* ROW 2 */}

        <div className="corecap-row reverse">

          <div className="corecap-text">

            <div className="corecap-pill">
              Organ Segmentation
            </div>

            <h3 className="corecap-main-title">
              Every organ. Defined.<br/>
              Every boundary. Mapped.
            </h3>

            <h4 className="corecap-subtitle">
              Anatomy understood. Context preserved.
            </h4>

            <p>
              Before looking for abnormalities, AI Radiologist maps the anatomy.
              Deep learning models segment organs and anatomical structures with
              high precision creating a spatial understanding of the scan.
            </p>

            <p>
              A nodule isn't just a nodule. It's a 8mm nodule in the right upper
              lobe of the lung, adjacent to the pleura.
            </p>

            <div className="corecap-tags">
              <span>Multi-Organ</span>
              <span>CT + MRI</span>
              <span className="tag-gray">Clinical-Grade</span>
            </div>

          </div>

          <div className="corecap-image">
            <img src={graphic2} alt="Graphic 2"/>
          </div>

        </div>


        {/* ROW 3 */}

<div className="corecap-row">

  <div className="corecap-text">

    <div className="corecap-pill">
      Lesion Detection & Highlighting
    </div>

    <h3 className="corecap-main-title highlight">
      Found. <span>Before it’s missed</span>
    </h3>

    <h4 className="corecap-subtitle">
      The finding the eye might have missed.
    </h4>

    <p>
      AI Radiologist detects and localises abnormalities lesions,
      nodules, masses, and clinically significant findings across
      multiple organ systems simultaneously. Each detection is
      highlighted directly on the scan, with size, location, and
      confidence score attached.
    </p>

    <p>
      Critical findings are escalated automatically. The radiologist's
      attention goes where it's most needed immediately.
    </p>

    <div className="corecap-tags">
      <span>Multi-Region</span>
      <span>Confidence Score</span>
      <span className="tag-gray">On-Scan Annotation</span>
    </div>

  </div>

  <div className="corecap-image">
    <img src={graphic3} alt="Graphic 3"/>
  </div>

</div>

      {/* ROW 4 */}

<div className="corecap-row reverse">

  <div className="corecap-text">

    <div className="corecap-pill">
      Structured Radiology Reports
    </div>

    <h3 className="corecap-main-title">
      Report written. <br/>
      Radiologist reviews.
    </h3>

    <p>
      Before looking for abnormalities, AI Radiologist maps the anatomy.
      Deep learning models segment organs and anatomical structures with
      high precision creating a spatial understanding of the scan that
      makes every subsequent finding clinically contextualised.
    </p>

    <p>
      A nodule isn't just a nodule. It's a 8mm nodule in the right upper
      lobe of the lung, adjacent to the pleura. That distinction matters.
      AI Radiologist understands it.
    </p>

    <h4 className="corecap-subtitle">
      The radiologist decides, Always
    </h4>

    <div className="corecap-tags">
      <span>Auto-Generated</span>
      <span className="tag-gray">EHR-Ready</span>
      <span className="tag-gray">One-Click Approval</span>
    </div>

  </div>

  <div className="corecap-image">
    <img src={graphic4} alt="Graphic 4"/>
  </div>

</div>
      </div>
    </section>
  );
}

export default CoreCapabilities;