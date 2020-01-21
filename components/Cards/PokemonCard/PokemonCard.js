import React from "react";
import { Card } from "antd";
import Link from "next/link";
const Pokemoncard = ({ item }) => {

  const { pokemon, id } = item;
  return (
    <a href={`/Pokemon/${id}`}>
      <div className="shadow">
        <Card
          title={pokemon.name.toUpperCase()}
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
          {pokemon.name.toUpperCase()}
        </Card>
      </div>
    </a >
  );
};
export default Pokemoncard;
