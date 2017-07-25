  define([
    'coreJS/adapt',
    'components/adapt-contrib-gmcq/js/adapt-contrib-gmcq'
], function(Adapt, Gmcq) {

    var Rating = Gmcq.view.extend({}, {
        template: 'rating'
    });

    return Adapt.register("rating", {
        view: Rating,
        model: Gmcq.model.extend({})
    });

});
