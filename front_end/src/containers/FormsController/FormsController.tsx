import React, { useState, useEffect } from "react";
import Forms from "./../../components/Forms/Forms";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

type FormsProps = {
  match: any,
}

const FormItem: React.FC<FormsProps> = (props): JSX.Element => {
  const [item, setItem] = useState({} as any);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/backend/${props.match.params.id}`)
      .then(response => setItem(response.data));
  }, [props.match.params.id]);
  return (
    <div>
      <Forms item={item}/>
    </div>
    
    );
}


export default FormItem;
