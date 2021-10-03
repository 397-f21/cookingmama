import React from 'react';
import './App.css';

const RecipesData = {
  "title" : "Open Recipes Database",
  "recipes" : {
    "S1" : {
      "id" : "S1",
      "title" : "Apple Curry Turkey Pita",
      "imageURL" : "https://i.loli.net/2021/10/04/LZ582sSwITXf9Cc.png"
    },
    "S2" : {
      "id" : "S2",
      "title" : "BBQ Tuna Fritters",
      "imageURL" : "https://i.loli.net/2021/10/04/Em41W2oJjRNfwQv.png"
    },
    "S3" : {
      "id" : "S3",
      "title" : "Lemon Chicken Orzo Soup",
      "imageURL" : "https://i.loli.net/2021/10/04/NdZLKAJtlPRC9ar.png"
    }
  }
};

const Frame = {
  title: "Cooking MaMa ",
  subTitle: "Cooking MaMa is to the rescue, helping you eat fantastic meals! "
};

const Banner = ({title, subTitle}) => (
  <div className="App-Title">
    <p></p>
    <img src="https://i.loli.net/2021/10/04/v2EOliqMD8tWpyV.png" alt="AppLogo" style={{width:50, height:45}} />
    <h1>{ title }</h1>
    <p>{ subTitle }</p>
  </div>
);

const Recipe = ({ recipe }) => (
  <div className="card m-1 p-2">
    <div className="card-body">
      <div className="card-imgURL"><p><img src={ recipe.imageURL } style={{width:300, height:300}}/></p></div>
      <div className="card-title">{ recipe.title }</div>
    </div>
  </div>
);

const RecipeList = ({ recipes }) => (
  <div className="recipe-list">
    { Object.values(recipes).map(recipe => <Recipe key={ recipe.id } recipe={ recipe } />) }
  </div>
);

const App = () => (
  <div className="container">
    <Banner title={ Frame.title } subTitle={ Frame.subTitle } />
    <RecipeList recipes={ RecipesData.recipes } />
    <button className="btn btn-outline-success btn-lg"> New Recipe </button>
  </div>
);

export default App;