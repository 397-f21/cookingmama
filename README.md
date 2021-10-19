# Cooking MaMa Application

### how to use ?

1. clone this branch like :

```shell
git clone https://github.com/397-f21/cookingmama.git
```

2. use `cd` to your directory and install the packages like :

```shell
npm install
npm install bootstrap
```

3. start the local server to see the demo :

```shell
npm start
```

Note: After finish testing every module, merge it to the main branch and deploy.

4. after edition, remember to build the file like :

```shell
npm run build
```

5. last step: deploy through firebase and test it on the public website

```shell
firebase deploy
```



### Recipes API:

API Website: https://developer.edamam.com/edamam-docs-recipe-api

Require four parameters to fetch recipes data: 

- type: **public** - Type of recipes to search for.
- q: **text** - Query text, for example "chicken".
- app_id: **value** - The application ID, sign in to get ID
- app_key: **value** - The application key, sign in to get key

More detail see the [API Website](https://developer.edamam.com/edamam-docs-recipe-api)

The response format is defined as follows:

```json
{
  "from": 0,
  "to": 0,
  "count": 0,
  "_links": {
    "self": {
      "href": "string",
      "title": "string"
    },
    "next": {
      "href": "string",
      "title": "string"
    }
  },
  "hits": [
    {
      "recipe": {
        "uri": "string",
        "label": "string",
        "image": "string",
        "source": "string",
        "url": "string",
        "shareAs": "string",
        "yield": 0,
        "dietLabels": [
          "string"
        ],
        "healthLabels": [
          "string"
        ],
        "cautions": [
          "string"
        ],
        "ingredientLines": [
          "string"
        ],
        "ingredients": [
          {
            "text": "string",
            "quantity": 0,
            "measure": "string",
            "food": "string",
            "weight": 0,
            "foodId": "string"
          }
        ],
        "calories": 0,
        "totalWeight": 0,
        "cuisineType": [
          "string"
        ],
        "mealType": [
          "string"
        ],
        "dishType": [
          "string"
        ],
        "totalNutrients": {},
        "totalDaily": {},
        "digest": [
          {
            "label": "string",
            "tag": "string",
            "schemaOrgTag": "string",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "string",
            "sub": {}
          }
        ]
      },
      "_links": {
        "self": {
          "href": "string",
          "title": "string"
        },
        "next": {
          "href": "string",
          "title": "string"
        }
      }
    }
  ]
}
```


>>>>>>> Zachary
