var app = new Vue({
  el: "#app",
  data: {
    sections: [{'name':'home','url':'#intro'},{'name':'about','url':'#about'},{'name':'contact','url':'#contact'}],
    events:[{'name':'liner','pic':'img/eventpics/liner.png','url':'liner.html','title':'Liner'},
	{'name':'Quiz','pic':'img/eventpics/quiz.png','url':'quiz.html','title':'Quiz'}],
    show:{'suppourters':'false',
	'gallery':'false',
	'schedule':'false',
    },
    venue:'ER& DCI -IT, CDAC TVM'
  },
    filters: {
    capitalize: function(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
   }
})
