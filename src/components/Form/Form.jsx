import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Form as BootstrapForm,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import Check from "../../icons/check.svg";

// eslint-disable-next-line no-unused-vars
import { addNote } from "../../redux/notes/NoteSlice";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [color, setColor] = useState("bg-light");
  const [noteValid, setNotValid] = useState(true);
  const [titleValid, setTitleValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // içleri boş ise invalid çalışır ikisi içinde
    if (title.length === 0 && note.length === 0) {
      setTitleValid(false);
      setNotValid(false);
      toast.error("fill in the name and title field");

      return;
    }
    // title boş ise invalid çalışır
    if (title.length === 0) {
      setTitleValid(false);
      toast.error("fill in the name field");

      return;
    }
    // note boş ise invalid çalışır
    if (note.length === 0) {
      setNotValid(false);
      toast.error("fill in the note field");

      return;
    }

    dispatch(addNote({ id: nanoid(), title, text: note, color }));
    setTitle("");
    setNote("");
    setTitleValid(true);
    setNotValid(true);
  };

  const colorChange = () => {
    setColor("bg-light");
    toast.warning("Color Change");
  };

  const colorChange2 = () => {
    setColor("bg-clr1");
    toast.warning("Color Change");
  };

  const colorChange3 = () => {
    setColor("bg-clr2");
    toast.warning("Color Change");
  };

  const colorChange4 = () => {
    setColor("bg-clr3");
    toast.warning("Color Change");
  };

  return (
    <aside className="h-100">
      <section className="d-flex flex-column bg-dark bot-rad text-light p-4 mt-2 h-100">
        <ToastContainer autoClose={2000} position="bottom-right" />
        <BootstrapForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title ">Title</Label>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              invalid={!titleValid && title.length === 0}
              type="text"
              id="title"
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="noteText">Note</Label>
            <Input
              className="form-control"
              id="noteText"
              onChange={(e) => setNote(e.target.value)}
              invalid={!noteValid && note.length === 0}
              value={note}
              rows="3"
              type="textarea"
            ></Input>
          </FormGroup>
          <FormGroup>
            <FormGroup>
              <Label htmlFor="noteColor" className="">
                Color
              </Label>
              <div className="container ">
                <div className="row">
                  <div className="col-6 col-lg-3 text-center">
                    <Button
                      type="button"
                      className="my-btn btn btn-light mt-1 shadow-none"
                      onClick={colorChange}
                    >
                      {color === "bg-light" && <img src={Check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3 text-center">
                    <Button
                      type="button"
                      className="my-btn bg-clr1 mt-1 shadow-none"
                      onClick={colorChange2}
                    >
                      {color === "bg-clr1" && <img src={Check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3 text-center">
                    <Button
                      type="button"
                      className="my-btn bg-clr2 mt-1 shadow-none"
                      onClick={colorChange3}
                    >
                      {color === "bg-clr2" && <img src={Check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3 text-center">
                    <Button
                      type="button"
                      className="my-btn bg-clr3 mt-1 shadow-none"
                      onClick={colorChange4}
                    >
                      {color === "bg-clr3" && <img src={Check} alt="" />}
                    </Button>
                  </div>
                </div>
              </div>
            </FormGroup>
            <FormGroup className="text-center mt-3">
              <Button type="submit" className="rounded-3 mt-3">
                Add Note
              </Button>
            </FormGroup>
          </FormGroup>
        </BootstrapForm>
        <div className="row text-center" style={{ marginTop: "auto" }}>
          <p>
            developed by{" "}
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="https://github.com/emirhancirmencik"
              className="text-muted"
            >
              Mert Sakınç
            </a>
          </p>
        </div>
      </section>
    </aside>
  );
};

export default Form;
