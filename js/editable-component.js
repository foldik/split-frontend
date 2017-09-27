Vue.component('editable', {
    template: `
    <div ref="input" v-bind:value="value" v-on:input="updatedValue($event.target.innerHTML)" contenteditable="true" data-text="Give a description to this activity"></div>
    `,
    props: ['value'],
    mounted: function() {
        this.$el.innerText = this.value;
    },
    methods: {
        updatedValue: function(newValue) {
            this.$emit('input', newValue)
        }
    }
})