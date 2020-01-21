import React from "react";
import "../style.less";
import { DatePicker, Button, Carousel } from "antd";
import Home from "../components/Home/Home";
import axios from "axios";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Pokemonlist from "./PokemonList";

const App = props => {
  return <Home data={props.data} />;
};

App.getInitialProps = async function () {
  const res = await fetch("https://pokeapi.co/api/v2/type");
  const data = await res.json();

  return {
    data: data.results
  };
};
export default App;
