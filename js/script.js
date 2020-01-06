var app = new Vue({
  el: "#app",
  data: {
    sections: [{'name':'home','url':'#intro'},{'name':'about','url':'#about'},{'name':'contact','url':'#contact'}],
    events:[{'name':'liner','pic':'img/eventpics/liner.png','url':'linefollower.html','title':'Line Follower'},
	{'name':'Quiz','pic':'img/eventpics/quiz.png','url':'quiz.html','title':'Quiz'}],
    venue:'ER& DCI -IT, CDAC TVM'
  }
})
