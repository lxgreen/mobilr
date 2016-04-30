/**
 * Created by lxgreen on 4/30/2016.
 */

(function(app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                templateUrl: 'app/components/app/app.component.html',
                styleUrls: ['app/components/app/app.component.css']
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));