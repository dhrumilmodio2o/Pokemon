import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { List, Avatar } from "antd";
import PokemonCard from "./../components/Cards/PokemonCard/PokemonCard";
import Header from "../components/Header/Header";
import "../style.less";
import { idGeneratorPokemon } from '../common/util'
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
  const dataItems = idGeneratorPokemon(data)
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
            dataSource={dataItems}
            renderItem={item => (
              <List.Item>
                <PokemonCard item={item} />
              </List.Item>
            )}
          />
        ) : (
            <List
              itemLayout="horizontal"
              dataSource={dataItems}
              renderItem={item => (
                <List.Item>
                  <a
                    href={`/Pokemon/${item.id}?isChecked=${isCheked1}`}
                  >
                    <div className="item-list">
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278258617dhmi.png" />
                        }
                        title={item.pokemon.name.toUpperCase()}
                      />
                    </div>
                  </a>
                </List.Item>
              )}
            />
          )}
      </div>
    </div >
  );
};

PokemonList.getInitialProps = async function ({ query }) {
  const { id, isChecked = '' } = query;
  console.log(query);
  var path = "https://pokeapi.co/api/v2/type/" + id
  const res = await fetch(path)
    .then(value => value.json())
    .then(value => value.pokemon);



  return { data: res, isChecked: isChecked };
};

export default PokemonList;
