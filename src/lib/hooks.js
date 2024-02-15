import { useEffect, useState } from "react";

/**
 * The `useLocalStorage` function is a custom hook in JavaScript that verifies if token exist go to profile page, else return to the login page
 */
export function useLocalStorage(initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem("token");
    return item ? JSON.parse(item) : initialValue;
  });

  const setToken = (value) => {
    setValue(value);
    localStorage.setItem("token", JSON.stringify(value));
  };

  return [value, setToken];
}
/**
 * The `useFetch` function is a custom hook in JavaScript that fetches data from a specified URL and
 * returns the data and any errors that occur.
 * @param {string} url - The `url` parameter is the URL of the API endpoint that you want to fetch data from. It
 * can be a string representing the URL.
 * @param {FetchEventInit} options - The `options` parameter is an object that contains additional settings for the
 * fetch request. It can include properties such as `method` (GET, POST, PUT, DELETE, etc.), `headers`
 * (an object of key-value pairs representing the request headers), `body` (the request body),
 * @returns The useFetch function returns an object with two properties: "data" and "error".
 */

export function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(url, options);
              const responseData = await response.json();
              setData(responseData);
          } catch (error) {
              setError(error);
          }
      };

      fetchData();
  }, [url, options]);
    
    return [ data, error ];
    }