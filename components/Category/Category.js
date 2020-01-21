import React from "react";
import "./Category.less";
import { List, Card, Avatar } from "antd";
import CategoryCard from "./../Cards/Categorycard/Categorycard";
import { idGenerator } from './../../common/util'
const Category = props => {
  const { data, isCheked } = props;



  var dataItems = idGenerator(data);

  return (
    <div className="list">
      {isCheked ? (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <CategoryCard item={item} isCheked={isCheked} />
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
                  href={"/PokemonList/" + item.id + "?isChecked=" + isCheked}
                >
                  <div className="item-list">
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278258617dhmi.png" />
                      }
                      title={item.name.toUpperCase()}
                    />
                  </div>
                </a>
              </List.Item>
            )}
          />
        )}
    </div>
  );
};
export default Category;
