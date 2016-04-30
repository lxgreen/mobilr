/**
 * Created by lxgreen on 4/28/2016.
 */
'use strict';

(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
