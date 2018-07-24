import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
SimpleSchema.extendOptions(['autoform']);

// export default Recipes = new Mongo.Collection('Recipes');
export const Recipes = new Meteor.Collection('Recipes');

Schemas.RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  // desc: {
  //   type: String,
  //   label: "Description"
  // },
  // author: {
  //   type: String,
  //   label: "Author",
  //   autoValue: function() {
  //     return this.userId;
  //   }
  // },
  // createdAt: {
  //   type: Date,
  //   label: "Created At",
  //   autoValue: function() {
  //     return new Date();
  //   }
  // }
});

Recipes.attachSchema( Schemas.RecipeSchema );