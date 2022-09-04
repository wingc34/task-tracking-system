import { useState, useEffect } from "react";

const transformTask = (tasks) => {
  let newTasks = [];
  // group phase in newTasks Array
  tasks.forEach((item) => {
    const hasPhase = newTasks.some((ele) => ele.phase === item.Stage);
    if (!hasPhase) {
      newTasks.push({ phase: item.Stage, tasks: [] });
    }
  });
  // group tasks in newTask according to phase
  tasks.forEach((taskItem) => {
    newTasks.forEach((ele) => {
      if (ele.phase === taskItem.Stage) {
        ele.tasks.push(taskItem);
      }
    });
  });

  return newTasks;
};

const initUsersName = [
  { Name: "All", value: "all" },
  { Name: "Unassigned", value: "" },
];

function useApp() {
  const [tasks, setTasks] = useState([]);
  const [usersname, setUsersname] = useState([initUsersName]);
  const [selectedName, setSelectedName] = useState("all");

  const fetchUsersName = async () => {
    const res = await fetch("http://localhost:3001/api/usersname", {
      method: "GET",
    });
    const names = await res.json();
    setUsersname([...initUsersName, ...names.data]);
  };

  const fetchTasksByUsersName = async () => {
    const res = await fetch("http://localhost:3001/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name: selectedName }),
    });
    const tasks = await res.json();
    setTasks(transformTask(tasks.data));
  };

  const onSelectName = (e) => {
    setSelectedName(e.target.value);
  };

  useEffect(() => {
    fetchUsersName()
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetchTasksByUsersName().catch((error) => {
      console.error("Error:", error);
    });
  }, [selectedName]);

  return {
    tasks,
    usersname,
    onSelectName,
  };
}

export default useApp;
