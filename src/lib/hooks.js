import { useEffect, useRef, useState } from "react";
import { QueryUserData } from "../api/query.js";


export function useFetch(token) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
          body: JSON.stringify({ query: QueryUserData }),
        });
        const responseData = await response.json()
        if (!response.ok) {
          localStorage.removeItem('token');
          location.href = '/';
          setLoading(false);
          console.log(responseData.errors[0].message);
        }
        setData(responseData.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Nettoyage des effets lorsque le composant est démonté ou que le query change
      // Éventuelles opérations de nettoyage
    };
  }, [token]);

  return { data,loading, error };
}

export function useElementWidth() {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const elementWidth = elementRef.current.getBoundingClientRect().width;
        setWidth(elementWidth);
      }
    };

    handleResize(); // Appel initial pour obtenir la largeur initiale

    window.addEventListener('resize', handleResize); // Écouter les redimensionnements de fenêtre

    return () => {
      window.removeEventListener('resize', handleResize); // Nettoyage de l'écouteur lors du démontage du composant
    };
  }, [elementRef]);

  return [elementRef, width];
}