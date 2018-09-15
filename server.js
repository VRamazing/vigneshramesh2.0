const express = require("express");
const hbs = require("hbs");
const data = require("./public/scripts/data")

var app = express();

app.use(express.static(__dirname + '/public'));

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

app.listen(3000);