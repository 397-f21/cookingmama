import React from 'react';
import { useState, useEffect } from 'react';
// import { RecipesData } from './utilities/defaultData';
import './App.css';

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
      <div className="card-imgURL"><p><img src={ recipe.image } alt={ "recipeImage" } style={{width:300, height:300}}/></p></div>
      <div className="card-title">{ recipe.label }</div>
    </div>
  </div>
);

const RecipeList = ({ recipes }) => (
  <div className="recipe-list">
    { Object.values(recipes).map(recipe => <Recipe key={ recipe.recipe.label } recipe={ recipe.recipe } />) }
  </div>
);

const App = () => {
  const [recipesAPI, setRecipesAPI] = useState();
  // At least four parameters required : type / q / app_id / app_key
  const type = 'public';
  var q = 'all';
  
  // ATTENTION: THIS PART IS CHANGED
  const app_id = ['f875478e', '96af15a9', 'c9c3c842', '4b2c6c9d', '294392e6', '0ab90297', 'a7a98cbd'];
  const app_key = ['b4b36939c6bb8d8c11b08248abf1b86d', '7d96b52be4a87a2af432bb5d6864a122', 'da15eb466ac79f87f04215cb4cc683ee', 
    '59a819eb45421e238d1748a36fc801bd', '4311fdb568cc21f262f1827a35c4a0b6', '5b960286141cb43a1a702db7ac425aa7', 'fbc8f51b141cfd4063d33b3744a5de81'];

  const random = 'true';
  
  // ATTENTION: THIS PART IS CHANGED
  var i = Math.round(Math.random() * (app_id.length-1));
  const initURL = 'https://api.edamam.com/api/recipes/v2?type=' + type + '&q=' + q + '&app_id=' +
  app_id[i] + '&app_key=' + app_key[i] + '&random' + random;

  const [url, setUrl] = useState(initURL);


  const GenerateNewRecipes = () => {
    setUrl(recipesAPI._links.next.href);
  }
  
  const NewRecipesButton = () => (
    <button className="btn btn-outline-success btn-lg"
        onClick={() => GenerateNewRecipes()}>
      New Recipes
    </button>
  );

  useEffect(() => {
      const fetchRecipes = async () => {
        const response = await fetch(url);
        if (!response.ok) throw response;
        const json = await response.json();
        setRecipesAPI(json);
      }
      fetchRecipes();
      console.log(JSON.stringify(recipesAPI));
      // ATTENTION: THIS PART IS CHANGED
      console.log(i);
      console.log(app_id[i]);
      console.log(app_key[i]);
      // fetch(url)
      // .then((response) => setRecipesAPI(response.json()))
      // .then((response) => console.log(response.json.stringify(recipesAPI)))
    }, [url]);  // useEffect((),[]) make sure that only fetch once during the first time loading the website page
  
  if (!recipesAPI) return (
  <div className="Loading">
    <iframe src={"https://giphy.com/embed/NLejkULLmXdgCfjkT7"} style={{width:500, height:500}}></iframe>
  </div>
  );

  return (
    <div className="container">
    <Banner title={ Frame.title } subTitle={ Frame.subTitle } />
    <RecipeList recipes={ recipesAPI.hits } />
    <p></p>
    <NewRecipesButton />
  </div>
  );
};

export default App;