"use client";
import React, { useState } from "react";

const page = () => {
  const [tittle, setTittle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const subtmithandler = (e) => {
    e.preventDefault();
    setMaintask([...maintask, { tittle, desc }]);
    setTittle("");
    setdesc("");
    console.log(maintask);
  };

  const deletHandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setMaintask(copytask);
  };

  let renderTask = <h2>NO TASK AVAILABLE</h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-xl font-semibold text-orange-500">
              {t.tittle}
            </h5>
            <h6 className="text-lg font-semibold text-lime-600">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deletHandler(i);
            }}
            className="text-white bg-red-600 rounded font-bold px-3 py-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Sarang's TodoList
      </h1>
      <form onSubmit={subtmithandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Tittle here"
          value={tittle}
          onChange={(e) => {
            setTittle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add Tasks
        </button>
      </form>
      <hr />
      <div className="p-5 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
