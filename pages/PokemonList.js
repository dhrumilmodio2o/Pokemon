import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { List, Avatar } from "antd";
import PokemonCard from "./../components/Cards/PokemonCard/PokemonCard";
import Header from "../components/Header/Header";
import "../style.less";
import Link from "next/link";
const PokemonList = props => {
  const { data, isChecked } = props;
  const [isCheked1, setIsChecked] = useState(isChecked);
  const onChange = check => {
    if (check) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <div>
      <Header onChange={onChange} isChecked={isChecked} />
      <div className="list">
        {!isCheked1 ? (
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 5
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <PokemonCard item={item.pokemon} />
              </List.Item>
            )}
          />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Link
                  href={
                    "/Pokemon?url=" +
                    item.pokemon.url +
                    "&isChecked=" +
                    isCheked1
                  }
                >
                  <div className="item-list">
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278258617dhmi.png" />
                      }
                      title={item.pokemon.name.toUpperCase()}
                    />
                  </div>
                </Link>
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
};

PokemonList.getInitialProps = async function({ query }) {
  const { url, isChecked } = query;
  var data;
  const res = await fetch(url)
    .then(value => value.json())
    .then(value => value.pokemon);

  // for (var i = 0; i < res.moves.length; i++) {
  //   console.log(res.moves[i]);
  // }

  return { data: res, isChecked: isChecked };
};

export default PokemonList;
