import React from 'react';
import Search from './search'
import { useState, useEffect } from 'react';
// import { RecipesData } from './utilities/defaultData';
import './App.css';

const Frame = {
  title: "Cooking MaMa ",
  subTitle: "Have no idea of what to cook? Check out the recipes! "

};

const Banner = ({title, subTitle}) => (
  <div className="App-Title">
    <p></p>
    <img src="https://i.loli.net/2021/10/04/v2EOliqMD8tWpyV.png" alt="AppLogo" style={{width:50, height:45}} />
    <h1>{ title }</h1>
    <p>{ subTitle }</p>
    <Search />
  </div>
);

const Recipe = ({ recipe }) => (
  <div className="card m-1 p-2">
    <div className="card-body">
      <div className="card-imgURL"><p><img src={ recipe.image } alt={ "recipeImage" } style={{width:300, height:300}}/></p></div>
      <a href= {recipe.url}> { recipe.label }</a>
      <ul className = "ingredient"> 
      { recipe.ingredientLines.map((e) => (<li>{e}</li>)) } 
      </ul>
    </div>
  </div>
);

const RecipeList = ({ recipes }) => (
  <div className="recipe-list">
    { Object.values(recipes).map(recipe => <Recipe className = "recipe" key={ recipe.recipe.label } recipe={ recipe.recipe } />) }
  </div>
);

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  console.log(query)
  const [recipesAPI, setRecipesAPI] = useState();
  // At least four parameters required : type / q / app_id / app_key
  const type = 'public';
  var q = 'lunch'

  if (query) {
   q = query;
  }

  console.log(q)

  const app_id = 'f875478e';
  const app_key = 'b4b36939c6bb8d8c11b08248abf1b86d';
  const random = 'true';
  const initURL = 'https://api.edamam.com/api/recipes/v2?type=' + type + '&q=' + q + '&app_id=' +
   app_id + '&app_key=' + app_key + '&random' + random;
  const [url, setUrl] = useState(initURL);

  const GenerateNewRecipes = () => {
    setUrl(recipesAPI._links.next.href);
  }

  const NewRecipesButton = () => (
    <div>
       <button className="btn btn-outline-success btn-lg"
     font-family= "Gill Sans"
        onClick={() => GenerateNewRecipes()}>
      New Recipes
    </button>
    <p></p>
    </div>
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
      // fetch(url)
      // .then((response) => setRecipesAPI(response.json()))
      // .then((response) => console.log(response.json.stringify(recipesAPI)))
    }, [url]);  // useEffect((),[]) make sure that only fetch once during the first time loading the website page

  if (!recipesAPI) return (
  <div className="Loading">
    <iframe src={"https://giphy.com/embed/NLejkULLmXdgCfjkT7"} style={{width:500, height:500}}></iframe>
  </div>
  );
  console.log(recipesAPI.hits[0].recipe.ingredientLines)
  return (
    <div className="container" style={{
    backgroundImage: `url("/background.jpg")`}}>
    <Banner
    title={ Frame.title } subTitle={ Frame.subTitle } />
    <i> searching for { q } recipes</i>
    <NewRecipesButton />
    <RecipeList recipes={ [recipesAPI.hits[0], recipesAPI.hits[1], recipesAPI.hits[2]] } />
    <p></p>
  </div>
  );
};

export default App;
