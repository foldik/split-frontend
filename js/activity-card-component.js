Vue.component('activity-card', {
    props: ['cardId', 'activity', 'cardParent'],
    template: `
		<div class="card">
      <div class="card-header" role="tab" :id="'card-header-' + cardId" data-toggle="collapse" :href="'#card-body-' + cardId" aria-expanded="false" :aria-controls="'card-body-' + cardId">
        <h5 class="card-title">{{activity.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{activity.timeinterval}}</h6>
      </div>
      <div :id="'card-body-' + cardId" class="collapse" role="tabpanel" :aria-labelledby="'card-body-' + cardId" :data-parent="'#' + cardParent">
        <div class="card-body">
          <editable v-model="activity.description"></editable>
        </div>
      </div>
    </div>
		`
})