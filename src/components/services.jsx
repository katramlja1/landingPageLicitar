import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Što nudimo?</h2>
            <p>
              Izrada licitara i medenjaka raznih oblika, dimenzija i motiva. Što god da zamislite mi ćemo se potruditi da to i ostvarimo, zapakiramo i dostavimo na Vašu adresu.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <div className="services i.fa">
                        {" "}
                        <img src={d.icon} alt="" />{" "}
                      </div>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
