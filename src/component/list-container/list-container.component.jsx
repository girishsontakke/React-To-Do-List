import React from "react";
import "./list-container.styles.scss";

import List from "../list/list.component";

const ListContainer = ({ todos }) => (
  <ul>
    {todos.map((todo, index) => (
      <List key={index} todo={todo} />
    ))}
  </ul>
);

export default ListContainer;
