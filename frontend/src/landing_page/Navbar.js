// import React from "react";
// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
    
//       <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
//         <div class="container p-2">
//           <a class="navbar-brand" href="#">
//             <img src="Media/images/logo (2).svg" style={{width:"25%"}} alt="Logo"/>
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
//             <form class="d-flex" role="search">
//             <ul class="navbar-nav  mb-lg-0">
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/signup">
//                   Signup
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page"  to="/about">
//                   About
//                 </Link>
//               </li>
              
//               <li class="nav-item">
//                 <Link class="nav-link active"  aria-current="page" to="/product">
//                   Product
//                 </Link >
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/pricing">
//                   Pricing
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/support">
//                   Support
//                 </Link>
//               </li>

             
              
              
//             </ul>
              
//             </form>
//           </div>
//         </div>
//       </nav>

//   );
// }

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        
        {/* ✅ Updated logo with Link */}
        <Link className="navbar-brand" to="/">
          <img src="Media/images/logo (2).svg" style={{ width: "25%" }} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">

              {/* ✅ All links using react-router-dom's Link */}
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">Support</Link>
              </li>

            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
