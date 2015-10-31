import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    alertName() {
      alert(`${this.controller.get('name')} says ${this.controller.get('text')}`);
    }
  },

  model() {
    return ['red', 'green', 'blue'];
  }
});
