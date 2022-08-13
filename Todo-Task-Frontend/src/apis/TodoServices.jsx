import axios from "axios";

const TodoServices = {};
let mainUrl = "http://localhost:5000/api/";
TodoServices.add = async (data) => {
  let url = `${mainUrl}add-todo`;
  let res = await axios.post(url, data);
  //   console.log("res", res);
  return res;
};

TodoServices.get = async () => {
  let url = `${mainUrl}all-todo`;
  let res = await axios.get(url);
  return res.data;
};

TodoServices.addInProgress = async (id) => {
  let url = `${mainUrl}add-in-progress/${id}`;
  let res = await axios.post(url);
  // console.log("res", res);
  return res;
};
TodoServices.addInDone = async (id) => {
  console.log("id", id);
  let url = `${mainUrl}add-in-done/${id}`;
  let res = await axios.post(url);
  // console.log("res", res);
  return res;
};

// /add-in-progress/:id
export default TodoServices;
