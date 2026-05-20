import React from "react";
import { Helmet } from "react-helmet";

export default function Contact() {

  return (

    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >

      <Helmet>

        <title>
          Contact Study Notes Hub
        </title>

      </Helmet>

      <h1>
        Contact
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "20px",
        }}
      >
        Email:
        studynoteshub@gmail.com
      </p>

    </div>

  );

}