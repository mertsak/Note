import React from "react";

import { Form as BootstrapForm, FormGroup, Label, Input } from "reactstrap";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalNote = ({
  open,
  handleClose,
  handleSubmit,
  setTitle,
  setText,
  data,
  title,
  text,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BootstrapForm onSubmit={(e) => handleSubmit(e, data.id)}>
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                id="title"
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="noteText">Note</Label>
              <Input
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="form-control"
                id="noteText"
                rows="3"
                type="textarea"
              ></Input>
            </FormGroup>
            <FormGroup className="text-center mt-3">
              <Button type="submit" className="rounded-3 mt-3 bg-black">
                Update Note
              </Button>
            </FormGroup>
          </BootstrapForm>
        </Box>
      </Modal>
    </>
  );
};

export default ModalNote;
