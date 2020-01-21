import React from "react";
import fetch from "isomorphic-unfetch";
import "../style.less";
import PokemonInformation from "../components/PokemonInformation/PokemonInformation";

const Pokemon = props => {
  const { res, moves } = props;

  // console.log(props.res.moves[0].move.url);
  return <PokemonInformation item={res} moves={moves} />;
};

Pokemon.getInitialProps = async function ({ query }) {
  const { id } = query;
  const path = "https://pokeapi.co/api/v2/pokemon/" + id;
  var res = await fetch(path)
    .then(res => res.json())
    .then(res => res);
  var moves = [];
  for (var i = 0; i < res.moves.length; i++) {
    moves.push(
      await fetch(res.moves[i].move.url)
        .then(res => res.json())
        .then(res => {
          return res;
        })
    );
  }
  return { res: res, moves: moves };
};

export default Pokemon;
