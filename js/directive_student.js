myAppmodule.directive('studentsDirective', function() {
  var directiveDefinitionObject = {
    priority: 0,
    template: `<figure>
                <img class="clickable" src="{{photo}}" alt="image" ui-sref="profile({ id: {{id}} })">
                <div>
                  <input ng-show="isEditing" ng-model="name"><br ng-show="isEditing">
                  <input ng-show="isEditing" ng-model="surname">
                </div>
                <figcaption ng-show="!isEditing">{{name}} {{surname}}</figcaption>
                <button ng-show="!isEditing" ng-click="isEditing=true">EDIT</button>
                <button ng-show="isEditing" ng-click="isEditing=false">SAVE</button>
              </figure`,
    transclude: false,
    restrict: 'E',// 'A', 'C', 'M'
    scope: {name:'=', surname:'=', photo:'=', id:'='} // true, {}

  };
  return directiveDefinitionObject;
});
