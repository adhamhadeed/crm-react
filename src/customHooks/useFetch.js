import { useEffect, useState } from "react";
import Logger from "./../logger/Logger";

const useFetch = (apiCall, key, initalParams, delay = 60000) => {
  console.log("my key", key);
  const [response, setResponse] = useState(initalParams);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    try {
      const sessionData = sessionStorage.getItem(key);
      if (
        !sessionData ||
        Date.now() - JSON.parse(sessionData)["fetchTime"] > delay
      ) {
        const { data } = await apiCall();
        setResponse(data);
        sessionStorage.setItem(
          key,
          JSON.stringify({
            data: data,
            fetchTime: Date.now(),
          })
        );
      } else {
        setResponse(JSON.parse(sessionData)["data"]);
      }
    } catch (err) {
      setErrors(err.message);
      Logger.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("fetch data");
    fetchData();
  }, [apiCall]);

  return [response, setResponse, isLoading, errors];
};

export default useFetch;
