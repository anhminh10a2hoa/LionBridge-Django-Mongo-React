import * as React from "react";
import "./Item.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

type ItemProps = {
  item: any
};

var brandName = ["Adidas", "Nike", "HM", "Levis"];

const Item: React.FC<ItemProps> = (props) => {
  
  return (
    <Card style={{ width: "36rem" }}>
      <Card.Img src={require(`./../../../assets/${props.item.image}`)} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
          Brand: {brandName[props.item.brand]} - Price: {props.item.price} euro
        </Card.Text>
        <Card.Text>{props.item.description}</Card.Text>
        <Link to={"/listitem/" + props.item.id}>
          <Button variant="primary" className="btn-primary">
            Edit
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
