// use valtio to manage state
/*
  const [data, setData] = useState([{}]);
  const [index, setIndex] = useState(1);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [color, setColor] = useState("#555");
  const [validationError, setValidationError] = useState(false);
*/

import { proxy } from "valtio";

// use valtio to manage state
const state = proxy({
  data: [{}],
  index: 0,
  x: "",
  y: "",
  color: "#555",
  validationError: false,
});

export { state };