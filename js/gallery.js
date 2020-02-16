var app = new Vue({
  el: "#app",
  components:{'VueCarousel':'VueCarousel'},
  data: {
home:'index.html',
    sections:{ 
	'home': {
	    'name':'home',
	    'url':'#intro',
	    'show':'true'},
	'about': {'name':'about',
	    'url':'#about',
	    'show':'true'},
	'work': {'name':'speakers',
	    'url':'#work',
	    'show':'true'},
	'location': {'name':'location',
	    'url':'#location',
	    'show':'false'},
	 'Confirmation': {'name':'Confirmation',
	    'url':'https://docs.google.com/forms/d/e/1FAIpQLSd5O0gTFUBQegIuNLBh6hRjmsM0F5px9UoJPAandnDubcCt_g/viewform?usp=sf_link',
	    'show':'false'},
 	'Registration': {'name':'Registration',
	    'url':'register.html',
	    'show':'true'},
	'events': {'name':'events',
	    'url':'#events',
	    'show':'true'},
	'schedule': {'name':'schedule',
	    'url':'#schedule',
	    'show':'true'},
	'gallery': {'name':'gallery',
	    'url':'#gallery',
	    'show':'false'},
	'supporters': {'name':'supporters',
	    'url':'#supporters',
	    'show':'true'},
	'contact': {'name':'contact',
	    'url':'#contact',
	    'show':'true'}
    },  },
  methods:{
    handleSlideClick: function (dataset) {
    console.log("here")
    console.log(dataset.index, dataset.name)
   }
  },
   filters: {
}});
$(document).ready(
    function(){
	$('#overlay').fadeOut();
    window._chatlio = window._chatlio||[];
    !function(){ var t=document.getElementById("chatlio-widget-embed");if(t&&window.ChatlioReact&&_chatlio.init)return void _chatlio.init(t,ChatlioReact);for(var e=function(t){return function(){_chatlio.push([t].concat(arguments)) }},i=["configure","identify","track","show","hide","isShown","isOnline", "page", "open", "showOrHide"],a=0;a<i.length;a++)_chatlio[i[a]]||(_chatlio[i[a]]=e(i[a]));var n=document.createElement("script"),c=document.getElementsByTagName("script")[0];n.id="chatlio-widget-embed",n.src="https://w.chatlio.com/w.chatlio-widget.js",n.async=!0,n.setAttribute("data-embed-version","2.3");
       n.setAttribute('data-widget-id','4fd80f81-c2b1-4f72-5c5d-1d41cd577773');
       c.parentNode.insertBefore(n,c);
    }();
    }
)
