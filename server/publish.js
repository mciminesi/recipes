import { Recipes } from "/imports/collections/Recipes";

Meteor.publish('Recipes', function() {
  return Recipes.find({
    author: this.userId
  });
});