var counter={template:`
    <div>
    <style>

.flip-clock__piece {
  display: inline-block;
  margin: 0 0.2vw;

  @media (min-width: 1000px) {
    margin: 0 5px;
  }
}

.flip-clock__slot {
  font-size: 1rem;
  line-height: 1.5;
  display: block;
}

@halfHeight: 0.72em;
@borderRadius: 0.15em;

.flip-card {
  display: block;
  position: relative;
  padding-bottom: @halfHeight;
  font-size: 2.25rem;
  line-height: 0.95;
}

@media (min-width: 1000px) {
  .flip-clock__slot {
    font-size: 1.2rem;
  }
  .flip-card {
    font-size: 3rem;
  }
}

.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  display: block;
  height: @halfHeight;
  color: #cca900;
  background: #222;
  padding: 0.23em 0.15em 0.4em;
  border-radius: @borderRadius @borderRadius 0 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  width: 2.1em;
  height: @halfHeight;
}

.flip-card__top-4digits,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits,
.flip-card__back-4digits::before,
.flip-card__back-4digits::after {
  display: block;
  height: @halfHeight;
  color: #cca900;
  background: #222;
  padding: 0.23em 0.15em 0.4em;
  border-radius: @borderRadius @borderRadius 0 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  width: 2.65em;
  height: @halfHeight;
}

.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits {
  color: #ffdc00;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939;
  border-radius: 0 0 @borderRadius @borderRadius;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}

.flip-card__back-bottom,
.flip-card__back-bottom-4digits {
  z-index: 1;
}

.flip-card__bottom::after,
.flip-card__back-bottom::after,
.flip-card__bottom-4digits::after,
.flip-card__back-bottom-4digits::after {
  display: block;
  margin-top: -@halfHeight;
}

.flip-card__back::before,
.flip-card__bottom::after,
.flip-card__back-bottom::after,
.flip-card__back-4digits::before,
.flip-card__bottom-4digits::after,
.flip-card__back-bottom-4digits::after {
  content: attr(data-value);
}

.flip-card__back,
.flip-card__back-4digits {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;
}

.flip-card__back::before,
.flip-card__back-4digits::before {
  position: relative;
  overflow: hidden;
  z-index: -1;
}

.flip .flip-card__back::before,
.flip .flip-card__back-4digits::before {
  z-index: 1;
  animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
  animation-fill-mode: both;
  transform-origin: center bottom;
}

.flip .flip-card__bottom,
.flip .flip-card__bottom-4digits {
  transform-origin: center top;
  animation-fill-mode: both;
  animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
}

@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
    z-index: 2;
  }
  0%,
  99% {
    opacity: 1;
  }
  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes flipBottom {
  0%,
  50% {
    z-index: -1;
    transform: rotateX(90deg);
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
    z-index: 5;
  }
}



    </style>
<div class="container flip-clock">
    <div
      v-for="data in timeData"
      v-show="show"
    >
      <span
        v-bind:key="data.label"
        class="flip-clock__piece"
        :id="data.elementId"
      >
        <span class="flip-clock__card flip-card">
          <b class="flip-card__top">{{data.current | twoDigits}}</b>
          <b
            class="flip-card__bottom"
            v-bind:data-value="data.current | twoDigits"
          ></b>
          <b
            class="flip-card__back"
            v-bind:data-value="data.previous | twoDigits"
          ></b>
          <b
            class="flip-card__back-bottom"
            v-bind:data-value="data.previous | twoDigits"
          ></b>
        </span>
        <span class="flip-clock__slot">{{data.label}}</span>
      </span>
    </div>
  </div>
  </div>

    `,
props: {
    deadline: {
      type: String
    },
    stop: {
      type: Boolean
    },
    labels: {
      type: Object,
      required: false,
      default: function () {
        return {
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds"
        }
      }
    }
  },
data: function() {
    const uuid = 'test';
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      interval: null,
      diff: 0,
      show: true,
      timeData: [
        {
          current: 0,
          previous: 0,
          label: this.labels.days,
          elementId: "flip-card-days-" + uuid
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.hours,
          elementId: "flip-card-hours-" + uuid
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.minutes,
          elementId: "flip-card-minutes-" + uuid
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.seconds,
          elementId: "flip-card-seconds-" + uuid
        }
      ]
    }
  },
created: function() {
    if (!this.deadline) {
      throw new Error("Missing props 'deadline'")
    }
    const endTime = this.deadline
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000)
    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline'")
    }
    this.interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  mounted() {
    if (this.diff !== 0) {
      this.show = true
    }
  },
computed: { 
    seconds: function() {
      return Math.trunc(this.diff) % 60
    },
    minutes: function() {
      return Math.trunc(this.diff / 60) % 60
    },
    hours: function() {
      return Math.trunc(this.diff / 60 / 60) % 24
    },
    days: function() {
      return Math.trunc(this.diff / 60 / 60 / 24)
    }
},
watch: {
    deadline: function (newVal, oldVal) {
      const endTime = this.deadline
      this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000)
      if (!this.date) {
        throw new Error("Invalid props value, correct the 'deadline'")
      }
    },
    now(value) {
      this.diff = this.date - this.now
      if (this.diff <= 0 || this.stop) {
        this.diff = 0
        this.updateTime(3, 0)
      } else {
        this.updateTime(0, this.days)
        this.updateTime(1, this.hours)
        this.updateTime(2, this.minutes)
        this.updateTime(3, this.seconds)
      }
    }
  },
filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString()
      }
      return value.toString()
    }
  },
 methods: {
    updateTime(idx, newValue) {

      if (idx >= this.timeData.length || newValue === undefined) {
        return
      }

      if (window["requestAnimationFrame"]) {
        this.frame = requestAnimationFrame(this.updateTime.bind(this))
      }

      const d = this.timeData[idx]
      const val = newValue < 0 ? 0 : newValue
      const el = document.querySelector(`#${d.elementId}`)
      if (val !== d.current) {
        d.previous = d.current
        d.current = val

        if (el) {
          el.classList.remove("flip")
          void el.offsetWidth
          el.classList.add("flip")
        }

        if (idx === 0) {
          const els = el.querySelectorAll('span b')
          if (els) {
            for (let e of els) {
              const cls = e.classList[0]
              if (newValue / 1000 >= 1) {
                if (!cls.includes('-4digits')) {
                  const newCls = cls + '-4digits'
                  e.classList.add(newCls)
                  e.classList.remove(cls)
                }
              } else {
                if (cls.includes('-4digits')) {
                  const newCls = cls.replace('-4digits', '')
                  e.classList.add(newCls)
                  e.classList.remove(cls)
                }
              }
            }
          }
        }
      }

    }
  },
 beforeDestroy: function() {
    if (window["cancelAnimationFrame"]) {
      cancelAnimationFrame(this.frame)
    }
  },
  destroyed: function() {
    clearInterval(interval)
  }
}
var app = new Vue({
  el: "#app",
  components:{'flipCountDown':counter},
  mounted: function(){
     setTimeout(()=>{ this.showimg = true; this.showvid=false}, 35000);
  },
  data: {
  	sponsors:[
  {"name":"Kerala state IT MISSION",
  "url":"https://itmission.kerala.gov.in",
  "pic": "img/sponsor/keralaIT.png",
 "bethestark":"true"},
  {"name":"Kerala Startup Mission",
    "url":"https://startupmission.kerala.gov.in",
  "pic":"img/sponsor/keralaStartup.jpg","hide":"false","pitch":"true"},
  {"name":"genrobotics",
   "url":"https://www.genrobotics.org/",
   "pic":"img/sponsor/genrobotics.png",
  "hide":"false",
  "liner":"true"},
  {"name":"indus motor",
  "url":"https://www.indusmotor.com",
  "pic": "img/sponsor/indus.jpg","hide":"false"},
  {"name":"t7",
      "url":"https://www.t7wealth.com",
      "pic":"img/sponsor/t7.png?=update","qriosity":"true","electricuit":"true","resist":"true"},
  {"name":"IEEE Kerala",
      "url":"https://ieeekerala.org",
  "pic":"img/sponsor/ieee.jpg"
  },
  {"name":"system operating center",
  "url":"http://soccomputers.com/",
  "pic":"img/sponsor/soc.jpg"},
	{"name":"greenbergresorts","url":"http://greenbergresorts.com/",
	"pic":"img/sponsor/green.png"},
{
  "name":"Pagoto",
  "url":"https://www.instagram.com/thepagotowagon",
  "pic": "img/sponsor/pagoto.png"},

  {"name":"sbi life","url":"https://www.sbilife.co.in/",
	"pic":"img/sponsor/sbilife.png","hide":"true"},
	{"name":"Dar Es Salam Resto","url":"https://www.facebook.com/pg/daressalaamresto/about",
	"pic":"img/sponsor/multicusine.png"},
	{"name":"OJ Studio","url":"https://instagram.com/oj_films_",
	"pic":"img/sponsor/ojfilms.png"},
  {
  "name":"LAB1 Global Bussiness Solutions",
  "url":"",
  "pic": "img/sponsor/labone.jpeg"},
  {
  "name":"Trivandrum Chicken Corner",
  "url":"https://www.facebook.com/pages/category/Chicken-Joint/Trivandrum-Chicken-Corner-786682971465919/",
  "pic": "img/sponsor/tvmchicken.png"},
	{
  "name":"Romansons",
  "url":"https://www.romansons.net",
  "pic": "img/sponsor/romansons.jpg"}
	],
    domain:'trika.org.in',
    port:'',
    tagline:"Next dimension of technology",
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
    },
    schedule:{
	'day1': [
	{'name':'Technical Conference','day1':'11.00 am - 5.00 pm','url':'conf.html'},
	{'name':'Resist The Flow','day1':'10 am - 12.00 pm','url':'resist.html'},
	{'name':'Electricuit','day1':'2.00 pm - 3.00 pm','day2':'9.00 am -10.00 am','url':'electricuit.html'},
	{'name':'Pitch Perfect','day1':'2.00 pm - 5.00 pm','url':'pitch.html'},
	{'name':'Be The Stark','day1':'3.00 pm - 5.00 pm','day2':'2.00 pm - 4.00 pm','url':'bethestark.html'},
	],
	'day2': [
	{'name':'Workshop','day2':'9.00 am - 4.30 pm','url':'work.html'},
	{'name':'Electricuit','day1':'2.00 pm - 3.00 pm','day2':'9.00 am - 12.00 pm','url':'electricuit.html'},
	{'name':'Liner','day2':'9.00 am - 10.00 am','url':'liner.html'},
	{'name':'Pitch Perfect','day1':'2.00 pm - 5.00 pm','day2':'10 am - 12.00 pm','url':'pitch.html'},
	{'name':'Qriosity','day2':'10.00 am - 3.00 pm','url':'qriosity.html'},
	{'name':'Be The Stark','day1':'3.00 pm - 5.00 pm','day2':'2.00 pm - 4.00 pm','url':'bethestark.html'},
	]
    },
    events:[
	{'selectedindividual':false,'selectedgroup':false,'closed':'true','name':'Photography','lr':'img/eventpicslr/photo.jpg','pic':'img/eventpics/photo.jpg','url':'photo.html','title':'Photography','tagline':'"Taking an image, freezing a moment, reveals how rich reality truly is"'},
	{'selectedindividual':false,'selectedgroup':false,'amount':0,'limit':4,'count':0,'active':'true','name':'Liner','lr':'img/eventpicslr/liner.png','pic':'img/eventpics/liner.png','url':'liner.html','title':'Liner','tagline':'"Robots will light up the track"','fee':200,'disc':150,'groupdesc':'maximum group of 4'},
	{'selectedindividual':false,'selectedgroup':false,'team':'true','description':'competition for team of two','amount':0,'active':'true','name':'Qriosity','lr':'img/eventpicslr/quriosity.png','pic':'img/eventpics/quriosity.png','url':'quiz.html','title':'Qriosity','tagline':'"Prove your knowledge"','fee':100},
	{'selectedindividual':false,'selectedgroup':false,'amount':0,'group':'true','active':'true','name':'Be The Stark','lr':'img/eventpicslr/bethestark.png','pic':'img/eventpics/bethestark.png','url':'bethestark.html','title':'Be The Stark','tagline':'"Show you are worthy"','fee':150,'day1':'3:00 pm - 5:00 pm'},
	{'selectedindividual':false,'selectedgroup':false,'amount':0,'group':'true','active':'true','name':'Pitch Perfect','lr':'img/eventpicslr/pitch.png','pic':'img/eventpics/pitch.png','url':'pitch.html','title':'Pitch Perfect','tagline':'"Sell your idea "','fee':200,'day1':'2:00 pm - 5:00 pm'},
	{'selectedindividual':false,'selectedgroup':false,'team':'true','amount':0,'group':'true','active':'true','name':'Electricuit','lr':'img/eventpicslr/electricuit.png','pic':'img/eventpics/electricuit.png','url':'electricuit.html','title':'Electricuit','tagline':'"Bug the bugs"','fee':250,'day1':'2:00 pm - 3:00 pm'},
	{'selectedindividual':false,'selectedgroup':false,'amount':0,'active':'true','name':'Resist The Flow','lr':'img/eventpicslr/resisttheflow.png','pic':'img/eventpics/resisttheflow.png','url':'resist.html','title':'Resist The Flow','tagline':'"Block it like ohm"','fee':100},
	{'selectedindividual':false,'selectedgroup':false,'amount':0,'active':'true','name':'Technical Conference','lr':'','pic':'img/eventpics/talk.png','url':'conf.html','title':'Technical Conference','tagline':'','fee':300,'disc':750,'groupdesc':'group of 3','limit':-1},
	{'selectedindividual':false,'selectedgroup':false,'amount':0,'active':'true','name':'Workshop','lr':'','pic':'img/eventpics/workshop.png','url':'work.html','title':'Workshop','tagline':'','fee':300,'disc':750,'groupdesc':'group of 3','limit':-1}
    ],
    value:'',
    aboutus:[
	{
	    'title':'TRIKA 2020',
	    'text':'TRIKA 2020 is a technical fest conducted by Department of Electronics, ER&DCI Institute of Technology. The event involves various competitions to test the technical skills of participants and their readiness to face a competitive and evolving technology scenario. It also includes a hands on session and endeavors to bring industry closer to academia to face the technology challenges that we continue to face. TRIKA 2020 is an effort to allow the wider student community to leverage the opportunity of interacting with technology experts within the CDAC community by bringing them together on the same platform.'},
	{
	'title':'CDAC',
	'text':'Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY), Government of India, for carrying out R&D in IT, Electronics and associated areas. CDAC is registered as a scientific society with headquarters in Pune. The centre at Thiruvananthapuram has a VLSI/ASIC design center, PCB-CAD facility, DSP lab, Industrial design facility, Pilot production facility and a Technology information center. Apart from the above, centre is also having National Resource center for computing in Malayalam, Resource Centre for Cyber Forensics, National Mission on Power Electronics Technology (NaMPET), Automation Systems Technology Centre (ASTeC), and Intelligent Transportation System (ITS).'},
	{
	    'title':'ER&DCI Institute of Technology',
	    'text':'ER&DCI Institute of Technology is the academic wing of Centre for Development of Advanced Computing (CDAC) Thiruvananthapuram(Vellayambalam). The institute offers postgraduate programs in VLSI & Embedded Systems and Cyber Forensic & Information Security and is affiliated with APJ Abdul Kalam Technological University. The meritorious students of both M.Tech courses will get a chance to do their academic projects as part of the live projects in CDAC and get guidance from industry experts in various groups of CDAC Thiruvananthapuram. The Department of Electronics was established in the year 2006 and offers a postgraduate programme in Electronics and Communication Engineering with specialization in VLSI and Embedded Systems.'}
],
    speakers:[
	{'groupdesc':'group of 3','type':'conference','desig':'Officer in charge, Naval Technical Group, Indian Navy, Kochi','name':'Capt(IN) Bijli V.M, Officer in charge, Naval Technical Group, Indian Navy, Kochi','pic':'img/eventpics/bijli.jpg','url':'bijli.html','title':'Introduction To Hardware Reliability Tools','show':'true'},
	{'groupdesc':'group of 3','type':'conference','name':'Mr. Biju Nair, CTO ALpha Ori Technologies, Silicon Valley, USA','pic':'img/eventpics/biju.jpeg','url':'biju.html','title':'Industry 4.0: A Preview On Industrial Iot','show':'true'},
	{'groupdesc':'group of 3','type':'conference','name':'Dr. Brijesh Madhavan, CEO, Curvelogics, Tehcnopark','pic':'img/eventpics/brijesh.jpeg','url':'brijesh.html','title':'Role of AI in Electronics Industry Of The Future','show':'true'},
	{'groupdesc':'group of 3','type':'workshop','name':'Libin TT, Hardware Design Group, CDAC, Thrivananthapuram','pic':'img/eventpics/libint.jpg','url':'libin.html','title':'Microprocessor Architecture And Implementations','show':'true'}

    ],
    address:'ER&DCI Institute of Technology CDAC Campus Vellayambalam Thiruvananthapuram India, PIN - 695033',
    contact:'Ananth: 9188728597 Girish: 9497270564',
      Email: 'trika2k20@gmail.com',
      home:'index.html',
     accountDetails:'A/C Name: DEP OF ECE ER DCI IT, A/C Number: 40192010011484, IFSC Code: SYNB0004019, Bank: Syndicate Bank, Branch: CDAC CAMPUS, Vellayamablam',
    showimg:false,
    showvid:true,
    total:0,
    workshop:[
	{'groupdesc':'group of 3','title':'Day-1:Introduction To Hardware Reliability Tools , Industry 4.0: A Preview On Industrial Iot Role of AI in Electronics Industry Of The Future (food included)','fee':500,'disc':1250},
	{'groupdesc':'group of 3','title':'Microprocessor Architecture and implementation(food included)','fee':500,'disc':1250}
    ]
  },
  methods:{
      addAmount: function(event){
	  event.selectedindividual=true;
	  this.total=Number(this.total)+Number(event.fee);
	  event.amount=event.amount+event.fee;
      },
      remove: function(event){
	  event.selectedindividual=true;
	  this.total=Number(this.total)+Number(event.fee);
	  if (this.total-Number(event.fee)>=0){
	    this.total=this.total-Number(event.fee);
	    event.amount=event.amount- event.fee;
	  }
      }, 
      reset: function(){
	  this.total=0;
	    this.events.forEach(function(event,index){ event.amount=0;})
	    this.events.forEach(function(event,index){ event.count=0;})
      },
      inc: function(event){
	  event.selectedgroup=true;
	  if (event.count+1<= event.limit && event.limit!= -1){
	  	      if (event.count<2){
		  event.count=2;
		  this.total=Number(this.total)+Number(event.disc*2);
		  event.amount=event.amount+event.disc*2;
	      }else{
		  event.count=event.count+1;
		  this.total=Number(this.total)+Number(event.disc);
		  event.amount=event.amount+event.disc;
	      }
	  }else{
		  this.total=Number(this.total)+Number(event.disc);
		  event.amount=event.amount+event.disc;
	  }
      },
      dec: function(event){
	  event.selectedgroup=true;
	  if (event.limit!=-1){
	    if (event.count<=2){
		if (event.count==2){
		    event.count=0;
		    this.total=Number(this.total)- Number(event.disc*2);
		    event.amount=event.amount-event.disc*2;
		}
	    }else{
		event.count=event.count-1;
		this.total=Number(this.total)- Number(event.disc);
		event.amount=event.amount-event.disc;
	    }
	  }else{
	      if (this.total-event.disc>=0){
		this.total=Number(this.total)- Number(event.disc);
		event.amount=event.amount-event.disc;
	      }
	  }
      }
  },
   filters: {
    capitalize: function(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
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
