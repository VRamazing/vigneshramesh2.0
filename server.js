const express = require("express");
const hbs = require("hbs");
const data = require("./public/scripts/data")
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req, res) => {
  res.render('about.hbs', {techStack: data.techStack, testimonials: data.testimonials})
});

app.get("/about", (req, res) => {
  res.redirect("/")
});

app.get("/portfolio", (req, res) => {
  res.render('portfolio.hbs', {projects: data.shuffleArray(data.web_apps), category_name: "web apps"});
});

app.get("/hireme", (req, res) => {
  res.render('hireme.hbs')
});

app.get('/resume', function (req, res, next) {
    var filePath = __dirname + "/public/resume/resume.pdf";
    res.download(filePath, 'resume_vignesh_ramesh.pdf', function(err){
      if (err) {
        return console.log(err);
      }
      return;
    });  
});

app.all('*', (req, res) => { 
  res.status(404).render('404.hbs'); 
}); 


app.listen(port, function(){console.log(`App running at port ${port}`)});