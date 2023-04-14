import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import NoteList from "./Components/NotesList";
import { NotesProp } from "./Interface-model/note.model";
import CreateNotes from "./Components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<NotesProp[]>([
    {
      id: new Date().toString(),
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic repudiandae aliquid nemo aliquam modi.  ",
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
