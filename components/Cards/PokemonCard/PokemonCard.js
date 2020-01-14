import React from "react";
import { Card } from "antd";
import Link from "next/link";
const Pokemoncard = props => {
  const { item } = props;
  var url = "/Pokemon?url=" + item.url;
  // const poke1 = await fetch(item.url)
  //   .then(value => value.json())
  //   .then(value => {
  //     return { src: value.sprites.front_default };
  //   });

  return (
    <Link href={url}>
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
          {/* {poke11src && <img className="pokeball" src={poke1.src} />} */}
          {item.name.toUpperCase()}
        </Card>
      </div>
    </Link>
  );
};
export default Pokemoncard;
