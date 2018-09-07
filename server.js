const express = require("express");
const hbs = require("hbs");
const data = require("./data")

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
})


app.get("/", (req, res) => {
  res.render('index.hbs', {
    pageTitle: 'Index'
  })
});

app.get("/projects", (req, res) => {
  // res.send("About Page");
  res.render('projects.hbs', {
    pageTitle: 'Projects page'
  })
  //res.next();
});

app.get("/blog", (req, res) => {
  // res.send("About Page");
  res.render('about.hbs', {
    pageTitle: 'About'
  })
  //res.next();
});

app.get("/testimonials", (req, res) => {
  // res.send("About Page");
  res.render('about.hbs', {
    pageTitle: 'About'
  })
  //res.next();
});

app.get("/music", (req, res) => {
  // res.send("About Page");
  res.render('about.hbs', {
    pageTitle: 'About'
  })
  //res.next();
});

app.get("/artwork", (req, res) => {
  // res.send("About Page");
  res.render('about.hbs', {
    pageTitle: 'About'
  })
  //res.next();
});

app.get("/bad", (req, res) => {
	res.send({
		errorMessage: "Unable to handle request"
	});
});

app.listen(3000);