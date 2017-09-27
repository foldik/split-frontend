var activitiesContainer = new Vue({
    el: '#activity_container',
    data: {
        activities: []
    }
});

var addActivityForm = new Vue({
    el: '#add-activity-form',
    data: {
        activityName: ''
    },
    methods: {
        addActivity: function() {
            var activityName = this.activityName;
            activitiesContainer.activities.unshift({
                title: activityName,
                timeinterval: moment().format('HH:mm') + ' - Present',
                description: 'Lorem impsumdolores sit on tus. Eta us peru kamisu sit misu lor. Put ron lori annaku puksa imprum elimbu.'
            });
            this.activityName = '';
        }
    }
})