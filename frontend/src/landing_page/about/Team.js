import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.zerodha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://tradingqna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://twitter.com/nithin0dha"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
