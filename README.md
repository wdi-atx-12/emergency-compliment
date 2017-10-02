# Emergency Compliment

## Mission…

Create your own version of [Emergency Compliment](http://emergencycompliment.com/), using Express. When a user visits the site, they should be greeted with a WDI-themed compliment to cheer them up.


## Part 1: Compliment Me

When you visit the root (`"/"`) of your app, it should display a generic greeting and a randomly chosen compliment.

Here are some sample compliments but feel free to substitute in your own:

```js
compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Chris thinks you\'re wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Nicole would totally hire you.",
  "It\'s almost beer o\'clock!",
  "You\'re a full-stack unicorn! 🦄"
]
```

HINT: [Check this out](http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array) on how to get a random thing from an array to use in the `getRandomCompliments()` function.

## Part 2: Get Personal

When you visit `"/name"` (ie: `"/randy"`), the greeting should personalize itself to the provided name. There should still be a random compliment.

## Challenge 1: Make it Pretty

When the user refreshes the page, the background color changes randomly. Here is an array of colors you can use if you'd like:

```js
colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
```

## Challenge 2: More Compliments

Allow a user to add to the list of compliments using a POST request. You can submit POST requests to the app using a form.

You may want to use the [`body-parser`](https://www.npmjs.com/package/body-parser) package to automatically parse the form variables and present them as JS objects inside the `res` object.

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
