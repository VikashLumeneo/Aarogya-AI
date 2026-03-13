import "./CoreCapabilities.css";

import img1 from "../assets/images/Mask Group1.svg";
import img2 from "../assets/images/Mask Group2.svg";
import img3 from "../assets/images/Mask Group3.svg";
import img4 from "../assets/images/Mask Group4.svg";

import arrow from "../assets/images/Arrow.svg";

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
            automatically, without a queue, without fatigue.
          </p>

        </div>


        {/* ROW 1 */}

        <div className="corecap-row">

          <div className="corecap-text">

            <h3>Automatic DICOM retrieval & PACS integration</h3>

            <h4>No upload. No waiting. No workflow change.</h4>

            <p>
              AI Radiologist integrates directly with your existing PACS
              system and retrieves imaging studies automatically the
              moment they are available without manual intervention.
            </p>

            <p>
              The system supports standard DICOM protocols and connects
              to radiology infrastructure already in place.
            </p>

            <ul>
              <li><img src={arrow} alt="" /> Automatic DICOM retrieval</li>
              <li><img src={arrow} alt="" /> PACS-native integration</li>
            </ul>

            <div className="corecap-tags">
              <span>Zero manual uploads</span>
              <span>Works with existing infrastructure</span>
            </div>

          </div>

          <div className="corecap-image">
            <img src={img1} alt="" />
          </div>

        </div>


        {/* ROW 2 */}

        <div className="corecap-row reverse">

          <div className="corecap-text">

            <h3>Deep learning organ segmentation</h3>

            <h4>Anatomy understood. Context preserved.</h4>

            <p>
              Before looking for abnormalities, AI Radiologist maps
              the anatomy. Deep learning models segment organs and
              anatomical structures with high precision.
            </p>

            <p>
              A nodule isn’t just a nodule. It’s an 8mm nodule in the
              right upper lobe of the lung. AI Radiologist understands
              that context.
            </p>

            <ul>
              <li><img src={arrow} alt="" /> Multi-organ segmentation</li>
              <li><img src={arrow} alt="" /> Spatial contextualisation</li>
            </ul>

            <div className="corecap-tags">
              <span>Deep learning models</span>
              <span>Trained on clinical imaging datasets</span>
            </div>

          </div>

          <div className="corecap-image">
            <img src={img2} alt="" />
          </div>

        </div>


        {/* ROW 3 */}

        <div className="corecap-row">

          <div className="corecap-text">

            <h3>Abnormality detection & lesion highlighting</h3>

            <h4>The finding the eye might have missed.</h4>

            <p>
              AI Radiologist detects abnormalities, lesions,
              nodules, and clinically significant findings
              across multiple organ systems simultaneously.
            </p>

            <p>
              Each detection is highlighted directly on the
              scan with size, location, and confidence score.
            </p>

            <ul>
              <li><img src={arrow} alt="" /> Lesion detection & localisation</li>
              <li><img src={arrow} alt="" /> Confidence scoring</li>
            </ul>

            <div className="corecap-tags">
              <span>Critical finding escalation</span>
              <span>Multi-system analysis</span>
            </div>

          </div>

          <div className="corecap-image">
            <img src={img3} alt="" />
          </div>

        </div>


        {/* ROW 4 */}

        <div className="corecap-row reverse">

          <div className="corecap-text">

            <h3>Structured radiology report generation</h3>

            <h4>Report ready. Radiologist in control.</h4>

            <p>
              AI Radiologist generates a complete structured
              radiology report including Clinical Indication,
              Technique, Findings, and Impression automatically.
            </p>

            <p>
              The radiologist reviews, edits if needed,
              and approves. The report enters the record.
            </p>

            <ul>
              <li><img src={arrow} alt="" /> Structured report format</li>
              <li><img src={arrow} alt="" /> Physician-reviewable output</li>
            </ul>

            <div className="corecap-tags">
              <span>One-touch approval</span>
              <span>Direct EHR entry</span>
            </div>

          </div>

          <div className="corecap-image">
            <img src={img4} alt="" />
          </div>

        </div>


      </div>

    </section>
  );
}

export default CoreCapabilities;