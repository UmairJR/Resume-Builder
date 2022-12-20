import React from "react";

import "./hub1.css"
import { NavLink, Link } from "react-router-dom"

function Hub1() {
    return <>
        <section>
            <div class="imgBx">


                <img src={process.env.PUBLIC_URL + "/images/bg.jpg"} />
            </div>
            <div class="bg-text">
                <h1>RESUME BUILDER</h1>
            </div>
            <div class="contentBx">
                <h1>Create A Resume</h1><br />
                <h3>Select any Template:</h3>
                <div class="row">
                    <div class="column">
                        <Link to="/Homepage1"><img src={process.env.PUBLIC_URL + "/images/og_temp3.png"} alt="Temp1" style={{ width: "100%" }} /></Link>
                    </div>
                    <div class="column">
                    <Link to="/Homepage2"><img src={process.env.PUBLIC_URL + "/images/og_temp2.png"} alt="Temp2" style={{ width: "100%" }} /></Link>
                    </div>
                    <div class="column">
                    <Link to="/Homepage3"><img src={process.env.PUBLIC_URL + "/images/og_temp1.png"} alt="Temp3" style={{ width: "100%" }} /></Link>
                    </div>
                </div>
                 <div className="comingsoon"><center>More Templates Coming Soon...</center></div>
                {/* <div class="row">
                <div class="column">
                  <img src="temp2.png" alt="Snow" style={"width:100%"} />
                </div>
                <div class="column">
                  <img src="temp3.png" alt="Forest" style={"width:100%"} />
                </div>
                <div class="column">
                  <img src="temp1.png" alt="Mountains" style={"width:100%"}/>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img src="temp2.png" alt="Snow" style={"width:100%"} />
                </div>
                <div class="column">
                  <img src="temp3.png" alt="Forest" style={"width:100%"}/>
                </div>
                <div class="column">
                  <img src="temp1.png" alt="Mountains" style={"width:100%"} />
                </div>
              </div> */}
            </div>
        </section>


    </>
}



export default Hub1;