// import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { HiPlus, HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { Delete } from "@mui/icons-material";
import { Input } from "postcss";

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
  const deleteitam = (id) => {
    const fruits = [...data];
    fruits.splice(id, 1);
    setData(fruits);
  };

  return (
    <div className="m-5">
      <div className="text-center font-medium text-[36px] text-sky-600 ">
        todo list
      </div>
      <div className="flex justify-center pt-10">
        <Input
          type="text"
          className="float-left"
          onChange={(e) => changeData(e)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          className="p-5
          float-right"
          startIcon={<HiPlus />}
          onClick={additam}
        />
      </div>
      {data.map((data, id) => {
        return (
          <h1 key={id} index={id} className="text-[24px] flex">
            {data}
            <Button
              className="float-left bg-red-700"
              type="submit"
              variant="outlined"
              size="medium"
              startIcon={<HiOutlineArchiveBoxXMark />}
              onClick={() => deleteitam(id)}
            />
          </h1>
        );
      })}
    </div>
  );
}

export default todo;
