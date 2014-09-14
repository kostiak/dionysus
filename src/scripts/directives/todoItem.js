angular.module('dionysusApp.directives')
    .directive('todoItem', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                todo: '=',
                delete: '='
            },
            templateUrl: '../../partials/todoItem.html',
            link: function (scope, elem) {
                scope.editMode = false;
                console.log(elem[0].children[0]);

                scope.edit = function () {
                    scope.editMode = !scope.editMode;
                    /*
                    console.log('edit');
                    var inputHtml='<input type="text" value="'+ scope.todo.text +'"/>';
                    var input = $compile(inputHtml)(scope);
                    var buttonHtml='<button>OK</button>';
                    var button = $compile(buttonHtml)(scope);
                    //elem[0].children[0].replaceWith(e);
                    angular.element(elem.children()[0]).replaceWith(input);
                    angular.element(elem.children()[2]).replaceWith(button);
                    //elem[0].replaceWith(e);
                    */
                };
            }
        };
    }]);