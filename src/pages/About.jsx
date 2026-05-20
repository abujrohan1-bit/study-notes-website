import React from "react";
import { Helmet } from "react-helmet";

export default function About() {

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
          About Study Notes Hub
        </title>

        <meta
          name="description"
          content="Study Notes Hub provides engineering notes, PYQs, books, PDFs and important questions."
        />

      </Helmet>

      <h1>
        About Us
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "20px",
          lineHeight: "1.8",
        }}
      >
        Study Notes Hub helps engineering students
        get notes, PYQs, books and important
        questions easily.
      </p>

    </div>

  );

}