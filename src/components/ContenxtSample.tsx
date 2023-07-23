import React from "react";

// Titleを渡すためのContext
const TitleContext = React.createContext("");

const Title = () => {
  // Consumerを使ってContextを参照する
  return (
    // Consumerの直下に関数を置いてContextの値を参照する
    <TitleContext.Consumer>{(title) => <h1>{title}</h1>}</TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

// Pageコンポーネントの中でContextに値を渡す
export const Page = () => {
  const title = "React Book";
  // Providerを使ってContextに値をセット
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};
