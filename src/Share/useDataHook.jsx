import { useState, useEffect } from "react";

const useDataHook = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMenu(data);
      });
  }, []);

  return { menu, loading }; 
};

export default useDataHook;