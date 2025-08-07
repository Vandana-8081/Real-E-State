import React from "react";
import NavBar from "./NavBar";
const About = () => {
  return (
    <>
      <NavBar />
      <div className="row bg py-5" style={{ minHeight: "400px" }}>
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6  mb-4 ">
              <div className="mb-3">
                <button className="btn btn-outline-danger rounded-pill px-5 py-1 fw-semibold">
                  About Us
                </button>
              </div>

              <h2 className="fw-bold display-6">Today Sells Properties</h2>
              <p className="text-muted">
                Houzez allow you to design unlimited panels and real estate
                custom forms to capture leads and keep record of all information
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <span className="text-danger me-2">—</span>
                  Live Music Concerts at Luviana
                </li>
                <li className="mb-2">
                  <span className="text-danger me-2">—</span>
                  Our Secret Island Boat Tour is Just for You
                </li>
                <li className="mb-2">
                  <span className="text-danger me-2">—</span>
                  Live Music Concerts at Luviana
                </li>
                <li>
                  <span className="text-danger me-2">—</span>
                  Live Music Concerts at Luviana
                </li>
              </ul>
              <div className="row text-center text-secondary fw-medium mb-4">
                <div className="col-6 col-md-3">
                  3 Bedrooms
                  <img
                    src="/img/2.jpg.jpeg"
                    alt="Real Estate"
                    className="img-fluid rounded "
                    style={{ maxHeight: "150px" }}
                  />
                </div>
                <div className="col-6 col-md-3">
                  2 Bathrooms
                  <img
                    src="/img/4.jpg_1.jpeg"
                    alt="Real Estate"
                    className="img-fluid rounded "
                    style={{ maxHeight: "150px" }}
                  />
                </div>
                <div className="col-6 col-md-3">
                  2 Car parking
                  <img
                    src="/img/2.png"
                    alt="Real Estate"
                    className="img-fluid rounded "
                    style={{ maxHeight: "150px" }}
                  />
                </div>
                <div className="col-6 col-md-3">
                  3450 Sq Ft
                  <img
                    src="/img/3.png"
                    alt="Real Estate"
                    className="img-fluid rounded "
                    style={{ maxHeight: "150px" }}
                  />
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="col-sm-6  text-center">
              <img
                src="/img/9.png"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
