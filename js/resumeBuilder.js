var bio = {
    "name": "Tom Zille",
    "role": "IT Admin and Developer",
    "contacts": {
        "mobile": "0123456789",
        "email": "tom.zille@gmail.com",
        "github": "badbart",
        "location": "Lich, Germany"
    },
    "welcomeMessage": "Hello There, have a good Day",
    "skills": ["JavaScript", "HTML", "CSS", "Python", "C#"],
    "biopic": "images/fry.jpg"
};

var education = {
    "schools": [
        {
            "name": "WVS",
            "location": "Frankfurt am Main, Gutleutviertel",
            "degree": "FI",
            "majors": ["FI"],
            "dates": "2010-2013",
            "url": "https://wvs-ffm.de/"
        },
        {
            "name": "FBS",
            "location": "Frankfurt am Main, Fritz-Tarnow-Strasse",
            "degree": "FA",
            "majors": ["FA"],
            "dates": "2008-2010",
            "url": "http://www.fbs-ffm.de/"
        }
    ],
    "onlineCourses": [
        {
            "title": "FED Nanodegree",
            "school": "Udacity",
            "date": 2016,
            "url": "http://www.udacity.com"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "HLB",
            "title": "IT Admin",
            "location": "Frankfurt am Main, Hauptbahnhof",
            "dates": "2007-2016",
            "description": "IT Stuff, all that needs to be done"
        },
        {
            "employer": "HLB",
            "title": "Developer + IT Admin",
            "location": "Frankfurt am Main, Hauptbahnhof",
            "dates": "in progress",
            "description": "Same as before but more developing and planning"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "My Resume",
            "dates": 2016,
            "description": "Resume for Udacity, this one",
            "images": [
                "images/resume.png",
            ]
        },
        {
            "title": "My Portfolio",
            "dates": 2016,
            "description": "Portfolio for Udacity",
            "images": [
                "images/portfolio.jpg",
            ]
        }
    ]
};

bio.display = function () {
    var header = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(header);

    var contacts = HTMLmobile.replace("%data%", bio.contacts.mobile) +
        HTMLemail.replace("%data%", bio.contacts.email) +
        HTMLgithub.replace("%data%", bio.contacts.github) +
        HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(contacts);

    var picAndMessage = HTMLbioPic.replace("%data%", bio.biopic) + HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(picAndMessage);

    $("#header").append(HTMLskillsStart);

    var skills = "";

    $.each(bio.skills, function (i, val) {
        skills = skills + HTMLskills.replace("%data%", val);
    });


    $("#skills").append(skills);

    // Because on the Image it looks like this and changing it directly in CSS would
    // be to easy
    $("#skills").css("flex-direction", "column");


};

work.display = function () {
    $.each(work.jobs, function (i, val) {
        $("#workExperience").append(HTMLworkStart);

        var employer = HTMLworkEmployer.replace("%data%", val.employer);
        var title = HTMLworkTitle.replace("%data%", val.title);
        var dates = HTMLworkDates.replace("%data%", val.dates);
        var workLocation = HTMLworkLocation.replace("%data%", val.location);
        var description = HTMLworkDescription.replace("%data%", val.description);

        $(".work-entry:last").append(employer + title + dates + workLocation + description);

    });
};

projects.display = function () {
    $.each(projects.projects, function (i, val) {
        $("#projects").append(HTMLprojectStart);
        var proTitle = HTMLprojectTitle.replace("%data%", val.title);
        var proDates = HTMLprojectDates.replace("%data%", val.dates);
        var proDesc = HTMLprojectDescription.replace("%data%", val.description);

        var pageHtml = proTitle + proDates + proDesc;

        $.each(val.images, function (j, img) {
            var proImg = HTMLprojectImage.replace("%data%", img);
            pageHtml = pageHtml + proImg;
        });

        $(".project-entry:last").append(pageHtml);
    });
};

education.display = function () {
    $.each(education.schools, function (i, val) {
        $("#education").append(HTMLschoolStart);

        var schoolName = HTMLschoolName.replace("%data%", val.name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", val.degree);
        var schoolDates = HTMLschoolDates.replace("%data%", val.dates);
        var schoolLocation = HTMLschoolLocation.replace("%data%", val.location);

        var schoolMajor = "";
        $.each(val.majors, function (j, maj) {
            schoolMajor = schoolMajor + HTMLschoolMajor.replace("%data%", maj);
        });

        var pageHtml = schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajor;

        $(".education-entry:last").append(pageHtml);
    });

    $("#education").append(HTMLonlineClasses);

    $.each(education.onlineCourses, function (i, val) {
        $("#education").append(HTMLschoolStart);

        var onlineTitle = HTMLschoolName.replace("%data%", val.title);
        var onlineSchool = HTMLschoolDegree.replace("%data%", val.school);
        var onlineDates = HTMLschoolDates.replace("%data%", val.date);
        var onlineUrl = HTMLonlineURL.replace("%data%", val.url);



        var pageHtml = onlineTitle + onlineSchool + onlineDates + onlineUrl;

        $(".education-entry:last").append(pageHtml);
    });
};


function displayPage() {
    bio.display();
    work.display();
    projects.display();
    education.display();

    $("#mapDiv").append(googleMap);
}

$(displayPage());

