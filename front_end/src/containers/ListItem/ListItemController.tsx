import React, { useState, useEffect } from "react";
import ListItem from "./../../components/ListItem/ListItem";
import axios from "axios";

const ListItemController: React.FC = (): JSX.Element => {
  const [items, setItems] = useState([] as string[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    axios
      .get("http://127.0.0.1:8000/api/backend")
      .then((response) => setItems(response.data));
  }, [setItems]);
  return (
    <ListItem items={items} loading={loading} />
    //   <div className="cards">
    //     {loading && <p>It's loading...</p>}
    //     {!loading &&
    //       items.map((item, i) => (
    //         <Item
    //           item = {item}
    //           key={i}
    //         />
    //       ))
    //     }
    //   </div>
  );
};

export default ListItemController;
