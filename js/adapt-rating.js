define(function(require) {
    
    var Adapt = require('coreJS/adapt')
    var Gmcq = require('components/adapt-contrib-gmcq/js/adapt-contrib-gmcq')

    var RatingView = Gmcq.view.extend({}, {
        template: 'rating'
    });

    Adapt.register("rating", {
        view: RatingView,
        model: Mcq.model.extend({})
    });

});
