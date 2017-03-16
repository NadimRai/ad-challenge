import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('challenge', {path: '/challenge/:challenge_id'});
  this.route('video',{path: '/video/:video_id'});

  this.route('login');
  this.route('signup');
});

export default Router;
