import React, { useEffect, useState } from "react";
import "./Main.css";
import Productivity from "../../../public/images/illustration-stay-productive.png";
import Arrow from "../../../public/icons/icon-arrow.svg";
import Features from "./components/Features";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";
import BgQuote from "../../../public/images/bg-quotes.png";

function Main() {
  const [features, setFeatures] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [testimonials, setTestimonials] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/features")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setFeatures(data);
      })
      .catch((error) => {
        setError("Error del lado del servidor");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(()=> {
    fetch("http://localhost:3001/testimonials")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        setError("Error del lado del servidor");
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []); 

  return (
    <main className="mainContainer">
      <section id="featuresLink">
        <div>
          {isLoading && <div>Cargando</div>}
          {error && <div>Error: {error}</div>}
          {features && (
            <div className="features-wrapper">
              {features.map((feature, index) => {
                return (
                  <Features
                    key={index}
                    icon={<img src={feature.image} alt="icono" />}
                    title={feature.title}
                    description={feature.description}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section>
        <Info
          icon={<img src={Productivity} className="info-img"></img>}
          title="Stay productive, wherever you are"
          location="Never let location be an issue when accessing your files. Fylo has you covered for all your file storage needs. "
          shareFiles="Securely share files and foldrs with friends, family and colleagues for live collaboraion. No email attachments required. "
          seeHowLink="See how Fylo works"
          icon2={<img className="arrow-icon" src={Arrow}></img>}
        />
      </section>

      <section id="team">
        <div className="testimonials-wrapper">
          <img src={BgQuote} className="quote-img" alt="Quote"></img>
          {isLoading && <div>Cargando...</div>}
          {error && <div>Error: {error}</div>}
          {testimonials && (
            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => {
                return (
            
                  <Testimonials
                    key={index}
                    quote={testimonial.quote}
                    icon={<img src={testimonial.image} className="icon-profile-styles" alt="profile-image" />}
                    name={testimonial.name}
                    title={testimonial.title}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Main;
