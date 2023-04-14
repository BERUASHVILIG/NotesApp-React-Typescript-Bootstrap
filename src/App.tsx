import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import NoteList from "./Components/NotesList";
import { NotesProp } from "./models/note.model";
import CreateNotes from "./Components/CreateNotes";
// import BasicExample from "./Components/Accordion";

function App() {
  const [notes, setNotes] = useState<NotesProp[]>([
    {
      id: new Date().toString(),
      title: "meetings",
      text: "i am text",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  const [currentDate, setCurrentDate] = useState<string>(new Date().toString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        {currentDate}
      </Container>
      {/* <BasicExample /> */}
    </>
  );
}

export default App;
