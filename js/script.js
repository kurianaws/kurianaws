var app = new Vue({
  el: "#app",
  mounted: function(){
     setTimeout(()=>{ this.showimg = true; this.showvid=false}, 35000);
  },
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
	{'name':'Liner','pic':'img/eventpics/liner.png','url':'liner.html','title':'Liner','tagline':'"Robots will light up the track"'},
	{'name':'Qriosity','pic':'img/eventpics/quriosity.png','url':'quiz.html','title':'Qriosity','tagline':'"Prove your knowledge"'},
	{'name':'Be The Stark','pic':'img/eventpics/bethestark.png','url':'bethestark.html','title':'Be The Stark','tagline':'"Show you are worthy"'},
	{'name':'Pitch Perfect','pic':'img/eventpics/pitch.png','url':'pitch.html','title':'Pitch Perfect','tagline':'"Sell your idea "'},
	{'name':'Resist The Flow','pic':'img/eventpics/resisttheflow.png','url':'resist.html','title':'Resist The Flow','tagline':'"Block it like ohm"'},
	{'name':'Electricuit','pic':'img/eventpics/electricuit.png','url':'electricuit.html','title':'Electricuit','tagline':'"Bug the bugs"'}
    ],
    aboutus:[
	{
	'title':'CDAC',
	'text':'Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY), Government of India, for carrying out R&D in IT, Electronics and associated areas. CDAC is registered as a scientific society with headquarters in Pune. The centre at Thiruvananthapuram has a VLSI/ASIC design center, PCB-CAD facility, DSP lab, Industrial design facility, Pilot production facility and a Technology information center. Apart from the above, centre is also having National Resource center for computing in Malayalam, Resource Centre for Cyber Forensics, National Mission on Power Electronics Technology (NaMPET), Automation Systems Technology Centre (ASTeC), and Intelligent Transportation System (ITS).'},
	{
	    'title':'ER&DCI Institute of Technology',
	    'text':'ER&DCI Institute of Technology is the academic wing of Centre for Development of Advanced Computing (CDAC) Thiruvananthapuram. The institute offers postgraduate programs in VLSI & Embedded Systems and Cyber Forensic & Information Security and is affiliated with APJ Abdul Kalam Technological University. The meritorious students of both M.Tech courses will get a chance to do their academic projects as part of the live projects in CDAC and get guidance from industry experts in various groups of CDAC Thiruvananthapuram. The Department of Electronics was established in the year 2006 and offers a postgraduate programme in Electronics and Communication Engineering with specialization in VLSI and Embedded Systems.'},
	{
	    'title':'TRIKA 2020',
	    'text':'TRIKA 2020 is a technical fest conducted by Department of Electronics, ER&DCI Institute of Technology. The event involves various competitions to test the technical skills of participants and their readiness to face a competitive and evolving technology scenario. It also includes a hands on session and endeavors to bring industry closer to academia to face the technology challenges that we continue to face. TRIKA 2020 is an effort to allow the wider student community to leverage the opportunity of interacting with technology experts within the CDAC community by bringing them together on the same platform.'}],
    showimg:false,
    showvid:true,
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
