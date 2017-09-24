myAppmodule.config(function ($stateProvider) {
    var profileState = {
        name: 'profile',
        url: '/profile/:id',
        template: function ($stateParams) {
            return `<div class="students">
                        <figure>
                            <img src="{{students[${$stateParams.id}].photo}}">
                            <figcaption>{{students[${$stateParams.id}].name}} {{students[${$stateParams.id}].surname}}</figcaption>
                            <figcaption>Date of birth: {{students[${$stateParams.id}].date_of_birth}}</figcaption>
                            <figcaption>Phone number: {{students[${$stateParams.id}].phone}}</figcaption>
                        </figure
                    </div>`
        },
        controller: 'studentsController',
    }

    var home = {
        name: 'home',
        url: '/',
        template: `<div class="students">
                    <students-directive  ng-repeat="student in students" name="student.name" surname="student.surname" photo="student.photo" id="student.id"></students-directive>
                </div>`,
        controller: 'studentsController',
    }

    $stateProvider.state(home);
    $stateProvider.state(profileState);
});