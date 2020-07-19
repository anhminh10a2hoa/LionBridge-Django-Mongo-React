import React from "react";
import Item from "./Item/Item";
import "./ListItem.css";

type ListItemProps = {
  items: any[];
  loading: boolean
}

const ListItem: React.FC<ListItemProps> = (props): JSX.Element => {
    return (
      <div className="cards">
        {props.loading && <p>It's loading...</p>}
        {!props.loading &&
          props.items.map((item, i) => (
            <Item
              item = {item}
              key={i}
            />
          ))
        }
      </div>
    );
  }

export default ListItem;
