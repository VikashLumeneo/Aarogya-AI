import "./Outcome.css";
// import product from "../assets/images/product.png"; 

function Outcome() {
  return (
    <section className="outcome">

      <div className="outcome-container">

        {/* TOP */}

        <div className="outcome-header">

          <button className="outcome-badge">
            The Outcome-Driven Angle
          </button>

          <h2 className="outcome-heading">
            Your entire healthcare organization can run on
            <span className="highlight"> Arogya AI </span>
            to deliver faster care & better outcomes.
          </h2>

        </div>


        {/* FIRST ROW */}

        <div className="outcome-row">

          <div className="outcome-text">

            <h3>Before the consultation even begins.</h3>

            <p>
              Arogya AI prepares the doctor before the patient walks in
              analyzing vitals trends, flagging chronic conditions,
              verifying family history, and sending automated appointment
              confirmations. Your care team arrives ready.
            </p>

          </div>

          <div className="outcome-image">

            <div className="image-placeholder">
              Product Photo
            </div>

          </div>

        </div>


        {/* SECOND ROW */}

        {/* <div className="outcome-row">

          <div className="outcome-text">

            <h3 className="light">
              From consultation to report, automatically.
            </h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy.
            </p>

          </div>

          <div className="outcome-image">

            <div className="image-placeholder light-bg">
              Product Photo
            </div>

          </div>

        </div> */}

      </div>

    </section>
  );
}

export default Outcome;