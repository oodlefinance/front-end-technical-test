import { useState, useEffect } from "react";
import axios from "axios";

const useBeers = (params) => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      (async () => {
        const beers = await axios.get(
          `https://api.punkapi.com/v2/beers?${params && params.join("&")}`
        );
        setBeers(beers.data);
        setLoading(false);
      })();
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }, []);
  return { beers, error, loading };
};

export default useBeers;
