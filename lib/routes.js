import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/client/layouts/homeLayout.html';
import '/client/layouts/mainLayout.html';
import '/client/recipes/Recipes.html';
import '/client/recipes/NewRecipe.html';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('homeLayout');
  }
});


FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    BlazeLayout.render('mainLayout', {main: 'Recipes'});
  }
});