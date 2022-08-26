/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";
import close from "../../icons/x.svg";

import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import {
  destroy,
  changeLoading,
  updateNote,
} from "../../redux/notes/NoteSlice";

import ModalNote from "../ModalNote/ModalNote";

import { ToastContainer, toast } from "react-toastify";

let filtered;

const TodoList = () => {
  const items = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.notes.activeFilter);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleOpen = (id, item) => {
    items.map((item) => {
      if (item.id === id) {
        setTitle(item.title);
        setText(item.text);
      }
    });
    setData(item);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  filtered = items.filter((item) => {
    return item.title.toLowerCase().indexOf(filter) !== -1;
  });

  const handleDestroy = (id) => {
    dispatch(destroy(id));
    dispatch(changeLoading(true));
    setTimeout(() => {
      dispatch(changeLoading(false));
    }, 1500);
  };

  window.localStorage.setItem("notes", JSON.stringify(items));

  const handleSubmit = (e, id) => {
    e.preventDefault();
    dispatch(updateNote({ title: title, text: text, id: id }));
    toast.success("Update Note");
    setOpen(false);
  };

  return (
    <div className="row mb-3">
      <ToastContainer autoClose={2000} position="bottom-right" />
      {filtered.map((item) => {
        return (
          <div key={item.id} className={"col-lg-4 col-6 h-100 mt-3 "}>
            <Card className={`${item.color} card-height`}>
              <CardHeader>
                <img
                  className="close"
                  onClick={() => handleDestroy(item.id)}
                  src={close}
                  alt="Close"
                />
                <Button onClick={() => handleOpen(item.id, item)}>Edit</Button>
                <span className="ms-1" style={{ textTransform: "capitalize" }}>
                  {item.title}
                </span>
              </CardHeader>
              <CardBody>
                <CardText>{item.text}</CardText>
              </CardBody>
            </Card>
          </div>
        );
      })}

      <ModalNote
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        handleChange={handleClose}
        setText={setText}
        open={open}
        text={text}
        data={data}
      ></ModalNote>
    </div>
  );
};

export default TodoList;
