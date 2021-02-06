import { toast } from "react-toastify";

function log(error, msg = null) {
  // should be logged to file
  console.log(error);
  if (msg !== null) toast.error(msg);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  log,
};
