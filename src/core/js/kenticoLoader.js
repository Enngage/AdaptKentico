define([
    'core/js/adapt'
], function(Adapt) {

    var KenticoLoader = Backbone.Collection.extend({
        model: {
            "_id": "co-25",
            "_parentId": "course",
            "_type": "page",
            "_classes": "",
            "title": "I'm not smurf",
            "displayTitle": "WHO ARE YOU?",
            "pageBody": "<strong>Scroll down to see what presentation components are available as part of the Version 2.0 core bundle.</strong>",
            "body": "Find out what presentation components are available within the core bundle and how you might consider using them within your courses. ",
            "graphic": {
                "src": "course/en/images/menu_thumb.jpg",
                "alt": "Placeholder graphic."
            },
            "linkText":"View",
            "duration": "2 mins",
            "_pageLevelProgress": {
                "_isEnabled": true
            }
        },
        initialize : function(models, options){
            this.url = options.url;

            this.once('reset', this.loadedData, this);
            if (this.url) {
                this.fetch({
                    reset:true,
                    error: _.bind(function(model, xhr, options) {
                        console.error("ERROR: unable to load file " + this.url);
                    }, this)
                }); 
            }
        },

        loadedData: function() {
            Adapt.trigger('adaptCollection:dataLoaded');
        }

    });

    return KenticoLoader;

});
