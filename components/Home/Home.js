import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { useRouter } from "next/router";
import Category from "../Category/Category";
import "./Home.less";
import Header from "../Header/Header";

const Home = props => {
  const [isCheked, setIsChecked] = useState(false);
  const onChange = check => {
    if (check) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };
  return (
    <div>
      <Header onChange={onChange} />
      <div className="category-width">
        <Category data={props.data} isCheked={isCheked} />;
      </div>
    </div>
  );
};
export default Home;
