import { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading]= useState(false)

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMenu(data);
      });
  }, []);
  return [menu, loading];
};

export default UseMenu;
