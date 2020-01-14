import React from "react";
import { Switch } from "antd";
import "./Header.less";
const Header = props => {
  const { isCheked } = props;
  var check = isCheked;
  if (isCheked == undefined) {
    check = false;
  }
  return (
    <div className="main-screen-home">
      <div className="img-div">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          className="img-header"
        />
      </div>
      <span className="label-header">Pokémon Information</span>
      <div className="margin-switch">
        <span className="label-switch">List</span>{" "}
        <Switch onChange={props.onChange} />
        <span className="label-switch">Card</span>
      </div>
    </div>
  );
};
export default Header;
