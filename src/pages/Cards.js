import "./Cards.css";

export default function Cards() {
  return (
    <section className="cards">

      <div className="cards-header">

        <button className="cards-tag">
          How It Works
        </button>

        <h2 className="cards-title">
          From scan arrival to structured report.
        </h2>

        <p className="cards-subtitle">
          AI Radiologist works automatically from the moment imaging studies
          arrive in your PACS no manual uploads, no workflow change, no waiting.
        </p>

      </div>


      <div className="cards-container">

        <div className="card">
          <span className="step">Step 1</span>

          <div className="card-content">
            <h3>Retrieve</h3>

            <p>
              AI Radiologist integrates directly with your PACS system and
              automatically retrieves DICOM files the moment a study is
              complete. No manual download. No queue management.
            </p>
          </div>
        </div>


        <div className="card">
          <span className="step">Step 2</span>

          <div className="card-content">
            <h3>Segment</h3>

            <p>
              Deep learning models segment relevant organs and anatomical
              structures with high precision creating a spatial map of the scan
              before analysis begins.
            </p>
          </div>
        </div>


        <div className="card">
          <span className="step">Step 3</span>

          <div className="card-content">
            <h3>Detect</h3>

            <p>
              Abnormalities, lesions, and clinically significant findings are
              identified and localised. Each finding is assigned a confidence
              level & highlighted directly on the scan.
            </p>
          </div>
        </div>


        <div className="card">
          <span className="step">Step 4</span>

          <div className="card-content">
            <h3>Prioritise</h3>

            <p>
              Critical findings are flagged for immediate radiologist attention.
              Studies are automatically ranked by urgency so the most
              time-sensitive cases always surface first.
            </p>
          </div>
        </div>


        <div className="card">
          <span className="step">Step 5</span>

          <div className="card-content">
            <h3>Report</h3>

            <p>
              A complete, structured radiology report is auto-generated in
              physician-reviewable format ready for clinician review, approval,
              and entry into the patient record.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}