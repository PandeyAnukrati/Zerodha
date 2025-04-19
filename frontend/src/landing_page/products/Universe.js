

// import React from "react";
// import "./Universe.css"; // Import the CSS for image styling

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms.
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" className="logo-img" alt="Smallcase" />
//           <p className="text-small text-muted">
//             Thematic investing platform that helps you invest in diversified
//             baskets of stocks or ETFs.
//           </p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/streakLogo.png" className="logo-img" alt="Streak" />
//           <p className="text-small text-muted">
//             Systematic trading platform that allows you to create and backtest
//             strategies without coding.
//           </p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/sensibullLogo.svg" className="logo-img" alt="Sensibull" />
//           <p className="text-small text-muted">
//             Options trading platform to create strategies, analyze positions,
//             and explore data like open interest, FII/DII, and more.
//           </p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/zerodhaFundhouse.png" className="logo-img" alt="Zerodha Fund House" />
//           <p className="text-small text-muted">
//             Our asset management venture creating simple and transparent index
//             funds to help you save for your goals.
//           </p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/goldenpiLogo.png" className="logo-img" alt="GoldenPi" />
//           <p className="text-small text-muted">Bonds trading platform.</p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/dittoLogo.png" className="logo-img" alt="Ditto" />
//           <p className="text-small text-muted">
//             Personalized advice on life and health insurance. No spam, no
//             mis-selling.
//           </p>
//         </div>

//         <div className="d-flex justify-content-center w-100 mt-4">
//           <button className="p-2 btn btn-primary fs-5" style={{ width: "200px" }}>
//             Signup Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Universe;


import React from "react";
import { Link } from "react-router-dom"; // For linking to the signup page
import "./Universe.css"; // Import your custom CSS for image styling

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="row justify-content-center">
          {/* Smallcase */}
          <div className="col-12 col-md-4 p-3">
            <div className="logo-container">
              <img
                src="/smallcaseLogo.png"
                className="logo-img"
                alt="Smallcase"
              />
              <p className="text-small text-muted mt-2">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks or ETFs.
              </p>
            </div>
          </div>

          {/* Streak */}
          <div className="col-12 col-md-4 p-3">
            <div className="logo-container">
              <img
                src="/streakLogo.png"
                className="logo-img"
                alt="Streak"
              />
              <p className="text-small text-muted mt-2">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
          </div>

          {/* Sensibull */}
          <div className="col-12 col-md-4 p-3">
            <div className="logo-container">
              <img
                src="/sensibullLogo.svg"
                className="logo-img"
                alt="Sensibull"
              />
              <p className="text-small text-muted mt-2">
                Options trading platform to create strategies, analyze
                positions, and explore data like open interest, FII/DII, and
                more.
              </p>
            </div>
          </div>

          {/* Zerodha Fund House */}
          <div className="col-12 col-md-4 p-3">
            <div className="logo-container">
              <img
                src="/zerodhaFundhouse.png"
                className="logo-img"
                alt="Zerodha Fund House"
              />
              <p className="text-small text-muted mt-2">
                Our asset management venture creating simple and transparent
                index funds to help you save for your goals.
              </p>
            </div>
          </div>

          {/* GoldenPi */}
          <div className="col-12 col-md-4 p-3">
            <div className="logo-container">
              <img
                src="/goldenpiLogo.png"
                className="logo-img"
                alt="GoldenPi"
              />
              <p className="text-small text-muted mt-2">
                Bonds trading platform.
              </p>
            </div>
          </div>

          {/* Ditto */}
          <div className="col-12 col-md-4 p-3">
            <div className="logo-container">
              <img
                src="/dittoLogo.png"
                className="logo-img"
                alt="Ditto"
              />
              <p className="text-small text-muted mt-2">
                Personalized advice on life and health insurance. No spam, no
                mis-selling.
              </p>
            </div>
          </div>
        </div>

        {/* Signup Button */}
        <div className="d-flex justify-content-center w-100 mt-4">
          <Link to="/signup">
            <button className="p-2 btn btn-primary fs-5" style={{ width: "200px" }}>
              Signup Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
