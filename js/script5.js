var app = new Vue({
  el: "#app",
  mounted: function(){
     setTimeout(()=>{ this.showimg = true; this.showvid=false}, 35000);
  },
  data: {
  	sponsors:[
  	{"name":"indus motor",
  	 "url":"https://www.indusmotor.com",
	"pic": "img/sponsor/indus.jpg"},
	{"name":"sbi life","url":"https://www.sbilife.co.in/",
	"pic":"img/sponsor/sbilife.png"},
	{"name":"system operating center","url":"http://soccomputers.com/",
	"pic":"img/sponsor/soc.jpg"},
	{"name":"genrobotics","url":"https://www.genrobotics.org/",
	"pic":"img/sponsor/genrobotics.png","hide":"true"},
	{"name":"greenbergresorts","url":"http://greenbergresorts.com/",
	"pic":"img/sponsor/green.png"},
	{"name":"Dar Es Salam Resto","url":"https://www.facebook.com/pg/daressalaamresto/about",
	"pic":"img/sponsor/multicusine.png"},
	{"name":"OJ Studio","url":"https://instagram.com/oj_films_",
	"pic":"img/sponsor/ojfilms.png"},
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
	'work': {'name':'workshops',
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
	{'name':'Technical Conference','day1':'11.00 am - 5.00 pm'},
	{'name':'Resist The Flow','day1':'10 am - 12.00 pm'},
	{'name':'Electricuit','day1':'2.00 pm - 3.00 pm','day2':'9.00 am -10.00 am'},
	{'name':'Pitch Perfect','day1':'2.00 pm - 5.00 pm'},
	{'name':'Be The Stark','day1':'3.00 pm - 5.00 pm','day2':'2.00 pm - 4.00 pm'},
	],
	'day2': [
	{'name':'Workshop','day2':'9.00 am - 4.30 pm'},
	{'name':'Electricuit','day1':'2.00 pm - 3.00 pm','day2':'9.00 am - 12.00 pm'},
	{'name':'Liner','day2':'9.00 am - 10.00 am'},
	{'name':'Pitch Perfect','day1':'2.00 pm - 5.00 pm','day2':'10 am - 12.00 pm '},
	{'name':'Qriosity','day2':'10.00 am - 3.00 pm'},
	{'name':'Be The Stark','day1':'3.00 pm - 5.00 pm','day2':'2.00 pm - 4.00 pm'},
	]
    },
    events:[
	{'closed':'true','name':'Photography','lr':'img/eventpicslr/photo.jpg','pic':'img/eventpics/photo.jpg','url':'photo.html','title':'Photography','tagline':'"Taking an image, freezing a moment, reveals how rich reality truly is"'},
	{'amount':0,'limit':4,'count':0,'active':'true','name':'Liner','lr':'img/eventpicslr/liner.png','pic':'img/eventpics/liner.png','url':'liner.html','title':'Liner','tagline':'"Robots will light up the track"','fee':200,'disc':150,'groupdesc':'maximum group of 4'},
	{'team':'true','description':'competition for team of two','amount':0,'active':'true','name':'Qriosity','lr':'img/eventpicslr/quriosity.png','pic':'img/eventpics/quriosity.png','url':'quiz.html','title':'Qriosity','tagline':'"Prove your knowledge"','fee':200},
	{'amount':0,'group':'true','active':'true','name':'Be The Stark','lr':'img/eventpicslr/bethestark.png','pic':'img/eventpics/bethestark.png','url':'bethestark.html','title':'Be The Stark','tagline':'"Show you are worthy"','fee':300,'day1':'3:00 pm - 5:00 pm'},
	{'amount':0,'group':'true','active':'true','name':'Pitch Perfect','lr':'img/eventpicslr/pitch.png','pic':'img/eventpics/pitch.png','url':'pitch.html','title':'Pitch Perfect','tagline':'"Sell your idea "','fee':200,'day1':'2:00 pm - 5:00 pm'},
	{'team':'true','amount':0,'group':'true','active':'true','name':'Electricuit','lr':'img/eventpicslr/electricuit.png','pic':'img/eventpics/electricuit.png','url':'electricuit.html','title':'Electricuit','tagline':'"Bug the bugs"','fee':250,'day1':'2:00 pm - 3:00 pm'},
	{'amount':0,'active':'true','name':'Resist The Flow','lr':'img/eventpicslr/resisttheflow.png','pic':'img/eventpics/resisttheflow.png','url':'resist.html','title':'Resist The Flow','tagline':'"Block it like ohm"','fee':100},
	{'amount':0,'active':'true','name':'Technical Conference','lr':'','pic':'img/eventpics/talk.png','url':'conf.html','title':'Technical Conference','tagline':'','fee':500,'disc':1250,'groupdesc':'group of 3','limit':-1},
	{'amount':0,'active':'true','name':'Workshop','lr':'','pic':'img/eventpics/workshop.png','url':'work.html','title':'Workshop','tagline':'','fee':500,'disc':1250,'groupdesc':'group of 3','limit':-1}
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
	  this.total=Number(this.total)+Number(event.fee);
	  event.amount=event.amount+event.fee;
      },
      remove: function(event){
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
    }
)
