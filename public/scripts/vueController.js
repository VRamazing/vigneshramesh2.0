

const About = { template: `<div><!-- Header Banner -->
                            <div class="section no-pad-bot scrollspy" id="Home">
                              <div class="container">
                                <br><br><br>
                                <h1 class="header center white-text ">Vignesh Ramesh</h1>
                                <div class="row center">
                                  <h4 class="header col s12  light  cyan-text">Full Stack Developer &amp; Entrepreneur</h4>
                                  <a href="#About" id = "link" class = "scroll-arrow"><i class="fa fa-chevron-circle-down fa-3x white-text" aria-hidden="true" ></i></a>

                                </div>

                              </div>
                            </div>

                            <!-- Quote -->
                            <div class="container-fluid quote cyan z-depth-1">
                              <div class="row ">
                                <div class="col s12">
                                  <br>
                                  <p class="center white-text">I provide IT solutions to complex problems</p>
                                </div>
                              </div>
                            </div>

                            <!-- About Me -->
                            <div class="container scrollspy" id ="About">
                              <div class="section about">
                                <div class="row">
                                  <div class=" center col s12">

                                    <br><br>
                                    <img alt = "profile_pic" src="./images/me.png"  class= "profilePic" height="200" >
                                    <br>
                                    <br>
                                    <br>

                                    <p>I am a <span class="  pink-text">Full Stack Developer &amp; Entrepreneur</span> from India. I am passionate about technology and like to constantly explore new domains. My areas of interests include Web Development, Game Development, Data Science and Artificial Intelligence.</p>
                                    <br />
                                    <p >I am a member of <a class = "pink-text text-lighten-1" href = "http://www.gamkedo.com">Gamkedo Club</a> which is an International club of people all around the world with a common objective of creating games together. Everybody has a purpose in life and I believe my purpose is to provide IT solutions to complex problems that we as a society face every day. I love challenges and thus the quote I live by is &ldquo;<span style = 'font-style:italic'>Only the strong survive</span> &rdquo;. <a href="#Contact" id = "link" class="pink-text"> Connect with me</a> if you have something interesting on your mind. </p>
                                    <br>
                                    <br>
                                  </div>
                                  <div class=" center col s12 hide-on-med-and-down">
                                    <div class = "row">
                                      <br>
                                      <div class=" center col s12 m6 ">
                                        <center>
                                          <a class="twitter-timeline" href="https://twitter.com/techieVignesh?ref_src=twsrc%5Etfw" data-width="355" data-height="475">Tweets by techieVignesh</a>
                                        </center>
                                        </div>
                                        <div class=" center col s12 m6 ">
                                          <center>
                                            <div height = "500" class="github-widget" data-username="vramazing">
                                            </div>
                                          </center>
                                        </div>
                                    </div>

                                  </div>


                                  <div class="carousel" style = "margin:20px 0 0 0!important;padding:0px">
                                     <h5 class="center  blue-text" style = "font-style:italic;font-size:22px;">My technology stack includes...</h5>
                                     <a class="carousel-item" v-for = "tech in techStack"><img v-bind:alt = "tech.imgAlt" v-bind:src = "tech.imgUrl"></a>
                                   </div>

                                </div>
                              </div>
                            </div>
                          </div>` ,

                          data: function(){
                               return{techStack: [
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

                                          ]}

                          }};


const Portfolio = { template: `
                          <div class="container-fluid blue-grey lighten-5 scrollspy" id="Portfolio" >
                          <br />
                          <br />


                            <div class="section portfolio">

                              
                                

                              <h5 class="center  teal-text">Portfolio of {{projects.length}}+ projects and  counting.</h5>
                          

                              <br>

                                <div class="chip">
                            Tag
                            <i class="close material-icons">close</i>
                          </div>

                              <!-- <div class="chips chips-initial"></div> -->

                              <br>
                              <div class="row">
                                <!-- Row 1 -->

                                <div class="s12 cards-container">
                                  <!-- Sabraang -->
                                  <div class="card projects" v-for = "project in projects">
                         
                                    <div class="card-image waves-effect waves-block waves-light">
                                      <img v-bind:alt = "project.title" class="activator" v-bind:src = "project.image">
                                    </div>

                                    <div class="card-content">
                                      <span class="card-title activator grey-text text-darken-4">{{project.title}}
                                        <!-- <i class="fa fa-ellipsis-v right" aria-hidden="true"></i> -->
                                        <i class="fa fa-ellipsis-v right" aria-hidden="true"></i>
                                      </span>

                                      <span>
                                        {{project.oneLineDesc}}
                                      </span>

                                      <p class = "role">

                                        <span class = "red accent-1" v-for ="role in project.roles">{{role}}</span>
                                        
                                      </p>

                                      <div class = "techUsed">
                                        <div class = "chip" v-for ="tech in project.techUsed">
                                          {{tech}}
                                        </div>
                                      </div>
                                      <p class = "card-link" v-if = "project.liveLink != ''"><a v-bind:href="project.liveLink" target = "_blank">Visit Live Website</a></p>
                                    </div>

                                    <div class="card-reveal">
                                      <span class="card-title grey-text text-darken-4">{{project.title}}<i class="fa fa-times right" aria-hidden="true"></i>
                                      <p class="light"><ul class = "browser-default" style = "padding-left:20px;">

                                        <li v-for ="desc in project.fullDesc">{{desc}}</li>
                                        
                                        <li v-if = "project.gitLink != ''" >Code available for public use on <a v-bind:href = "project.gitLink" target = "_blank">github</a></li>
                                      </ul></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>`,
                          data: function(){
                            return {
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

                                  { image: "images/superBuggyGolf.gif",
                                    title: "Super Buggy Golf ",
                                    oneLineDesc: "A Unity 3d golf game with the catch of player being a Car",
                                    roles: ["Game programming", "Music production", "Team member"],
                                    techUsed: ["Unity 3d", "Caustic3 DAW"],
                                    liveLink: "https://gamkedo.itch.io/buggy-golf",
                                    gitLink: "",
                                    fullDesc: ["Collaborated and created with a team of 8 people @gamkedo.com", 
                                               "Coordinated round the clock and provided remote assistance",
                                               "Created 3 music tracks and dynamic menu screen",
                                               "6 week project",
                                               "Cross platform support"
                                              ]    
                                  },

                                  { image: "images/excalibur.gif",
                                    title: "Excalibur SDS",
                                    oneLineDesc: "A JS recreation of DOS classic paratrooper",
                                    roles: ["Game programming", "Music production", "Team member", "Game art"],
                                    techUsed: ["Javascript", "Sonic Pi", "Html5"],
                                    liveLink: "https://gamkedo.itch.io/excalibur-sds",
                                    gitLink: "",
                                    fullDesc: ["Collaborated and created with a team of 19 people @gamkedo.com", 
                                               "Coordinated round the clock and provided remote assistance",
                                               "Created Menu Screen, Enemy spaceship and aliens",
                                               "12 week project", 
                                               "Music produced to suit the theme",
                                               "Cross platform support"
                                              ]    
                                  },

                                  { image: "images/WheelOfMisfortune.gif",
                                    title: "Wheel Of Misfortune",
                                    oneLineDesc: "A top down bullet hell SHMUP",
                                    roles: ["Music production", "Team member"],
                                    techUsed: ["Sonic Pi"],
                                    liveLink: "https://cbutton01.itch.io/wheel-of-misfortune",
                                    gitLink: "",
                                    fullDesc: ["Collaborated and created with a team of 17 people", 
                                               "Coordinated round the clock and provided remote assistance",
                                               "11 week project", 
                                               "Made menu music and SFX",
                                               "Cross platform support"
                                              ]    
                                  },


                                  { image: "images/tinyTurboRacers.gif",
                                    title: "Tiny Turbo Racers",
                                    oneLineDesc: "A game where you configure the car sensors so it drives around the track by itself",
                                    roles: ["Game programming", "Music production", "Team member", "Game art"],
                                    techUsed: ["Javascript", "Sonic Pi", "Html5", "Audacity", "Adobe Photoshop"],
                                    liveLink: "https://spadxiii.itch.io/tiny-robo-racers",
                                    gitLink: "",
                                    fullDesc: ["Collaborated and created with a team of 9 people @gamkedo.com", 
                                               "Coordinated round the clock and provided remote assistance",
                                               "Made multiple music tracks and SFX",
                                               "8 week project", 
                                               "Created car art and final stage",
                                               "Cross platform support"
                                              ]    
                                  },


                                  { image: "images/steelCavalry.gif",
                                    title: "Steel Cavalry",
                                    oneLineDesc: "A 2 player 3D action mech game",
                                    roles: ["Music production", "Game art"],
                                    techUsed: ["Unity 3d", "Caustic3 DAW", "Bosca Ceoil", "Blender"],
                                    liveLink: "https://gamkedo.itch.io/steel-cavalry",
                                    gitLink: "",
                                    fullDesc: ["Collaborated and created with a team of 22 people @gamkedo.com", 
                                               "Coordinated round the clock and provided remote assistance",
                                               "12 week project", 
                                               "Created 3 music tracks and control game screen",
                                               "Cross platform support"
                                              ]    
                                  },

                                  { image: "images/DeathMcGamkedonalds.gif",
                                    title: "Death Road to McGamkedonalds",
                                    oneLineDesc: "A combination of top-down racer, cooking/pong game.",
                                   roles: ["Game programming", "Music production", "Team member", "Game art"],
                                    techUsed: ["Javascript", "Caustic 3", "Html5", "Audacity", "Adobe Photoshop"],
                                    liveLink: "https://oneseedfruit.itch.io/death-road-to-mcgamkedonalds",
                                    gitLink: "",
                                    fullDesc: ["Game created for Ludum dare 41 with a team of 9 people", 
                                               "Made in 72 hours",
                                               "Contributed car, level code and background music",
                                               "Cross platform support"
                                              ]    
                                  },

                                  { image: "images/ghostInNewTokyo.gif",
                                    title: "Ghost in New Tokyo",
                                    oneLineDesc: "2d platformer created using canvas Html and Javascript",
                                    roles: [ "Music production", "Team member", "Game art"],
                                    techUsed: [ "Adobe Photoshop", "Caustic 3"],
                                    liveLink: "https://oneseedfruit.itch.io/death-road-to-mcgamkedonalds",
                                    gitLink: "",
                                    fullDesc: ["Collaborated and created with a team of 18 people @gamkedo.com", 
                                               "Coordinated round the clock and provided remote assistance",
                                               "12 week project", 
                                               "Created 3 music tracks and background art",
                                               "Cross platform support"
                                              ]    
                                  },


                                  { image: "images/playgroundLegends.gif",
                                    title: "Playground Legends",
                                    oneLineDesc: "A casual dodge ball game made using Html5 canvas and javascript",
                                    roles: ["Game programming", "Music production", "Team member", "Game art"],
                                    techUsed: ["Javascript", "Casutic 3", "Html5", "Audacity", "Adobe photoshop"],
                                    liveLink: "https://gamkedo.itch.io/playground-legends",
                                    gitLink: "",
                                    fullDesc: ["Collaborated and created with a team of 18 people @gamkedo.com",
                                               "6 week project", 
                                               "Created menu music tracks, player and multiple level art",
                                               "Coordinated round the clock and provided remote assistance",
                                               "Cross platform support"
                                              ]    
                                  },

                                  { image: "images/clashTracks.gif",
                                    title: "Clash Tracks",
                                    oneLineDesc: "A top down obstacle racing game made in js",
                                    roles: ["Game programming", "Music production", "Team Lead", "Game art"],
                                    techUsed: ["Javascript", "Casutic 3", "Html5", "Audacity", "Adobe photoshop"],
                                    liveLink: "https://techievignesh.itch.io/clash-tracks",
                                    gitLink: "",
                                    fullDesc: ["Collaborated and created with a team of 13 people @gamkedo.com", 
                                               "8 week project",
                                               "Created game art and core game mechanics",
                                               "Provided multiple music tracks according to requirement",
                                               "Coordinated round the clock and provided remote assistance",
                                               "Cross platform support"
                                              ]    
                                  },
                               ]
                            }
                          }
                        }


const Testimonials = { template: `<div> <br /><br />

                                    <!-- Testimonials Offered -->
                                      <div class="container-fluid grey lighten-5 scrollspy" id="Testimonials">
                                        <div class="section portfolio">

                                          <h5 class="center  blue-grey-text"> What my clients say about me...</h5>
                                          <br />

                                          <div class = " container">
                                            <blockquote class = "teal-text" v-for = "testimonial in testimonials"><br />
                                              <i class="fa fa-quote-left fa-1x" aria-hidden="true" ></i>    
                                                    <span>{{testimonial.content}}</span>
                                                    <footer class="right">
                                                      
                                                    <em class = "grey-text lighten-5">
                                                       {{testimonial.author}}
                                                      </em>
                                                    </footer>
                                                    <br />


                                            </blockquote>
                                            <br />
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                     </div>
                                    </div>`,

                                    data: function(){
                                      return {
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
                                      }
                                    }}




const Contact = { template: `<div> <!--contact-->
                                <div class="container-fluid white scrollspy" id="Contact">
                                  <div class="container contact">
                                    <br>
                                    <br>


                                    <div class="row ">
                                      <div class="col s12">
                                        <br>
                                        <p class="center grey-text touch">Get in touch for a proposal</p>
                                      </div>
                                    </div>

                                    <br >
                                    <br >

                                    <div class="row">
                                      <form class="col s12" action="https://formspree.io/techie.vigneshramesh@gmail.com"  method="Post">
                                        <div class="row">
                                          <div class="input-field col m6 s12">
                                            <input id="name" name="name" type="text" class="validate" >
                                            <label for="name" class="teal-text">Name</label>
                                          </div>
                                          <div class="input-field col s12 m6">
                                            <input id="email" name="email" type="text" class="validate">
                                            <label for="last_name" class="teal-text">Email</label>
                                          </div>
                                        </div>


                                        <div class="row">
                                          <div class="input-field col s12">
                                            <textarea id="message" name="message" class="materialize-textarea "></textarea>
                                            <label for="message" class="teal-text">Message</label>
                                          </div>
                                        </div>

                                        <button class="btn waves-effect waves-light" type="submit" name="action">Send
                                          <i class="fa fa-paper-plane" aria-hidden="true" style = "margin-left:10px;"></i>

                                        </button>
                                      </form>
                                    </div>



                                  </div>
                                </div></div>`};



const Audio = {template: `<div><br /><br /><br /><center>
<iframe width="70%" height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/366208004&color=%236a3943&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"></iframe>
</center></div>`};


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/testimonials', component: Testimonials },
  { path: '/contact', component: Contact },
  { path: '/audio', component: Audio },
]



const router = new VueRouter({
  routes // short for `routes: routes`
})




new Vue({
  el: '#myApp',
  router,
  data: {
  },
  computed: {

  },
  methods: {
    
  }
}).$mount('#myApp')
