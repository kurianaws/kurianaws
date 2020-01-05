Vue.component("panel-1", {
  name: "panel-1",
  template: `
<div>
<button class="btn btn-primary" v-on:click.prevent="closePanel">
Close Panel
</button>


   <main id="main" class="main-page">

    <!--==========================
      Event details
    ============================-->
    <section id="event-details" class="wow fadeIn">
      <div class="container">
        <div class="section-header">
          <h2> Details</h2>
          <p></p>
        </div>

        <div class="row">
          <div class="col-md-6">
            <img src="img/eventpics/liner.png" alt="Speaker 1" class="img-fluid">
          </div>

          <div class="col-md-6">
            <div class="details">
              <h2>Line Follower</h2>
              <div class="social">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-google-plus"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div>
              <p></p>
            </div>
          </div>
          
        </div>
      </div>

    </section>

  </main>



  <!--==========================
    Footer
  ============================-->
  <footer id="footer"></footer><!-- #footer -->

  <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>

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


