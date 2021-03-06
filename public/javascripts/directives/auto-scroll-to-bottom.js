/**
 * Created by Freeman on 2016/4/12.
 */
angular.module('NAChat').directive('autoScrollToBottom',function () {
    return {
        link:function (scope,element,attrs) {
            scope.$watch(
                function() {
                    return element.children().length;
                },
                function() {
                    element[0].scrollTop= element[0].scrollHeight-element[0].clientHeight;
                }
            );
        }
    }
});