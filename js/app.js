var card_text_count = 0;

function addActivity() {
    var activityName = document.getElementById('activityNameInput').value;
    var time = moment().format('HH:mm:ss');
    var id = 'card-text-' + card_text_count;
    var card = d3.select('#activity-container')
        .append('div')
        .attr('class', 'card')
        .append('div')
        .attr('class', 'card-body')
        .attr('data-toggle', 'collapse')
        .attr('data-target', '#' + id)
        .attr('aria-expanded', 'false')
        .attr('aria-controls', id);

    card.append('h5')
        .attr('class', 'card-title')
        .text(activityName);

    card.append('h6')
        .attr('class', 'card-subtitle mb-2 text-muted')
        .text(time + ' - Present');

    card.append('p')
        .attr('class', 'collapse')
        .attr('id', id)
        .text('Lorem dorsum ilires sot ipo catus mchecntus sipalis aarus gettus faternus. Sit Dolores perus.');

    card_text_count = card_text_count + 1;

    document.getElementById('activityNameInput').value = '';

}