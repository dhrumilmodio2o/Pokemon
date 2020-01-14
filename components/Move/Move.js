import React from "react";
import Head from "next/Head";
import "./move.less";
import { Card } from "antd";
const Move = props => {
  const { move } = props;
  const detail = [
    { name: "move", value: move.name },
    { name: "power", value: move.power },
    { name: "Effect", value: move.effect_entries[0].effect },
    { name: "Damage Class", value: move.damage_class.name }
  ];
  return (
    <div className="move">
      <div className="details-moves">
        <Card
          title={move.name.toUpperCase()}
          headStyle={{
            backgroundColor: "orange",
            color: "white",
            textAlign: "center"
          }}
          bodyStyle={{}}
        >
          {detail.map(item => (
            <div>
              {item.value && <span className="label-move">{item.name} :</span>}
              {item.value && <span className="move-detail">{item.value}</span>}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
export default Move;
