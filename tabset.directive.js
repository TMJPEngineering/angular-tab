(function() {
    'use strict';
    angular
        .module('angularTab')
        .directive('tabset', tabset);
    tabset.$inject = [];
    /* @ngInject */
    function tabset() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'template.html',
            transclude: true,
            bindToController: true,
            controller: TabsetController,
            controllerAs: 'vm',
            link: link,
            scope: {
            }
        };
        return directive;
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function TabsetController() {
        var vm = this;

        vm.tabs = [];
        vm.addTab = addTab;
        vm.select = select;

        function addTab(tab) {
            vm.tabs.push(tab);

            if(vm.tabs.length === 1) {
                tab.isActive = true;
            }
        }

        function select(selectedTab) {
            angular.forEach(vm.tabs, function(tab){
                if(tab.isActive){
                    tab.isActive = false;
                }
            });
            selectedTab.isActive = true;
        }
    }
})();