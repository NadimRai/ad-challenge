import Ember from 'ember';

export default Ember.Component.extend({
  addNewChallenge: false,
  actions: {
    ChallengeFormShow() {
      this.set('addNewChallenge', true);
    },
    saveChallenge1() {
    var params = {
      owner: this.get('owner'),
      city: this.get('city'),
      type: this.get('type'),
      image: this.get('image'),
      bedrooms: this.get('bedrooms'),
    };
    this.set('addNewChallenge', false);
    this.sendAction('saveChallenge2', params);
  }
  }
});
