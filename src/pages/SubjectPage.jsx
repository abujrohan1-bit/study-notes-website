import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SubjectPage() {

  const { branch, sem, subject } = useParams();

  const [activeTab, setActiveTab] =
    React.useState("notes");

  const [openUnits, setOpenUnits] =
    React.useState([]);

  /*
    =================================================
    SUBJECT DATA
    =================================================
  */

  const subjectResources = {

    /*
      =================================================
      COMPUTER ORGANIZATION AND MICROPROCESSOR
      =================================================
    */

    "Computer Organization and Microprocessor": {

      notes: [

        {
          title: "Unit 1 Computer Evolution and Performance",
          pdf:
            "/resources/cse/sem4/microprocessor/books/unit1.pdf",
        },

        {
          title: "Unit 2 Memory Management",
          pdf:
            "/resources/cse/sem4/microprocessor/books/unit2.pdf",
        },

        {
          title: "Unit 3 Introduction to 8086 Microprocessor",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/notes/unit3.pdf",
        },

        {
          title: "Unit 4 Memory Organization and Interrupts",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/notes/unit4.pdf",
        },

        {
          title: "Unit 5 Parallel Organization",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/notes/unit5.pdf",
        },

      ],

      pyqs: [

        {
          title: "SPPU 2024 Paper",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/pyqs/2024.pdf",
        },

        {
          title: "SPPU 2023 Paper",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/pyqs/2023.pdf",
        },

        {
          title: "SPPU 2022 Paper",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/pyqs/2022.pdf",
        },

      ],

      books: [

        {
          title: "Computer Organization Book",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/books/book1.pdf",
        },

        {
          title: "8086 Microprocessor Guide",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/books/book2.pdf",
        },

      ],

      important: [

        {
          title: "Unit 1 Important Questions",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/important/unit1.pdf",
        },

        {
          title: "Unit 2 Important Questions",
          pdf:
            "/resources/cse/sem4/computer-organization-and-microprocessor/important/unit2.pdf",
        },

      ],

    },

    /*
      =================================================
      DATABASE MANAGEMENT SYSTEM
      =================================================
    */

    "Database Management System": {

      notes: [

        {
          title: "Unit 1 Introduction to Database Management System",
          pdf:
            "/resources/cse/sem4/dbms/notes/unit1.pdf",
        },

        {
          title: "Unit 2 SQL and PL/SQL",
          pdf:
            "/resources/cse/sem4/dbms/notes/unit2.pdf",
        },

        {
          title: "Unit 3 Relational Database Design",
          pdf:
            "/resources/cse/sem4/dbms/notes/unit3.pdf",
        },

        {
          title: "Unit 4 Database Transactions",
          pdf:
            "/resources/cse/sem4/dbms/notes/unit4.pdf",
        },

        {
          title: "Unit 5 NoSQL Database",
          pdf:
            "/resources/cse/sem4/dbms/notes/unit5.pdf",
        },

      ],

      pyqs: [

        {
          title: "SPPU 2024 Paper",
          pdf:
            "/resources/cse/sem4/dbms/pyqs/2024.pdf",
        },

        {
          title: "SPPU 2023 Paper",
          pdf:
            "/resources/cse/sem4/dbms/pyqs/2023.pdf",
        },

        {
          title: "SPPU 2022 Paper",
          pdf:
            "/resources/cse/sem4/dbms/pyqs/2022.pdf",
        },

      ],

      books: [

        {
          title: "DBMS Complete Book",
          pdf:
            "/resources/cse/sem4/dbms/books/book1.pdf",
        },

        {
          title: "SQL Guide",
          pdf:
            "/resources/cse/sem4/dbms/books/book2.pdf",
        },

      ],

      important: [

        {
          title: "Unit 1 Important Questions",
          pdf:
            "/resources/cse/sem4/dbms/important/unit1.pdf",
        },

        {
          title: "Unit 2 Important Questions",
          pdf:
            "/resources/cse/sem4/dbms/important/unit2.pdf",
        },

      ],

    },

    /*
      =================================================
      DISCRETE MATHEMATICS
      =================================================
    */

    "Discrete Mathematics": {

      notes: [

        {
          title: "Unit 1 Logic and Proof Techniques",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/notes/unit1.pdf",
        },

        {
          title: "Unit 2 Sets Relations and Functions",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/notes/unit2.pdf",
        },

        {
          title: "Unit 3 Recurrence Relations",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/notes/unit3.pdf",
        },

        {
          title: "Unit 4 Graph Theory",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/notes/unit4.pdf",
        },

        {
          title: "Unit 5 Trees and Boolean Algebra",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/notes/unit5.pdf",
        },

      ],

      pyqs: [

        {
          title: "SPPU 2024 Paper",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/pyqs/2024.pdf",
        },

        {
          title: "SPPU 2023 Paper",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/pyqs/2023.pdf",
        },

        {
          title: "SPPU 2022 Paper",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/pyqs/2022.pdf",
        },

      ],

      books: [

        {
          title: "Discrete Mathematics Complete Book",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/books/book1.pdf",
        },

        {
          title: "Graph Theory Guide",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/books/book2.pdf",
        },

      ],

      important: [

        {
          title: "Unit 1 Important Questions",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/important/unit1.pdf",
        },

        {
          title: "Unit 2 Important Questions",
          pdf:
            "/resources/cse/sem4/discrete-mathematics/important/unit2.pdf",
        },

      ],

    },

    /*
      =================================================
      INTERNET OF THINGS
      =================================================
    */

    "Internet of Things": {

      notes: [

        {
          title: "Unit 1 Introduction to IoT",
          pdf:
            "/resources/cse/sem4/iot/notes/unit1.pdf",
        },

        {
          title: "Unit 2 Sensors and Actuators",
          pdf:
            "/resources/cse/sem4/iot/notes/unit2.pdf",
        },

        {
          title: "Unit 3 IoT Communication Protocols",
          pdf:
            "/resources/cse/sem4/iot/notes/unit3.pdf",
        },

        {
          title: "Unit 4 Cloud and IoT",
          pdf:
            "/resources/cse/sem4/iot/notes/unit4.pdf",
        },

        {
          title: "Unit 5 IoT Applications",
          pdf:
            "/resources/cse/sem4/iot/notes/unit5.pdf",
        },

      ],

      pyqs: [

        {
          title: "SPPU 2024 Paper",
          pdf:
            "/resources/cse/sem4/iot/pyqs/2024.pdf",
        },

        {
          title: "SPPU 2023 Paper",
          pdf:
            "/resources/cse/sem4/iot/pyqs/2023.pdf",
        },

        {
          title: "SPPU 2022 Paper",
          pdf:
            "/resources/cse/sem4/iot/pyqs/2022.pdf",
        },

      ],

      books: [

        {
          title: "IoT Complete Book",
          pdf:
            "/resources/cse/sem4/iot/books/book1.pdf",
        },

        {
          title: "IoT Practical Guide",
          pdf:
            "/resources/cse/sem4/iot/books/book2.pdf",
        },

      ],

      important: [

        {
          title: "Unit 1 Important Questions",
          pdf:
            "/resources/cse/sem4/iot/important/unit1.pdf",
        },

        {
          title: "Unit 2 Important Questions",
          pdf:
            "/resources/cse/sem4/iot/important/unit2.pdf",
        },

      ],

    },

  };

  /*
    =================================================
    CURRENT SUBJECT
    =================================================
  */

  const currentSubject =
    subjectResources[subject] || {

      notes: [],
      pyqs: [],
      books: [],
      important: [],

    };

  /*
    =================================================
    TOGGLE NOTES
    =================================================
  */

  const toggleUnit = (index) => {

    if (openUnits.includes(index)) {

      setOpenUnits(
        openUnits.filter(
          (item) => item !== index
        )
      );

    } else {

      setOpenUnits([
        ...openUnits,
        index,
      ]);

    }

  };

  return (

    <>

      <Helmet>

        <title>
          {subject} Notes | PYQs | Books
        </title>

        <meta
          name="description"
          content={`${subject} notes, PYQs, books and important questions.`}
        />

        <meta
          name="keywords"
          content={`${subject}, notes, pyqs, books`}
        />

      </Helmet>

      <div
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
          padding: "40px",
          fontFamily: "Arial",
        }}
      >

        {/* TITLE */}

        <h1
          style={{
            fontSize: "45px",
            marginBottom: "10px",
          }}
        >
          {subject}
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          {branch} • {sem}
        </p>

        {/* TOP BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >

          <button
            style={topButton}
            onClick={() =>
              setActiveTab("notes")
            }
          >
            Notes
          </button>

          <button
            style={topButton}
            onClick={() =>
              setActiveTab("pyqs")
            }
          >
            PYQs
          </button>

          <button
            style={topButton}
            onClick={() =>
              setActiveTab("books")
            }
          >
            Books
          </button>

          <button
            style={topButton}
            onClick={() =>
              setActiveTab("important")
            }
          >
            Important Questions
          </button>

        </div>

        {/* NOTES */}

        {activeTab === "notes" && (

          <div style={sectionStyle}>

            <h2>
              Notes
            </h2>

            <div style={listContainer}>

              {currentSubject.notes.map(
                (unit, index) => (

                  <div
                    key={index}
                    style={noteCard}
                  >

                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                      }}
                    >

                      <h3>
                        {unit.title}
                      </h3>

                      <button
                        style={viewButton}
                        onClick={() =>
                          toggleUnit(index)
                        }
                      >
                        {openUnits.includes(index)
                          ? "Close"
                          : "View"}
                      </button>

                    </div>

                    {openUnits.includes(index) && (

                      <div
                        style={{
                          marginTop: "25px",
                        }}
                      >

                        <embed
                          src={`${unit.pdf}#toolbar=0`}
                          type="application/pdf"
                          width="100%"
                          height="700px"
                          style={{
                            borderRadius: "15px",
                          }}
                        />

                      </div>

                    )}

                  </div>

                )
              )}

            </div>

          </div>

        )}

        {/* PYQS */}

        {activeTab === "pyqs" && (

          <div style={sectionStyle}>

            <h2>
              Previous Year Question Papers
            </h2>

            <div style={listContainer}>

              {currentSubject.pyqs.map(
                (paper, index) => (

                  <div
                    key={index}
                    style={cardStyle}
                  >

                    <h3>
                      {paper.title}
                    </h3>

                    <a
                      href={paper.pdf}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >

                      <button style={viewButton}>
                        View PDF
                      </button>

                    </a>

                  </div>

                )
              )}

            </div>

          </div>

        )}

        {/* BOOKS */}

        {activeTab === "books" && (

          <div style={sectionStyle}>

            <h2>
              Books
            </h2>

            <div style={listContainer}>

              {currentSubject.books.map(
                (book, index) => (

                  <div
                    key={index}
                    style={cardStyle}
                  >

                    <h3>
                      {book.title}
                    </h3>

                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >

                      <button style={viewButton}>
                        Open Book
                      </button>

                    </a>

                  </div>

                )
              )}

            </div>

          </div>

        )}

        {/* IMPORTANT QUESTIONS */}

        {activeTab === "important" && (

          <div style={sectionStyle}>

            <h2>
              Important Questions
            </h2>

            <div style={listContainer}>

              {currentSubject.important.map(
                (item, index) => (

                  <div
                    key={index}
                    style={cardStyle}
                  >

                    <h3>
                      {item.title}
                    </h3>

                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >

                      <button style={viewButton}>
                        View
                      </button>

                    </a>

                  </div>

                )
              )}

            </div>

          </div>

        )}

      </div>

    </>

  );

}

/*
  =================================================
  STYLES
  =================================================
*/

const topButton = {
  padding: "12px 25px",
  border: "none",
  borderRadius: "10px",
  background: "#3b82f6",
  color: "white",
  cursor: "pointer",
  fontSize: "15px",
};

const sectionStyle = {
  background: "#1e293b",
  padding: "30px",
  borderRadius: "25px",
};

const listContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: "30px",
};

const noteCard = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "18px",
};

const cardStyle = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "18px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
};

const viewButton = {
  padding: "12px 25px",
  border: "none",
  borderRadius: "10px",
  background: "#3b82f6",
  color: "white",
  cursor: "pointer",
};