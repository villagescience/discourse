/**
  This view handles rendering of post within another (such as a collapsed reply)

  @class EmbeddedPostView
  @extends Discourse.View
  @namespace Discourse
  @module Discourse
**/
Discourse.EmbeddedPostView = Discourse.GroupedView.extend({
  templateName: 'embedded_post',
  classNames: ['reply'],

  didInsertElement: function() {
    Discourse.ScreenTrack.current().track(this.get('elementId'), this.get('post.post_number'));
  },

  willDestroyElement: function() {
    Discourse.ScreenTrack.current().stopTracking(this.get('elementId'));
  }

});


