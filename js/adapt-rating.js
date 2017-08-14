  define([
    'coreJS/adapt',
    'components/adapt-contrib-gmcq/js/adapt-contrib-gmcq',
    './ratingView'
], function(Adapt, Gmcq, RatingView) {
      
    return Adapt.register("rating", {
        view: RatingView,
        model: Gmcq.model.extend({})
    });

});
