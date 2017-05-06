import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('student-grades-donut', 'Integration | Component | student grades donut', {
  integration: true
});

test('the donut-chart is invoked with the grade data properly formatted', function(assert) {
  this.register('component:donut-chart', Ember.Component.extend({
    didReceiveAttrs() {
      assert.deepEqual(this.get('data'), {
        columns: [
          [ 'A', 3 ],
          [ 'B', 3 ],
          [ 'C', 1 ],
          [ 'D', 1 ],
          [ 'F', 0 ]
        ]
      });
    }
  }));

  this.set('grades', [ 'A', 'A', 'C', 'A', 'B', 'D', 'B', 'B' ]);
  this.render(hbs`{{student-grades-donut grades=grades}}`);
});
