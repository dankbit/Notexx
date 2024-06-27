import React, { useCallback } from "react";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import apjkalam from "../images/apj.png";
import punjabunii from "../images/punjabuni.png";
import chitkaraa from "../images/chitkara.png";
import { useNavigate } from "react-router-dom";

const FrameeComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();
  
  const handleNavigation = (university) => {
    navigate(`/university/${university.name}`, { state: university });
  };

  const universities = [
    {
      name: "APJ Abdul Kalam University",
      description: "Dr. A.P.J. Abdul Kalam Technical University, known for its excellence in technical education and research, is located at Sec-11, Jankipuram Vistar, Lucknow, Uttar Pradesh 226031, India.",
      image: apjkalam,
    },
    {
      name: "Punjab University",
      description: "Punjab University, renowned for its academic excellence and vibrant campus life, is situated at Sector 14, Chandigarh 160014, India. It offers a wide range of undergraduate and postgraduate programs.",
      image: punjabunii,
    },
    {
      name: "Chitkara University",
      description: "Chitkara University, acclaimed for its innovative programs and industry partnerships, is located at Chandigarh-Patiala National Highway (NH-64), Punjab 140401, India.",
      image: chitkaraa,
    },
  ];

  return (
    <div className={`flex flex-row gap-24 ${className}`}>
      {universities.map((university) => (
        <GroupComponent
          key={university.name}
          rectangle1431={university.image}
          chitkaraUniversity={university.name}
          description={university.description}
          onClick={() => handleNavigation(university)}
        />
      ))}
    </div>
  );
};

FrameeComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameeComponent2;
