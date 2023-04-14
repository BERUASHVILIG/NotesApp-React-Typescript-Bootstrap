import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useRef, useState, useEffect } from "react";
import { NotesProp } from "../Interface-model/note.model";

interface ICreateNotesProps {
  notes: NotesProp[];
  setNotes: React.Dispatch<React.SetStateAction<NotesProp[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };

  return (
    <>
      <h1>Create Notes</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(event) => handleSubmit(event)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Title"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Note"
            as="textarea"
            rows={3}
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Note Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Add Note
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
