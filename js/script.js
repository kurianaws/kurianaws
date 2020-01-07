var app = new Vue({
  el: "#app",
  data: {
    sections:{ 
	'home': {'name':'home',
	    'url':'#intro',
	    'show':'true'},
	'about': {'name':'about',
	    'url':'#about',
	    'show':'true'},
	'events': {'name':'events',
	    'url':'#events',
	    'show':'true'},
	'schedule': {'name':'schedule',
	    'url':'#schedule',
	    'show':'false'},
	'gallery': {'name':'gallery',
	    'url':'#gallery',
	    'show':'false'},
	'supporters': {'name':'supporters',
	    'url':'#supporters',
	    'show':'false'},
	'contact': {'name':'contact',
	    'url':'#contact',
	    'show':'false'}
    },
    events:[
	{'name':'liner','pic':'img/eventpics/liner.png','url':'liner.html','title':'Liner'},
	{'name':'Quiz','pic':'img/eventpics/quiz.png','url':'quiz.html','title':'Quiz'}
    ]
  },
   filters: {
    capitalize: function(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
   }
})
