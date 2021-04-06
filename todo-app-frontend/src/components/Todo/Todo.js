import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";
import Menu from "./Menu";
import { useAsync } from "react-use";

import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import Api from "./Api";
import BackToTop from "../Footer/BackToTop";

const Todo = () => {
  const { loading, value, error } = useAsync(async () => {
    const datas = await Api.getAllTasks();
    return {
      datas,
    };
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading</p>

        <ReactLoading type="spinningBubbles" color="#000" />
      </div>
    );
  }

  if (error) {
    toast.error(error.message);
  }

  const generateTask = () => {
    Api.generateRandomTask();
    // for now I didn't find how to refresh component
    window.location.reload();
  };

  return (
    <div>
      <Menu id="top" handleClick={generateTask} />
      <Tasks datas={value.datas ? value.datas : []} />
      <BackToTop />
    </div>
  );
};

export default Todo;
