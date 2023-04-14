import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface ICreateNotesProps {}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  return (
    <>
      <h1>Create Notes</h1>
      <Form className="mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter the Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Notes"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            // ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="priamry">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
