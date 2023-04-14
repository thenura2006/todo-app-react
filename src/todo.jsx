// import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { HiPlus } from "react-icons/hi2";
import { useEffect } from "react";

function todo() {
  const [todo, settodo] = useState("");
  const [data, setData] = useState([]);

  const additam = () => {
    setData([...data, todo]);
    settodo("");
  };
  const changeData = (e) => {
    settodo(e.target.value);
  };

  return (
    <div className="m-5">
      <div className="text-center font-medium text-[36px] text-sky-600 ">
        todo list
      </div>
      <div className="flex justify-center pt-10">
        <TextField
          type="text"
          className="w-150"
          onChange={(e) => changeData(e)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<HiPlus />}
          onClick={additam}
        />
      </div>
      {data.map((data, id) => {
        return (
          <h1
            key={id}
            className="text-[24px] text-center pt-5 hover:text-sky-600"
          >
            {data}
          </h1>
        );
      })}
    </div>
  );
}

export default todo;
