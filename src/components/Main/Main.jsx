import React from "react";
import "./Main.css";
import Access from "../../../public/icons/icon-access-anywhere.svg";
import Security from "../../../public/icons/icon-security.svg";
import Collab from "../../../public/icons/icon-collaboration.svg";
import File from "../../../public/icons/icon-any-file.svg";
import Productivity from "../../../public/images/illustration-stay-productive.png";
import Arrow from "../../../public/icons/icon-arrow.svg";
import Features from "./components/Features";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";
import BgQuote from "../../../public/images/bg-quotes.png";
import Profile1 from "../../../public/images/profile-1.jpg";
import Profile2 from "../../../public/images/profile-2.jpg";
import Profile3 from "../../../public/images/profile-3.jpg";

function Main() {
  return (
    <main className="mainContainer">
      <section>
        <div className="features-wrapper">
          <Features
            className="feature1"
            icon={<img src={Access} alt="icono" />}
            title="Access your files, anywhere"
            description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          />

          <Features
            className="feature2"
            icon={<img src={Security} alt="icono" />}
            title="Security you can trust"
            description="2-factor authentication and user-controlled encription are just a couple of the security features we allow to help secure your files."
          />

          <Features
            className="feature3"
            icon={<img src={Collab} alt="icono" />}
            title="Real-time collaboration"
            description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments requiered."
          />

          <Features
            className="feature4"
            icon={<img src={File} alt="icono" />}
            title="Store any type of file"
            description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stores and shared. "
          />
        </div>
      </section>

      <section>
        <Info
          icon={<img src={Productivity} className="info-img"></img>}
          title="Stay productive, wherever you are"
          location="Never let location be an issue when accessing your files. Fylo has you covered for all your file storage needs. "
          shareFiles="Securely share files and foldrs with friends, family and colleagues for live collaboraion. No email attachments required. "
          seeHowLink="See how Fylo works"
          icon2={<img src={Arrow}></img>}
        />
      </section>

      <section>
        <div className="testimonials-wrapper">
          <img src={BgQuote} className="quote-img" alt="Quote"></img>
          <div className="testimonials-container">
            <Testimonials
              className="first-profile"
              quote="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine."
              icon={<img src={Profile1} className="icon-profile-styles"></img>}
              name="Satish Patel"
              title="Founder & CEO, Huddle"
            />

            <Testimonials
              className="second-profile"
              quote="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine."
              icon={<img src={Profile2} className="icon-profile-styles"></img>}
              name="Bruce McKenzie"
              title="Founder & CEO, Huddle"
            />

            <Testimonials
              className="third-profile"
              quote="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine."
              icon={<img src={Profile3} className="icon-profile-styles"></img>}
              name="Iva Boyd"
              title="Founder & CEO, Huddle"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
