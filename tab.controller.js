(function() {
    'use strict';
    angular
        .module('angularTab')
        .controller('TabController', TabController);
    TabController.$inject = [];
    /* @ngInject */
    function TabController() {
        var vm = this;
        vm.title = 'Controller';
        activate();
        
        function activate() {
            console.log(vm.title);
        }
    }
})();