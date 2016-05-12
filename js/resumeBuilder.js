var bio = {
    "name": "Tom Zille",
    "role": "IT Admin and Developer",
    "contacts": {
        "mobile": "0123456789",
        "email": "tom.zille@gmail.com",
        "github": "https://github.com/badbart",
        "location": "Lich, Germany"
    },
    "welcomeMessage": "Hello There, have a good Day",
    "skills": ["JavaScript", "HTML", "CSS", "Python", "C#", "Windows Network and Domain Administration"],
    "biopic": "images/fry.jpg"
}

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
            "dates": 2016,
            "url": "http://www.udacity.com"
        }
    ]
}

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
            "title": "Developer + IT Admin, Hauptbahnhof",
            "location": "Frankfurt am Main",
            "dates": "in progress",
            "description": "Same as before but more developing and planning"
        }
    ]
}

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
}

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var proTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var proDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var proDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        var pageHtml = proTitle + proDates + proDesc;

        for (proImgs in projects.projects[project].images) {
            var proImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[proImgs]);
            pageHtml = pageHtml + proImg;
        }

        $(".project-entry:last").append(pageHtml)
    }

}



