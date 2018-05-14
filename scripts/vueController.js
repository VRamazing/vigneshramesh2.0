new Vue({
  el: '#myApp',
  data: {
    projects: [
      { image: "images/sabrang1.gif",
        title: "Sabrang",
        oneLineDesc: "A static event based website created for live deployment",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Bootstrap", "Jquery"],
        liveLink: "http://www.vigneshramesh.in/sabrang2015",
        gitLink: "https://github.com/VRamazing/sabrang2015",
        fullDesc: ["Mobile responsive Design", 
                   "Designed with user experience in mind", 
                   "Template coded from scratch", 
                   "Coordinated with a group of 5 people", 
                   "The site recieved 5000+ Visits"]    
      },

      { image: "images/tsms.gif",
        title: "Timestamp Microservice",
        oneLineDesc: "A handy api to parse timestamp input and get timestamp output",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Node.js", "Javascript"],
        liveLink: "https://tstmp-micro.herokuapp.com/",
        gitLink: "https://github.com/VRamazing/timestampMicro",
        fullDesc: ["Api takes string as a parameter and checks to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016) and returns likewise", 
                   "Created using Node.js"]    
      },

      { image: "images/quoteApp.gif",
        title: "Random Quote Machine",
        oneLineDesc: "A web app which generates random motivational quotes with a click of button",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", " Jquery", "Node.js" , "Angular.js"],
        liveLink: "https://quotes-gen.herokuapp.com/",
        gitLink: "https://github.com/VRamazing/RandomQuoteGenerator",
        fullDesc: ["Mobile responsive material design", 
                   "Ability to tweet directly from application using twitter api",
                   "Feature to fork the project and make personal changes",
                   ]    
      },

      { image: "images/devmeetup.gif",
        title: "Meetup Planner",
        oneLineDesc: "A handy meetup planner web app",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Vuejs", "Vuetify" , "Firebase"],
        liveLink: "",
        gitLink: "https://github.com/VRamazing/vuetify-meetup",
        fullDesc: ["Mobile responsive material design", 
                   "User can plan and register for a new meetup",
                   "User can scroll through various meetups",
                   "Signin and signup functionality supported for new users via firebase"
                   ]    
      },

      { image: "images/wiki.gif",
        title: "Wiki Viewer",
        oneLineDesc: "A web application to browse and search wikipedia articles or view a random article",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Bootstrap", "Jquery" , "Angular.js"],
        liveLink: "https://codepen.io/techievignesh/full/dzrpLz/",
        gitLink: "https://github.com/VRamazing/WikiViewer",
        fullDesc: ["Search button and random button for searching respective articles.", 
                   "Mobile responsive design",
                   "Created using mediawiki api",
                   "Designed keeping user experience in mind"
                   ]    
      },

      { image: "images/igp.gif",
        title: "Indian Game Project",
        oneLineDesc: "A personal gaming initiative to help promote games that promote Indian Culture",
        roles: ["Core programming" , "UX/UI Design", "Project Lead"],
        techUsed: ["Html5", "Css3", "Bootstrap", "Jquery"],
        liveLink: "http://www.igameproject.com",
        gitLink: "https://github.com/igameproject/igameproject.github.io",
        fullDesc: ["IGP is an initiative started by me to create games catering to create awareness about social and economic cause. ", 
                   "A future goal is to bring in the showcase authentic heritage of India via games",
                   "Includes mobile responsive design",
                   "Template coded from scratch"
                   ]    
      },

      { image: "images/rhcp.gif",
        title: "Request Header Parser",
        oneLineDesc: "A web app which parses request header and displays ip-address, system config and language of user",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Node.js", "Javascript"],
        liveLink: "https://rhpmc.herokuapp.com/",
        gitLink: "https://github.com/VRamazing/RHP-MicroService",
        fullDesc: ["Mobile responsive design ", 
                   "Cross platform compatible"
                   ]    
      },

      { image: "images/weatherApi.gif",
        title: "Weather Extension",
        oneLineDesc: "An extension which uses location api to display weather in your region",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Materialize-css", "Javascript"],
        liveLink: "https://codepen.io/techievignesh/full/brZdyV/",
        gitLink: "https://codepen.io/techievignesh/pen/brZdyV",
        fullDesc: ["Mobile responsive design", 
                   "Cross platform compatible",
                   ]    
      },

      { image: "images/twitchTV.gif",
        title: "Twitch TV Console",
        oneLineDesc: "A web application which uses twitch tv api to show which users are currently streaming and which users are not",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Bootstrap", "Jquery", "Angular.js"],
        liveLink: "https://codepen.io/techievignesh/full/NvmNvm",
        gitLink: "https://github.com/VRamazing/Twitch-Tv-Remote",
        fullDesc: ["Responsive filters to switch between online and offline users", 
                   "Quick link to view respective channel",
                   "Mobile responsive design",
                   "Cross platform compatible"
                  ]    
      },

      { image: "images/calculator.gif",
        title: "Calculator",
        oneLineDesc: "A fun way to calculate with Javascript",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Bootstrap", "Jquery"],
        liveLink: "https://codepen.io/techievignesh/full/JybNZZ/",
        gitLink: "https://github.com/VRamazing/Calc-Extension",
        fullDesc: ["A basic calculator", 
                   "Mobile responsive design",
                   "Cross platform compatible",
                   "Coded from scratch"
                  ]    
      },

      { image: "images/breakout.gif",
        title: "Breakout",
        oneLineDesc: "A recreation 80's classic using Html canvas 2d",
        roles: ["Game programming", "Music/Sound Creation", "Game Art", "Project Lead"],
        techUsed: ["Html5", "Canvas", "Javascript"],
        liveLink: "http://igameproject.com/Breakout/",
        gitLink: "https://github.com/igameproject/Breakout",
        fullDesc: ["26+ levels ,5+ powerups, 3 lives to create highscore", 
                   "Inspired by atari breakout 1980's",
                   "Playable in browser"
                  ]    
      },

      { image: "images/pomodoro.gif",
        title: "Pomodoro Timer",
        oneLineDesc: "An animated pomodoro web app",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Bootstrap", "Angular.js"],
        liveLink: "https://codepen.io/techievignesh/full/PJwXJd/",
        gitLink: "https://codepen.io/techievignesh/pen/PJwXJd/",
        fullDesc: ["Mobile responsive design", 
                   "Custom pomodoro timer and breaktime",
                   "Includes animated progress bar",
                  ]    
      },

      { image: "images/snake.gif",
        title: "Snake",
        oneLineDesc: "A 2D canvas recreation for original snake game",
        roles: ["Game programming", "Game Art", "Project Lead"],
        techUsed: ["Html5", "Css3", "Bootstrap", "Angular.js"],
        liveLink: "http://igameproject.com/snake2d/",
        gitLink: "https://github.com/igameproject/snake2d",
        fullDesc: ["Inspired from original snake", 
                   "3 Lives to create highscore",
                   "Playable in browser"
                  ]    
      },


      { image: "images/memory.gif",
        title: "Memory Puzzle",
        oneLineDesc: "An interactive memory card game inspired by tech - companies",
        roles: ["Game programming", "Game Art", "Project Lead"],
        techUsed: ["Html5", "Css3", "JQuery"],
        liveLink: "http://igameproject.com/Memory-Game/",
        gitLink: "https://github.com/igameproject/Memory-Game",
        fullDesc: ["Responsive tileset and design", 
                   "Playable in browser",
                  ]    
      },

      { image: "images/lineball.gif",
        title: "Line Ball",
        oneLineDesc: "A basic 2D game inspired from Line Birds",
        roles: ["Game programming", "Game Art", "Project Lead"],
        techUsed: ["Html5", "Css3", "Javascript"],
        liveLink: "http://igameproject.com/line-ball/",
        gitLink: "https://github.com/igameproject/line-ball",
        fullDesc: ["Inspired from Line birds", 
                   "3 Lives to create highscore",
                   "Unlimited Gameplay",
                   "Playable in browser"
                  ]    
      },

      { image: "images/blog.gif",
        title: "React Blog",
        oneLineDesc: "A dynamic blog for creating and maintaining posts",
        roles: ["Core programming" , "UX/UI Design"],
        techUsed: ["Html5", "Css3", "Javascript", "Material-UI", "Firebase"],
        liveLink: "http://igameproject.com/line-ball/",
        gitLink: "https://github.com/igameproject/line-ball",
        fullDesc: ["Inspired from Line birds", 
                   "3 Lives to create highscore",
                   "Unlimited Gameplay",
                   "Playable in browser"
                  ]    
      },

      { image: "images/sea.gif",
        title: "Sea Officially Lost",
        oneLineDesc: "This is an underwater survival horror game!  Player has to learn what happened to the rest of the crew and while trying to avoid their fate in the process",
        roles: ["3D Modeling" , "Music", "Voice Acting"],
        techUsed: ["Unity 3D", "Blender", "PhotoShop", "Audacity", "Team Member"],
        liveLink: "https://lanthos.itch.io/sea-officially-lost",
        gitLink: "",
        fullDesc: ["A 3d survival first person horror game", 
                   "Created with a team of 18 people",
                   "Coordinated round the clock and provided remote assistance",
                   "Cross platform compatible"
                  ]    
      },

      { image: "images/tatooine.gif",
        title: "Save Tatooine",
        oneLineDesc: "A space shooter tower defence game",
        roles: ["Game programming", "Game Art", "Music, SFX"],
        techUsed: ["Javascript", "PhotoShop", "Audacity"],
        liveLink: "http://igameproject.com/saveTatooine/",
        gitLink: "https://github.com/igameproject/saveTatooine",
        fullDesc: ["A tower defence space shooter game", 
                   "Objective of the game is survive the attacks by incoming spaceship",
                   "Includes 5+ powerups",
                   "Includes Multiple enemies and attack modes"
                  ]    
      },

      { image: "images/social.gif",
        title: "Social Network Analysis",
        oneLineDesc: "Social network analysis of a twitter account",
        roles: ["Core Programming", "Data Visualization", "Data Analysis"],
        techUsed: ["Python", "Tweapy", "Gephi"],
        liveLink: "",
        gitLink: "https://github.com/VRamazing/TweapyAnalysis",
        fullDesc: ["A tower defence space shooter game", 
                   "Objective of the game is survive the attacks by incoming spaceship",
                   "Includes 5+ powerups",
                   "Includes Multiple enemies and attack modes"
                  ]    
      },

      { image: "images/temperature.gif",
        title: "Temperature Data Analysis",
        oneLineDesc: "Analysing and comparing temperature data between 2005-2014 for delhi ncr,india",
        roles: ["Core Programming", "Data Visualization", "Data Analysis"],
        techUsed: ["Python", "MatplotLib", "Pandas"],
        liveLink: "",
        gitLink: "https://github.com/VRamazing/TweapyAnalysis",
        fullDesc: ["Dataset used for data analysis is for location Noida,India", 
                   "Data munging for data is  done using python pandas library",
                   "Data visualization is done using matplotlib"
                  ]    
      },

      { image: "images/gameOfViz.gif",
        title: " Game of Viz ",
        oneLineDesc: "Game of thrones data visualization for order of character appearence from each club for each season",
        roles: ["Core Programming", "Data Visualization", "Data Analysis"],
        techUsed: ["Javasript", "D3.js", "Html"],
        liveLink: "http://www.vigneshramesh.in/GameofViz/",
        gitLink: "https://github.com/VRamazing/GameofViz",
        fullDesc: ["Dataset fetched for grand prix 2016 in csv format and converted it to usable data", 
                   "Data munging and data visualization done using d3.js"
                  ]    
      },

      { image: "images/sankey.gif",
        title: "Sankey Chart",
        oneLineDesc: "A sankey chart visualization for F1 Racers for 2016 grand prix",
        roles: ["Core Programming", "Data Visualization", "Data Analysis"],
        techUsed: ["Javasript", "D3.js", "Html"],
        liveLink: "http://www.vigneshramesh.in/SankeyF1",
        gitLink: "https://github.com/VRamazing/SankeyF1",
        fullDesc: ["Dataset fetched for game of thrones in csv format and converted it to usable data", 
                   "Data munging and data visualization done using d3.js"
                  ]    
      },

      { image: "images/terminal.gif",
        title: "Terminal Journal",
        oneLineDesc: "A local terminal database powered journal",
        roles: ["Core Programming", "Database Management"],
        techUsed: ["Python", "Javascript", "Flask", "MongoDb"],
        liveLink: "http://www.vigneshramesh.in/SankeyF1",
        gitLink: "https://github.com/VRamazing/SankeyF1",
        fullDesc: ["Purpose of this application is to serve as a local blogging system for maintaining my journal", 
                   "It includes database to store posts and blogs of each user",
                   "ny user can either read or write in their own blog"
                  ]    
      },

      { image: "images/interactive.gif",
        title: "Interactive Visualization",
        oneLineDesc: "An interactive visualization of premier league team revenues",
        roles: ["Core Programming", "Data Visualization", "Data Analysis"],
        techUsed: ["D3js", "Javascript", "Html"],
        liveLink: "http://www.vigneshramesh.in/InteractiveViz/",
        gitLink: "",
        fullDesc: ["An interactive visualization of premier league team revenues", 
                   "Tool tip hover produces a different chart for respective bar chart",
                   "Data munging done using d3.js"
                  ]    
      },

      { image: "images/cloropleth.gif",
        title: "Choropleth Map of County Data",
        oneLineDesc: "Creating a cloropleth map for median earnings of each state in United States",
        roles: ["Core Programming", "Data Visualization", "Data Analysis"],
        techUsed: ["D3js", "Javascript", "Html"],
        liveLink: "http://www.vigneshramesh.in/InteractiveViz/",
        gitLink: "",
        fullDesc: ["An interactive visualization of premier league team revenues", 
                   "Tool tip hover produces a different chart for respective bar chart",
                   "Data munging done using d3.js"
                  ]    
      },
    ],
    testimonials: [
      { 
        content : "Vignesh is a keen learner and an excellent resource. He is very creative and has born entrepreneur spirit. I got so impressed with him when I saw his website. Vignesh has an eye for detail and always thrive for success.",
        author : " — Surabhi Nigam Tula (Co-founder and COO Keizen Training Solutions)"
      },
      {
        content : "Vignesh is a great technology friendly person. He is a great web designer and had a big contribution in making our college fests successfull through his websites. Had a great time working with him. Wish him all the good luck for his future endeavours.",
        author : " — Aakash Bhandari (Relationship Manager at Home First Finance Company (HFFC))"
      },
      {
        content : "Vignesh makes things happen! His ability to listen and understand his clients' needs allows him to consult effectively. He leads by example and is a trusted adviser.",
        author : " — Aditya Sisodia (Co-Founder RecruitWheels)"
      }
    ],
    techStack: [
      {
        imgUrl: "images/python.png",
        imgAlt: "pythonLogo"
      },
      {
        imgUrl: "images/reactjs.png",
        imgAlt: "reactLogo"
      },
      {
        imgUrl: "images/sass.png",
        imgAlt: "sassLogo"
      },
      {
        imgUrl: "images/unity.png",
        imgAlt: "unity3dLogo"
      },
      {
        imgUrl: "images/vuejs.png",
        imgAlt: "vuejsLogo"
      },
      {
        imgUrl: "images/angularjs.jpg",
        imgAlt: "angularjsLogo"
      },
      {
        imgUrl: "images/sql.png",
        imgAlt: "sqlLogo"
      },
      {
        imgUrl: "images/ai.png",
        imgAlt: "IllustratorLogo"
      },
      {
        imgUrl: "images/blender.jpeg",
        imgAlt: "blenderLogo"
      },
      {
        imgUrl: "images/css.jpg",
        imgAlt: "cssLogo"
      },
      {
        imgUrl: "images/flask.jpg",
        imgAlt: "flaskLogo"
      },
      {
        imgUrl: "images/d3.png",
        imgAlt: "d3jsLogo"
      },
      {
        imgUrl: "images/Gephi-logo.jpg",
        imgAlt: "gephiLogo"
      },
      {
        imgUrl: "images/gimp.jpg",
        imgAlt: "gimpLogo"
      },
      {
        imgUrl: "images/html.png",
        imgAlt: "htmlLogo"
      },
      {
        imgUrl: "images/js.png",
        imgAlt: "javascriptLogo"
      },
      {
        imgUrl: "images/mongodb.jpg",
        imgAlt: "mongodbLogo"
      },
      {
        imgUrl: "images/photoshop.png",
        imgAlt: "photoshopLogo"
      },

    ]
  },
  computed: {

  },
  methods: {
    
  }
})