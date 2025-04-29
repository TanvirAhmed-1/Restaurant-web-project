import { useState, useEffect } from "react";

const useDataHook = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restaurent-server-ashen.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return { menu, loading };
};

export default useDataHook;
