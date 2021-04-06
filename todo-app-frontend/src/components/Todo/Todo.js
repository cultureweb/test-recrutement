import React from "react";
import Tasks from "./Tasks";
import Menu from "./Menu";
import { useAsync } from "react-use";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import Api from "./Api";

const Todo = () => {
  const { loading, value, error } = useAsync(async () => {
    const datas = await Api.getAllTasks();

    return {
      datas,
    };
  }, []);

  if (loading) {
    //return <Loading />;
    return (
      <div className="loading">
        <p>Loading</p>

        <ReactLoading type="spinningBubbles" color="#000" />
      </div>
    );
    //return <p>Loading...</p>;
  }
  if (error) {
    toast.error(error.message);
  }

  const generateTask = () => {
    alert("button to generate a task");
  };

  return (
    <div>
      <Menu handleClick={generateTask} />
      <Tasks datas={value.datas ? value.datas : []} />
    </div>
  );
};

export default Todo;
