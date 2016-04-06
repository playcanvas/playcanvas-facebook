(function () {
    var _fb = false;
    var _pc = false;
    var _inst = null;

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '1238816002812487',
            xfbml      : true,
            version    : 'v2.5'
        });

        _fb = true;

        if (_fb && _pc) {
            _inst.fbInitialize();
        }
    };

    var pcAsyncInit = function (inst) {
        _pc = true;
        _inst = inst;
        if (_fb && _pc) {
            _inst.fbInitialize();
        }
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    pc.script.create('facebook_setup', function (app) {
        var Facebook_setup = function (entity) {
            this.entity = entity;
            this._initialized = false;
        };

        Facebook_setup.prototype = {
            postInitialize: function () {
                pcAsyncInit(this);
            },

            fbInitialize: function () {
                app.fire("fb:init");

            }
        };

        return Facebook_setup;
    });
}());
