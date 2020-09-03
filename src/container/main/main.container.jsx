import React from "react";
import ListContainer from "../../component/list-container/list-container.component";
import "./main.styles.scss";

const Main = ({ ...props }) => {
  return (
    <div>
      <ListContainer {...props} />
    </div>
  );
};
export default Main;
