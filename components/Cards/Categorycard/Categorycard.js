import React from "react";
import "./Card.less";
import { Card, Avatar } from "antd";
import Link from "next/link";
const Categorycard = props => {
  const { item, isCheked } = props;
  var link = "/PokemonList?url=" + item.url + "&isChecked=" + isCheked;
  return (
    <Link href={link}>
      <div className="shadow">
        <Card
          title={item.name.toUpperCase()}
          style={{
            border: 0,
            borderRadius: "15px",
            color: "white",
            cursor: "pointer"
          }}
          headStyle={{
            backgroundColor: "rgb(239,83,80)",
            color: "white",
            display: "flex",
            justifyContent: "space-between"
          }}
          bodyStyle={{ backgroundColor: "rgb(38,50,56)", fontWeight: "bolder" }}
        >
          <img
            className="pokeball"
            src="http://pngimg.com/uploads/pokeball/pokeball_PNG34.png"
          />
          {item.name.toUpperCase()} Type
        </Card>
      </div>
    </Link>
  );
};
export default Categorycard;
