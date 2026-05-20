import { Helmet } from "react-helmet";
import React from "react";

export default function App() {

  React.useEffect(() => {

    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener(
      "contextmenu",
      disableRightClick
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        disableRightClick
      );
    };

  }, []);

  const data = {

    "Computer Science Engineering (CSE)": {

      "Semester 3": [
        "Data Structures",
        "Operating Systems",
        "Digital Electronics and Logic Design",
        "Universal Human Values and Professional Ethics",
        "Object Oriented Programming and Computer Graphics"
      ],

      "Semester 4": [
        "Database Management System",
        "Discrete Mathematics",
        "Computer Organization and Microprocessor",
        "Internet of Things",
        "Environmental Studies"
      ],

    },

    "AI & Data Science": {

      "Semester 3": [
        "Data Analytics",
        "Java Programming",
        "Statistics",
        "Python",
      ],

      "Semester 4": [
        "Machine Learning",
        "DBMS",
        "Cloud Computing",
        "Data Visualization",
      ],

    },

  };

  const [branch, setBranch] = React.useState("");
  const [semester, setSemester] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const branches = Object.keys(data);

  const semesters =
    branch ? Object.keys(data[branch]) : [];

  const subjects =
    branch && semester
      ? data[branch][semester]
      : [];

  const popularSubjects = [
    {
      title: "DBMS Notes",
      desc: "Database Management System Notes",
    },
    {
      title: "Operating System Notes",
      desc: "OS Important Notes and PDFs",
    },
    {
      title: "DSA Notes",
      desc: "Data Structures Notes",
    },
    {
      title: "OOPCG Notes",
      desc: "Object Oriented Programming Notes",
    },
  ];
<Helmet>

  <title>
    Study Notes Hub - Engineering Notes, PYQs, Books
  </title>

  <meta
    name="description"
    content="Download engineering notes, PYQs, books and important questions for CSE, AI & DS and more."
  />

  <meta
    name="keywords"
    content="Engineering Notes, DBMS Notes, Microprocessor Notes, PYQs, CSE Notes"
  />

</Helmet>
  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >

      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >

        <h1
          style={{
            fontSize: "60px",
            marginBottom: "15px",
          }}
        >
          Study Notes Hub
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
          }}
        >
          Notes • PYQs • Books • PDFs
        </p>

      </div>

      {/* SEARCH SECTION */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "25px",
          marginBottom: "60px",
        }}
      >

        <h2
          style={{
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Find Your Study Material
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >

          {/* PATTERN */}
          <div>

            <label>Pattern</label>

            <select
              style={selectStyle}
              defaultValue="2024 Pattern"
            >

              <option>
                2024 Pattern
              </option>

            </select>

          </div>

          {/* BRANCH */}
          <div>

            <label>Branch</label>

            <select
              value={branch}
              onChange={(e) => {

                setBranch(e.target.value);
                setSemester("");
                setSubject("");

              }}
              style={selectStyle}
            >

              <option value="">
                Select Branch
              </option>

              {branches.map((b) => (

                <option key={b}>
                  {b}
                </option>

              ))}

            </select>

          </div>

          {/* SEMESTER */}
          <div>

            <label>Semester</label>

            <select
              value={semester}
              onChange={(e) => {

                setSemester(e.target.value);
                setSubject("");

              }}
              style={selectStyle}
            >

              <option value="">
                Select Semester
              </option>

              {semesters.map((s) => (

                <option key={s}>
                  {s}
                </option>

              ))}

            </select>

          </div>

          {/* SUBJECT */}
          <div>

            <label>Subject</label>

            <select
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              style={selectStyle}
            >

              <option value="">
                Select Subject
              </option>

              {subjects.map((sub) => (

                <option key={sub}>
                  {sub}
                </option>

              ))}

            </select>

          </div>

        </div>

      </div>

{/* OPEN RESOURCE PAGE BUTTON */}

{subject && (

  <div
    style={{
      textAlign: "center",
      marginBottom: "60px",
    }}
  >

    <a
      href={`/subject/${branch}/${semester}/${subject}`}
      style={{
        textDecoration: "none",
      }}
    >

      <button
        style={{
          padding: "18px 40px",
          fontSize: "18px",
          border: "none",
          borderRadius: "14px",
          background: "#3b82f6",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Open Resources
      </button>

    </a>

  </div>

)}

      {/* POPULAR SUBJECTS */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >

        <h2
          style={{
            marginBottom: "30px",
          }}
        >
          Trending Notes
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >

          {popularSubjects.map((item) => (

            <div
              key={item.title}
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "20px",
              }}
            >

              <h3>
                {item.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "10px",
                }}
              >
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

const selectStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  marginTop: "10px",
  background: "#334155",
  color: "white",
  fontSize: "16px",
};

const resourceCard = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "18px",
};

const resourceText = {
  color: "#94a3b8",
  marginTop: "10px",
  lineHeight: "1.6",
};

const buttonStyle = {
  marginTop: "20px",
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "#3b82f6",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};