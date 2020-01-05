Vue.component("panel-1", {
  name: "panel-1",
  template: `
<div >
<div class="event-panel">
<button class="btn btn-primary" v-on:click.prevent="closePanel">
Close
</button>


    <!--==========================
      Event details
    ============================-->
      <div class="container">
        <div class="section-header">
          <h2> Details</h2>
          <p></p>
        </div>

        <div class="row">
          <div class="col-md-6">
            <img src="img/eventpics/liner.png" alt="Speaker 1" class="img-fluid">
          </div>

          <div class="col-sm-6">
            <div class="">
              <h2>Line Follower</h2>
              <p>Hi this is what line follower is about</p>
            </div>
          </div>
          
        </div>
      </div>



</div>
</div>
`,
  data() {
    return {};
  },
  methods: {
    closePanel() {
      this.$emit("closePanel", {});
    }
  }
});




new Vue({
  el: "#app",
  data: {
    sections: [{'name':'home','url':'#intro'},{'name':'about','url':'#about'},{'name':'contact','url':'#contact'}],
    events:[{'name':'liner','pic':'img/eventpics/liner.png','url':'linefollower.html','title':'Line Follower'}],
    venue:'ER& DCI -IT, CDAC TVM',
    panel1Form: { 'openOn': "right"}
  },
  methods: {
    showPanel: function() {
      const panel = this.$showPanel({
        component: "panel-1",
        cssClass: "panel-1",
	openOn: 'right',
        props: {}
      });
    }
   }
});


