import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/notes/NoteSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className="row justify-content-center bg-dark text-light rounded-bottom top-rad p-2 mx-1 mb-2 ">
      <div className="col-4 col-sm-9 text-center align-self-center mb-3 w-75">
        <div className="form-group filter-text">
          <label htmlFor="title ">Search</label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            className="form-control mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
