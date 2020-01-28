var app = new Vue({
  el: "#app",
  mounted: function(){
     setTimeout(()=>{ this.showimg = true; this.showvid=false}, 35000);
  },
  data: {
    tagline:"Next dimension of technology",
    sections:{ 
	'home': {'name':'home',
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
	    'url':'https://docs.google.com/forms/d/e/1FAIpQLSdSsqNxBCOuvOJWzE1NeUUfiT16vjAEpXNRWnzwfKV4W9Ve0Q/viewform?usp=sf_link',
	    'show':'false'},
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
	    'show':'true'}
    },

    events:[
	//{'name':'Photography','lr':'img/eventpicslr/photo.jpg','pic':'img/eventpics/photo.jpg','url':'photo.html','title':'Photography','tagline':'"Taking an image, freezing a moment, reveals how rich reality truly is"'},
	{'name':'Liner','lr':'img/eventpicslr/liner.png','pic':'img/eventpics/liner.png','url':'liner.html','title':'Liner','tagline':'"Robots will light up the track"','fee':200,'disc':150},
	{'name':'Qriosity','lr':'img/eventpicslr/quriosity.png','pic':'img/eventpics/quriosity.png','url':'quiz.html','title':'Qriosity','tagline':'"Prove your knowledge"','fee':200},
	{'name':'Be The Stark','lr':'img/eventpicslr/bethestark.png','pic':'img/eventpics/bethestark.png','url':'bethestark.html','title':'Be The Stark','tagline':'"Show you are worthy"','fee':300},
	{'name':'Pitch Perfect','lr':'img/eventpicslr/pitch.png','pic':'img/eventpics/pitch.png','url':'pitch.html','title':'Pitch Perfect','tagline':'"Sell your idea "','fee':200},
	{'name':'Resist The Flow','lr':'img/eventpicslr/resisttheflow.png','pic':'img/eventpics/resisttheflow.png','url':'resist.html','title':'Resist The Flow','tagline':'"Block it like ohm"','fee':100},
	{'name':'Electricuit','lr':'img/eventpicslr/electricuit.png','pic':'img/eventpics/electricuit.png','url':'electricuit.html','title':'Electricuit','tagline':'"Bug the bugs"','fee':250}
    ],
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
	{'type':'conference','name':'Capt(IN) Bijli V.M','pic':'img/eventpics/bijli.jpg','url':'bijli.html','title':'Introduction To Hardware Reliability Tools','show':'true'},
	{'type':'conference','name':'Mr. Biju Nair','pic':'img/eventpics/biju.jpeg','url':'biju.html','title':'Industry 4.0: A Preview On Industrial Iot','show':'true'},
	{'type':'conference','name':'Dr. Brijesh Madhavan','pic':'img/eventpics/brijesh.jpeg','url':'brijesh.html','title':'Role of AI in Electronics Industry Of The Future','show':'true'},
	{'type':'workshop','name':'Libin TT','pic':'img/eventpics/libint.jpg','url':'libin.html','title':'Microprocessor Architecture And Implementations','show':'true'}

    ],
    address:'ER&DCI Institute of Technology CDAC Campus Vellayambalam Thiruvananthapuram India, PIN - 695033',
    contact:'Ananth: 9188728597 Girish: 9497270564',
      Email: 'trika2k20@gmail.com',
      home:'index.html',
     accountDetails:'',
    showimg:false,
    showvid:true,
    total:0,
    workshop:[
	{'title':'Day-1:Introduction To Hardware Reliability Tools , Industry 4.0: A Preview On Industrial Iot Role of AI in Electronics Industry Of The Future (food included)','fee':500,'discfee':1250},
	{'title':'Microprocessor Architecture and implementation(food included)','fee':500,'discfee':1250}
    ]
  },
  methods:{
      addAmount: function(amount){
	  console.log(amount)
	  this.total=Number(this.total)+Number(amount);
      },
      remove: function(amount){
	  if (this.total-Number(amount)>0){
	    this.total=this.total-Number(amount);
	  }
      }, 
      reset: function(){
	  this.total=0;
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
