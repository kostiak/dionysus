angular.module('dionysusApp.directives')
    .directive('todoItem', ['Todo', function (Todo) {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                todo: '=',
                delete: '='
            },
            templateUrl: 'partials/todoItem.html',
            link: function (scope) {
                scope.editMode = false;

                scope.edit = function () {
                    if(scope.editMode) {
                        Todo.edit(scope.todo._id, scope.todo, function () {
                            console.log('edited');
                        });
                    }
                    scope.editMode = !scope.editMode;
                };
            }
        };
    }]);