/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
      "name": "Tobias Meyer-Grünow",
      "role": "Front End Web Developer",
      "contactInfo": {
        "mobile": "123 456-7890",
        "email": "tobiasmg@gmail.com",
        "twitter": "Twitter",
        "location": "1215 Henderson Ave, Apt 2"
      },
      "biopic": "images/fry.jpg",
      "welcomeMessage": "Hello there",
      "skills": ["html", "css", "js"]
    },
    work = {
      "workplaces": [
        {
          "name": "IDG World Expo",
          "title": "Web Developer",
          "dates": "December 2013 - July 2016",
          "location": "San Francisco, CA, USA",
          "description": "description"
        },
        {
          "name": "Hornblower Cruises & Events",
          "title": "Senior Web Developer/Designer",
          "dates": "May 2005 - November 2013",
          "location": "San Francisco, CA, USA",
          "description": "description"
        },
        {
          "name": "Imagine How",
          "title": "Web Developer/Designer",
          "dates": "September 2002 - May 2005",
          "location": "Campbell, CA, USA",
          "description": "description"
        },
        {
          "name": "Black & White Design",
          "title": "Web Designer",
          "dates": "March 2000 - September 2002",
          "location": "Campbell, CA, USA",
          "description": "description"
        }
      ]
    },
    projects = {
      "projects": [
        {
          "title": "name",
          "dates": "dates",
          "description": "description",
          "image": "src"
        }
      ]
    },
    education = {
      "schools": [
        {
          "name": "Cogswell Polytechnical College",
          "city": "Sunnyvale, CA, USA",
          "degree": "BA",
          "major": ["Computer & Video Imaging"]
        },
        {
          "name": "Rochester Institute of Technology",
          "city": "Rochester, NY, USA",
          "degree": null,
          "major": ["Computer Science"]
        }
      ]
    };

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

HTMLmobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
HTMLemail = HTMLemail.replace("%data%", bio.contactInfo.email);
HTMLtwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
HTMLlocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(e, index){
    $("#skills").append(HTMLskills.replace("%data%", e));
  });
}
function displayWork() {
  if (!$.isEmptyObject(work) > 0 && work.workplaces.length > 0) {
    work.workplaces.forEach(function(workplace){
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", workplace.name) + HTMLworkTitle.replace("%data%", workplace.title))
        .append(HTMLworkDates.replace("%data%", workplace.dates))
        .append(HTMLworkDescription.replace("%data%", workplace.description));
    });
  }
}
displayWork();

HTMLworkTitle = HTMLworkTitle.replace("%data%", work.currentPosition);
HTMLschoolName = HTMLschoolName.replace("%data%", education["name"]);

projects.display = function (){
  if (!$.isEmptyObject(projects) > 0 && projects.projects.length > 0) {
    projects.projects.forEach(function(project){
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title))
        .append(HTMLprojectDates.replace("%data%", project.dates))
        .append(HTMLprojectDescription.replace("%data%", project.description))
        .append(HTMLprojectImage.replace("%data%", project.img));
    });
  }
}
projects.display();

$("#header").prepend(HTMLheaderName, HTMLheaderRole);
$("#topContacts").append(HTMLmobile, HTMLemail, HTMLtwitter, HTMLlocation);
$("#education").append(HTMLschoolStart).append(HTMLschoolName);
$("#main").append(internationalizeButton);
