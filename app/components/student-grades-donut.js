import Ember from 'ember';

let { Component, computed } = Ember;

export default Component.extend({
  gradeBreakdown: computed('grades', function() {
    return this.get('grades').reduce((accumulator, grade) => {
      accumulator[grade] += 1;
      return accumulator;
    }, {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      F: 0
    });
  }),
  gradeData: computed('gradeBreakdown', function() {
    return {
      columns: [
        [ 'A', this.get('gradeBreakdown.A') ],
        [ 'B', this.get('gradeBreakdown.B') ],
        [ 'C', this.get('gradeBreakdown.C') ],
        [ 'D', this.get('gradeBreakdown.D') ],
        [ 'F', this.get('gradeBreakdown.F') ]
      ]
    };
  })
});
