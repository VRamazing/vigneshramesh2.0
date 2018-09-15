const express = require("express");
const hbs = require("hbs");
const data = require("./public/scripts/data")
const app = express();
const path = require("path")

// app.use('/public', express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

// hbs.registerHelper('getCurrentYear', () => {
// 	return new Date().getFullYear();
// })

app.get("/", (req, res) => {
  res.render('index.hbs', {techStack: data.techStack})
});

app.get("/web-apps", (req, res) => {
  res.render('projects.hbs', {projects: data.projects});
});

app.get("/games", (req, res) => {
  res.render('projects.hbs', {projects: data.projects});
});


app.get("/blog", (req, res) => {
  res.render('blog.hbs')
});

app.get("/testimonials", (req, res) => {
  res.render('testimonials.hbs', {testimonials: data.testimonials});
});

app.get("/contact", (req, res) => {
  res.render('contact.hbs')
});

app.get("/music", (req, res) => {
  res.render('music.hbs' )
});


app.get("/logos", (req, res) => {
  res.render('logos.hbs', {logos: data.logos});
});

app.get("/art", (req, res) => {
  res.render('art.hbs', {artwork: data.artwork});
});

app.get("/bad", (req, res) => {
	res.send("<h3>Unable to handle request</h3>");
});

app.get('/resume/:id/download', function (req, res, next) {
    if(req.params.id == "game"){
      var filePath = __dirname + "/public/resume/resume_game.pdf";
    }else if(req.params.id == "full_stack"){
      var filePath = __dirname + "/public/resume/resume_full_stack.pdf";
    }
    res.download(filePath, 'resume_vignesh_ramesh.pdf', function(err){
      if (err) {
        console.log(err);
      } else{
        console.log("Thanks for downloading.")
      }
    });  
});

app.listen(3000);