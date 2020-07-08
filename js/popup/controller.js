'use strict';

(function(window){
    
    function controller(view, wdb){
        this.view = view;
        this.wdb = wdb;
        let _this = this;

        this.view.binding('addWord', function(word,desc){
            _this.addWord(word,desc);
        });

    }

    controller.prototype.addWord = function(word, desc){
        let _this = this;
        this.wdb.setWord(word, desc)
            .then(() => {
                _this.view.render('clearInput');
            })
    }

    window.controller = controller;

})(window)