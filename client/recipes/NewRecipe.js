import { Template } from 'meteor/templating';
import { Recipes } from '/imports/collections/Recipes';

import './NewRecipe.html';

Template.registerHelper("Schemas", Schemas);

// import SimpleSchema from 'simpl-schema';
// SimpleSchema.extendOptions(['autoform']);

// Schemas.RecipeSchema = new SimpleSchema({
//   name: {
//     type: String,
//     label: "Name"
//   },
//   desc: {
//     type: String,
//     label: "Description"
//   },
//   author: {
//     type: String,
//     label: "Author",
//     autoValue: function() {
//       return this.userId;
//     }
//   },
//   createdAt: {
//     type: Date,
//     label: "Created At",
//     autoValue: function() {
//       return new Date();
//     }
//   }
// });

Template.NewRecipe.onCreated(function () {
  Meteor.subscribe('Recipes');
});

Template.NewRecipe.helpers({
  getRecipes() {
    return Recipes;
    // return Recipes.find({});
  },
});


Template.NewRecipe.events({
  'submit form'(event) {
    event.preventDefault();
    
    const target = event.target;
    // const text = target.text.value;
    console.log(event.target);
    console.log("ASS");

    Recipes.insert({
      name,
      desc,
      author: this.userId,
      createdAt: new Date(),
    });
    // target.text.value = ''
  }
})