define([
    'components/adapt-contrib-mcq/js/mcqView'
], function(Adapt, McqView) {

    var RatingView = QuestionView.extend({

        /**
        * used by adapt-contrib-spoor to get the type of this question in the format required by the cmi.interactions.n.type data field
        */
        getResponseType:function() {
            return "rating";
        }

    });

    return RatingView;

});
