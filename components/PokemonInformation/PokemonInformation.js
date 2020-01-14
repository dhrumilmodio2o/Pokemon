import React from "react";
import Pokemon from "../../pages/Pokemon";
import { Carousel, List, Avatar } from "antd";
import "./PokemonInformation.less";
import Header from "../Header/Header";
import Move from "../Move/Move";
const PokemonInformation = props => {
  const { item, moves } = props;
  // console.log(item.moves);
  return (
    <div>
      <Header />
      <div className="poke-information">
        <div className="carouselDiv">
          <Carousel autoplay>
            <div className="img-width">
              <img src={item.sprites.front_default} />
            </div>
            <div className="img-width">
              <img src={item.sprites.back_default} />
            </div>
            <div className="img-width">
              <img src={item.sprites.front_shiny} />
            </div>
            <div className="img-width">
              <img src={item.sprites.back_shiny} />
            </div>
          </Carousel>
          <h1> {item.name.toUpperCase()}</h1>
        </div>

        <List
          itemLayout="horizontal"
          dataSource={moves}
          renderItem={item => (
            <List.Item>
              <Move move={item} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default PokemonInformation;
