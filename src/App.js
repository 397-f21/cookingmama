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
  var q = 'soup';
  const app_id = 'f875478e';
  const app_key = 'b4b36939c6bb8d8c11b08248abf1b86d';
  const random = 'true';
  const url = 'https://api.edamam.com/api/recipes/v2?type=' + type + '&q=' + q + '&app_id=' +
   app_id + '&app_key=' + app_key + '&random' + random;

  useEffect(() => {
      const fetchSchedule = async () => {
        const response = await fetch(url);
        if (!response.ok) throw response;
        const json = await response.json();
        setRecipesAPI(json);
      }
      fetchSchedule();
      console.log(JSON.stringify(recipesAPI));
      // fetch(url)
      // .then((response) => setRecipesAPI(response.json()))
      // .then((response) => console.log(response.json.stringify(recipesAPI)))
    }, []);  // useEffect((),[]) make sure that only fetch once during the first time loading the website page
  
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
    <button className="btn btn-outline-success btn-lg"> New Recipe </button>
  </div>
  );
};

export default App;