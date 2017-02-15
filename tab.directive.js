(function() {
    'use strict';
    angular
        .module('angularTab')
        .directive('tab', tab);
    tab.$inject = [];
    /* @ngInject */
    function tab() {
        
        var directive = {
            restrict: 'E',
            transclude: true,
            template: '<div role="tabpanel" ng-show="vm.isActive" ng-transclude></div>',
            require: ['^tabset', 'tab'],
            controller: TabController,
            controllerAs: 'vm',
            link: link,
            bindToController: {
                            headerTitle: '@',
                            glyphiconClass: '@'
            },
            scope: {
            }
        };
        return directive;
        function link(scope, element, attrs, ctrl) {
            var tabsetCtrl = ctrl[0];
            var tabCtrl = ctrl[1];

            tabsetCtrl.addTab(tabCtrl);
        }
    }
    /* @ngInject */
    function TabController() {
        var vm = this;

        vm.isActive = false;
    }
})();