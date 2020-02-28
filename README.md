# cat-app

[SettingUp](#Setting Up) | [Run Tests](#Run Tests) | [MVP](#MVP) | [User Stories](#User Stories) | [Further Implementations](#Further Implementations) | [Hindsight](#What could have gone better)

A single page application where users can load a random picture of a cat from TheCATAPI.

## Setting Up

Clone the repository as follows:

`git clone https://github.com/Jamie95187/cat-app.git`

Install the dependencies:

`$ npm install`

Load up the application:

`$ npm start`

Open up a browser and load up `localhost:3000` to see some adorable cats.

Users without their private API key are limited in their searches. You can sign up for a free API key [here](https://thecatapi.com) follow the instructions. You can add your own API by doing the following:

`$ echo "REACT_APP_CAT_API_KEY=<YOUR API KEY>" > .env`

## Run Tests

`$ npm test`

## MVP

The MVP was to create an SPA that display an image of a cat when a call to the API was made. A button that would generate another call to the API and display a new image.

## User Stories

```
As a user
So I can see a cuddly cat
I want to see a random picture of a cat when I load the application
```

```
As a user
So I can see a different cat
I would like to see a picture of a different cat
```

## Further Implementations

In the future I would implement a drop down menu to choose a breed of cat and display information about it. There would also be an image of the cat. There would also be an option to choose two particular cats and compare their characteristics so that users can decide which cat they would like to adopt into their home.

## What could have gone better

Firstly I would experiment with the API more to learn about the possibilities and limitations. In hindsight I would spend more time researching the technologies before diving straight into the problem.
