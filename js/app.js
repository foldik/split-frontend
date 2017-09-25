function addActivity() {
    var activityName = document.getElementById('activityNameInput').value;
    var time = moment().format('HH:mm:ss');

    var card = d3.select('#activity-container')
        .append('div')
        .attr('class', 'card')
        .append('div')
        .attr('class', 'card-body');

    card.append('h5')
        .attr('class', 'card-title')
        .text(activityName);

    card.append('h6')
        .attr('class', 'card-subtitle mb-2 text-muted')
        .text(time + ' - Present');

    document.getElementById('activityNameInput').value = '';

}