import { useEffect, useState } from "react";

/**
 *
 * @param {token} initialValue
 * @returns
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

export function useFetch(query) {
    const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}`: '',
            // Ajoutez tout en-tête d'autorisation ou autre en-tête requis ici
          },
          body: JSON.stringify({ query }),
        });
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    // Nettoyage des effets lorsque le composant est démonté ou que le query change
    return () => {
      // Éventuelles opérations de nettoyage

    };
  }, [query]);

  return { data, error };
    }