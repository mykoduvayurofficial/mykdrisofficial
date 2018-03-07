/**
 * Created by kriz on 1/18/2017.
 */

// create the module and name it mykdrApp
// also include ngRoute for all our routing needs
var mykdrApp = angular.module('mykdrApp', ['ngRoute']);

// configure our routes
mykdrApp.config(function($routeProvider) {
    $routeProvider

    // route for the theme page
        .when('/', {
            title : "MyKoduvayur -  Everything About Koduvayur",
            description : "",
            templateUrl : 'pages/theme.html',
            controller  : 'mainController'
        })

        // route for the home page
        .when('/home', {
            title :"Home - MyKoduvayur",
            description : "",
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })
        // route for the landscape page
        .when('/locality', {
            title :"Locality - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality.html',
            controller  : 'localityController'
        })
        // route for the culture page
        .when('/culture', {
            title :"Culture - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture.html',
            controller  : 'cultureController'
        })
        // route for the trending page
        .when('/events', {
            title :"Events - MyKoduvayur",
            description : "",
            templateUrl : 'pages/events.html',
            controller  : 'eventsController'
        })
        // route for the services page
        .when('/services', {
            title :"Services - MyKoduvayur",
            description : "",
            templateUrl : 'pages/services.html',
            controller  : 'servicesController'
        })
        // route for the emergency page
        .when('/emergency', {
            title :"Emergency - MyKoduvayur",
            description : "",
            templateUrl : 'pages/emergency.html',
            controller  : 'emergencyController'
        })
        // route for the about page
        .when('/about', {
            title :"About Us - MyKoduvayur",
            description : "",
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        // route for the trending page
        .when('/trending', {
            title :"Trending - MyKoduvayur",
            description : "",
            templateUrl : 'pages/trending.html',
            controller  : 'trendingController'
        })

        //locality

        // route for the gramapanchayathoffice page
        .when('/gramapanchayathoffice', {
            title :"Grama Panchayat Office - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/gramapanchayathoffice.html',
            controller  : 'localityController'
        })

        // route for the govthospital page
        .when('/govthospital', {
            title :"Govt. Hospital - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/govthospital.html',
            controller  : 'localityController'
        })

        // route for the ghskoduvayur page
        .when('/ghskoduvayur', {
            title :"Govt. High School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/ghskoduvayur.html',
            controller  : 'localityController'
        })

        // route for the ghsskoduvayur page
        .when('/ghsskoduvayur', {
            title :"Govt. Higher Secondary School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/ghsskoduvayur.html',
            controller  : 'localityController'
        })

        // route for the oldagehome page
        .when('/oldagehome', {
            title :"Old Age Home - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/oldagehome.html',
            controller  : 'localityController'
        })

        // route for the koduvayurmarket page
        .when('/koduvayurmarket', {
            title :"Koduvayur Market - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/panchayatoffice.html',
            controller  : 'localityController'
        })

        // route for the ksebkoduvayur page
        .when('/ksebkoduvayur', {
            title :"Koduvayur Market - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/ksebkoduvayur.html',
            controller  : 'localityController'
        })

        // route for the dmsbschool page
        .when('/dmsbschool', {
            title :"DMSB School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/dmsbschool.html',
            controller  : 'localityController'
        })

        // route for the mmmsbschool page
        .when('/mmmsbschool', {
            title :"MMMSB School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/mmmsbschool.html',
            controller  : 'localityController'
        })

        // route for the gblpschool page
        .when('/gblpschool', {
            title :"GBLP School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/gblpschool.html',
            controller  : 'localityController'
        })

        // route for the gbupschool page
        .when('/gbupschool', {
            title :"GBUP School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/gbupschool.html',
            controller  : 'localityController'
        })

        // route for the stpaulsschool page
        .when('/stpaulsschool', {
            title :"St. Pauls School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/stpaulsschool.html',
            controller  : 'localityController'
        })

        // route for the vidyadhirajaschool page
        .when('/vidyadhirajaschool', {
            title :"Vidyadhiraja School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/vidyadhirajaschool.html',
            controller  : 'localityController'
        })

        // route for the nalandaschool page
        .when('/nalandaschool', {
            title :"Nalanda School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/nalandaschool.html',
            controller  : 'localityController'
        })

        // route for the satyasaischool page
        .when('/satyasaischool', {
            title :"Satya Sai School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/satyasaischool.html',
            controller  : 'localityController'
        })

        // route for the dnmjbschool page
        .when('/dnmjbschool', {
            title :"DNMJB School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/dnmjbschool.html',
            controller  : 'localityController'
        })

        //culture

        // route for the krishnankovil page
        .when('/krishnankovil', {
            title :"Krishna Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/krishnankovil.html',
            controller  : 'cultureController'
        })

        // route for the keralathappankovil page
        .when('/keralathappankovil', {
            title :"Keralathappan Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/keralathappankovil.html',
            controller  : 'cultureController'
        })

        // route for the sivankovil page
        .when('/sivankovil', {
            title :"Sree Visalakshi Sametha Sree Viswanatha Swamy Temple  - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/sivankovil.html',
            controller  : 'cultureController'
        })

        // route for the ganapathikovil page
        .when('/ganapathikovil', {
            title :"MahaGanapathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/ganapathikovil.html',
            controller  : 'cultureController'
        })

        // route for the keralathappankovil page
        .when('/keralathappankovil', {
            title :"Keralathappan Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/keralathappankovil.html',
            controller  : 'cultureController'
        })

        // route for the mariyammankovil page
        .when('/mariyammankovil', {
            title :"Keralapuram Mariyamman Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/mariyammankovil.html',
            controller  : 'cultureController'
        })

        // route for the kurukkulamtemple page
        .when('/kurukkulamtemple', {
            title :"Kurukkulam Mariyamman Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kurukkulamtemple.html',
            controller  : 'cultureController'
        })

        // route for the kolodetemple page
        .when('/kolodetemple', {
            title :"Kolode Mariyamman Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kolodetemple.html',
            controller  : 'cultureController'
        })

        // route for the kakkayursivankovil page
        .when('/kakkayursivankovil', {
            title :"Kakkayur Siva Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kakkayursivankovil.html',
            controller  : 'cultureController'
        })

        // route for the kottamalakovil page
        .when('/kottamala', {
            title :"Kottamala Sree Ayyappa Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kottamala.html',
            controller  : 'cultureController'
        })

        // route for the kottakovil page
        .when('/kottakovil', {
            title :"Sree Thiruvilayanadu Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kottakovil.html',
            controller  : 'cultureController'
        })

        // route for the altharaganapathy page
        .when('/altharaganapathy', {
            title :"Althara MahaGanapathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/altharaganapathy.html',
            controller  : 'cultureController'
        })

        // route for the ethanurkovil page
        .when('/kizhakkethara', {
            title :"Kizhakkethara Sree Thiruvilayanadu Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kizhakkethara.html',
            controller  : 'cultureController'
        })

        // route for the maruthikavu page
        .when('/maruthikavu', {
            title :"Ethanur Maruthi Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/maruthikavu.html',
            controller  : 'cultureController'
        })

        // route for the koymarpadam page
        .when('/koymarpadam', {
            title :"Koymar Padam Sree Subramaniya Swamy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/koymarpadam.html',
            controller  : 'cultureController'
        })

        // route for the mandathbhagavathy page
        .when('/mandathbhagavathy', {
            title :"Thottekkattthara Sree Mandath Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/mandathbhagavathy.html',
            controller  : 'cultureController'
        })

        // route for the nochurbhagavathy page
        .when('/nochurbhagavathy', {
            title :"Nochur Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/nochurbhagavathy.html',
            controller  : 'cultureController'
        })

        // route for the nochurkrishnatemple page
        .when('/nochurkrishnatemple', {
            title :"Nochur Krishna Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/nochurkrishnatemple.html',
            controller  : 'cultureController'
        })

        // route for the ramapuramtemple page
        .when('/ramapuramtemple', {
            title :"Ramapuram Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/ramapuramtemple.html',
            controller  : 'cultureController'
        })

        // route for the uchimahaliyammantemple page
        .when('/uchimahaliyammantemple', {
            title :"Uchimahaliyamman Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/uchimahaliyammantemple.html',
            controller  : 'cultureController'
        })

        // route for the examplefestival page
        .when('/examplefestival', {
            title :"Example for Festival Page - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/example.html',
            controller  : 'cultureController'
        })

        // route for the koduvayurratholsavam page
        .when('/koduvayurratholsavam', {
            title :"Koduvayur Ratholsavam - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/koduvayurratholsavam.html',
            controller  : 'cultureController'
        })

        // route for the thaipooyam page
        .when('/thaipooyam', {
            title :"Thaipooyam - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/thaipooyam.html',
            controller  : 'cultureController'
        })

        // route for the nochurratholsavam page
        .when('/nochurratholsavam', {
            title :"Nochur Ratholsavam - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/nochurratholsavam.html',
            controller  : 'cultureController'
        })

        // route for the sivarathri page
        .when('/sivarathri', {
            title :"Sivarathri - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/sivarathri.html',
            controller  : 'cultureController'
        })

        // route for the ethanurkummati page
        .when('/ethanurkummati', {
            title :"Ethanur Kummati - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/ethanurkummati.html',
            controller  : 'cultureController'
        })

        // route for the kanyarkali page
        .when('/kanyarkali', {
            title :"Kanyar Kali - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kanyarkali.html',
            controller  : 'cultureController'
        })

        // route for the mariyammanpongal page
        .when('/mariyammanpongal', {
            title :"Mariyamman Pongal - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/mariyammanpongal.html',
            controller  : 'cultureController'
        })

        // route for the aadipooram page
        .when('/aadipooram', {
            title :"Aadipooram - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/aadipooram.html',
            controller  : 'cultureController'
        })

        // route for the ganeshothsavam page
        .when('/ganeshothsavam', {
            title :"Ganeshothsavam - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/ganeshothsavam.html',
            controller  : 'cultureController'
        })

        // route for the navarathri page
        .when('/navarathri', {
            title :"Navarathri - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/navarathri.html',
            controller  : 'cultureController'
        })

        // route for the annabhishekham page
        .when('/annabhishekham', {
            title :"Annsbhishekham - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/annabhishekham.html',
            controller  : 'cultureController'
        })

        // route for the kottamaladhanupath page
        .when('/kottamaladhanupath', {
            title :"Kottamala Dhanupath - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kottamaladhanupath.html',
            controller  : 'cultureController'
        })

        // events

        // route for the ganeshothsavam2017 page
        .when('/ganeshothsavam2017', {
            title :"Ganeshothsavam 2017- MyKoduvayur",
            description : "Koduvayur, Mykoduvayur, Events, Festival, Ganeshothsavam, Vinayaka Chathurthi, 2017, Ganapathy, Ghoshayatra, Palakkad, Official, Photos, Pictures, Althara, Ethanur",
            templateUrl : 'pages/events/ganeshothsavam2017.html',
            controller  : 'eventsController'
        })

        // route for the thaipooyam2018 page
        .when('/thaipooyam2018', {
            title :"Thaipooyam 2018- MyKoduvayur",
            description : "Koduvayur, Mykoduvayur, Events, Festival, Thaipooyam, Bala Ratholsavam, 2018, Theru, Subramaniya Swamy, Official, Photos, Pictures",
            templateUrl : 'pages/events/thaipooyam2018.html',
            controller  : 'eventsController'
        })

        // route for the keralotsavam2017 page
        .when('/keralotsavam2017', {
            title :"Keralotsavam 2017, Koduvayur Grama Panchayath - MyKoduvayur",
            description : "Koduvayur, Mykoduvayur, Events, Keralotsavam, Panchayat Mela, Grama Panchayath, Live, Update, Official, 2017, Arts and Sports, Football, Volleyball, Cricket, Athletics, Block, Winners, Champions, Clubs",
            templateUrl : 'pages/events/keralotsavam2017.html',
            controller  : 'eventsController'
        })

        // route for the keralotsavam2017 page
        .when('/majesticfc7sdec2017', {
            title :"Majestic FC 7's Football Dec 2017, Koduvayur Grama Panchayath - MyKoduvayur",
            description : "Koduvayur, Mykoduvayur, Events, Majestic FC, 7s, Tournament, Football, Live, Update, Official, 2017, Arts and Sports, Football, Winners, Champions, Clubs",
            templateUrl : 'pages/events/majesticfc7sdec2017.html',
            controller  : 'eventsController'
        })

        // route for the mobilephotographycontest2017 page
        .when('/mobilephotographycontest2017', {
            title :"Mobile Photography Contest 2017, Koduvayur Ratholsavam - MyKoduvayur",
            description : "Koduvayur, Mykoduvayur, Events, Mobile, Photography, Contest, 2017, Koduvayur, Ratholsavam, Arts, Creative, Official",
            templateUrl : 'pages/events/mobilephotographycontest2017.html',
            controller  : 'eventsController'
        })

});

mykdrApp.run(['$rootScope', '$route', function($rootScope, $route) {

    // $rootScope.$on('$viewContentLoaded', function () {
    //     $templateCache.removeAll();
    // });

    $rootScope.$on('$routeChangeSuccess', function () {
        document.title = $route.current.title;
    });



    $rootScope.langChange = false;
    $rootScope.myLang = "ENGLISH";
    $rootScope.engdata = {};
    $rootScope.maldata = {};
    $rootScope.dataSelected = {};

    $rootScope.engdata.mainData = {

        general: {
            author: "krishchianna",
            url: "http://www.mykoduvayur.in",
            logo: "./images/mylogo.png",
            lastupdated: "05 March 2018"
        },
        menu: {
            english: "EN",
            malayalam: "മ",
            home: "HOME",
            locality: "LOCALITY",
            culture: "CULTURE",
            services: "SERVICES",
            trending: "TRENDING",
            events: "EVENTS",
            emergency: "EMERGENCY",
            about: "ABOUT US"
        },
        theme: {
            portrait: {
                pic1: "./images/theme/thememob.jpg",
                pic2: "./images/theme/albummob.jpg",
                pic3: "./images/theme/mountmob.jpg",
                pic1alt: "My Koduvayur.",
                pic2alt: "PhotoFrame",
                pic3alt: "Kottamala, Koduvayur"
            },
            landscape: {
                pic1: "./images/theme/themepc.jpg",
                pic2: "./images/theme/albumpc.jpg",
                pic3: "./images/theme/mountpc.jpg",
                pic1alt: "My Koduvayur.",
                pic2alt: "PhotoFrame",
                pic3alt: "Kottamala, Koduvayur"
            }
        },
        pagetop: {
            updated: "Last Updated : "
        },
        footer: {
            copyright: "Team BehindBrains © 2018. All Rights Reserved.",
            share: "Share: ",
            visits: "Website Visits: "
        }
    };

    $rootScope.maldata.mainData = {

        general: {
            author: "krishchianna",
            url: "http://www.mykoduvayur.in",
            logo: "./images/mylogo.png",
            lastupdated: "05 മാര്‍ച്ച്‌ 2018"
        },
        menu: {
            english: "EN",
            malayalam: "മ",
            home: "ഉള്ളടക്കം",
            locality: "പ്രദേശം",
            culture: "സാംസ്കാരികം",
            services: "സേവനം",
            trending: "തരംഗം",
            events: "പരിപാടി",
            emergency: "അത്യാവശ്യം",
            about: "അണിയറ"
        },
        theme: {
            portrait: {
                pic1: "./images/theme/thememob.jpg",
                pic2: "./images/theme/albummob.jpg",
                pic3: "./images/theme/mountmob.jpg",
                pic1alt: "My Koduvayur.",
                pic2alt: "PhotoFrame",
                pic3alt: "Kottamala, Koduvayur"
            },
            landscape: {
                pic1: "./images/theme/themepc.jpg",
                pic2: "./images/theme/albumpc.jpg",
                pic3: "./images/theme/mountpc.jpg",
                pic1alt: "My Koduvayur.",
                pic2alt: "PhotoFrame",
                pic3alt: "Kottamala, Koduvayur"
            }
        },
        pagetop: {
            updated: "Last Updated : "
        },
        footer: {
            copyright: "Team BehindBrains © 2018. All Rights Reserved.",
            share: "Share: ",
            visits: "Website Visits: "
        }
    };

    $rootScope.engdata.home = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is a town located in the Southern part of Palakkad district in Kerala. It’s a Village Panchayat that comes under the Chittur Taluk. It is a place known for its Diversity. Be it the population, slang, festivals, business, culture or the livelihood, there are various kinds of it all in this place.",
            para2_1: "MyKoduvayur",
            para2_2: " is a Web Project initiated by ",
            para2_3: "Team BehindBrains ",
            para2_4: "based on Koduvayur. This is an Information Website which primarily focuses on :",
            list1: "Delivering any and every kind of regularly updated and correct Information related to Koduvayur.",
            list2: "Providing Technical Assistance and Promotion to institutions, businesses, events and schemes for Public Welfare, happening in and around Koduvayur.",
            para3: "This website intends to be a Library about Koduvayur for people from outside, a trustable and informative friend for those who live here, and an everlasting book of memories for those who miss this place.",
            para4: "Read on to find out more…"
        },
        aboutthis: {
            title: "ABOUT THIS WEBSITE",
            list1: "This website is a collection of information regarding anything and everything that is related to Koduvayur.",
            list2: "All the different institutions, Govt. offices, schools, hospitals, historic and religious places, festivals, news, commerce, politics, events, associations etc. find their place on our website, presented in a clean ordered way.",
            list3: "An extensive collection of information and contact details of every establishment and service in and around Koduvayur will help the public to meet their needs in an easier and faster way.",
            list4: "Regular news updates, alerts and a collection of good articles, photographs and videos that relate to our context are included.."
        },
        behindlogo: {
            title: "BEHIND THE LOGO",
            para1_1: "The logo of ",
            para1_2: "MyKoduvayur",
            para1_3: " is a ",
            para1_4: "Banyan tree",
            para1_5: ". Its the National Tree of India. Its from the Moraceae family and its Scientific name is Ficus Benghalensis. Its considered as a Sacred tree all over India and it also has several medicinal properties.",
            para2: "But that’s not why we kept it as Our Logo. In the culturally, geographically and ethnically diverse place of Koduvayur, it is the one thing in common that unites everyone in Koduvayur irrespective of age, gender, religion, caste, location and economic or social status.",
            para3_1: "‘",
            para3_2: "Althara",
            para3_3: "', as we call it, is present in every prime location of the village, and it serves as the main host for almost every event that takes place in here. From small gatherings, to public meetings, business, processions, promotions, games, perfomance and festivals… these ‘Altharas’ have seen them all, from time to time. The term is a part and parcel of everyone in and around this place on their daily conversations. Koduvayur is decorated with numerous banyan trees in general. But it’s the old ones at the prime spots that are considered of great significance.",
            para4: "Be it Angadi Althara, the Capital Centre of Koduvayur, which is the Gateway to the Koduvayur Market, or the Gramapeedika/ High School Athara, which is at the Junction entrance to the Keralapuram Agraharam, or the Sivan Kovil Althara which is at the Heart of the village and the centre spot of Koduvayur Radholsavam, or be it Ethanur, Kakkayur or other locations, ‘Althara’ is the one term that unites the whole of Koduvayur and that’s why we chose an Althara to represent MyKoduvayur."
        },
        funds: {
            title: "FUNDS",
            para1_1: "As is the case with any other website, this website needs funding for its ",
            para1_2: "functioning and regular activity",
            para1_3: ".",
            para2_1: "This website ",
            para2_2: "DOES NOT feature any Online Ads or Cookies",
            para2_3: " as a source of income.",
            para3_1: "Instead, we provide ",
            para3_2: "Prescribed Ad Slots for fixed Time Period",
            para3_3: " for Interested Businesses who wish to promote themselves with this website.",
            para4_1: "The Ad Slot consists of a ",
            para4_2: "fixed area",
            para4_3: " on each page and a ",
            para4_4: "Dedicated Page",
            para4_5: " for each Sponsor.",
            para5: "We also accept and appreciate funds from Well Wishers for the functioning of this Website."
        },
        guide: {
            title: "WEBSITE GUIDE",
            image: "./images/kdrguide.jpg"
        },
        feedback: {
            title: "FEEDBACK",
            intro: "This venture - MyKoduvayur, was planned and processed with the motive of making the Life better for the people in and from this place, using the Web Technology that is growing higher and reaching farther each passing day. So each one of you definitely have a say in here. Your opinions, suggestions and appreciations are a huge motivation for us to go forward and do further. We appreciate each of your support. "
        }
    };

    $rootScope.maldata.home = {
        intro: {
            title: "ആമുഖം",
            para1: "കേരളത്തിലെ പാലക്കാട് ജില്ലയുടെ തെക്ക് പടിഞ്ഞാറ് ഭാഗത്തായി സ്ഥിതി ചെയ്യുന്ന ഒരു നഗരമാണ് കൊടുവായൂർ . ചിറ്റൂർ താലൂക്കിലുള്ള ഒരു ഗ്രാമ പഞ്ചായത്താണ് ഇത്. വൈവിധ്യത്തിന്‌  അറിയപ്പെടുന്ന ഒരു സ്ഥലമാണിത്. സംസാരഭാഷ , ജീവിതശൈലി , ഉത്സവങ്ങൾ, ബിസിനസ്, സംസ്കാരം എന്നിവയൊക്കെ ഈ സ്ഥലത്ത് വിവിധമായ നിരവധി ഇനങ്ങളുണ്ട്.",
            para2_1: "Team BehindBrains",
            para2_2: " ആരംഭിച്ച ഒരു വെബ് പ്രോജക്റ്റ് ആണ്",
            para2_3: " MyKoduvayur",
            para2_4: ". ഇത് കൊടുവായൂരിനെ ആസ്പദമാക്കിയുള്ള ഒരു വെബ്സൈറ്റ് ആണ്. ഈ വെബ്സൈറ്റിന്റെ പ്രധാന ലക്‌ഷ്യം എന്നത്  : ",
            list1: "കൊടുവായൂരുമായി ബന്ധപ്പെട്ട എല്ലാ തരത്തിലും ഉള്ള പതിവായി വിലയിരുത്തപ്പെട്ട ശരിയായ വിവരങ്ങൾ  നാട്ടുകാരിലേക്ക് എത്തിക്കുക.",
            list2: "കൊടുവായൂർ ഭാഗത്തും ചുറ്റുപാടും  ഉള്ള പൊതുമേഖലാ സ്ഥാപനങ്ങൾ, സ്വകാര്യ സ്ഥാപനങ്ങൾ, ബിസിനസ്സുകൾ, പൊതുജനക്ഷേമ പദ്ധതികൾ എന്നിവയ്ക്കുള്ള സാങ്കേതിക സഹായവും പ്രോത്സാഹനവും നൽകുക.  ",
            para3: "ഈ വെബ്സൈറ്റ് പുറമെ നിന്നുള്ളവർക്ക് കൊടുവായൂരിനെക്കുറിച്ചുള്ള ഒരു വിജ്ഞാനകോശവും, ഇവിടെ ജനിച്ചുവളർന്ന് ഇപ്പോൾ മറുനാടുകളിൽ ജീവിക്കുന്നവർക്ക് ഇവിടത്തെ ഓർമകളുടെ ഒരു പുസ്തകവും, ഇവിടത്തെ നാട്ടുകാർക്ക് ശരിയായ വിവരങ്ങൾ ആവശ്യമായ സമയത്ത് നൽകുന്ന ഒരു വിശ്വസ്‌തനായ സുഹൃത്തും ആവും എന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു. ",
            para4: "കൂടുതൽ വിവരങ്ങൾക്കായി തുടർന്ന് വായിക്കുക..."
        },
        aboutthis: {
            title: "ആശയം",
            list1: "കൊടുവായൂരിനെ സംബന്ധിച്ചുള്ള എല്ലാ തരം വിവരങ്ങളുടെയും ഒരു ശേഖരമാണ് ഈ വെബ്‌സൈറ്റ്. ",
            list2: "ഇവിടെയുള്ള എല്ലാതരം സ്ഥാപനങ്ങൾ, സർക്കാർ. ഓഫീസുകൾ, സ്കൂളുകൾ, ആശുപത്രികൾ, ആരാധനാലയങ്ങൾ, ഉത്സവങ്ങൾ, വാർത്തകൾ, വാണിജ്യം, ഭരണകൂടം, രാഷ്ട്രീയം, പരിപാടികൾ, അസോസിയേഷനുകൾ എന്നിവയെക്കുറിച്ചുള്ള വിവരങ്ങൾ ഞങ്ങളുടെ വെബ്സൈറ്റിൽ കൃത്യമായി ക്രമീകരിച്ച് അവതരിപ്പിച്ചിരിക്കുന്നു.",
            list3: "കൊടുവായൂരിലും ചുറ്റുപാടും ഉള്ള എല്ലാ സ്ഥാപനങ്ങളെയും സേവനങ്ങളേയും കുറിച്ചുള്ള വിവരങ്ങളുടെ ഒരു വിശാലമായ ശേഖരം പൊതുജനങ്ങളെ അവരുടെ ആവശ്യങ്ങൾ എളുപ്പം നിറവേറ്റാൻ സഹായിക്കും.",
            list4: "കൊടുവായൂരിനെ സംബന്ധിച്ചുള്ള വാർത്തകൾ, അറിയിപ്പുകൾ, നല്ല ലേഖനങ്ങളുടെ ഒരു ശേഖരം, ഫോട്ടോഗ്രാഫുകൾ, വിഡിയോകൾ എന്നിവയും ഈ വെബ്‌സൈറ്റിൽ ഉൾപ്പെടുന്നു."
        },
        behindlogo: {
            title: "ലോഗോയെക്കുറിച്ച്",
            para1_1: "",
            para1_2: "MyKoduvayur",
            para1_3: "ന്റെ ലോഗോ ഒരു ",
            para1_4: "ആൽമരം",
            para1_5: " ആണ്. ഇന്ത്യയുടെ ദേശീയ വൃക്ഷമായ ആൽമരം മോറാസെയ എന്ന ജൈവകുടുംബത്തിൽ നിന്നാണ്.  അതിന്റെ ശാസ്ത്രനാമം ഫിക്കസ് ബെൻഘലെൻസിസ് ആണ്. ഇന്ത്യയിലുടനീളം ഒരു വിശുദ്ധ മരമായിട്ടാണ് ഇതിനെ ജനങ്ങൾ കാണുന്നത്. ആൽമരത്തിന് നിരവധി ഔഷധഗുണങ്ങൾ ഉണ്ട്.",
            para2: "പക്ഷേ ഇത് കാരണമല്ല ആൽമരത്തെ ഞങ്ങളുടെ ലോഗോ ആക്കിയത്. സംസ്‌കാരത്തിലും പ്രദേശങ്ങളിലും സംസാരരീതികളിലും വൈവിധ്യമുള്ള  കൊടുവായൂരിലെ ജനങ്ങളെ ഏകീകരിക്കുന്ന ഒരു പദം കൂടി ആണ് ആൽമരം.",
            para3_1: "‘",
            para3_2: "ആൽത്തറ",
            para3_3: "', എന്ന് നാം വിളിക്കുന്ന ഈ മരങ്ങൾ കൊടുവായൂരിന്റെ നാനാഭാഗത്തും ഉള്ള എല്ലാ സുപ്രധാന സ്ഥലങ്ങളുടെയും ഭാഗം ആണ്. ഇവിടെ ഏതു ഭാഗത്തു നടത്തുന്ന പരിപാടികൾ ആയാലും പൊതുവെ ആൽത്തറകൾ കേന്ദ്രികരിച്ചാണ് നടക്കാറുള്ളത്. ചെറിയ കൂടികാഴ്‌ചകൾ മുതൽ വലിയ ചടങ്ങുകളും ജാഥയും ബിസിനസ്സും ഉത്സവങ്ങളും കളികളും കലാപരിപാടികളും ഒക്കെ ഈ ആൽത്തറകൾ കാലാകാലങ്ങളായി കണ്ടുവരുന്നതാണ്. 'ആൽത്തറ' എന്ന ഈ വാക്ക് ഇവിടെ ഉള്ള എല്ലാവരുടെയും ദൈനംദിന സംഭാഷണങ്ങളുടെ ഒരു ഭാഗം ആണ്. കൊടുവായൂരിനെ അലങ്കരിക്കാൻ കുറെ ആൽമരങ്ങൾ ഉണ്ടെങ്കിലും, പ്രധാന സ്ഥലങ്ങളിലുള്ള പഴയ ആൽത്തറകളാണ് കൂടുതൽ വിശേഷപ്പെട്ടത്.",
            para4: "കൊടുവായൂരിന്റെ തലസ്ഥാന കേന്ദ്രമായ 'അങ്ങാടി ആൽത്തറ', കേരളപുരം ഗ്രാമത്തിലേക്കുള്ള കവാടമായ 'ഗ്രാമപീടിക', ഗ്രാമത്തിന്റെ ഹൃദയഭാഗത്തുള്ളതും കൊടുവായൂർ രഥോത്സവത്തിന്റെ കേന്ദ്രവും ആയ 'ശിവൻ കോവിൽ ആൽത്തറ', എത്തനുർ, കിഴക്കേത്തറ, കാക്കയൂർ, നവക്കോട്, തുടങ്ങി കൊടുവായൂരിലെ ഏതു സ്ഥലം ആയാലും, കൊടുവായൂരിനെ ജാതി മത പ്രായ വർഗ ബേദമന്യേ ഒന്നിപ്പിക്കുന്ന ഒരു പദം ആണ് 'ആൽത്തറ'. അതിനാലാണ് ആൽത്തറയെ MyKoduvayurന്റെ ലോഗോ ആയി തിരഞ്ഞെടുത്തത്. "
        },
        funds: {
            title: "ഫണ്ടുകൾ",
            para1_1: "ഏതൊരു വെബ്‌സൈറ്റിനെയും പോലെ, ഈ വെബ്‌സൈറ്റിനും അതിന്റെ ",
            para1_2: "സ്ഥിരമായ പ്രവർത്തനത്തിനുവേണ്ടിയുള്ള ",
            para1_3: "ഫണ്ടുകൾ ആവശ്യമാണ്.",
            para2_1: "ഈ വെബ്സൈറ്റിന്റെ വരുമാനത്തിന് വേണ്ടി ഞങ്ങൾ ",
            para2_2: "ഓൺലൈൻ പരസ്യങ്ങൾ പ്രസിദ്ധികരിക്കുന്നില്ല",
            para2_3: ".",
            para3_1: "അതിനു പകരം, ഇവിടെയുള്ള ബിസിനസ്സുകൾ പ്രചരിപ്പിക്കുവാൻ ആഗ്രഹിക്കുന്നവർക്കായി ഞങ്ങൾ ",
            para3_2: "നിശ്ചിത കാലയളവിനുള്ള പരസ്യങ്ങൾ",
            para3_3: " ഈ വെബ്‌സൈറ്റിൽ ലഭ്യമാക്കുന്നു.",
            para4_1: "ഈ പരസ്യങ്ങൾക്ക് ഓരോ പേജിലും ഉള്ള ഒരു ",
            para4_2: "നിശ്ചിത ഭാഗവും",
            para4_3: " ഓരോ സ്‌പോൺസർമാർക്കും വേണ്ടി ",
            para4_4: "വേറിട്ട ഒരു പേജും",
            para4_5: " നൽകുന്നു.  ",
            para5: "ഈ വെബ്സൈറ്റിന്റെ അഭ്യുദയാകാംക്ഷികളിൽ നിന്നുള്ള സംഭാവനകൾ ഞങ്ങൾ നന്ദിപൂർവം സ്വീകരിക്കുന്നു."
        },
        guide: {
            title: "വെബ്‌സൈറ്റ് ഘടന",
            image: "./images/kdrguide.jpg"
        },
        feedback: {
            title: "പ്രതികരണം",
            intro: "MyKoduvayur എന്ന ഈ സംരംഭം ഇപ്പോൾ വളർന്നുവരുന്ന വെബ് ടെക്നോളജി ഉപയോഗിച്ച് കൊടുവായൂരിലെ ജനങ്ങളുടെ ജീവിതശൈലി എളുപ്പമാക്കുവാൻ സഹായിക്കുക എന്ന ഉദ്ദേശത്തോടെയാണ് ആരംഭിച്ചത്. നാട്ടുകാർക്ക് വേണ്ടിയുള്ള ഈ വെബ്‌സൈറ്റിൽ നിങ്ങൾക്കെല്ലാവർക്കും നിങ്ങളുടെ അഭിപ്രായങ്ങളും നിർദേശങ്ങളും ഇവിടെ നിങ്ങളുടെ ഫേസ്ബുക് അക്കൗണ്ട് ഉപയോഗിച്ച് പങ്കുവെക്കാം. നിങ്ങൾ ഓരോരുത്തരുടെയും പിന്തുണയ്ക്കും പ്രോത്സാഹനത്തിനും ഞങ്ങളുടെ നന്ദി പ്രകടിപ്പിക്കുന്നു."

        }
    };

    $rootScope.engdata.locality = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is one of the most prominent regions in the Southern part of Palakkad. The population here is a diverse combination of people with different lifestyles, belonging to several communities and speak different languages and slang. Nochur, Ethanur, Kakkayur, Keralapuram Gramam, Navakkode, Pittupeedika, Mini Estate etc are some of the notable places of this region, divided into 10 administrative wards."
        },
        koduvayur: {
            title: "KODUVAYUR",
            para1: "The domain of Koduvayur stretches to Mannathukavu in the North-West, Nochur in the North-East, Ethanur in the West, Karippode in the East, Kakkayur in the South-West and Annakode in the South.",
            para2: "Koduvayur is the Geographical Intersection between a number of places like Palakkad, Nemmara, Alathur, Chittur, Pollachi, Kollengode etc. The Vehicle Traffic that frequently occurs here is a stand out feature. The road is busy 24/7 as it connects a number of places. KSRTC operates long route buses to Thrissur, Trivandrum, Kochi and Coimbatore through here.",
            para3: "Being the prime Business Center for the south-west region of Palakkad district, most of the population depends upon Koduvayur for their day-to-day needs like vegetables & other groceries, cloth and meat products. This place acts as a hub for merchandise coming from Coimbatore and Pollachi in Tamil Nadu. Koduvayur Market is one of the prominent places and business range from small scale shops to wholesale godowns, active 24/7.",
            para4: "The speaking tongues are mainly Malayalam and Tamil, although the slang varies for each locality and community of people. Population has a majority of Hindus belonging to a number of sub-castes. Muslim community is concentrated on some parts of Koduvayur and there are a number of Christian families spread around even though it is a minority here.  As a part of the land of Palakkad, which is known for its cultural diversity, Koduvayur inherits that Palakkadan esssence for festivals and celebrations. From Eid, Easter and Onam to a number of Regional Festivals spread around, there is something to celebrate each time of the year."
        },
        administration: {
            title: "ADMINISTRATION",
            para1: "The Koduvayur Grama Panchayath is divided into 18 Administrative Wards. It is headed by the Grama Panchayath President and each Ward is represented and administered by the respective Ward Member. The details of the Administration Panel is given below. We hope you find good use of it.",
            list: [
                {
                    wardno: "1",
                    ward: "PULLA ROAD",
                    name: "G.KRISHNAPRASAD",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9495485304"
                },
                {
                    wardno: "2",
                    ward: "UMMATHUMTHOPPU",
                    name: "PRIYA.M",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9846165729"
                },
                {
                    wardno: "3",
                    ward: "CHANTHIRUTHI",
                    name: "PATHMAKRISHNAN",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9809157250"
                },
                {
                    wardno: "4",
                    ward: "KERALAPURAM",
                    name: "UMAIBA.A",
                    party: "S.D.P.I",
                    pic: "",
                    phone: "8086059431"
                },
                {
                    wardno: "5",
                    ward: "KARUVANNURTHARA",
                    name: "NILAVARNEESA",
                    party: "I.U.M.L",
                    pic: "",
                    phone: "9388803700"
                },
                {
                    wardno: "6",
                    ward: "VADAKKUMPADAM",
                    name: "SARITHA.B",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9961557345, 9447248583"
                },
                {
                    wardno: "7",
                    ward: "VEETIYODE",
                    name: "C.ARUMUGHAN‍",
                    party: "B.J.P",
                    pic: "",
                    phone: "9446152553"
                },
                {
                    wardno: "8",
                    ward: "NOCHUR‍",
                    name: "USHA.N‍‍",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "8891374073"
                },
                {
                    wardno: "9",
                    ward: "KARNAKI NAGAR‍",
                    name: "SREEJA SUNIL",
                    party: "B.J.P",
                    pic: "",
                    phone: "9447941346"
                },
                {
                    wardno: "10",
                    ward: "KOYMAR PADAM",
                    name: "M.SUNIL",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9447255022, 9745255022"
                },
                {
                    wardno: "11",
                    ward: "VETTUMPULLI",
                    name: "V.RAJAN",
                    party: "B.J.P",
                    pic: "",
                    phone: "9526408175"
                },
                {
                    wardno: "12",
                    ward: "PEZHUMKADU",
                    name: "C.SWAMINATHAN‍‍",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9526312089"
                },
                {
                    wardno: "13",
                    ward: "KOLODE",
                    name: "THANKAM",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9947446586"
                },
                {
                    wardno: "14",
                    ward: "KANNAMKODE",
                    name: "CHANDRIKA.N‍",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9072982537"
                },
                {
                    wardno: "15",
                    ward: "VAKKODE",
                    name: "BABU.K‍",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9447532813"
                },
                {
                    wardno: "16",
                    ward: "KAKKAYUR‍",
                    name: "INDIRA.K‍",
                    party: "INDEPENDENT‍",
                    pic: "",
                    phone: "9562612035"
                },
                {
                    wardno: "17",
                    ward: "VRINDHAVANAM",
                    name: "UNNIKRISHNAN.M",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9287541060"
                },
                {
                    wardno: "18",
                    ward: "ETHANUR",
                    name: "M.SUDHIR‍‍",
                    party: "I.N.C",
                    pic: "",
                    phone: "9447964597"
                }
            ],
            wardno: "Ward Number: ",
            wardname: "Ward Name: ",
            name: "Member: ",
            party: "Political Party: ",
            phone: "Phone: "
        },
        institutions: {
            title: "INSTITUTIONS",
            thumbs: {
                schools: {
                    pic: "./images/locality/institutions/schools.jpg",
                    info: "SCHOOLS",
                    category: "SCHOOLS"
                }
            },
            list: {
                gramapanchayathoffice: {

                },
                koduvayurarket: {

                },
                govthospital: {

                },
                ksebkoduvayur: {

                },
                oldagehome: {
                    title: "HOME FOR PHYSICALLY HANDICAPPED (AND AGED) (HPH), KODUVAYUR",
                    thumb: "./images/culture/example/thumb.jpg",
                    coverpic: "./images/culture/example/cover.jpg",
                    location: {
                        title: "LOCATION",
                        info: "Thottakkattuthara, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {a: "Established in Koduvayur Since 1983"},
                            {a: "Under Social Justice Dept. of State Govt. Kerala"},
                            {a: "Phone: 04923 251341"},
                            {a: "Visiting Hours: 8 am to 8 pm"},
                            {a: "Superindentent: Mr. P.Narayanan"},
                            {a: "Accomodation Capacity: 25"},
                            {a: "Private Ambulance available"},
                            {a: "Funded mainly by Govt. but also by Local Sponsors"},
                            {a: "Minimum Age 60 for Old Aged Inmates"},
                            {a: "Faculties: 1 Ayurveda Doctor, 1 Nurse, 1 Cook, 2 Helpers"},
                            {a: "TV, Praying Room, Books, Park, Carroms, Chess etc. provided for inmates"}
                        ]
                    },
                    contributions: {
                        title: "CONTRIBUTIONS",
                        info: [
                            {a: "Monetary Funds"},
                            {a: "Clothes"},
                            {a: "Equipments"},
                            {a: "Vegetables and Fruits"},
                            {a: "Grains"},
                            {a: "Spices"},
                            {a: "Contact For Other Contributions"},
                            {a: "NO OUTSIDE FOODS ALLOWED"}
                        ]
                    },
                    about: {
                        title: "ABOUT HPH",
                        info: "Home for Physically Handicapped(And Aged)- HPH, Koduvayur functions under the Social Justice Department of the State Govt. of Kerala, and was established in Koduvayur on 20 April, 1983. It is aimed at providing foo and shelter for old aged and differently abled people who are socially marginalised and have no dear and near to depend upon. It started functioning in a rented house and eventually was shifted to its own building in 2006. With an inmates capacity of 25 and all basic facilities provided, this institution is a blessing for all such people who need to be cared for. It is mainly funded by the State Govt. but many sponsors also immensely contribute to the running of this establishment. Many families on their special events, organise feasts for all the inmates and donate generously for their cause. For any further details regarding admission or contribution, contact the authorities."
                    },
                    gallery: {
                        title: "GALLERY",
                        album: [
                            {pic: ""}
                        ]
                    }
                },

                ghskoduvayur: {
                    title: "GOVERNMENT HIGH SCHOOL, KODUVAYUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Opp. Koduvayur Bus Stand, Gramapeedika, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MASTER: Mr. T. Gopalakrishnan",
                                c_classes: "FROM Vth to Xth STD.",
                                d_divisions: "More than 10 divisions on each class",
                                e_medium: "English Medium and Malayalam Medium",
                                f_strength: "Total Number of Students: 2446",
                                g_faculty: "Total Faculty Members: 91",
                                h_pta: "PTA President: Mr. M. Rajan",
                                i_alumni: "Alumni Association President: Mr. A.K. Narayanan"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "One of the best Govt. schools of the district"},
                            {a: "Computer, Physics, Chemistry, Biology, Maths and Social Science Labs"},
                            {a: "School Library Available"},
                            {a: "Scouts and Guides"},
                            {a: "National Cadet Corps (NCC) for boys and girls"},
                            {a: "Junior Red Cross (JRC) for boys and girls"},
                            {a: "Vast Play Ground for multiple sports"},
                            {a: "Special Coaching on various sports"},
                            {a: "Overall Champions in various Sub District Competitions for consecutive years"},
                            {a: "Special Coaching for weaker students"},
                            {a: "8 CCTV Cameras Installed"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: headmistressghskoduvayur@gmail.com"},
                            {a: "Phone: 04923 25----"},
                            {a: "Head Master (Mob): 9447014123"},
                            {a: "PTA President (Mob): 9447962709"},
                            {a: "Alumni Association President (Mob): 9447082524"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "The story and history of this school goes back a century and it has influenced the life and development of the people in Koduvayur. This place belonged to the Malabar district of Madras state then. The British Govt. initiative of educating people all over India resulted in the establishment of many schools and this school was started in 1897 in Koduvayur, in a small room near a shop in Gramapeedika with a few students. A building was constructed on its current location and started functioning as an elementary school from 1906. This became the first High School of the district from 1918. The current office building in the campus was constructed and the school was fledged with High School classes, staff and facilities in 1928 and was known as Board High School, Koduvayur. The first radio of Koduvayur was set up in front of the school in 1955. Engineering and weaving were also taught here. This school has given birth to innumerous number of talents over the years. It has performed well in multiple fields of academics, arts and sports, and also in many social impacting ways. Higher Secondary was started here in 1990 and the school is well equipped now with all necessary facilities for all departments and still ongoing further developments in all sections. Students are also coached on various sports, NCC, JRC, Scouts and Guides, Personality and Career Development etc. Students of this school have been winning prizes and championships on various competitions in all levels for many years now. This school has a very active PTA and Alumni associations and they help extensively for the development and smooth running of this school. With a beautiful campus, a large number of students and staff, and excellent performance in all departments, this school proves to be one of the best schools around."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                ghsskoduvayur: {
                    title: "GOVERNMENT HIGHER SECONDARY SCHOOL, KODUVAYUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Opp. Koduvayur Bus Stand, Gramapeedika, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "PRINCIPAL: Mr. M. Swaminathan",
                                c_classes: "Classes: Higher Secondary (XI and XII)",
                                d_divisions: "Divisions: Biology-2, Computer Science-1, Commerce-1, Humanities(History)-1, Humanities(Journalism)-1",
                                e_medium: "English Medium",
                                f_strength: "Total Number of Students: 360",
                                g_faculty: "Total Faculty Members: 20"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "Vijayasree Program for weaker students"},
                            {a: "Part of Mathrubhumi SEED Project and Eco-Campaign"},
                            {a: "Computer, Botany, Physics, Chemistry and Zoology Labs"},
                            {a: "School Library Available"},
                            {a: "Career Guidance and Counselling"},
                            {a: "Student - Teacher 'Souhrida' Club"},
                            {a: "Overall Champions for consecutive years on various Sub District events"},
                            {a: "Vast Play Ground for multiple sports"},
                            {a: "One of the finest Higher Secondary Schools of the District"},
                            {a: "8 CCTV Cameras Installed"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: ghsskoduvaayur@gmail.com"},
                            {a: "Phone: 04923 253522"},
                            {a: "Principal (Mob): 9495584073"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "The story and history of this school goes back a century and it has influenced the life and development of the people in Koduvayur. This place belonged to the Malabar district of Madras state then. The British Govt. initiative of educating people all over India resulted in the establishment of many schools and this school was started in 1897 in Koduvayur, in a small room near a shop in Gramapeedika with a few students. A building was constructed on its current location and started functioning as an elementary school from 1906. This became the first High School of the district from 1918. The current office building in the campus was constructed and the school was fledged with High School classes, staff and facilities in 1928 and was known as Board High School, Koduvayur. The first radio of Koduvayur was set up in front of the school in 1955. Engineering and weaving were also taught here. This school has given birth to innumerous number of talents over the years. It has performed well in multiple fields of academics, arts and sports, and also in many social impacting ways. Higher Secondary was started here in 1990 and the school is well equipped now with all necessary facilities for all departments and still ongoing further developments in all sections. Students are also coached on various sports, NCC, JRC, Scouts and Guides, Personality and Career Development etc. Students of this school have been winning prizes and championships on various competitions in all levels for many years now. This school has a very active PTA and Alumni associations and they help extensively for the development and smooth running of this school. With a beautiful campus, a large number of students and staff, and excellent performance in all departments, this school proves to be one of the best schools around."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                dmsbschool: {
                    title: "DMSB SCHOOL, KAKKAYUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near Kakkayur Siva Temple and Althara, Kakkayur, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MASTER: Mr. K.G. Anilkumar",
                                c_classes: "FROM L.K.G to VIIth STD.",
                                d_divisions: "3 divisions on each class",
                                e_medium: "2 English Medium and 1 Malayalam Medium ‍division",
                                f_strength: "Total Number of Students: 578",
                                g_faculty: "Total Faculty Members: 26"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "3 School Vehicles"},
                            {a: "4 Digital / Smart Class Rooms"},
                            {a: "Computer Lab with 25 Computers"},
                            {a: "School Library Available"},
                            {a: "Music, Dance, Drawing, Abacus Special Coaching"},
                            {a: "Noon Feeding for 638 students currently"},
                            {a: "Free Uniform for students"},
                            {a: "Play Ground (Above 1 Acre)"},
                            {a: "Thanal + Sandwanam Project adopting 33 pupils"},
                            {a: "School Radio: Kalalaya Vani"},
                            {a: "36 CCTV Cameras Installed"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: dmsbskakkayur@gmail.com"},
                            {a: "Phone: 04923 251131"},
                            {a: "Head Master (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school is situated in the heart of Kakkayur Village of Koduvayur Panchayath, Palakkad. It was started in 1895 as a small learning institute by Palliyil Chathankutty Menon. It was certified as a Girls School in 1900 and was extended to a Mixed School in 1924. It was affiliated as an Elementary School by the Govt. in 1956 and the Management was headed by Palliyil K.P. Bhaskara Menon. Today, this school consists of 3 Blocks namely Devaki Hall, Narayani Hall and Govindan Hall. The school is being developed each passing year with the constant support of the Management and Former Students. This School has many of the modern facilities including Smart Class Rooms, IT Labs, Bio-Gas Plant, School Radio, School Vehicles, Kitchen and Store etc. This school feeds most of the pupils here for noon and also has adopted a few pupils who are economically backward. This school also has a vast playground of about 1 acre."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                mmmsbschool: {
                    title: "MMMSB SCHOOL, KODUVAYUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near Kakkayur Siva Temple and Althara, Kakkayur, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MASTER: K.G.Anilkumar",
                                c_classes: "FROM L.K.G to VIIth STD.",
                                d_divisions: "3 divisions on each class",
                                e_medium: "2 English Medium and 1 Malayalam Medium ‍division",
                                f_strength: "Total Number of Students: 578",
                                g_faculty: "Total Faculty Members: 26"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "3 School Vehicles"},
                            {a: "4 Digital / Smart Class Rooms"},
                            {a: "Computer Lab with 20 Computers"},
                            {a: "School Library Available"},
                            {a: "Music, Dance, Drawing, Abacus Special Coaching"},
                            {a: "Noon Feeding for 638 students currently"},
                            {a: "Free Uniform for students"},
                            {a: "Play Ground (Above 1 Acre)"},
                            {a: "Thanal + Sandwanam Project adopting 33 pupils"},
                            {a: "School Radio: Kalalaya Vani"},
                            {a: "36 CCTV Cameras Installed"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: dmsbskakkayur@gmail.com"},
                            {a: "Phone: 04923 251131"},
                            {a: "Head Master (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school is situated in the heart of Kakkayur Village of Koduvayur Panchayath, Palakkad. It was started in 1895 as a small learning institute by Palliyil Chathankutty Menon. It was certified as a Girls School in 1900 and was extended to a Mixed School in 1924. It was affiliated as an Elementary School by the Govt. in 1956 and the Management was headed by Palliyil K.P. Bhaskara Menon. Today, this school consists of 3 Blocks namely Devaki Hall, Narayani Hall and Govindan Hall. The school is being developed each passing year with the constant support of the Management and Former Students. This School has many of the modern facilities including Smart Class Rooms, IT Labs, Bio-Gas Plant, School Radio, School Vehicles, Kitchen and Store etc. This school feeds most of the pupils here for noon and also has adopted a few pupils who are economically backward. This school also has a vast playground of about 1 acre."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                stpaulsschool: {
                    title: "ST. PAUL'S SCHOOL, ETHANUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near Uchimahaliyamman Temple, Koduvayur - Thrippalur Road, Ethanur, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "CBSE SYLLABUS",
                                b_principal: "PRINCIPAL: Mrs. D. Radhika",
                                c_classes: "FROM L.K.G to Xth STD.",
                                d_divisions: " divisions on each class",
                                e_medium: "English Medium",
                                f_strength: "Total Number of Students: 400 (approx.)",
                                g_faculty: "Total Faculty Members: 21"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "The only CBSE school in Koduvayur"},
                            {a: "1 School Vehicle"},
                            {a: "Digital / Smart Class facility"},
                            {a: "Computer Lab and General Science Lab"},
                            {a: "School Library Available"},
                            {a: "Yoga, Music, Art, and Games Special Coaching"},
                            {a: "Indoor games, music and dance rooms for students"},
                            {a: "Football, Archery, Karate, Handball coaching for students"},
                            {a: "Play Ground (Above 1 Acre) and Kids Park"},
                            {a: "Personality Development and guidance for students"},
                            {a: "Annual Medical and health check up for students"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: stpaulsethanur@gmail.com"},
                            {a: "Phone: 04923 252096"},
                            {a: "Administrator (Mob): 8129964121"},
                            {a: "Visit: www.stpaulsethanur.com"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school was established in the year 2005 under the management of the St.Paul’s Mission Society, an educational and charitable organization . The Society quite appropriately gave priority to establish a central school in Koduvayur, a popular village in Palakkad district with an aim of providing quality education to children in developing areas. The school got affiliation in the year 2014 to conduct classes upto secondary level.  The school aims at all round development of each student, provides opportunities for their physical, intellectual, moral and spiritual growth and helps to acquire the modern concepts of liberalism, socialism, secularism equality and fraternity. It strives to promote patriotism, spirit of national integration, pride in our cultural, heritage and a scientific outlook. The calm and serene atmosphere that prevails in this campus makes it ideal for an academic institution. The buildings are all modern and spacious and offer the students with a comfortable learning experience."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                nalandaschool: {
                    title: "NALANDA SCHOOL, ETHANUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near Kakkayur Siva Temple and Althara, Kakkayur, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MASTER: K.G.Anilkumar",
                                c_classes: "FROM L.K.G to VIIth STD.",
                                d_divisions: "3 divisions on each class",
                                e_medium: "2 English Medium and 1 Malayalam Medium ‍division",
                                f_strength: "Total Number of Students: 578",
                                g_faculty: "Total Faculty Members: 26"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "3 School Vehicles"},
                            {a: "4 Digital / Smart Class Rooms"},
                            {a: "Computer Lab with 20 Computers"},
                            {a: "School Library Available"},
                            {a: "Music, Dance, Drawing, Abacus Special Coaching"},
                            {a: "Noon Feeding for 638 students currently"},
                            {a: "Free Uniform for students"},
                            {a: "Play Ground (Above 1 Acre)"},
                            {a: "Thanal + Sandwanam Project adopting 33 pupils"},
                            {a: "School Radio: Kalalaya Vani"},
                            {a: "36 CCTV Cameras Installed"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: dmsbskakkayur@gmail.com"},
                            {a: "Phone: 04923 251131"},
                            {a: "Head Master (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school is situated in the heart of Kakkayur Village of Koduvayur Panchayath, Palakkad. It was started in 1895 as a small learning institute by Palliyil Chathankutty Menon. It was certified as a Girls School in 1900 and was extended to a Mixed School in 1924. It was affiliated as an Elementary School by the Govt. in 1956 and the Management was headed by Palliyil K.P. Bhaskara Menon. Today, this school consists of 3 Blocks namely Devaki Hall, Narayani Hall and Govindan Hall. The school is being developed each passing year with the constant support of the Management and Former Students. This School has many of the modern facilities including Smart Class Rooms, IT Labs, Bio-Gas Plant, School Radio, School Vehicles, Kitchen and Store etc. This school feeds most of the pupils here for noon and also has adopted a few pupils who are economically backward. This school also has a vast playground of about 1 acre."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                vidyadhirajaschool: {
                    title: "VIDYADHIRAJA SCHOOL, KODUVAYUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near Marian College Junction, Koduvayur-Palakkad Road, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MISTRESS: Mrs. K. Ushadevi",
                                c_classes: "FROM L.K.G to VIIth STD.",
                                d_divisions: "3 divisions on each class",
                                e_medium: "2 English Medium and 1 Malayalam Medium ‍division",
                                f_strength: "Total Number of Students: 578",
                                g_faculty: "Total Faculty Members: 26"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "Calm and peaceful campus away from town"},
                            {a: "Smart Class Rooms powered by TATA Class EDGE"},
                            {a: "Computer, Science, Maths and Social Labs"},
                            {a: "School Library Available"},
                            {a: "Yoga, Dance, Karate, Instrumental music Special Coaching"},
                            {a: "Mini-Park available for students"},
                            {a: "Study Tour for students each year"},
                            {a: "Play Ground in school premises"},
                            {a: "Participation and medals won in Sub-District Kalolsavam each year by students"},
                            {a: "School Radio installed"},
                            {a: "36 CCTV Cameras Installed"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: vidyadhirajaschool@gmail.com"},
                            {a: "Phone: 04923 253744"},
                            {a: "Head Mistress (Mob): 9447392833"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school was founded and headed by Vidyadhiraja Vidyasamajam in 1985 and it started in a rented house in the Keralapuram village. Later on it was moved to its independent current location and the running and ownership of the school was taken over by Mr. R. Ramachandran and Family, who are currently running this school. The Kerala State Govt. affiliated this school in 2013 based on its current standards. This school is one of the prominent elementary schools around this place in terms of academics, infrastructure, activities and student performances."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                gbupschool: {
                    title: "GBUP SCHOOL, ETHANUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near Pittupeedika Junction, Koduvayur - Thrippalur Road, Ethanur, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MISTRESS: Mrs. G. Padmini",
                                c_classes: "FROM L.K.G to VIIth STD.",
                                d_divisions: "2 divisions on each class",
                                e_medium: "Malayalam Medium with Parallel English Medium Classes",
                                f_strength: "Total Number of Students: 423",
                                g_faculty: "Total Faculty Members: 24"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "Digital / Smart Class Room"},
                            {a: "Computer Lab, Science Lab and Maths Lab"},
                            {a: "Class Library Available in each class"},
                            {a: "Physical training, arts and work experience Special Coaching"},
                            {a: "Arabic and L.S.S classes"},
                            {a: "Noon Feeding for students"},
                            {a: "Free Uniform and text books for students from I to VII std"},
                            {a: "Play Ground in school campus"},
                            {a: "Specialised assembly hall and dining hall for pupils"},
                            {a: "School Radio: Aakasha Vani"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: gbupsethanur@gmail.com"},
                            {a: "Phone: 04923 251177"},
                            {a: "Head Mistress (Mob): 9037403712"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school began as an Ashram in 1912 near Ethanur. It was then brought under Malabar Dist. Board as two separate schools, one for boys and one for girls. Then it was merged to one school again on a building given by the Mullakkal family. It shifted to the current building in 1997 and is run smoothly with the help of the Panchayath, MLA, Former students and other well wishers. L.S.S, prizes in quiz and literary competitions, a state of the art maths lab, specialised assembly hall and dining hall, a rain water harvesting plant, etc are some of the highlights of this school. "
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                gblpschool: {
                    title: "GBLP SCHOOL, KODUVAYUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near Kakkayur Siva Temple and Althara, Kakkayur, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MASTER: K.G.Anilkumar",
                                c_classes: "FROM L.K.G to VIIth STD.",
                                d_divisions: "3 divisions on each class",
                                e_medium: "2 English Medium and 1 Malayalam Medium ‍division",
                                f_strength: "Total Number of Students: 578",
                                g_faculty: "Total Faculty Members: 26"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "3 School Vehicles"},
                            {a: "4 Digital / Smart Class Rooms"},
                            {a: "Computer Lab with 20 Computers"},
                            {a: "School Library Available"},
                            {a: "Music, Dance, Drawing, Abacus Special Coaching"},
                            {a: "Noon Feeding for 638 students currently"},
                            {a: "Free Uniform for students"},
                            {a: "Play Ground (Above 1 Acre)"},
                            {a: "Thanal + Sandwanam Project adopting 33 pupils"},
                            {a: "School Radio: Kalalaya Vani"},
                            {a: "36 CCTV Cameras Installed"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: dmsbskakkayur@gmail.com"},
                            {a: "Phone: 04923 251131"},
                            {a: "Head Master (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school is situated in the heart of Kakkayur Village of Koduvayur Panchayath, Palakkad. It was started in 1895 as a small learning institute by Palliyil Chathankutty Menon. It was certified as a Girls School in 1900 and was extended to a Mixed School in 1924. It was affiliated as an Elementary School by the Govt. in 1956 and the Management was headed by Palliyil K.P. Bhaskara Menon. Today, this school consists of 3 Blocks namely Devaki Hall, Narayani Hall and Govindan Hall. The school is being developed each passing year with the constant support of the Management and Former Students. This School has many of the modern facilities including Smart Class Rooms, IT Labs, Bio-Gas Plant, School Radio, School Vehicles, Kitchen and Store etc. This school feeds most of the pupils here for noon and also has adopted a few pupils who are economically backward. This school also has a vast playground of about 1 acre."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                satyasaischool: {
                    title: "SATYA SAI SCHOOL, KODUVAYUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near Kakkayur Siva Temple and Althara, Kakkayur, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MASTER: K.G.Anilkumar",
                                c_classes: "FROM L.K.G to VIIth STD.",
                                d_divisions: "3 divisions on each class",
                                e_medium: "2 English Medium and 1 Malayalam Medium ‍division",
                                f_strength: "Total Number of Students: 578",
                                g_faculty: "Total Faculty Members: 26"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "3 School Vehicles"},
                            {a: "4 Digital / Smart Class Rooms"},
                            {a: "Computer Lab with 20 Computers"},
                            {a: "School Library Available"},
                            {a: "Music, Dance, Drawing, Abacus Special Coaching"},
                            {a: "Noon Feeding for 638 students currently"},
                            {a: "Free Uniform for students"},
                            {a: "Play Ground (Above 1 Acre)"},
                            {a: "Thanal + Sandwanam Project adopting 33 pupils"},
                            {a: "School Radio: Kalalaya Vani"},
                            {a: "36 CCTV Cameras Installed"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: dmsbskakkayur@gmail.com"},
                            {a: "Phone: 04923 251131"},
                            {a: "Head Master (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school is situated in the heart of Kakkayur Village of Koduvayur Panchayath, Palakkad. It was started in 1895 as a small learning institute by Palliyil Chathankutty Menon. It was certified as a Girls School in 1900 and was extended to a Mixed School in 1924. It was affiliated as an Elementary School by the Govt. in 1956 and the Management was headed by Palliyil K.P. Bhaskara Menon. Today, this school consists of 3 Blocks namely Devaki Hall, Narayani Hall and Govindan Hall. The school is being developed each passing year with the constant support of the Management and Former Students. This School has many of the modern facilities including Smart Class Rooms, IT Labs, Bio-Gas Plant, School Radio, School Vehicles, Kitchen and Store etc. This school feeds most of the pupils here for noon and also has adopted a few pupils who are economically backward. This school also has a vast playground of about 1 acre."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                dnmjbschool: {
                    title: "DNMJB SCHOOL, NOCHUR",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " LOCATION",
                        info: "Near BSNL Telephone Exchange, Nochur Main Road, Nochur, Koduvayur."
                    },
                    details: {
                        title: "DETAILS",
                        info: [
                            {
                                a_syllabus: "STATE PATTERN SYLLABUS",
                                b_principal: "HEAD MISTRESS: Mrs V.S. Sobha",
                                c_classes: "FROM L.K.G to IVth STD.",
                                d_divisions: "1 division on each class",
                                e_medium: "Malayalam Medium",
                                f_strength: "Total Number of Students: 130",
                                g_faculty: "Total Faculty Members: 6"
                            }
                        ]
                    },
                    special: {
                        title: "SPECIAL FEATURES",
                        info: [
                            {a: "Free Vehicle Service, Uniform and Study Kit for Class I students"},
                            {a: "Pre Nursery Available"},
                            {a: "Arabic and L.S.S Classes"},
                            {a: "Special Coaching for weaker students"},
                            {a: "Noon Feeding for students"},
                            {a: "Annual Study Tour for students"},
                            {a: "Play Ground in school campus"}
                        ]
                    },
                    contact: {
                        title: "CONTACT US",
                        info: [
                            {a: "e-mail: sobhadnmjbs@gmail.com"},
                            {a: "Phone: 04923 251000"},
                            {a: "Head Mistress (Mob): 9496673270"}
                        ]

                    },
                    about: {
                        title: "ABOUT THIS SCHOOL",
                        info: "This school is named after Late Mr. Damodaran Nair in his memory. It was established in 1935 and run by the Nochur Devaswom as a Kudi-Pallikkudam. It was shifted to the current building is 1990 under the management of Mr.Sivaramakrishnan from Palakkad. This is a State Govt. Aided institution and is also helped by former students for its smooth functioning. Pre nursery and child care is also available here. Teachers are very caring and affectionate and it is a nice atmosphere here for students."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                }
            }
        },
        society: {
            title: "SOCIETY",
            party: {
                title: "POLITICAL PARTIES",
                list: [

                ]
            },
            clubs: {
                title: "ARTS & SPORTS CLUBS",
                list: [

                ]
            },
            other: {
                title: "OTHER ASSOCIATIONS",
                list: [

                ]
            }
        }
    };

    $rootScope.maldata.locality = {
        intro: {
            title: "ആമുഖം",
            para1: "പാലക്കാട് തെക്ക് ഭാഗത്തെ ഏറ്റവും പ്രധാനപ്പെട്ട ഭാഗങ്ങളിൽ ഒന്നാണ് കൊടുവായൂർ. വിവിധ ജനവിഭാഗങ്ങളിൽ പെട്ട വ്യത്യസ്ത ജീവിതശൈലികളും സംസാരഭാഷകളും  ഉള്ള ജനങ്ങയുടെ  വൈവിധ്യമാർന്ന സംയോജനമാണ് ഇവിടെയുള്ളത്. നൊച്ചൂർ, എത്തനൂർ, കാക്കയൂർ, കേരളപുരം ഗ്രാമം, നവക്കോട്, പിട്ടുപ്പീടിക, മിനി എസ്റ്റേറ്റ് തുടങ്ങിയവയാണ് ഈ മേഖലയിലെ ചില പ്രധാന സ്ഥലങ്ങൾ. ഭരണപരമായി കൊടുവായൂർ എന്ന ഗ്രാമപഞ്ചായത്ത് 10 വാർഡുകളായി തരംതിരിച്ചിരിക്കുന്നു. "
        },
        koduvayur: {
            title: "കൊടുവായൂർ",
            para1: "വടക്കുപടിഞ്ഞാറ് ഭാഗത്ത് മന്നത്തുകാവ്, വടക്കുകിഴക്ക് ഭാഗത്ത് ഏത്തനൂർ, കിഴക്ക് ഭാഗത്ത് കരിപ്പോട്, തെക്കുപടിഞ്ഞാറ് ഭാഗത്ത് കാക്കയൂർ, തെക്കു ഭാഗത്ത് അണ്ണക്കോട് എന്നിവിടങ്ങൾക്കുള്ളിലായാണ്  കൊടുവായൂർ എന്ന പ്രദേശം സ്ഥിതി ചെയ്യുന്നത്.",
            para2: "പാലക്കാട്, നെന്മാറ, ആലത്തൂർ, ചിറ്റൂർ, പൊള്ളാച്ചി, കൊല്ലങ്കോട് തുടങ്ങിയ സ്ഥലങ്ങളെ തമ്മിൽ ബന്ധിപ്പിക്കുന്ന സ്ഥലമാണ് കൊടുവായൂർ. ഇവിടെ പലപ്പോഴും ഉണ്ടാവാറുള്ള ട്രാഫിക് ബ്ലോക്കുകൾ ഒരു സ്ഥിരം ചർച്ചാവിഷയം ആണ്. നിരവധി സ്ഥലങ്ങൾ ബന്ധിപ്പിക്കുന്നതിനാൽ ഈ റൂട്ടിൽ എല്ലാ സമയങ്ങളിലും വാഹനഗതാഗതം പതിവാണ്. തൃശ്ശൂർ, തിരുവനന്തപുരം, കൊച്ചി, കോയമ്പത്തൂർ എന്നിവിടങ്ങളിലേക്ക് ഈ വഴി ദീർഘദൂര കെഎസ്ആർടിസി ബസ് സർവ്വീസ് ഉണ്ട്.",
            para3: "പാലക്കാട് ജില്ലയുടെ തെക്ക്-പടിഞ്ഞാറേ ഭാഗത്തെ പ്രധാന വാണിജ്യകേന്ദ്രം ആയതിനാൽ ജനസംഖ്യയുടെ ഭൂരിഭാഗവും പച്ചക്കറി, പലചരക്ക്, തുണികൾ, ഇറച്ചി തുടങ്ങിയ ആവശ്യങ്ങൾക്ക് കൊടുവായൂരിനെ ആശ്രയിക്കുന്നു. തമിഴ്‌നാട്ടിലെ കോയമ്പത്തൂർ, പൊള്ളാച്ചി എന്നിവിടങ്ങളിൽ നിന്നു വരുന്ന സാധനങ്ങളൊക്കെ ഇവിടത്തെ വിപണി വഴിയാണ് ജനങ്ങളിലെത്തുന്നത്. കൊടുവായൂർ അങ്ങാടി ഇവിടത്തെ കച്ചവടത്തിന്റെ ഒരു പ്രധാന കേന്ദ്രമാണ്. ചെറുകിട കടകൾ മുതൽ സജീവമായ വലിയ ഗോഡൗണുകൾ വരെ ഇവിടത്തെ കച്ചവടസ്ഥാപനങ്ങൾ നീളുന്നു. അതിരാവിലെ തൊട്ട് അർധരാത്രി വരെ ഇവിടത്തെ വാണിജ്യം സജീവമാണ്.",
            para4: "കൊടുവായൂരിൽ സംസാരിക്കുന്ന ഭാഷകൾ പ്രധാനമായും മലയാളം, തമിഴ് ആണ് എന്നിരുന്നാലും ഇവിടത്തെ ഓരോ പ്രദേശങ്ങളിലും അവിടത്തേതായ  സംസാരശൈലികൾ ഉണ്ട്. ജനസംഖ്യയിൽ കൂടുതൽ ഹിന്ദുക്കൾ ആണ്. ഇവിടത്തെ കുറച്ചു പ്രദേശങ്ങൾ കേന്ദ്രികരിച്ച് മുസ്ലീം സമുദായക്കാർ ജീവിക്കുന്നു. ഇവിടത്തെ ഒരു ന്യൂനപക്ഷമാണെങ്കിലും അനേകം ക്രിസ്ത്യൻ കുടുംബങ്ങളും ഇവിടെയുണ്ട്. സാംസ്കാരിക വൈവിധ്യത്തിനും  ഉത്സവങ്ങൾക്കും പേരുകേട്ട പാലക്കാടിന്റെ തനിമ അപ്പാടെ ഉൾക്കൊണ്ട ഒരു നാടാണ് കൊടുവായൂർ. ഈദ്, ഓണം, ഈസ്റ്റർ പോലത്തെ പൊതു ഉത്സവങ്ങളും നിരവധി പ്രാദേശിക ഉത്സവങ്ങളും ഇവിടെ ആഘോഷിക്കാറുണ്ട്. അനേകം വിഭാഗങ്ങളും ഉത്സവങ്ങളും ഉള്ളതിനാൽ ഇവിടെ വർഷമെമ്പാടും ആഘോഷങ്ങൾ പതിവാണ്."
        },
        administration: {
            title: "ഭരണഘടന",
            para1: "",
            list: [
                {
                    wardno: "1",
                    ward: "പുല്ലാറോഡ്",
                    name: "ജി.ക്യഷ്ണപ്രസാദ്",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9495485304"
                },
                {
                    wardno: "2",
                    ward: "ഉമ്മത്തും തോപ്പ്",
                    name: "പ്രീയ.എം",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9846165729"
                },
                {
                    wardno: "3",
                    ward: "ചാന്തിരുത്തി",
                    name: "പത്മകൃഷ്ണന്‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9809157250"
                },
                {
                    wardno: "4",
                    ward: "കേരളപുരം",
                    name: "ഉമൈബ.എ",
                    party: "എസ്.ഡി.പി.ഐ",
                    pic: "",
                    phone: "8086059431"
                },
                {
                    wardno: "5",
                    ward: "കരുവന്നൂര്‍തറ",
                    name: "നിലാവര്‍നീസ",
                    party: "ഐ യു എം.എല്‍	",
                    pic: "",
                    phone: "9388803700"
                },
                {
                    wardno: "6",
                    ward: "വടക്കുംമ്പാടം",
                    name: "സരിത.ബി",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9961557345, 9447248583"
                },
                {
                    wardno: "7",
                    ward: "വീട്ടിയോട്",
                    name: "സി.ആറുമുഖന്‍",
                    party: "ബി.ജെ.പി",
                    pic: "",
                    phone: "9446152553"
                },
                {
                    wardno: "8",
                    ward: "നൊച്ചൂൂര്‍",
                    name: "ഉഷ.എന്‍‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "8891374073"
                },
                {
                    wardno: "9",
                    ward: "കര്‍ണ്ണകി നഗര്‍",
                    name: "ശ്രീജ സുനില്‍",
                    party: "ബി.ജെ.പി",
                    pic: "",
                    phone: "9447941346"
                },
                {
                    wardno: "10",
                    ward: "കൊയ്മാര്‍പാടം",
                    name: "എ.സുനില്‍‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9447255022, 9745255022"
                },
                {
                    wardno: "11",
                    ward: "വെട്ടുുംമ്പുള്ളി",
                    name: "വി.രാജന്‍‍",
                    party: "ബി.ജെ.പി",
                    pic: "",
                    phone: "9526408175"
                },
                {
                    wardno: "12",
                    ward: "പേഴുംകാട്",
                    name: "സി.സ്വാമിനാഥന്‍‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9526312089"
                },
                {
                    wardno: "13",
                    ward: "കോളോട്",
                    name: "തങ്കം‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9947446586"
                },
                {
                    wardno: "14",
                    ward: "കണ്ണങ്കോട്",
                    name: "ചന്ദ്രിക.എന്‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9072982537"
                },
                {
                    wardno: "15",
                    ward: "വാക്കോട്",
                    name: "ബാബു.കെ‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9447532813"
                },
                {
                    wardno: "16",
                    ward: "കാക്കയൂര്‍",
                    name: "ഇന്ദിര.കെ‍",
                    party: "സ്വതന്ത്രന്‍",
                    pic: "",
                    phone: "9562612035"
                },
                {
                    wardno: "17",
                    ward: "വ്യന്ദാവനം",
                    name: "ഉണ്ണിക്യഷ്ണന്‍.എ",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9287541060"
                },
                {
                    wardno: "18",
                    ward: "എത്തന്നൂര്‍",
                    name: "എം.സുധീര്‍‍",
                    party: "ഐ.എന്‍.സി",
                    pic: "",
                    phone: "9447964597"
                }
            ],
            wardno: "വാര്‍ഡ്‌ നമ്പര്‍: ",
            wardname: "വാര്‍ഡിന്റെ പേര്: ",
            name: "മെമ്പര്‍: ",
            party: "രാഷ്ട്രീയ പാര്‍ട്ടി: ",
            phone: "ഫോണ്‍: "
        },
        institutions: {
            title: "സ്ഥാപനങ്ങൾ",
            thumbs: {
                schools: {
                    pic: "./images/locality/institutions/schools.jpg",
                    info: "സ്ക്കൂളുകള്‍",
                    category: "സ്ക്കൂളുകള്‍"
                }
            },
            list: {
                gramapanchayathoffice: {

                },
                koduvayurarket: {

                },
                govthospital: {

                },
                ksebkoduvayur: {

                },
                oldagehome: {
                    title: "വികലാംഗ വൃദ്ധ സദനം, കൊടുവായൂര്‍",
                    thumb: "./images/culture/example/thumb.jpg",
                    coverpic: "./images/culture/example/cover.jpg",
                    location: {
                        title: "സ്ഥലം",
                        info: "തോട്ടെക്കാട്ടുതറ, കൊടുവായൂര്‍"
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {a: "കൊടുവായൂരില്‍ 1983ല്‍ സ്ഥാപിച്ചു"},
                            {a: "കേരള സര്‍ക്കാര്‍ സാമൂഹ്യ നീതി വകുപ്പിന് കീഴില്‍ പ്രവര്‍ത്തിക്കുന്നു "},
                            {a: "ഫോണ്‍: 04923 251341"},
                            {a: "സന്ദര്‍ശന സമയം : 8 am to 8 pm"},
                            {a: "കാര്യാധികാരി: P.നാരായണന്‍"},
                            {a: "താമസസൌകര്യം: 25 പേര്‍ക്ക്"},
                            {a: "സ്വകാര്യ ആംബുലന്‍സ് ലഭ്യമാണ്"},
                            {a: "സര്‍ക്കാരുടെയും ചില നാട്ടുകാരുടെയും സംഭാവനകളാല്‍ നടത്തിക്കൊണ്ടുവരുന്നു"},
                            {a: "വൃദ്ധരായ അന്ധേയവാസികളുടെ പ്രായം കുറഞ്ഞത് 60 ആണ്"},
                            {a: "പരിപാലിക്കുന്നവര്‍: 1 ആയുര്‍വേദ ഡോക്ടര്‍, 1 നേഴ്സ്, 1 പാചക ഉദ്യോഗസ്ഥ, 2 സഹായികള്‍"},
                            {a: "ടി.വി , പ്രാര്‍ത്ഥനാലയം, പുസ്തകങ്ങള്‍, തോട്ടം, ക്യാരംസ്, ചെസ്സ്‌ തുടങ്ങിയ സൌകര്യങ്ങള്‍ അന്ധേയവാസികള്‍ക്ക് നല്‍കുന്നു"}
                        ]
                    },
                    contributions: {
                        title: "സംഭാവനകള്‍",
                        info: [
                            {a: "സാമ്പത്തികമായി"},
                            {a: "തുണിത്തരങ്ങള്‍"},
                            {a: "ഉപകരണങ്ങള്‍"},
                            {a: "പഴങ്ങളും പച്ചക്കറികളും"},
                            {a: "ധാന്യങ്ങള്‍"},
                            {a: "മറ്റു പാചകസാധനങ്ങള്‍"},
                            {a: "മറ്റു സംഭാവനകള്‍ക്ക് ബന്ധപ്പെടുക"},
                            {a: "പുറമേ നിന്നുള്ള ഭക്ഷണം അനുവദിക്കുന്നതല്ല"}
                        ]
                    },
                    about: {
                        title: "സ്ഥാപനത്തെക്കുറിച്",
                        info: "കൊടുവായൂരിലെ വികലാംഗ വൃദ്ധസദനം കേരള സര്‍ക്കാര്‍ സാമൂഹ്യ നീതി വകുപ്പിനു കീഴില്‍ 1983 ഏപ്രില്‍ 20ന് പ്രവര്‍ത്തനമാരംഭിച്ചു. സമൂഹത്തില്‍ നിന്ന് പാര്‍ശ്വവത്കരിക്കപ്പെട്ടവരും പരിപാലിക്കാന്‍ സ്വന്തബന്ധങ്ങള്‍ ഇല്ലാത്തവരുമായ വൃദ്ധരേയും വികലാംഗരേയും ശുശ്രൂഷിക്കുക എന്ന ഉദ്ദേശത്തോടെയാണ് ഈ സ്ഥാപനം ആരംഭിച്ചത്. തുടങ്ങിയപ്പോള്‍ ഒരു വാടകവീട്ടില്‍ ആയിരുന്ന ഈ സ്ഥാപനം 2006ല്‍ ഒരു പുതിയ സ്വന്തം കെട്ടിടത്തേക്ക് മാറ്റി. 25 പേര്‍ക്കുള്ള താമസസൌകര്യം ഉള്ള ഇവിടെ എല്ലാ അടിസ്ഥാന സൌകര്യങ്ങളും അന്ധേയവാസികള്‍ക്ക് നല്‍കപ്പെടുന്നു. സംസ്ഥാന സര്‍ക്കാരുടെയും മറ്റു ചില നാട്ടുകാരുടെയും സംഭാവനകളാല്‍ നടത്തിക്കൊണ്ടുവരുന്ന ഈ സ്ഥാപനം ഇത്തരത്തിലുള്ള ജനങ്ങള്‍ക്ക് ഒരു അനുഗ്രഹമാണ്. ചില കുടുംബങ്ങള്‍ വിശേഷ ദിവസങ്ങളില്‍ ഇവിടുള്ളവര്‍ക്ക് സദ്യയും സമ്മാനങ്ങളും നല്‍കാറുണ്ട്. കൂടുതല്‍ വിവരങ്ങള്‍ക്ക് ഇവിടത്തെ കാര്യധികാരിയുമായി ബന്ധപ്പെടുക."
                    },
                    gallery: {
                        title: "GALLERY",
                        album: [
                            {pic: ""}
                        ]
                    }
                },

                ghskoduvayur: {
                    title: "ഗവ. ഹൈ സ്ക്കൂള്‍, കൊടുവായൂര്‍‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "കൊടുവായൂര്‍ ബസ്‌ സ്റ്റാന്‍ഡിന് എതിര്‍വശം, ഗ്രാമപീടിക, കൊടുവായൂര്‍. "
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മാസ്റ്റര്‍: Mr. T. ഗോപാലകൃഷ്ണന്‍ ‍",
                                c_classes: "Vth മുതല്‍ Xth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 10ല്‍ കൂടുതല്‍ ഡിവിഷന്‍",
                                e_medium: "ഇംഗ്ലീഷ് മീഡിയം & മലയാളം മീഡിയം",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 2446",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 91",
                                h_pta: "PTA പ്രസിഡന്‍റ്: Mr. M. രാജന്‍",
                                i_alumni: "പൂര്‍വ വിദ്യാര്‍ത്ഥി അസോസിയേഷന്‍ പ്രസിഡന്‍റ്: Mr. A.K. നാരായണന്‍"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "പാലക്കാടിലെ മികച്ച ഗവ. സ്ക്കൂളുകളില്‍ ഒന്ന്"},
                            {a: "കമ്പ്യൂട്ടര്‍, ഫിസിക്സ്‌, കെമിസ്ട്രി, ബയോളജി, മാത്തമാറ്റിക്സ്, സോഷ്യല്‍ സയന്‍സ് ലാബുകള്‍"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "സ്ക്കൌട്ട്സ് & ഗൈഡ്സ്"},
                            {a: "നാഷണല്‍ കാഡറ്റ് കോര്‍പ്സ് (NCC) ആണ്‍കുട്ടികള്‍ക്കും പെണ്‍കുട്ടികള്‍ക്കും"},
                            {a: "ജൂനിയര്‍ റെഡ് ക്രോസ്സ് (JRC) ആണ്‍കുട്ടികള്‍ക്കും പെണ്‍കുട്ടികള്‍ക്കും"},
                            {a: "വിവിധ കായിക ഇനങ്ങള്‍ക്ക് ഉള്ള വിശാലമായ സ്ക്കൂള്‍ മൈതാനം "},
                            {a: "വിവിധ കായിക ഇനങ്ങളുടെ സ്പെഷ്യല്‍ കോച്ചിംഗ് "},
                            {a: "സബ്-ജില്ല തലത്തില്‍ ഉള്ള വിവിധ ഇനം മത്സരങ്ങളിലെയും കലോത്സവത്തിലെയും ഓവറോള്‍ ചാമ്പ്യന്‍സ്"},
                            {a: "മാര്‍ക്ക്‌ കുറവുള്ള വിദ്യാര്‍ത്ഥികള്‍ക്ക് സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "8 CCTV ക്യാമറകള്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: headmistressghskoduvayur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 25----"},
                            {a: "ഹെഡ് മാസ്റ്റര്‍ (Mob): 9447014123"},
                            {a: "PTA പ്രസിഡന്‍റ് (Mob): 9447962709"},
                            {a: "പൂര്‍വ വിദ്യാര്‍ത്ഥി അസോസിയേഷന്‍ പ്രസിഡന്‍റ് (Mob): 9447082524"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "കൊടുവായൂരിന്റെ ജനജീവിതത്തിലും വികസനത്തിലും ഏറെ പങ്കുവഹിച്ചിട്ടുള്ള ഗവ. ഹൈ സ്ക്കൂളിന്റെ ചരിത്രം 100 വര്‍ഷത്തോളം പഴക്കമുള്ളതാണ്. ഈ സ്ഥലം അപ്പോള്‍ മദ്രാസ്‌ സംസ്ഥാനത്തിലെ മലബാര്‍ ജില്ലയുടെ ഭാഗമായിരുന്നു. ബ്രിട്ടീഷ്‌ ഗവണ്മെന്റ് തുടങ്ങി വെച്ച വിദ്യാഭ്യാസ പദ്ധതിയുടെ ഭാഗമായി 1897ല്‍ ആണ് കൊടുവായൂരില്‍ ഈ വിദ്യാലയം ആരംഭിച്ചത്. ഗ്രാമപീടികയിലെ ഒരു ചെറിയ കടയുടെ മുറിയില്‍ കുറച്ച് കുട്ടികളോടെ തുടങ്ങിയ ഈ വിദ്യാലയം 1906ല്‍ സ്വന്തം കെട്ടിടത്തില്‍ ഒരു എലമെന്ററി ആയി പ്രവര്‍ത്തനം ആരംഭിച്ചു. 1918ല്‍ ഇത് പാലക്കാടിലെആദ്യത്തെ ഹൈ സ്ക്കൂളായി മാറി. 1928ല്‍ ഇപ്പോള്‍ ഉള്ള ഓഫീസ് കെട്ടിടം പണി പൂര്‍ത്തിയാക്കി ഹൈ സ്ക്കൂള്‍ സൌകര്യങ്ങളും അധ്യാപകരും വിദ്യാര്‍ത്ഥികളും ആയി ഹൈ സ്ക്കൂള്‍ ക്ലാസ്സുകളോടെ ബോര്‍ഡ്‌ ഹൈ സ്ക്കൂള്‍, കൊടുവായൂര്‍ എന്ന പേരില്‍ പ്രവര്‍ത്തനം തുടര്‍ന്നു. കൊടുവായൂരിലെ ആദ്യത്തെ റേഡിയോ സ്ക്കൂളിനു മുന്‍വശത്ത് 1955ല്‍ സ്ഥാപിച്ചു. എണ്ണമറ്റ പ്രതിഭകളെ വാര്‍ത്തെടുത്ത ഈ വിദ്യാലയത്തില്‍ എഞ്ചിനീയറിംഗ്, തയ്യല്‍ എന്നീ വിഷയങ്ങളും പഠിപ്പിച്ചുരുന്നു. ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ വിദ്യാഭ്യാസം മാത്രമല്ലാതെ കലാകായിക സാങ്കേതിക സാമൂഹിക മേഘലകളിലും ഉന്നതസ്ഥാനങ്ങളില്‍ ഉള്ളവരും ഉന്നതപ്രകടനങ്ങള്‍ കാഴ്ച്ചവെച്ചവരും ആണ്. 1990ല്‍  ഇവിടെ ഹയര്‍ സെക്കണ്ടറി വിഭാഗം  പ്രവര്‍ത്തനം തുടങ്ങി. ഇപ്പോള്‍ ഈ വിദ്യാലയത്തില്‍ എല്ലാ തരത്തിലും ഉള്ള സൌകര്യങ്ങളും സജ്ജികരിച്ചുവരുകയാണ്. ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ക്ക് NCC, JRC, സ്കൌട്ട്സ് & ഗൈഡ്സ്, വിവിധ കായികയിനങ്ങള്‍ എന്നിവയ്ക്കുള്ള കോച്ചിംഗും അതല്ലാതെ വ്യക്തിത്വ-ജീവിത വികാസത്തിനുള്ള ‍അടിത്തറയും പകര്‍ന്നുനല്‍കുന്നു. ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ വിവിധ കലാകായിക മേളകളിലും മത്സരങ്ങളിലും അനേകം വിജയങ്ങളും സമ്മാനങ്ങളും സ്ഥിരം നേടാറുണ്ട്. സബ്-ജില്ല തലത്തിലെ കലോത്സവങ്ങളില്‍ സ്ഥിരം വിജയികളാണ് ഈ വിദ്യാലയം. ഇവിടത്തെ PTAയും പൂര്‍വവിദ്യാര്‍ഥിസംഘടനയും വളരെ സജീവമാണ്. ഇവിടത്തെ പ്രവര്‍ത്തനത്തിലും വികസനത്തിലും അവരും നല്ലൊരു പങ്കുവഹിക്കുന്നു. വിശാലവും മനോഹരവുമായ ഒരു അന്തരീക്ഷവും അനേകം വിദ്യാര്‍ത്ഥികളും അധ്യാപകരും എല്ലാ മേഘലകളിലും മികച്ച പ്രകടനവും കാഴ്ച്ചവെക്കുന്ന ഈ വിദ്യാലയം ഈ നാട്ടിലെ മികച്ച വിദ്യാലയങ്ങളില്‍ ഒന്നാണ്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                ghsskoduvayur: {
                    title: "ഗവ. ഹയര്‍ സെക്കണ്ടറി സ്ക്കൂള്‍, കൊടുവായൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "കൊടുവായൂര്‍ ബസ്‌ സ്റ്റാന്‍ഡിന് എതിര്‍വശം, ഗ്രാമപീടിക, കൊടുവായൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "പ്രിന്‍സിപ്പല്‍‍: Mr. M. സ്വാമിനാഥന്‍",
                                c_classes: "XI മുതല്‍ XIIth STD വരെ (ഹയര്‍ സെക്കണ്ടറി)",
                                d_divisions: "‍ബയോളജി-2, കമ്പ്യൂട്ടര്‍ സയന്‍സ്-1, കോമേഴ്സ്-1, ഹ്യുമാനിറ്റീസ്(ഹിസ്റ്ററി)-1, ഹ്യുമാനിറ്റീസ്(ജേഴ്നലിസം)-1",
                                e_medium: "ഇംഗ്ലീഷ് മീഡിയം",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 360",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 20"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "ജില്ലയിലെ മികച്ച ഹയര്‍ സെക്കണ്ടറി സ്ക്കൂളുകളില്‍ ഒന്ന്"},
                            {a: "മാര്‍ക്ക്‌ കുറവുള്ള വിദ്യാര്‍ത്ഥികള്‍ക്കായി 'വിജയശ്രീ' പ്രോഗ്രാം"},
                            {a: "മാതൃഭൂമി SEED പരിസ്ഥിതി സംരക്ഷണ പ്രോജെക്ടിന്റെ ഭാഗമാണ്"},
                            {a: "കമ്പ്യൂട്ടര്‍, ബോട്ടണി, ഫിസിക്സ്‌, കെമിസ്ട്രി, സുവോളജി ലാബുകള്‍"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "വ്യക്തിത്വ-ജീവിത വികാസ ക്ലാസ്സുകള്‍"},
                            {a: "വിദ്യാര്‍ത്ഥി-അധ്യാപക 'സൌഹൃദ' ക്ലബ്‌"},
                            {a: "സബ്-ജില്ല തലത്തില്‍ ഉള്ള വിവിധ ഇനം മത്സരങ്ങളിലെയും കലോത്സവത്തിലെയും ഓവറോള്‍ ചാമ്പ്യന്‍സ്"},
                            {a: "വിവിധ കായിക ഇനങ്ങള്‍ക്ക് ഉള്ള വിശാലമായ സ്ക്കൂള്‍ മൈതാനം "},
                            {a: "8 CCTV ക്യാമറകള്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: ghsskoduvaayur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 253522"},
                            {a: "ഹെഡ് മാസ്റ്റര്‍ (Mob): 9495584073"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "കൊടുവായൂരിന്റെ ജനജീവിതത്തിലും വികസനത്തിലും ഏറെ പങ്കുവഹിച്ചിട്ടുള്ള ഗവ. ഹൈ സ്ക്കൂളിന്റെ ചരിത്രം 100 വര്‍ഷത്തോളം പഴക്കമുള്ളതാണ്. ഈ സ്ഥലം അപ്പോള്‍ മദ്രാസ്‌ സംസ്ഥാനത്തിലെ മലബാര്‍ ജില്ലയുടെ ഭാഗമായിരുന്നു. ബ്രിട്ടീഷ്‌ ഗവണ്മെന്റ് തുടങ്ങി വെച്ച വിദ്യാഭ്യാസ പദ്ധതിയുടെ ഭാഗമായി 1897ല്‍ ആണ് കൊടുവായൂരില്‍ ഈ വിദ്യാലയം ആരംഭിച്ചത്. ഗ്രാമപീടികയിലെ ഒരു ചെറിയ കടയുടെ മുറിയില്‍ കുറച്ച് കുട്ടികളോടെ തുടങ്ങിയ ഈ വിദ്യാലയം 1906ല്‍ സ്വന്തം കെട്ടിടത്തില്‍ ഒരു എലമെന്ററി ആയി പ്രവര്‍ത്തനം ആരംഭിച്ചു. 1918ല്‍ ഇത് പാലക്കാടിലെആദ്യത്തെ ഹൈ സ്ക്കൂളായി മാറി. 1928ല്‍ ഇപ്പോള്‍ ഉള്ള ഓഫീസ് കെട്ടിടം പണി പൂര്‍ത്തിയാക്കി ഹൈ സ്ക്കൂള്‍ സൌകര്യങ്ങളും അധ്യാപകരും വിദ്യാര്‍ത്ഥികളും ആയി ഹൈ സ്ക്കൂള്‍ ക്ലാസ്സുകളോടെ ബോര്‍ഡ്‌ ഹൈ സ്ക്കൂള്‍, കൊടുവായൂര്‍ എന്ന പേരില്‍ പ്രവര്‍ത്തനം തുടര്‍ന്നു. കൊടുവായൂരിലെ ആദ്യത്തെ റേഡിയോ സ്ക്കൂളിനു മുന്‍വശത്ത് 1955ല്‍ സ്ഥാപിച്ചു. എണ്ണമറ്റ പ്രതിഭകളെ വാര്‍ത്തെടുത്ത ഈ വിദ്യാലയത്തില്‍ എഞ്ചിനീയറിംഗ്, തയ്യല്‍ എന്നീ വിഷയങ്ങളും പഠിപ്പിച്ചുരുന്നു. ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ വിദ്യാഭ്യാസം മാത്രമല്ലാതെ കലാകായിക സാങ്കേതിക സാമൂഹിക മേഘലകളിലും ഉന്നതസ്ഥാനങ്ങളില്‍ ഉള്ളവരും ഉന്നതപ്രകടനങ്ങള്‍ കാഴ്ച്ചവെച്ചവരും ആണ്. 1990ല്‍  ഇവിടെ ഹയര്‍ സെക്കണ്ടറി വിഭാഗം  പ്രവര്‍ത്തനം തുടങ്ങി. ഇപ്പോള്‍ ഈ വിദ്യാലയത്തില്‍ എല്ലാ തരത്തിലും ഉള്ള സൌകര്യങ്ങളും സജ്ജികരിച്ചുവരുകയാണ്. ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ക്ക് NCC, JRC, സ്കൌട്ട്സ് & ഗൈഡ്സ്, വിവിധ കായികയിനങ്ങള്‍ എന്നിവയ്ക്കുള്ള കോച്ചിംഗും അതല്ലാതെ വ്യക്തിത്വ-ജീവിത വികാസത്തിനുള്ള ‍അടിത്തറയും പകര്‍ന്നുനല്‍കുന്നു. ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ വിവിധ കലാകായിക മേളകളിലും മത്സരങ്ങളിലും അനേകം വിജയങ്ങളും സമ്മാനങ്ങളും സ്ഥിരം നേടാറുണ്ട്. സബ്-ജില്ല തലത്തിലെ കലോത്സവങ്ങളില്‍ സ്ഥിരം വിജയികളാണ് ഈ വിദ്യാലയം. ഇവിടത്തെ PTAയും പൂര്‍വവിദ്യാര്‍ഥിസംഘടനയും വളരെ സജീവമാണ്. ഇവിടത്തെ പ്രവര്‍ത്തനത്തിലും വികസനത്തിലും അവരും നല്ലൊരു പങ്കുവഹിക്കുന്നു. വിശാലവും മനോഹരവുമായ ഒരു അന്തരീക്ഷവും അനേകം വിദ്യാര്‍ത്ഥികളും അധ്യാപകരും എല്ലാ മേഘലകളിലും മികച്ച പ്രകടനവും കാഴ്ച്ചവെക്കുന്ന ഈ വിദ്യാലയം ഈ നാട്ടിലെ മികച്ച വിദ്യാലയങ്ങളില്‍ ഒന്നാണ്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                dmsbschool: {
                    title: "DMSB സ്ക്കൂള്‍, കാക്കയൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "കാക്കയൂര്‍ ശിവക്ഷേത്രത്തിനു സമീപം, കാക്കയൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മാസ്റ്റര്‍: Mr. K.G. അനില്‍കുമാര്‍",
                                c_classes: "L.K.G മുതല്‍ VIIth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 3 ഡിവിഷന്‍",
                                e_medium: "2 ഇംഗ്ലീഷ് മീഡിയം 1 മലയാളം മീഡിയം ഡിവിഷന്‍",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 578",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 26"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "3 സ്ക്കൂള്‍ വാഹനങ്ങള്‍"},
                            {a: "4 ഡിജിറ്റല്‍ / സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍"},
                            {a: "25 കമ്പ്യൂട്ടര്‍ ഉള്ള കമ്പ്യൂട്ടര്‍ ലാബ്‌"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "സംഗീതം, നൃത്തം, ചിത്രരചന, അബാക്കസ് സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "ഉച്ചഭക്ഷണം 538 വിദ്യാര്‍ത്ഥികള്‍ക്ക് "},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് സൌജന്യ യൂണിഫോം"},
                            {a: "1 ഏക്കര്‍ ദൈര്‍ഘ്യമുള്ള കളിസ്ഥലം"},
                            {a: "33 വിദ്യാര്‍ത്ഥികളെ ഏറ്റെടുത്ത തണല്‍ + സാന്ദ്വനം പ്രോജക്റ്റ്"},
                            {a: "സ്ക്കൂള്‍ റേഡിയോ: കലാലയ വാണി"},
                            {a: "36 CCTV ക്യാമറകള്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: dmsbskakkayur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 251131"},
                            {a: "ഹെഡ് മാസ്റ്റര്‍ (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "കൊടുവായൂര്‍ പഞ്ചായത്തിലെ കാക്കയൂര്‍ ഗ്രാമത്തിന്റെ ഹൃദയഭാഗത്താണ്‌ ഈ സ്ക്കൂള്‍ സ്ഥിതി ചെയ്യുന്നത്. 1895ല്‍ പള്ളിയില്‍ വീടിന്റെ കലവറയില്‍ ഒരു ചെറിയ ഠശാല ആയി പള്ളിയില്‍ ചാത്തന്‍കുട്ടി മേനോന്‍ ആണ് ഈ വിദ്യാലയം ആരംഭിച്ചത്. 1900ല്‍ ഇത് ഒരു പെണ്‍ പള്ളിക്കുടം ആയി അംഗീകൃതം ആവുകയും 1924ല്‍ ഗവണ്മെന്റ് ഇതിനെ ഒരു മിശ്രിത പള്ളിക്കുദമായി അംഗീകരിക്കുകയും ചെയ്തു. 1956ല്‍ ഈ വിദ്യാലയം ഒരു അടിസ്ഥാന വിദ്യാലയമായി മാറ്റിക്കൊണ്ട് ഗവണ്മെന്റ് ഉത്തരവിടുകയും പള്ളിയില്‍ K.P. ഭാസ്കരമേനോന്‍ സ്ഥാപനത്തിന്റെ മാനേജ്‌മന്റ്‌ ഏറ്റെടുക്കുകയും ചെയ്തു. ഇന്ന് ഈ വിദ്യാലയം ദേവകി ഹാള്‍, നാരായണന്‍ ഹാള്‍, ഗോവിന്ദന്‍ ഹാള്‍ എന്നീ വിശാലമായ ൩ കെട്ടിടങ്ങള്‍ ആയിട്ടാണ് ഉള്ളത്. മാനെജെമെന്റും പൂര്‍വ വിദ്യാര്‍ത്ഥികളും സഹായിക്കുന്നതുകൊണ്ടും അഭ്യുദയകാംക്ഷികളുടെ പിന്തുണ കൊണ്ടും ഈ വിദ്യാലയം ഓരോ കൊല്ലവും നല്ല രീതിയില്‍ പ്രവര്‍ത്തിച്ചുവരുന്നു. വിദ്യാലയങ്ങളിലെ നൂതന സൌകര്യങ്ങളായ സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍, കമ്പ്യൂട്ടര്‍ ലാബ്‌, ബയോഗ്യാസ്‌ പ്ലാന്റ്, സ്ക്കൂള്‍ റേഡിയോ, സ്ക്കൂള്‍ വാഹനങ്ങള്‍, കിച്ചണ്‍, സ്റ്റോര്‍ മുതലായവ ഈ സ്ക്കൂളില്‍ ഉണ്ട്. ഈ സ്ക്കൂള്‍ ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഉള്ള ഉച്ചഭക്ഷണം നല്‍കുകയും പാവപെട്ട കുട്ടികളെ ഏറ്റെടുക്കുകയും ചെയ്യുന്നു. ഈ സ്ക്കൂളില്‍ 1 ഏക്കര്‍ വിസ്തീര്‍ണമുള്ള ഒരു വിശാല കളിസ്ഥലവും ഉണ്ട്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                mmmsbschool: {
                    title: "DMSB സ്ക്കൂള്‍, കാക്കയൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "കാക്കയൂര്‍ ശിവക്ഷേത്രത്തിനു സമീപം, കാക്കയൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മാസ്റ്റര്‍: K.G.അനില്‍കുമാര്‍",
                                c_classes: "L.K.G മുതല്‍ VIIth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 3 ഡിവിഷന്‍",
                                e_medium: "2 ഇംഗ്ലീഷ് മീഡിയം 1 മലയാളം മീഡിയം ഡിവിഷന്‍",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 578",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 26"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "3 സ്ക്കൂള്‍ വാഹനങ്ങള്‍"},
                            {a: "4 ഡിജിറ്റല്‍ / സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍"},
                            {a: "20 കമ്പ്യൂട്ടര്‍ ഉള്ള കമ്പ്യൂട്ടര്‍ ലാബ്‌"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "സംഗീതം, നൃത്തം, ചിത്രരചന, അബാക്കസ് സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "ഉച്ചഭക്ഷണം 538 വിദ്യാര്‍ത്ഥികള്‍ക്ക് "},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് സൌജന്യ യൂണിഫോം"},
                            {a: "1 ഏക്കര്‍ ദൈര്‍ഘ്യമുള്ള കളിസ്ഥലം"},
                            {a: "33 വിദ്യാര്‍ത്ഥികളെ ഏറ്റെടുത്ത തണല്‍ + സാന്ദ്വനം പ്രോജക്റ്റ്"},
                            {a: "സ്ക്കൂള്‍ റേഡിയോ: കലാലയ വാണി"},
                            {a: "36 CCTV ക്യാമറകള്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: dmsbskakkayur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 251131"},
                            {a: "ഹെഡ് മാസ്റ്റര്‍ (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "കൊടുവായൂര്‍ പഞ്ചായത്തിലെ കാക്കയൂര്‍ ഗ്രാമത്തിന്റെ ഹൃദയഭാഗത്താണ്‌ ഈ സ്ക്കൂള്‍ സ്ഥിതി ചെയ്യുന്നത്. 1895ല്‍ പള്ളിയില്‍ വീടിന്റെ കലവറയില്‍ ഒരു ചെറിയ ഠശാല ആയി പള്ളിയില്‍ ചാത്തന്‍കുട്ടി മേനോന്‍ ആണ് ഈ വിദ്യാലയം ആരംഭിച്ചത്. 1900ല്‍ ഇത് ഒരു പെണ്‍ പള്ളിക്കുടം ആയി അംഗീകൃതം ആവുകയും 1924ല്‍ ഗവണ്മെന്റ് ഇതിനെ ഒരു മിശ്രിത പള്ളിക്കുദമായി അംഗീകരിക്കുകയും ചെയ്തു. 1956ല്‍ ഈ വിദ്യാലയം ഒരു അടിസ്ഥാന വിദ്യാലയമായി മാറ്റിക്കൊണ്ട് ഗവണ്മെന്റ് ഉത്തരവിടുകയും പള്ളിയില്‍ K.P. ഭാസ്കരമേനോന്‍ സ്ഥാപനത്തിന്റെ മാനേജ്‌മന്റ്‌ ഏറ്റെടുക്കുകയും ചെയ്തു. ഇന്ന് ഈ വിദ്യാലയം ദേവകി ഹാള്‍, നാരായണന്‍ ഹാള്‍, ഗോവിന്ദന്‍ ഹാള്‍ എന്നീ വിശാലമായ ൩ കെട്ടിടങ്ങള്‍ ആയിട്ടാണ് ഉള്ളത്. മാനെജെമെന്റും പൂര്‍വ വിദ്യാര്‍ത്ഥികളും സഹായിക്കുന്നതുകൊണ്ടും അഭ്യുദയകാംക്ഷികളുടെ പിന്തുണ കൊണ്ടും ഈ വിദ്യാലയം ഓരോ കൊല്ലവും നല്ല രീതിയില്‍ പ്രവര്‍ത്തിച്ചുവരുന്നു. വിദ്യാലയങ്ങളിലെ നൂതന സൌകര്യങ്ങളായ സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍, കമ്പ്യൂട്ടര്‍ ലാബ്‌, ബയോഗ്യാസ്‌ പ്ലാന്റ്, സ്ക്കൂള്‍ റേഡിയോ, സ്ക്കൂള്‍ വാഹനങ്ങള്‍, കിച്ചണ്‍, സ്റ്റോര്‍ മുതലായവ ഈ സ്ക്കൂളില്‍ ഉണ്ട്. ഈ സ്ക്കൂള്‍ ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഉള്ള ഉച്ചഭക്ഷണം നല്‍കുകയും പാവപെട്ട കുട്ടികളെ ഏറ്റെടുക്കുകയും ചെയ്യുന്നു. ഈ സ്ക്കൂളില്‍ 1 ഏക്കര്‍ വിസ്തീര്‍ണമുള്ള ഒരു വിശാല കളിസ്ഥലവും ഉണ്ട്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                stpaulsschool: {
                    title: "സെന്റ്‌ പോള്‍സ് സ്ക്കൂള്‍, എത്തനൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "ഉച്ചിമാഹാളിയമ്മന്‍ ക്ഷേത്രത്തിനു സമീപം, കൊടുവായൂര്‍ - തൃപ്പാളൂര്‍ റോഡ്‌, എത്തനൂര്‍, കൊടുവായൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "CBSE സിലബസ്",
                                b_principal: "പ്രിന്‍സിപ്പല്‍‍: Mrs. D. രാധിക‍",
                                c_classes: "L.K.G മുതല്‍ Xth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 2 ഡിവിഷന്‍",
                                e_medium: "ഇംഗ്ലീഷ് മീഡിയം",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 400 (ഏകദേശം)",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 21"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "കൊടുവായൂരിലെ ഏക CBSE സ്ക്കൂള്‍"},
                            {a: "1 സ്ക്കൂള്‍ വാഹനങ്ങള്‍"},
                            {a: "ഡിജിറ്റല്‍ / സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍"},
                            {a: "കമ്പ്യൂട്ടര്, സയന്‍സ്‍ ലാബ്‌"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "സംഗീതം, യോഗ, ചിത്രരചന, കായികയിനങ്ങള്‍ സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഇന്‍ഡോര്‍ ഗെയിംസ്, ഡാന്‍സ്, മ്യൂസിക്‌ റൂമുകള്‍"},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഫുട്ബോള്‍, ആര്‍ച്ചറി, കരാട്ടേ, ഹാന്റ്ബോള്‍ കോച്ചിംഗ്"},
                            {a: "വിശാലമായ കളിസ്ഥലവും കിഡ്സ്‌ പാര്‍ക്കും"},
                            {a: "വിദ്യാര്‍ത്ഥികളുടെ വ്യക്തിത്വ വികാസത്തിനായുള്ള നിര്‍ദേശങ്ങളും പ്രേരണയും"},
                            {a: "സമ്പൂര്‍ണ്ണ മെഡിക്കല്‍ ചെക്ക്‌ ‍അപ്പ്"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: stpaulsethanur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 252096"},
                            {a: "അഡ്മിനിസ്ട്രേട്ടര്‍ (Mob): 8129964121"},
                            {a: "വെബ്സൈറ്റ്: www.stpaulsethanur.com"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "സെന്‍റ് പോള്‍സ് സൊസൈറ്റി എന്ന വിദ്യാഭ്യാസ - ധാര്‍മ്മിക പ്രസ്ഥാനത്തിന്റെ നേതൃത്വത്തില്‍ 2005ല്‍ ആണ് ഈ വിദ്യാലയം പ്രവര്‍ത്തനം ആരംഭിച്ചത്. പാലക്കാടിലെ അറിയപ്പെടുന്നതും വികസിച്ചുവരുന്ന പ്രദേശവും ആയ കൊടുവയൂരിലെ കുട്ടികള്‍ക്ക് ഒരു നല്ല വിദ്യാഭ്യാസ അടിത്തറ നല്‍കുക എന്ന ഉദ്ദേശത്തോടെ ആണ് ഈ വിദ്യാലയം ആരംഭിച്ചത്. 2014ല്‍ ഈ വിദ്യാലയത്തിന് ഹയര്‍സെക്കന്‍ഡറി വരെ ഉള്ള ക്ലാസുകള്‍ നടത്താനുള്ള ഗവണ്മെന്റ് അംഗീകാരം കിട്ടി. ഓരോ കുട്ടിയുടെയും എല്ലാ മേഘലകളിലും ഉള്ള വളര്‍ച്ചയും വികസനവും ആണ് ഈ വിദ്യാലയം ലക്ഷ്യമിടുന്നത്. വിദ്യഭ്യാസത്തിലുപരി ഓരോ വിദ്യാര്‍ത്ഥിയിലും ശാരീരികവും മാനസികവും ധാര്‍മ്മികവും സാമൂഹികവും രാഷ്ട്രപരമായും ആയുള്ള ഒരു ബോധം വളര്‍ത്തിയെടുക്കാനും കൂടി ഈ വിദ്യാലയത്തിലുള്ള അധ്യാപികാദ്ധ്യപകന്മാര്‍ പരിശ്രമിക്കുന്നു. ശാന്തവും വിശാലവും ആയുള്ള ഒരു അന്തരീക്ഷവും മെച്ചപ്പെട്ട സൌകര്യങ്ങളും ഉള്ള ഈ വിദ്യാലയം ഏതൊരു കുട്ടിക്കും ഒരു നല്ല പഠന അനുഭവം നല്‍കുന്നു."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                nalandaschool: {
                    title: "DMSB സ്ക്കൂള്‍, കാക്കയൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "കാക്കയൂര്‍ ശിവക്ഷേത്രത്തിനു സമീപം, കാക്കയൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മാസ്റ്റര്‍: K.G.അനില്‍കുമാര്‍",
                                c_classes: "L.K.G മുതല്‍ VIIth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 3 ഡിവിഷന്‍",
                                e_medium: "2 ഇംഗ്ലീഷ് മീഡിയം 1 മലയാളം മീഡിയം ഡിവിഷന്‍",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 578",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 26"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "3 സ്ക്കൂള്‍ വാഹനങ്ങള്‍"},
                            {a: "4 ഡിജിറ്റല്‍ / സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍"},
                            {a: "20 കമ്പ്യൂട്ടര്‍ ഉള്ള കമ്പ്യൂട്ടര്‍ ലാബ്‌"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "സംഗീതം, നൃത്തം, ചിത്രരചന, അബാക്കസ് സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "ഉച്ചഭക്ഷണം 538 വിദ്യാര്‍ത്ഥികള്‍ക്ക് "},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് സൌജന്യ യൂണിഫോം"},
                            {a: "1 ഏക്കര്‍ ദൈര്‍ഘ്യമുള്ള കളിസ്ഥലം"},
                            {a: "33 വിദ്യാര്‍ത്ഥികളെ ഏറ്റെടുത്ത തണല്‍ + സാന്ദ്വനം പ്രോജക്റ്റ്"},
                            {a: "സ്ക്കൂള്‍ റേഡിയോ: കലാലയ വാണി"},
                            {a: "36 CCTV ക്യാമറകള്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: dmsbskakkayur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 251131"},
                            {a: "ഹെഡ് മാസ്റ്റര്‍ (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "കൊടുവായൂര്‍ പഞ്ചായത്തിലെ കാക്കയൂര്‍ ഗ്രാമത്തിന്റെ ഹൃദയഭാഗത്താണ്‌ ഈ സ്ക്കൂള്‍ സ്ഥിതി ചെയ്യുന്നത്. 1895ല്‍ പള്ളിയില്‍ വീടിന്റെ കലവറയില്‍ ഒരു ചെറിയ ഠശാല ആയി പള്ളിയില്‍ ചാത്തന്‍കുട്ടി മേനോന്‍ ആണ് ഈ വിദ്യാലയം ആരംഭിച്ചത്. 1900ല്‍ ഇത് ഒരു പെണ്‍ പള്ളിക്കുടം ആയി അംഗീകൃതം ആവുകയും 1924ല്‍ ഗവണ്മെന്റ് ഇതിനെ ഒരു മിശ്രിത പള്ളിക്കുദമായി അംഗീകരിക്കുകയും ചെയ്തു. 1956ല്‍ ഈ വിദ്യാലയം ഒരു അടിസ്ഥാന വിദ്യാലയമായി മാറ്റിക്കൊണ്ട് ഗവണ്മെന്റ് ഉത്തരവിടുകയും പള്ളിയില്‍ K.P. ഭാസ്കരമേനോന്‍ സ്ഥാപനത്തിന്റെ മാനേജ്‌മന്റ്‌ ഏറ്റെടുക്കുകയും ചെയ്തു. ഇന്ന് ഈ വിദ്യാലയം ദേവകി ഹാള്‍, നാരായണന്‍ ഹാള്‍, ഗോവിന്ദന്‍ ഹാള്‍ എന്നീ വിശാലമായ ൩ കെട്ടിടങ്ങള്‍ ആയിട്ടാണ് ഉള്ളത്. മാനെജെമെന്റും പൂര്‍വ വിദ്യാര്‍ത്ഥികളും സഹായിക്കുന്നതുകൊണ്ടും അഭ്യുദയകാംക്ഷികളുടെ പിന്തുണ കൊണ്ടും ഈ വിദ്യാലയം ഓരോ കൊല്ലവും നല്ല രീതിയില്‍ പ്രവര്‍ത്തിച്ചുവരുന്നു. വിദ്യാലയങ്ങളിലെ നൂതന സൌകര്യങ്ങളായ സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍, കമ്പ്യൂട്ടര്‍ ലാബ്‌, ബയോഗ്യാസ്‌ പ്ലാന്റ്, സ്ക്കൂള്‍ റേഡിയോ, സ്ക്കൂള്‍ വാഹനങ്ങള്‍, കിച്ചണ്‍, സ്റ്റോര്‍ മുതലായവ ഈ സ്ക്കൂളില്‍ ഉണ്ട്. ഈ സ്ക്കൂള്‍ ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഉള്ള ഉച്ചഭക്ഷണം നല്‍കുകയും പാവപെട്ട കുട്ടികളെ ഏറ്റെടുക്കുകയും ചെയ്യുന്നു. ഈ സ്ക്കൂളില്‍ 1 ഏക്കര്‍ വിസ്തീര്‍ണമുള്ള ഒരു വിശാല കളിസ്ഥലവും ഉണ്ട്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                vidyadhirajaschool: {
                    title: "വിദ്യാധിരാജ സ്ക്കൂള്‍, കൊടുവായൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "മരിയന്‍ കോളേജ് ജംഗ്ഷനു സമീപം, കൊടുവായൂര്‍ - പാലക്കാട്‌ റോഡ്‌, കൊടുവായൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മിസ്ട്രസ്സ്: Mrs. K. ഉഷാദേവി‍",
                                c_classes: "L.K.G മുതല്‍ VIIth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 3 ഡിവിഷന്‍",
                                e_medium: "2 ഇംഗ്ലീഷ് മീഡിയം 1 മലയാളം മീഡിയം ഡിവിഷന്‍",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 578",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 26"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "ശാന്തമായ പഠന അന്തരീക്ഷം"},
                            {a: "ഡിജിറ്റല്‍ / സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള് (‍TATA EDGE)"},
                            {a: "കമ്പ്യൂട്ടര്, സയന്‍സ്, മാത്തമാറ്റിക്സ്, സോഷ്യല്‍‍ ലാബ്‌"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "യോഗ, നൃത്തം, ചിത്രരചന, കരാട്ടേ, സംഗീതോപകരണങ്ങള്‍ സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "എല്ലാക്കൊല്ലവും സ്റ്റഡി ടൂര്‍"},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് മിനി പാര്‍ക്ക്‌"},
                            {a: "വിദ്യാലയാങ്കണത്തില്‍ വിശാല കളിസ്ഥലം"},
                            {a: "സബ് ജില്ലാ കലോത്സവങ്ങളില്‍ എല്ലാക്കൊല്ലവും വിദ്യാര്‍ത്ഥികള്‍ പങ്കെടുത്ത് വിജയിക്കാറുണ്ട്"},
                            {a: "സ്ക്കൂള്‍ റേഡിയോ സൌകര്യം"},
                            {a: "36 CCTV ക്യാമറകള്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: vidyadhirajaschool@gmail.com"},
                            {a: "ഫോണ്‍: 04923 253744"},
                            {a: "ഹെഡ് മിസ്ട്രസ്സ് (Mob): 9447392833"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "1985ല്‍ വിദ്യാധിരാജ വിദ്യസമാജത്തിന്റെ നേതൃത്വത്തില്‍ കേരളപുരം ഗ്രാമത്തിലെ ഒരു വാടകവീട്ടില്‍ ആണ് ഈ വിദ്യാലയം ആരംഭിച്ചത്. പിന്നീട് അത് ഇപ്പോഴുള്ള സ്ഥാനത്തേക്ക് മാറ്റുകയും അതിന്റെ നടത്തിപ്പും അവകാശവും Mr. R. രാമചന്ദ്രന്‍ അവര്‍കളും കുടുംബവും ഏറ്റെടുക്കുകയായിരുന്നു. ഇപ്പോള്‍ അവരാണ് ഈ വിദ്യാലയം നടത്തിക്കൊണ്ടുപോകുന്നത്. 2013ല്‍ ഈ വിദ്യാലയത്തിന് ഗവണ്മെന്റ് അംഗീകാരം കിട്ടി. സൌകര്യങ്ങളും വിദ്ദ്യഭ്യസവും അന്തരീക്ഷവും കുട്ടികളുടെ പ്രകടനവും വെച്ചുനോക്കുമ്പോള്‍ കൊടുവയൂരിലെ മികച്ച എലെമെന്ട്രികളില്‍ ഒന്നാണ് ഈ വിദ്യാലയം."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                gbupschool: {
                    title: "GBUP സ്ക്കൂള്‍, എത്തനൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "പിട്ടുപീടിക ജംഗ്ഷനു സമീപം, കൊടുവായൂര്‍ - തൃപ്പാളൂര്‍ റോഡ്‌, എത്തനൂര്‍, കൊടുവായൂര്‍‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മിസ്ട്രസ്സ്: Mrs. G. പത്മിനി‍",
                                c_classes: "L.K.G മുതല്‍ VIIth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 2 ഡിവിഷന്‍",
                                e_medium: "മലയാളം മീഡിയം (പാരലല്‍ ഇംഗ്ലീഷ് മീഡിയം)",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 423",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 24"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "ഡിജിറ്റല്‍ / സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ സൌകര്യം"},
                            {a: "കമ്പ്യൂട്ടര്‍, സയന്‍സ്, മാത്തമാറ്റിക്സ് ലാബ്‌"},
                            {a: "ഓരോ ക്ലാസ്സിലും 'ക്ലാസ്സ്‌‌ ലൈബ്രറി'"},
                            {a: "ഫിസിക്കല്‍ ട്രെയിനിംഗ്, ചിത്രരചന, പ്രവൃത്തി പരിചയം ക്ലാസുകള്‍"},
                            {a: "അറബിക്, L.S.S ക്ലാസുകള്‍"},
                            {a: "ഉച്ചഭക്ഷണം എല്ലാ വിദ്യാര്‍ത്ഥികള്‍ക്കും"},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് സൌജന്യ യൂണിഫോം, പാഠപുസ്തകങ്ങള്‍"},
                            {a: "വിദ്യാലയാങ്കണത്തില്‍ വിശാലമായ കളിസ്ഥലം"},
                            {a: "ഡൈനിങ്ങ്‌ ഹാള്‍, അസ്സംബ്ലി ഹാള്‍"},
                            {a: "സ്ക്കൂള്‍ റേഡിയോ: ആകാശ വാണി"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: gbupsethanur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 251177"},
                            {a: "ഹെഡ് മിസ്ട്രസ്സ് (Mob): 9037403712"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "എത്തനൂര്‍ പാലത്തിനടുത്ത് ഒരു ആശ്രമ മാതൃകയില്‍ 1912ല്‍ ആണ് ഈ വിദ്യാലയം ആരംഭിച്ചത്. പിന്നീട് ഇത് മലബാര്‍ ഡിസ്റ്റ്റിക്റ്റ്‌ ബോര്‍ഡിന്‍റെ കീഴില്‍ വരുകയും ഇതിനെ ഒരു ആണ്‍ പള്ളിക്കുടവും ഒരു പെണ്‍ പള്ളിക്കുടവും ആക്കി ഭാഗിക്കുകയും ചെയ്തു. കുറച്ചുകാലത്തിനു ശേഷം മുല്ലയ്ക്കല്‍ തറവാട്ടുകാര്‍ ഈ വിദ്യാലയം ഏറ്റെടുക്കുകയും ഒന്നുചേര്‍തത് ഒരു കെട്ടിടം നിര്‍മ്മിക്കുകയും ചെയ്തു. 1997ല്‍ ആണ് ഇപ്പോഴുള്ള കെട്ടിടത്തിലേക്ക് വിദ്യാലയം മാറിയത്. ഗ്രാമപഞ്ചായത്ത്, MLA, പൂര്‍വവിദ്യാര്‍ത്ഥികള്‍, അഭ്യുദയകാംക്ഷികള്‍ എന്നിങ്ങനെ എല്ലാവരുടെയും സഹായത്തോടെ ഈ വിദ്യാലയം നല്ലരീതിയില്‍ പ്രവര്‍ത്തിച്ചുവരുന്നു. LSS ക്ലാസുകള്‍, ക്വിസ് മത്സരങ്ങളില്‍ വിദ്യാര്‍ത്ഥികള്‍ നേടിയ വിജയങ്ങള്‍, ഈ ജില്ലയിലെ തന്നെ മികച്ചതില്‍ ഒന്നായ ഗണിത ലാബ്‌, പ്രത്യേകം ഡൈനിങ്ങ്‌ ഹാളും അസ്സംബി ഹാളും, മഴവെള്ള സംഭരണി എന്നിവ ഈ വിദ്യാലയത്തിന്റെ എടുത്തുപറയാവുന്ന നേട്ടങ്ങളില്‍ ചിലതാണ്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                gblpschool: {
                    title: "DMSB സ്ക്കൂള്‍, കാക്കയൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "കാക്കയൂര്‍ ശിവക്ഷേത്രത്തിനു സമീപം, കാക്കയൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മാസ്റ്റര്‍: K.G.അനില്‍കുമാര്‍",
                                c_classes: "L.K.G മുതല്‍ VIIth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 3 ഡിവിഷന്‍",
                                e_medium: "2 ഇംഗ്ലീഷ് മീഡിയം 1 മലയാളം മീഡിയം ഡിവിഷന്‍",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 578",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 26"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "3 സ്ക്കൂള്‍ വാഹനങ്ങള്‍"},
                            {a: "4 ഡിജിറ്റല്‍ / സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍"},
                            {a: "20 കമ്പ്യൂട്ടര്‍ ഉള്ള കമ്പ്യൂട്ടര്‍ ലാബ്‌"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "സംഗീതം, നൃത്തം, ചിത്രരചന, അബാക്കസ് സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "ഉച്ചഭക്ഷണം 538 വിദ്യാര്‍ത്ഥികള്‍ക്ക് "},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് സൌജന്യ യൂണിഫോം"},
                            {a: "1 ഏക്കര്‍ ദൈര്‍ഘ്യമുള്ള കളിസ്ഥലം"},
                            {a: "33 വിദ്യാര്‍ത്ഥികളെ ഏറ്റെടുത്ത തണല്‍ + സാന്ദ്വനം പ്രോജക്റ്റ്"},
                            {a: "സ്ക്കൂള്‍ റേഡിയോ: കലാലയ വാണി"},
                            {a: "36 CCTV ക്യാമറകള്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: dmsbskakkayur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 251131"},
                            {a: "ഹെഡ് മാസ്റ്റര്‍ (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "കൊടുവായൂര്‍ പഞ്ചായത്തിലെ കാക്കയൂര്‍ ഗ്രാമത്തിന്റെ ഹൃദയഭാഗത്താണ്‌ ഈ സ്ക്കൂള്‍ സ്ഥിതി ചെയ്യുന്നത്. 1895ല്‍ പള്ളിയില്‍ വീടിന്റെ കലവറയില്‍ ഒരു ചെറിയ ഠശാല ആയി പള്ളിയില്‍ ചാത്തന്‍കുട്ടി മേനോന്‍ ആണ് ഈ വിദ്യാലയം ആരംഭിച്ചത്. 1900ല്‍ ഇത് ഒരു പെണ്‍ പള്ളിക്കുടം ആയി അംഗീകൃതം ആവുകയും 1924ല്‍ ഗവണ്മെന്റ് ഇതിനെ ഒരു മിശ്രിത പള്ളിക്കുദമായി അംഗീകരിക്കുകയും ചെയ്തു. 1956ല്‍ ഈ വിദ്യാലയം ഒരു അടിസ്ഥാന വിദ്യാലയമായി മാറ്റിക്കൊണ്ട് ഗവണ്മെന്റ് ഉത്തരവിടുകയും പള്ളിയില്‍ K.P. ഭാസ്കരമേനോന്‍ സ്ഥാപനത്തിന്റെ മാനേജ്‌മന്റ്‌ ഏറ്റെടുക്കുകയും ചെയ്തു. ഇന്ന് ഈ വിദ്യാലയം ദേവകി ഹാള്‍, നാരായണന്‍ ഹാള്‍, ഗോവിന്ദന്‍ ഹാള്‍ എന്നീ വിശാലമായ ൩ കെട്ടിടങ്ങള്‍ ആയിട്ടാണ് ഉള്ളത്. മാനെജെമെന്റും പൂര്‍വ വിദ്യാര്‍ത്ഥികളും സഹായിക്കുന്നതുകൊണ്ടും അഭ്യുദയകാംക്ഷികളുടെ പിന്തുണ കൊണ്ടും ഈ വിദ്യാലയം ഓരോ കൊല്ലവും നല്ല രീതിയില്‍ പ്രവര്‍ത്തിച്ചുവരുന്നു. വിദ്യാലയങ്ങളിലെ നൂതന സൌകര്യങ്ങളായ സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍, കമ്പ്യൂട്ടര്‍ ലാബ്‌, ബയോഗ്യാസ്‌ പ്ലാന്റ്, സ്ക്കൂള്‍ റേഡിയോ, സ്ക്കൂള്‍ വാഹനങ്ങള്‍, കിച്ചണ്‍, സ്റ്റോര്‍ മുതലായവ ഈ സ്ക്കൂളില്‍ ഉണ്ട്. ഈ സ്ക്കൂള്‍ ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഉള്ള ഉച്ചഭക്ഷണം നല്‍കുകയും പാവപെട്ട കുട്ടികളെ ഏറ്റെടുക്കുകയും ചെയ്യുന്നു. ഈ സ്ക്കൂളില്‍ 1 ഏക്കര്‍ വിസ്തീര്‍ണമുള്ള ഒരു വിശാല കളിസ്ഥലവും ഉണ്ട്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                satyasaischool: {
                    title: "DMSB സ്ക്കൂള്‍, കാക്കയൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "കാക്കയൂര്‍ ശിവക്ഷേത്രത്തിനു സമീപം, കാക്കയൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മാസ്റ്റര്‍: K.G.അനില്‍കുമാര്‍",
                                c_classes: "L.K.G മുതല്‍ VIIth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും 3 ഡിവിഷന്‍",
                                e_medium: "2 ഇംഗ്ലീഷ് മീഡിയം 1 മലയാളം മീഡിയം ഡിവിഷന്‍",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 578",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 26"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "3 സ്ക്കൂള്‍ വാഹനങ്ങള്‍"},
                            {a: "4 ഡിജിറ്റല്‍ / സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍"},
                            {a: "20 കമ്പ്യൂട്ടര്‍ ഉള്ള കമ്പ്യൂട്ടര്‍ ലാബ്‌"},
                            {a: "സ്ക്കൂള്‍ ലൈബ്രറി സൌകര്യം"},
                            {a: "സംഗീതം, നൃത്തം, ചിത്രരചന, അബാക്കസ് സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "ഉച്ചഭക്ഷണം 538 വിദ്യാര്‍ത്ഥികള്‍ക്ക് "},
                            {a: "വിദ്യാര്‍ത്ഥികള്‍ക്ക് സൌജന്യ യൂണിഫോം"},
                            {a: "1 ഏക്കര്‍ ദൈര്‍ഘ്യമുള്ള കളിസ്ഥലം"},
                            {a: "33 വിദ്യാര്‍ത്ഥികളെ ഏറ്റെടുത്ത തണല്‍ + സാന്ദ്വനം പ്രോജക്റ്റ്"},
                            {a: "സ്ക്കൂള്‍ റേഡിയോ: കലാലയ വാണി"},
                            {a: "36 CCTV ക്യാമറകള്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: dmsbskakkayur@gmail.com"},
                            {a: "ഫോണ്‍: 04923 251131"},
                            {a: "ഹെഡ് മാസ്റ്റര്‍ (Mob): 9447840431"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "കൊടുവായൂര്‍ പഞ്ചായത്തിലെ കാക്കയൂര്‍ ഗ്രാമത്തിന്റെ ഹൃദയഭാഗത്താണ്‌ ഈ സ്ക്കൂള്‍ സ്ഥിതി ചെയ്യുന്നത്. 1895ല്‍ പള്ളിയില്‍ വീടിന്റെ കലവറയില്‍ ഒരു ചെറിയ ഠശാല ആയി പള്ളിയില്‍ ചാത്തന്‍കുട്ടി മേനോന്‍ ആണ് ഈ വിദ്യാലയം ആരംഭിച്ചത്. 1900ല്‍ ഇത് ഒരു പെണ്‍ പള്ളിക്കുടം ആയി അംഗീകൃതം ആവുകയും 1924ല്‍ ഗവണ്മെന്റ് ഇതിനെ ഒരു മിശ്രിത പള്ളിക്കുദമായി അംഗീകരിക്കുകയും ചെയ്തു. 1956ല്‍ ഈ വിദ്യാലയം ഒരു അടിസ്ഥാന വിദ്യാലയമായി മാറ്റിക്കൊണ്ട് ഗവണ്മെന്റ് ഉത്തരവിടുകയും പള്ളിയില്‍ K.P. ഭാസ്കരമേനോന്‍ സ്ഥാപനത്തിന്റെ മാനേജ്‌മന്റ്‌ ഏറ്റെടുക്കുകയും ചെയ്തു. ഇന്ന് ഈ വിദ്യാലയം ദേവകി ഹാള്‍, നാരായണന്‍ ഹാള്‍, ഗോവിന്ദന്‍ ഹാള്‍ എന്നീ വിശാലമായ ൩ കെട്ടിടങ്ങള്‍ ആയിട്ടാണ് ഉള്ളത്. മാനെജെമെന്റും പൂര്‍വ വിദ്യാര്‍ത്ഥികളും സഹായിക്കുന്നതുകൊണ്ടും അഭ്യുദയകാംക്ഷികളുടെ പിന്തുണ കൊണ്ടും ഈ വിദ്യാലയം ഓരോ കൊല്ലവും നല്ല രീതിയില്‍ പ്രവര്‍ത്തിച്ചുവരുന്നു. വിദ്യാലയങ്ങളിലെ നൂതന സൌകര്യങ്ങളായ സ്മാര്‍ട്ട്‌ ക്ലാസ്സ്‌ മുറികള്‍, കമ്പ്യൂട്ടര്‍ ലാബ്‌, ബയോഗ്യാസ്‌ പ്ലാന്റ്, സ്ക്കൂള്‍ റേഡിയോ, സ്ക്കൂള്‍ വാഹനങ്ങള്‍, കിച്ചണ്‍, സ്റ്റോര്‍ മുതലായവ ഈ സ്ക്കൂളില്‍ ഉണ്ട്. ഈ സ്ക്കൂള്‍ ഇവിടത്തെ വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഉള്ള ഉച്ചഭക്ഷണം നല്‍കുകയും പാവപെട്ട കുട്ടികളെ ഏറ്റെടുക്കുകയും ചെയ്യുന്നു. ഈ സ്ക്കൂളില്‍ 1 ഏക്കര്‍ വിസ്തീര്‍ണമുള്ള ഒരു വിശാല കളിസ്ഥലവും ഉണ്ട്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                },
                dnmjbschool: {
                    title: "DNMJB സ്ക്കൂള്‍, നൊച്ചൂര്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: " സ്ഥലം",
                        info: "കാക്കയൂര്‍ ശിവക്ഷേത്രത്തിനു സമീപം, കാക്കയൂര്‍."
                    },
                    details: {
                        title: "പ്രധാന വിവരങ്ങള്‍",
                        info: [
                            {
                                a_syllabus: "സ്റ്റേറ്റ് സിലബസ്",
                                b_principal: "ഹെഡ് മിസ്ട്രസ്സ്: Mrs‍. V.S. ശോഭ",
                                c_classes: "L.K.G മുതല്‍ IVth STD വരെ",
                                d_divisions: "എല്ലാ ക്ലാസ്സുകളിലും  ഡിവിഷന്‍",
                                e_medium: "മലയാളം മീഡിയം",
                                f_strength: "മൊത്തം വിദ്യാര്‍ത്ഥികള്‍ : 130",
                                g_faculty: "മൊത്തം അദ്ധ്യാപകര്‍ : 6"
                            }
                        ]
                    },
                    special: {
                        title: "പ്രത്യേകതകള്‍",
                        info: [
                            {a: "ഒന്നാം ക്ലാസ്സുകാര്‍ക്ക് സൌജന്യ വാഹന സൌകര്യം, യൂണിഫോം, പഠന കിറ്റ്‌ എന്നിവ‍"},
                            {a: "പ്രീ നഴ്സറി ക്ലാസുകള്‍"},
                            {a: "അറബിക്, L.S.S ക്ലാസുകള്"},
                            {a: "മാര്‍ക്ക്‌ കുറവുള്ള വിദ്യാര്‍ത്ഥികള്‍ക്ക് സ്പെഷ്യല്‍ കോച്ചിംഗ്"},
                            {a: "ഉച്ചഭക്ഷണം എല്ലാ വിദ്യാര്‍ത്ഥികള്‍ക്കും"},
                            {a: "വിദ്യാലയങ്കണത്തില്‍ കളിസ്ഥലം"},
                            {a: "എല്ലാക്കൊല്ലവും സ്റ്റഡി ടൂര്‍"}
                        ]
                    },
                    contact: {
                        title: "ബന്ധപ്പെടുക",
                        info: [
                            {a: "ഇ-മെയില്‍: sobhadnmjbs@gmail.com"},
                            {a: "ഫോണ്‍: 04923 251000"},
                            {a: "ഹെഡ് മിസ്ട്രസ്സ് (Mob): 9496673270"}
                        ]

                    },
                    about: {
                        title: "ഈ സ്ക്കൂളിനെക്കുറിച്ച്",
                        info: "പരേതനായ ശ്രീ ദാമോദരന്‍ നായരുടെ സ്മരണാര്‍ത്ഥമാണ് ഈ വിദ്യാലയം നാമകരണം ചെയ്തിരിക്കുന്നത്. 1935ല്‍ രൂപികരിച്ച ഈ വിദ്യാലയം ഒരു കുടി പള്ളിക്കുടമായി നൊച്ചൂര്‍ ദേവസ്വം ആണ് നടത്തിവന്നിരുന്നത്. 1990ല്‍ പാലക്കാടില്‍ നിന്നുള്ള ശ്രീ M. ശിവരാമകൃഷ്ണന്‍ അവര്‍കളുടെ നേതൃത്ത്വത്തില്‍ ഈ വിദ്യാലയം ഇപ്പോഴുള്ള കെട്ടിടത്തിലേക്ക് മാറ്റി. ഇത് ഒരു ഗവണ്മെന്റ് എയ്ഡഡ് സ്ഥാപനം ആണ്. ഇതിന്റെ നല്ലരീതിയില്‍ ഉള്ള നടത്തിപ്പിന് പൂര്‍വ വിദ്യാര്‍ത്ഥികളും സഹായിക്കുന്നു. ഈ വിദ്യാലയത്തില്‍ പ്രീ നഴ്സറി ക്ലാസ്സുകളും ലഭ്യമാണ്. നല്ല സ്നേഹപരിചരണം ഉള്ള അധ്യാപികമാരും ശാന്തമായ അന്തരീക്ഷവും ഈ വിദ്യാലയത്തിന്റെ മുതല്‍ക്കൂട്ടാണ്."
                    },
                    photos: {
                        title: "PHOTOS",
                        album: [
                            {pic: ""}
                        ]
                    }
                }
            }
        },
        society: {
            title: "സമൂഹം",
            party: {
                title: "രാഷ്ട്രീയ പാർട്ടികൾ",
                list: [

                ]
            },
            clubs: {
                title: "ക്ലബ്ബുകൾ",
                list: [

                ]
            },
            other: {
                title: "മറ്റു കൂട്ടായ്‌മകൾ",
                list: [

                ]
            }
        }
    };

    $rootScope.engdata.culture = {
        intro: {
            title: "INTRODUCTION",
            para1: "The lifestyle and traditions of people vary for each locality and community of people, here in Koduvayur. This Cultural Diversity results in numerous festivals to celebrate. Koduvayur Radholsavam is a Special Occasion for everyone here, regardless of their religion, gender, caste or age. From Eid, Easter and Onam to a number of other Regional Festivals spread around like the Ethanur Kummaty, Ganeshotsavam or Navarathri, there is something to celebrate each time of the year. This page throws light upon the Religious Places of Worship and the details of all the important festivals that are celebrated in and around Koduvayur."
        },
        worship: {
            title: "PLACES OF WORSHIP",
            temples: {
                title: "TEMPLES",
                subtitle: "TEMPLES IN KODUVAYUR",
                list: {
                    krishnankovil: {
                        title: "SREE KRISHNA TEMPLE",
                        coverpic: "./images/culture/krishnankovil/cover.jpg",
                        thumb: "./images/culture/krishnankovil/thumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    ganapathikovil: {
                        title: "SREE MAHAGANAPATHY TEMPLE",
                        coverpic: "./images/culture/ganapathikovil/templecover.jpg",
                        thumb: "./images/culture/ganapathikovil/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Corner Street - Double Street Junction, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "Jayaraman Vadhyar, Double Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Ganapathy Kovil’, The Mahaganapathy Temple of Keralapuram Gramam is one of the newer temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in the intersection of Corner Street and Double Street, in the north-west side of the pond that is populary called as 'Valyankulam' of this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    sivankovil: {
                        title: "SREE VISALAKSHY SAMETHA SREE VISWANATHA SWAMY TEMPLE",
                        coverpic: "./images/culture/sivankovil/templecover.jpg",
                        thumb: "./images/culture/sivankovil/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    keralathappankovil: {
                        title: "SREE KERALATHAPPAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    mariyammankovil: {
                        title: "KERALAPURAM SREE MARIYAMMAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kurukkulamtemple: {
                        title: "KURUKKULAM SREE MARIYAMMAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kolodetemple: {
                        title: "KOLODE SREE MARIYAMMAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kakkayursivankovil: {
                        title: "KAKKAYUR SREE MAHA SHIVA TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Near DMSB School - Althara, Kakkayur, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIESTS",
                            info: "Thantri - Panavoor Manakkal Brahmasree Parameshwaran Namboothiri, Melshanthi - S.Rajagopal Embranthiri."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "Popularly known as 'Kakkayur Sivan Kovil', The Maha Shiva Temple of Kakkayur is one of the oldest temples of Koduvayur. Situated in the heart of Kakkayur region near the DMSB School and Althara, it is a regular stop for devotees from around and also far from this region. This temple is known for its divineness, beautiful surroundings, effective and special rituals, and many special features..."
                        },
                        history: {
                            title: "HISTORY",
                            info: "The Kakkayur Maha Shiva Temple features the 'Kuthiravatta Swaroopam' of Lord Shiva. The poojas and rituals that are carried out here are based on 'Malayala Sambradayam' or 'Haveeka Poojavidhi'. This temple is around 600 years old and was under HRMC before and is now under Malabar Devaswom."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "This temple has a unique speciality of having 2 Main Deities as Lord Shiva and Lord Subramaniya Swamy respectively with equal importance to both and both deities facing the east, in the elliptical centres of the temple. The sub deities include Lord Mahaganapathy and Lord Dakshinamoorthy on the north center, Sree Dharmasastha in the center, Sree Durga Bhagavathy facing east on the north-west corner, and the Nagadevatas. This temple has its sacred wells inside and outside the temple and Thidappally in the southern side. The sacred pond is on the west of the outside premises of the temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Poojas and rituals are carried out based on Malayala Sambradayam in this temple. Daily 3 kala pooja is performed. Special poojas include Mrithyunjaya Homam, which is a well known pooja of this temple and is believed as very effective and special. The other special poojas include Navakam Rudrabhishekam for Lord Shiva, Kavadipooja for Lord Subramaniya, and Dhara, and other usual offerings and poojas."
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "MahaSivarathri, Thaipooyam, Navarathri, Vishu, Thiruvathira are the main festive days here. Special Abhishekams and poojas are conducted on these days. Last Kumbhabhishekam was conducted on 2014 and Prathistadinam is celebrated on Makeeram star on the month of Edavam each year."
                        }
                    },
                    kottamala: {
                        title: "KOTTAMALA SREE AYYAPPA TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kottakovil: {
                        title: "SREE THIRUVILAYANADU BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    altharaganapathy: {
                        title: "ALTHARA SREE MAHAGANAPATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kizhakkethara: {
                        title: "KIZHAKKETHARA SREE THIRUVILAYANADU BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    maruthikavu: {
                        title: "ETHANUR SREE MARUTHI BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    koymarpadam: {
                        title: "KOYMAR PADAM SREE SUBRAMANIYA SWAMY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    mandathbhagavathy: {
                        title: "SREE MANDATH BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    nochurbhagavathy: {
                        title: "NOCHUR SREE BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Nochur Main Road, Nochur Agraharam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "P.C.Vilwadhri Vadhyar, Nochur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "Also known as ‘Nochur Santhi Durga Parameshwari Temple’, The Bhagavathy Temple of Nochur Agraharam is one of the older temples of this place. It functions under Nochur Devaswom. It is located in the heart of Nochur Agraharam. Home to many grand events and also the Nochur Radholsavam each year, it is one of the most popular temples of Koduvayur and attracts devotees from near and far in large numbers. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "It is believed that once a farmer, while working in his field, struck his plough on a stone and blood started flowing out of the stone. Astonished and afraid, he approached the chief astrologers of the place and told them about this. The astrologers found that this was not a stone but the sacred deity of a powerful Goddess called VanaDurga. So they brought Brahmins from the province of Thanjavur and built a temple in the village and positioned the Deity facing north. The Brahmins started performing daily poojas and people visited and worshipped the Goddess with devotion. Time passed and about 200-300 years ago from the present, once there occured a widespread fire all over the village. So the astrologers found out that the deity was ultimately powerful and needed to be cooled down. So after all discussions and detailed research, they positioned the VanaDurga deity to face west, and built a pond in front of the temple to cool her down. So since then, the deity of Nochur Bhagavathy Temple is called 'Santhi Durga Parameshwari' and is widely worshipped by people from near and far. Nearly a century ago, a Shiva temple, which was situated in another part of the village was moved near to the Bhagavathy Temple, and recently, a deity of Lord Ayyappa was also installed in the temple premises."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "In the Bhagavathy temple, the Main Deity is Goddess Sree Santhi Durga Parameshwari, facing the west, and Sub-Deities are Lord Vigneshwara on Southern side and Lord BalaMuruga or Northern side, both facing east. The Thidappally is situated in the south-east corner inside the temple and the sacred well is situated in the south-east corner just outside the temple. Lord Shiva facing west, is the Main Deity, and Goddess Vishalakshi facing south and Lord Vigneshwara and Lord Ayyappa facing east are the Sub-Deities of of the adjacent Shiva temple of the temple premises."
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "The Poojas of the Bhagavathy Temple and the adjacent Shiva temple are carried out based on Aagama Shasthravidhi. Daily, 2 Kala pooja is performed to all the deities. On special days, 5 kala pooja is performed and the Kumbhabhishekham was performed 4 years ago with 6 Kala Saparivaara Pooja. Kadum Madhura Payasam and Sathusshatha Payasam Nivedyam here are widely well known for their effectiveness and also their taste. Lalitha Sahasranama Archana, Saraswatham and other Sooktharchanas are also well known poojas performed in this temple and are believed to be immediate and well effective. MahaPradosham is performed once in every month in the Shiva Temple. Pushparchana, Niramala etc are some of the other general poojas performed here."
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Nochur Ratholsavam is the biggest festival celebrated in this temple and this village. It falls on the first friday of the malayalam month of Makaram each year. Shivarathri, on which Rudrabhishekham is performed at night, Vishu where the Temple deity is decorated with Vishukkani, Prathishta Dinam, which falls on May 25th each year when Laksharchana is performed and Lalitha Sahasranamam is recited collectively, Aadipooram when there will be a Special 'Puttupaadal', Abhishekam and Nivedyam, Navarathri, Karthika, Annabhishekham, Mandalakalapooja, Thiruvathira, etc. are the other festive days in this temple."
                        }
                    },
                    nochurkrishnatemple: {
                        title: "NOCHUR SREE KRISHNA TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    ramapuramtemple: {
                        title: "PAMAPURAM SREERAMA TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    uchimahaliyammantemple: {
                        title: "SREE UCHIMAHALIYAMMAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    }
                }


            },
            mosques: {
                title: "MOSQUES",
                subtitle: "MOSQUES IN KODUVAYUR"
            },
            church: {
                title: "CHURCHES",
                subtitle: "CHURCHES IN KODUVAYUR"
            }
        },
        festive: {
            title: "FESTIVE CALENDAR"
        },
        festivals: {
            title: "FESTIVALS",
            list: {
                example: {
                    title: "OUR FESTIVAL",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    },
                },
                koduvayurratholsavam: {
                    title: "KODUVAYUR RATHOLSAVAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "Sree Visalakshy Sametha Sree Viswanatha Swamy Temple, Keralapuram Gramam, Koduvayur."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "KODUVAYUR RATHOLSAVAM is one of the famous and remarkable festivals of the Palakkad region, which is known to be 'the land of festivals'. This CHARIOT FEST occurs annually in the heart of the village of Koduvayur and it falls on the day of Thiruvathira star in the month of ‘Dhanu’ (Dec-Jan) at the SREE VISALAKSHY SAMETHA SREE VISWANATHA SWAMY Temple, Keralapuram, Koduvayur. It boasts of about 650 years of past history for the temple and the chariot festival here.. When the chariots roll their way down the 4 streets, the whole of the village collectively celebrate the occasion with tremendous joy, passion and pride... People from all around come to witness and be a part of this great festival, and to acquire the blessings of SREE VISALAKSHY SAMETHA SREE VISWANATHA SWAMY... Read on to find out more..."
                    },
                    history: {
                        title: "PREPARATIONS",
                        l1: "The proceedings begin with the MUHURTHAKAAL CEREMONY exactly 18 days before the festival, where a decorated bamboo is adored and erected on the south-west corner of the temple, depicting the beginning of the festival season.",
                        l2: "The whole village gets itself up and ready for the fest.. The temple and the streets are cleaned up, and the repair works, whitewashing, painting and decorating of the houses are done... Usually, native people who are settled abroad or any distant place, finds this the right time to return home...",
                        l3: "The village sets up a beautiful festive mood all around in the coming days and exactly a week before the fest, the celebrations start up.. The undecorated chariots are taken out of the garages and set up outside the temple..",
                        l4: "The ritual of GRAMA SANTHI takes place at the twilight, which according to mythology, is intended to encage the bad spirits which are wandering around the village.. "
                    },
                    season: {
                        title: "THE FESTIVE DAYS",
                        l1: "The next morning, the KODIYETTAM / DHWAJAROHANAM / FLAG HOIST CEREMONY takes place, marking the beginning of that year's festival.. This is the hoisting of the holy flag (DHWAJAM) in the DHWAJASTHAMBAM of the temple... The whole of the village would be present to witness the ceremony... From this day on till the festival, RUDRA ABHISHEKAM takes place in the temple each morning... ",
                        l2: "On that night, the procession of the PALLAKKU takes place with the KAMADHENU VAHANAM.. Many people accompany the procession along with the bullock driven PALLAKKU and NAADASWARAM.. Pooja will be arranged in front of each house and will be done as the procession passes by..",
                        l3: "The second night, the procession takes place with the BOOTHA VAHANAM on the PALLAKKU... On all these days, the beautiful KOLAM / RANGOLI in the frontyard of the houses sure provide a treat to the eyes and camera lenses..",
                        l4: "The next night, it will be KUTHIRA VAAHANAM (horse)... By the third day, most people from abroad and around would have reached for the festival, so the procession act as a get-together for old friends to have a good time and refresh memories... The procession lasts for nearly 3 hours and covers nearly whole of the village...",
                        l5: "By the fourth day, the decoration of the chariots will be on progress by the hierarchical carpenter families.. The fourth night, the KAILASA VAHANAM rolls on the streets of Koduvayur, with more joyous moments and more people getting together.. And the holy MAHAPRADOSHAM also falls on one of these 6 days... ",
                        l6: "The fifth day is also called the ANJAAM THIRUNAAL... With the festive mood rising up on te whole village, the celebrations shift up to the next level... The THAZHIKA KUDAM will be adorned to the chariots on the ANJAM THIRUNAL.. The PALLAKKU will be decorated and will be adorned with the RISHABHA VAHANAM, for the royal procession,  with KACHERI... Fireworks spread colour to the procession..",
                        l7: "The last PALLAKKU procesion will be a short one, on the sixth night with the AANA VAHANAM sprinting down the streets... With just one day left to the RATHOLSAVAM, serial lights spread the glitter and sparkle through the village streets.."
                    },
                    celebration: {
                        title: "DAY ONE - ONNAM THERU",
                        l1 : "The MAHABHISHEKAM takes place from twilight till dawn of the ONNAM THERU... The ARDRA DARSANAM follows... Thousands of people gather to witness the holy ALANKARA DEEPARADHANA...",
                        l2 : "The RATHAROHANAM occurs at nearly 6-7 am.. With the thousands of devotees gatherd around the temple, the 3 UTSAVA MOORTHIs revolve thrice around the temple and 9 times around the holy banyan tree and are adorned to the respective chariots...",
                        l3 : "The sounds of PANCHAVADHYAM, CHENDAMELAM & NADASWARAM echoes with the mob dancing in joy... The  fireworks begin...",
                        l4 : "The THIRUMANJANAM EZHUNNALLATH, the procession of elephants carrying the POORNA KUBHAM, accompanied by PANCHA VADHYAM takes place from 9.00 till noon..",
                        l5 : "The RATHAM GRAMAPRADAKSHINAM begins afternoon where the 3 chariots roll their way through the streets one by one, accompanied by CHENDAMELAM till the middle of the GOKULA STREET, for day 1..",
                        l6 : "Its a wonderly uniqurness of the KODUVAYUR RATHOLSAVAM that the path of the procession of the chariots resemble the holy tamil phrase 'OM'.. And its one of the very few chariot fests where the chariots are not reversed or repeated through the same path...",
                        l7 : "The chariots rest in the GOKULA STREET on ONNAM THERU.. After all the chariots reach there, there would be recitals of many STOTRAMs and songs depicting LORD SHIVA, followed by DEEPARADHANA and KRAMARCHANA...",
                        l8 : "PAANDI MELAM is a new custom that has been introduced for the past few years to the already busy schedule of KODUVAYUR RATHOLSAVAM.. "
                    },
                    specialities: {
                        title: "DAY TWO - RANDAM THERU",
                        l1 : "After the POOJA & DEEPARADHANA at the morning of the RANDAM THERU, the RATHAM GRAMAPRADAKSHINAM begins at early afternoon, and chariots make their way through CORNER STREET & DOUBLE STREET... ",
                        l2 : "At about 7 pm, the 3 chariots proceed to the temple together.. It is a beautiful scene to watch and thousands of people our in just to witness this... As the CHENDAMELAM echoes, people dance with sheer joy and fireworks lighten up to give a visual treat... As the chariots reach the temple premises, the VEDIKKETTU follows... ",
                        l3 : "That night, an orchestra band provides immense entertainment to a huge crowd that has turned up...",
                        l4 : "The next early morning, PALLAKKU KACHERI occurs followed by KULATHERU & its MOUNAVRATHAM for the next day...",
                        l5 : "MANJALNEERATU occurs on the second day after the RANDAM THERU... DHWAJAVAROHAM occurs that night.... With the POORNABHISHEKAM on the next morning, its curtains to that year's RATHOLSAVAM, or THERU as we call it..",
                        l6 : "Everyone go back to their lives, from the next day, and their longing wait for the next THERU begin........"
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                thaipooyam: {
                    title: "THAIPOOYAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                nochurratholsavam: {
                    title: "NOCHUR RATHOLSAVAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                sivarathri: {
                    title: "MAHASIVARATHRI",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                ethanurkummati: {
                    title: "ETHANUR KUMMATI",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                kanyarkali: {
                    title: "KANYARKALI",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                mariyammanpongal: {
                    title: "MARIYAMMAN PONGAL",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                aadipooram: {
                    title: "AADIPOORAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                ganeshothsavam: {
                    title: "GANESHOTHSAVAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                navarathri: {
                    title: "NAVARATHRI",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                annabhishekham: {
                    title: "ANNABHISHEKHAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                kottamaladhanupath: {
                    title: "KOTTAMALA DHANUPATH",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                }

            }
        }
    };

    $rootScope.maldata.culture = {
        intro: {
            title: "ആമുഖം",
            para1: "ഏതൊരു സ്ഥലത്തും ഓരോ പ്രദേശത്തിലുള്ള ജനങ്ങളുടെ ജീവിതരീതികളും പാരമ്പര്യവും സമൂഹത്തിനും വ്യത്യാസമുണ്ടാവാം. ഇവിടെ കൊടുവായൂരിലും ഇത് ഒരു ശരിയായ വസ്തുത ആണ്. ഈ സാംസ്കാരിക വൈവിധ്യങ്ങൾ ഉള്ളതിനാൽ നിരവധി ആഘോഷങ്ങളും ഉത്സവങ്ങളും ഇവിടെയുണ്ട്. അവരുടെ ജാതിമതപ്രായബേദമന്യേ എല്ലാവർക്കും അതിവിശേഷമായ ദിവസങ്ങളാണ് കൊടുവായൂർ രഥോത്സവം. ഈസ്റ്റർ, ഓണം, റംസാൻ പോലെയുള്ള ലോകവ്യാപകമായ ഉത്സവങ്ങൾ മുതൽ എത്തനൂർ കുമമാട്ടി, ഗണേശോത്സവം, നവരാത്രി തുടങ്ങിയ നിരവധി പ്രാദേശിക ഉത്സവങ്ങൾ വരെ ഇവിടെ വർഷത്തിന്റെ ഓരോ സമയത്തും ആഘോഷിക്കുവാൻ കാരണങ്ങൾ ഉണ്ട്. ആരാധനാലയങ്ങളെക്കുറിച്ചും കൊടുവായൂരിൽ ആഘോഷിക്കുന്ന എല്ലാ പ്രധാനപ്പെട്ട ഉത്സവങ്ങളെക്കുറിച്ചും ഉള്ള വിശദാംശങ്ങളിലേക്ക്  ഈ പേജ് വെളിച്ചം വീശുന്നു."
        },
        worship: {
            title: "ആരാധനാലയങ്ങൾ",
            temples: {
                title: "അമ്പലങ്ങൾ",
                subtitle: "അമ്പലങ്ങൾ",
                list: {
                    krishnankovil: {
                        title: "ശ്രീ കൃഷ്ണ ക്ഷേത്രം",
                        coverpic: "./images/culture/krishnankovil/cover.jpg",
                        thumb: "./images/culture/krishnankovil/thumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും ആഞ്ജനേയോത്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    ganapathikovil: {
                        title: "ശ്രീ മഹാഗണപതി ക്ഷേത്രം",
                        coverpic: "./images/culture/ganapathikovil/templecover.jpg",
                        thumb: "./images/culture/ganapathikovil/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    sivankovil: {
                        title: "ശ്രീ വിശാലാക്ഷി സമേത ശ്രീ വിശ്വനാഥ സ്വാമി ക്ഷേത്രം",
                        coverpic: "./images/culture/sivankovil/templecover.jpg",
                        thumb: "./images/culture/sivankovil/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    keralathappankovil: {
                        title: "ശ്രീ കേരളത്തപ്പന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    mariyammankovil: {
                        title: "കേരളപുരം ശ്രീ മാരിയമ്മന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kurukkulamtemple: {
                        title: "കുരുക്കുളം ശ്രീ മാരിയമ്മന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kolodetemple: {
                        title: "കോളോട് ശ്രീ മാരിയമ്മന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kakkayursivankovil: {
                        title: "കാക്കയൂര്‍ ശ്രീ മഹാദേവ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "DMSB സ്ക്കൂല്‍ - ആല്‍തറ, കാക്കയൂര്‍, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "പൂജാനിര്‍വ്വഹണം",
                            info: "തന്ത്രി - പനവൂര്‍ മനയ്ക്കല്‍ ബ്രഹ്മശ്രീ പരമേശ്വരന്‍ നമ്പൂതിരി, മേല്‍ശാന്തി - S. രാജഗോപാല്‍ എംബ്രാന്തിരി, കാക്കയൂര്‍."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "കാക്കയുരില്‍ സ്ഥിതി ചെയ്യുന്ന ഈ മഹാശിവ ക്ഷേത്രം കൊടുവായൂരിലെ പുരാതനമായ ക്ഷേത്രങ്ങളില്‍ ഒന്നാണ്. ഏകദേശം 600 വര്ഷം പഴക്കമുള്ള ഈ ക്ഷേത്രം അതിന്റെ ചൈതന്യത്തിനും ചുറ്റംബലത്തിന്റെ ദൃശ്യഭംഗിക്കും പേരുകേട്ടതാണ്. മലയാള സമ്പ്രദായത്തില്‍ ഹവീക ശാസ്ത്രവിധിപ്രകാരം പൂജ ചെയ്യപ്പെടുന്ന ഈ ക്ഷേത്രത്തിലേക്ക് പക്കല്‍ നിന്നും ദൂരെ നിന്നും ഒരുപോലെ ഭക്തജനങ്ങള്‍ വന്നെത്താറുണ്ട്."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "ഏകദേശം 600 വര്ഷം പഴക്കമുള്ള കാക്കയൂര്‍ മഹാശിവ ക്ഷേത്രം 'കുതിരവട്ട സ്വരൂപം' എന്ന മാതൃകയില്‍ ആണ് ഉള്ളത്. HRMCയുടെ കീഴില്‍ ആയിരുന്ന ഈ ക്ഷേത്രം പിന്നീട് മലബാര്‍ ദേവസ്വത്തിന്റെ അധികാരത്തില്‍ ആക്കപ്പെട്ടു. ഇവിടത്തെ പൂജാകര്യങ്ങള്‍ നിര്‍വഹിക്കുന്നത് മലയാള സമ്പ്രദായത്തില്‍ ഹവീക ബ്രാഹ്മണരുടെ ശാസ്ത്രവിധിപ്രകാരം ആണ്."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ഈ ക്ഷേത്രത്തിലെ ഏറ്റവും വലിയ പ്രത്യേകത ആവുന്നത് ഇവിടത്തെ പ്രധാന ദേവതകള്‍ ആണ്. തുല്യ പ്രാധാന്യമുള്ള ശിവഭഗവാന്റെയും സുബ്രഹ്മന്യസ്വാമിയുടെയും നടകള്‍ കിഴക്ക് നോക്കി ക്ഷേത്രത്തിന്റെ 2 കേന്ദ്രങ്ങളിലായി സ്ഥിതി ചെയ്യുന്നു. വടക്ക് മധ്യഭാഗത്ത്‌ മഹാഗണപതിയും ശ്രീ ദക്ഷിണാമൂര്‍ത്തിയും, മധ്യഭാഗത്തുള്ള ശ്രീ ധര്‍മശാസ്താ, വടക്കുപടിഞ്ഞാറെ മൂലയില്‍ കിഴക്ക് നോക്കി ശ്രീ ദുര്ഗാഭഗവതി, നാഗദേവതകള്‍ എന്നിവ ആണ് ഉപദേവതകള്‍. ക്ഷേത്രത്തിനു അകത്തും പുറത്തും തീര്‍ത്ഥ കിണറുകള്‍ ഉണ്ട്. ക്ഷേത്രത്തിനു പുറത്ത് പടിഞ്ഞാറു ഭാഗത്ത് ക്ഷേത്രക്കുളം സ്ഥിതി ചെയ്യുന്നു. ക്ഷേത്ര തിടപ്പള്ളി തെക്കുഭാഗത്താണ്."
                        },
                        pooja: {
                          title: "വിശേഷ പൂജകൾ",
                            info: "മലയാള സമ്പ്രദായത്തില്‍ പൂജാകാര്യങ്ങള്‍ നിര്‍വഹിച്ചുവരുന്ന ഈ ക്ഷേത്രത്തില്‍ ദിവസേന ൩ കാല പൂജ ഉണ്ടാവാറുണ്ട്. ഇവിടത്തെ പ്രധാന വിശേഷ പൂജ ആയ മൃത്യുഞ്ജയ ഹോമം വളരെ പ്രസിദ്ധവും ശീഘ്രഫലസിദ്ധി ഉള്ളതും ആണ് എന്നു വിശ്വസിക്കപ്പെടുന്നു. നവകം രുദ്രാഭിഷേകം, സുബ്രഹ്മണ്യസ്വാമിക്കു കാവടിപൂജ, ധാര തുടങ്ങി മറ്റു പൊതുവായുള്ള വഴിപടുകളെല്ലാം ഇവിടെ കഴിക്കാറുണ്ട്."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "മഹാശിവരാത്രി, തൈപ്പൂയ്യം, വിഷു, നവാരാത്രി, തിരുവാതിര എന്നിവയാണ് ഇവിടത്തെ പ്രധാന വിശേഷ ദിവസങ്ങള്‍. ഈ ദിവസങ്ങളില്‍ വിശേഷ അഭിഷേകങ്ങളും പൂജകളും ഉണ്ടാവാറുണ്ട്. 2014ല്‍ ആണ് ഇവിടെ കുംഭാഭിഷേകം കഴിഞ്ഞത്. എല്ലാക്കൊല്ലവും ഇടവമാസത്തിലെ മകയീരം നക്ഷത്രത്തില്‍ ഇവിടെ പ്രതിഷ്ഠാദിനം ആഘോഷിക്കാറുണ്ട്. "
                        }
                    },
                    kottamala: {
                        title: "കോട്ടമല ശ്രീ അയ്യപ്പ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kottakovil: {
                        title: "ശ്രീ തിരുവിളയനാട് ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    altharaganapathy: {
                        title: "ആല്‍ത്തറ ശ്രീ മഹാഗണപതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kizhakkethara: {
                        title: "കിഴക്കേത്തറ ശ്രീ തിരുവിളയനാട് ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    maruthikavu: {
                        title: "എത്തനൂര്‍ ശ്രീ മരുതി ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    koymarpadam: {
                        title: "കൊയ്മര്‍ പാടം ശ്രീ സുബ്ബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    mandathbhagavathy: {
                        title: "ശ്രീ മന്ദത്ത് ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    nochurbhagavathy: {
                        title: "നൊച്ചൂര്‍ ശ്രീ ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    nochurkrishnatemple: {
                        title: "നൊച്ചൂര് ‍ശ്രീ കൃഷ്ണ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    ramapuramtemple: {
                        title: "രാമപുരം ശ്രീരാമ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    uchimahaliyammantemple: {
                        title: "ശ്രീ ഉച്ചിമാഹാളിയമ്മന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    }
                }
            },
            mosques: {
                title: "മസ്‌ജിദുകൾ",
                subtitle: "മസ്‌ജിദുകൾ"
            },
            church: {
                title: "പള്ളികൾ",
                subtitle: "പള്ളികൾ"
            }
        },
        festive: {
            title: "ഉത്സവ കലണ്ടർ",
        },
        festivals: {
            title: "ഉത്സവങ്ങൾ",
            list: {
                example: {
                    title: "നമ്മുടെ ഉത്സവം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                koduvayurratholsavam: {
                    title: "കൊടുവായൂര്‍ രഥോത്സവം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം",
                        info: "ശ്രീ വിശാലാക്ഷി സമേത ശ്രീ വിശ്വനാഥ സ്വാമി ക്ഷേത്രം, കേരളപുരം ഗ്രാമം, കൊടുവായൂര്‍."
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "KODUVAYUR RATHOLSAVAM is one of the famous and remarkable festivals of the Palakkad region, which is known to be 'the land of festivals'. This CHARIOT FEST occurs annually in the heart of the village of Koduvayur and it falls on the day of Thiruvathira star in the month of ‘Dhanu’ (Dec-Jan) at the SREE VISALAKSHY SAMETHA SREE VISWANATHA SWAMY Temple, Keralapuram, Koduvayur. It boasts of about 650 years of past history for the temple and the chariot festival here.. When the chariots roll their way down the 4 streets, the whole of the village collectively celebrate the occasion with tremendous joy, passion and pride... People from all around come to witness and be a part of this great festival, and to acquire the blessings of SREE VISALAKSHY SAMETHA SREE VISWANATHA SWAMY... Read on to find out more..."
                    },
                    history: {
                        title: "PREPARATIONS",
                        l1: "The proceedings begin with the MUHURTHAKAAL CEREMONY exactly 18 days before the festival, where a decorated bamboo is adored and erected on the south-west corner of the temple, depicting the beginning of the festival season.",
                        l2: "The whole village gets itself up and ready for the fest.. The temple and the streets are cleaned up, and the repair works, whitewashing, painting and decorating of the houses are done... Usually, native people who are settled abroad or any distant place, finds this the right time to return home...",
                        l3: "The village sets up a beautiful festive mood all around in the coming days and exactly a week before the fest, the celebrations start up.. The undecorated chariots are taken out of the garages and set up outside the temple..",
                        l4: "The ritual of GRAMA SANTHI takes place at the twilight, which according to mythology, is intended to encage the bad spirits which are wandering around the village.. "
                    },
                    season: {
                        title: "THE FESTIVE DAYS",
                        l1: "The next morning, the KODIYETTAM / DHWAJAROHANAM / FLAG HOIST CEREMONY takes place, marking the beginning of that year's festival.. This is the hoisting of the holy flag (DHWAJAM) in the DHWAJASTHAMBAM of the temple... The whole of the village would be present to witness the ceremony... From this day on till the festival, RUDRA ABHISHEKAM takes place in the temple each morning... ",
                        l2: "On that night, the procession of the PALLAKKU takes place with the KAMADHENU VAHANAM.. Many people accompany the procession along with the bullock driven PALLAKKU and NAADASWARAM.. Pooja will be arranged in front of each house and will be done as the procession passes by..",
                        l3: "The second night, the procession takes place with the BOOTHA VAHANAM on the PALLAKKU... On all these days, the beautiful KOLAM / RANGOLI in the frontyard of the houses sure provide a treat to the eyes and camera lenses..",
                        l4: "The next night, it will be KUTHIRA VAAHANAM (horse)... By the third day, most people from abroad and around would have reached for the festival, so the procession act as a get-together for old friends to have a good time and refresh memories... The procession lasts for nearly 3 hours and covers nearly whole of the village...",
                        l5: "By the fourth day, the decoration of the chariots will be on progress by the hierarchical carpenter families.. The fourth night, the KAILASA VAHANAM rolls on the streets of Koduvayur, with more joyous moments and more people getting together.. And the holy MAHAPRADOSHAM also falls on one of these 6 days... ",
                        l6: "The fifth day is also called the ANJAAM THIRUNAAL... With the festive mood rising up on te whole village, the celebrations shift up to the next level... The THAZHIKA KUDAM will be adorned to the chariots on the ANJAM THIRUNAL.. The PALLAKKU will be decorated and will be adorned with the RISHABHA VAHANAM, for the royal procession,  with KACHERI... Fireworks spread colour to the procession..",
                        l7: "The last PALLAKKU procesion will be a short one, on the sixth night with the AANA VAHANAM sprinting down the streets... With just one day left to the RATHOLSAVAM, serial lights spread the glitter and sparkle through the village streets.."
                    },
                    celebration: {
                        title: "DAY ONE - ONNAM THERU",
                        l1 : "The MAHABHISHEKAM takes place from twilight till dawn of the ONNAM THERU... The ARDRA DARSANAM follows... Thousands of people gather to witness the holy ALANKARA DEEPARADHANA...",
                        l2 : "The RATHAROHANAM occurs at nearly 6-7 am.. With the thousands of devotees gatherd around the temple, the 3 UTSAVA MOORTHIs revolve thrice around the temple and 9 times around the holy banyan tree and are adorned to the respective chariots...",
                        l3 : "The sounds of PANCHAVADHYAM, CHENDAMELAM & NADASWARAM echoes with the mob dancing in joy... The  fireworks begin...",
                        l4 : "The THIRUMANJANAM EZHUNNALLATH, the procession of elephants carrying the POORNA KUBHAM, accompanied by PANCHA VADHYAM takes place from 9.00 till noon..",
                        l5 : "The RATHAM GRAMAPRADAKSHINAM begins afternoon where the 3 chariots roll their way through the streets one by one, accompanied by CHENDAMELAM till the middle of the GOKULA STREET, for day 1..",
                        l6 : "Its a wonderly uniqurness of the KODUVAYUR RATHOLSAVAM that the path of the procession of the chariots resemble the holy tamil phrase 'OM'.. And its one of the very few chariot fests where the chariots are not reversed or repeated through the same path...",
                        l7 : "The chariots rest in the GOKULA STREET on ONNAM THERU.. After all the chariots reach there, there would be recitals of many STOTRAMs and songs depicting LORD SHIVA, followed by DEEPARADHANA and KRAMARCHANA...",
                        l8 : "PAANDI MELAM is a new custom that has been introduced for the past few years to the already busy schedule of KODUVAYUR RATHOLSAVAM.. "
                    },
                    specialities: {
                        title: "DAY TWO - RANDAM THERU",
                        l1 : "After the POOJA & DEEPARADHANA at the morning of the RANDAM THERU, the RATHAM GRAMAPRADAKSHINAM begins at early afternoon, and chariots make their way through CORNER STREET & DOUBLE STREET... ",
                        l2 : "At about 7 pm, the 3 chariots proceed to the temple together.. It is a beautiful scene to watch and thousands of people our in just to witness this... As the CHENDAMELAM echoes, people dance with sheer joy and fireworks lighten up to give a visual treat... As the chariots reach the temple premises, the VEDIKKETTU follows... ",
                        l3 : "That night, an orchestra band provides immense entertainment to a huge crowd that has turned up...",
                        l4 : "The next early morning, PALLAKKU KACHERI occurs followed by KULATHERU & its MOUNAVRATHAM for the next day...",
                        l5 : "MANJALNEERATU occurs on the second day after the RANDAM THERU... DHWAJAVAROHAM occurs that night.... With the POORNABHISHEKAM on the next morning, its curtains to that year's RATHOLSAVAM, or THERU as we call it..",
                        l6 : "Everyone go back to their lives, from the next day, and their longing wait for the next THERU begin........"
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                thaipooyam: {
                    title: "തൈപ്പൂയം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                nochurratholsavam: {
                    title: "നൊച്ചൂര്‍ രഥോത്സവം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                sivarathri: {
                    title: "മഹാശിവരാത്രി",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                ethanurkummati: {
                    title: "എത്തനൂര്‍ കുമ്മാട്ടി",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                kanyarkali: {
                    title: "കണ്യാര്‍കളി",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                mariyammanpongal: {
                    title: "മാരിയമ്മന്‍ പൊങ്കല്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                aadipooram: {
                    title: "ആടിപ്പൂരം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                ganeshothsavam: {
                    title: "ഗണേശോത്സവം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                navarathri: {
                    title: "നവരാത്രി",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                annabhishekham: {
                    title: "അന്നാഭിഷേകം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                kottamaladhanupath: {
                    title: "കോട്ടമല ധനുപ്പത്ത്",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                }
            }
        }
    };

    $rootScope.engdata.services = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is the prime Business Center for the south-west region of Palakkad district. Almost every kind of services that one needs is available in and around this place. Its hard to keep record of every one of them and use them at the time of need. MyKoduvayur brings to you the entire list and details of every kind of services that is available around this place, presented in a clean and ordered way with categories and sub-categories. One can look through it whenever needed, choose one and use it. We believe that this page will be the most useful one in this website. We hope you find it useful."
        },
        emergency: {
            title: "EMERGENCY"
        },
        categories: {
            title: "CATEGORIES",
            list: [
                {
                    title: "EDUCATION",
                    myid: "education",
                    pic: "./images/thumbs/01.jpg",
                    sublist: [
                        {
                            type: "SCHOOLS",
                            listid: "school",
                            typeitems: [
                                {
                                    a: "GHSS KODUVAYUR",
                                    c: "HIGHER SECONDARY",
                                    d: "Since 1904",
                                    e: "Govt. School"
                                }

                            ]
                        },
                        {
                            type: "COLLEGES",
                            listid: "college",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TUITION COLLEGE",
                            listid: "tuitionclg",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TUITION CENTERS",
                            listid: "tuition",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "COMPUTER COURSE",
                            listid: "computercourse",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TTC",
                            listid: "ttc",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "OTHER COURSES",
                            listid: "othercourse",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "HEALTH",
                    myid: "health",
                    pic: "./images/thumbs/02.jpg",
                    sublist: [
                        {
                            type: "HOSPITALS",
                            listid: "hospital",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CLINICS",
                            listid: "clinic",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HOMOEO",
                            listid: "homoeo",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AYURVEDA",
                            listid: "ayurveda",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ENG. MED. SHOP",
                            listid: "engmed",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AYUR. MED. SHOP",
                            listid: "ayurmed",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AMBULANCE",
                            listid: "ambulance",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "TRANSPORT",
                    myid: "transport",
                    pic: "./images/thumbs/03.jpg",
                    sublist: [
                        {
                            type: "AUTORIKSHAW",
                            listid: "auto",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AUTO-TAXI",
                            listid: "autotaxi",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TAXI",
                            listid: "taxi",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "SUV",
                            listid: "suv",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TRAVELLERS",
                            listid: "traveller",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CARRIER AUTO",
                            listid: "carrier",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HEAVY VEHICLES",
                            listid: "heavy",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TRAVEL AGENCY",
                            listid: "agency",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "HOUSEHOLD",
                    myid: "household",
                    pic: "./images/thumbs/04.jpg",
                    sublist: [
                        {
                            type: "ELECTRICIAN",
                            listid: "electrician",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "PLUMBER",
                            listid: "plumber",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CARPENTER",
                            listid: "carpenter",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "PAINTING",
                            listid: "painting",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CONSTRUCTION",
                            listid: "construction",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "SERVANTS",
                            listid: "servant",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TREE CLIMBERS",
                            listid: "treeclimb",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TREE CUTTING",
                            listid: "treecut",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GAS AGENCIES",
                            listid: "gas",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "BANKING",
                            listid: "bank",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ATM",
                            listid: "atm",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "SALOONS",
                            listid: "saloon",
                            typeitems: [
                                {

                                }
                            ]
                        },{
                            type: "BEAUTY PARLOR",
                            listid: "beauty",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TAILORING",
                            listid: "tailor",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "INSURANCE",
                            listid: "insurance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FINANCE",
                            listid: "finance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "LOCK PICKING",
                            listid: "lockpick",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "FOOD & STAY",
                    myid: "foodnstay",
                    pic: "./images/thumbs/05.jpg",
                    sublist: [
                        {
                            type: "BAKERY",
                            listid: "bakery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "RESTAURANTS",
                            listid: "restaurant",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TEA STALLS",
                            listid: "teastall",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "THATTUKADA",
                            listid: "thattukada",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MEAT STALLS",
                            listid: "meat",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HOTELS",
                            listid: "hotel",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "LODGE",
                            listid: "lodge",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "OTHER FOODS",
                            listid: "other",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "BEVARAGES",
                            listid: "bevarage",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "SHOPPING",
                    myid: "shopping",
                    pic: "./images/thumbs/06.jpg",
                    sublist: [
                        {
                            type: "SUPERMARKET",
                            listid: "supermarket",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "JEWELLERY",
                            listid: "jewellery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FURNITURE",
                            listid: "furniture",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "METALS",
                            listid: "metals",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HARDWARE",
                            listid: "hardware",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "PAINT SHOPS",
                            listid: "paint",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ELECTRICALS",
                            listid: "electrical",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ELECTRONICS",
                            listid: "electronics",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HOME APPLIANCE",
                            listid: "homeappliance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GIFT & FANCY",
                            listid: "giftnfancy",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GROCERY",
                            listid: "grocery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "STATIONERY",
                            listid: "stationery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FOOTWEAR",
                            listid: "footwear",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FRUIT STALL",
                            listid: "fruits",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "VEGETABLES",
                            listid: "vegetables",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FLOWER MART",
                            listid: "flower",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "BOOK STALLS",
                            listid: "books",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MILMA STALL",
                            listid: "milma",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "WATCH MART",
                            listid: "watch",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MOBILE STORES",
                            listid: "mobile",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MOBILE PARTS",
                            listid: "mobaccessories",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "RECHARGE SHOPS",
                            listid: "recharge",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TWO WHEELERS",
                            listid: "twowheeler",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "GOVT. SERVICES",
                    myid: "govtservices",
                    pic: "./images/thumbs/07.jpg",
                    sublist: [
                        {
                            type: "RATION SHOPS",
                            listid: "ration",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GRAMAPANCHAYAT",
                            listid: "panchayat",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "WATER AUTHORITY",
                            listid: "water",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "KSEB",
                            listid: "kseb",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GOVT. HOSPITAL",
                            listid: "govthospital",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "OLD AGE HOME",
                            listid: "oldagehome",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "EVENTS",
                    myid: "eventservice",
                    pic: "./images/thumbs/08.jpg",
                    sublist: [
                        {
                            type: "STUDIO",
                            listid: "studio",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "LIGHT & SOUND",
                            listid: "lightnsound",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "DECORATION",
                            listid: "decoration",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AUDITORIUM",
                            listid: "auditorium",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CARD SHOPPE",
                            listid: "cardshoppe",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GRAPHIC DESIGN",
                            listid: "graphicdesign",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "PRIEST",
                            listid: "priest",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "SERVICE & REPAIR",
                    myid: "servicenrepair",
                    pic: "./images/thumbs/09.jpg",
                    sublist: [
                        {
                            type: "WATCH REPAIR",
                            listid: "watchrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MOBILE REPAIR",
                            listid: "mobilerepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TV REPAIR",
                            listid: "tvrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FRIDGE REPAIR",
                            listid: "fridgerepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "OTHER ELECTRONICS",
                            listid: "otherelectronicsrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "COMPUTER REPAIR",
                            listid: "computerrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MOBILE NETWORK",
                            listid: "mobilenetwork",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TWO WHEELERS",
                            listid: "twowheelers",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "THREE WHEELERS",
                            listid: "threewheelers",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FOUR WHEELERS",
                            listid: "fourwheelers",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };

    $rootScope.maldata.services = {
        intro: {
            title: "ആമുഖം",
            para1: "പാലക്കാട് ജില്ലയുടെ തെക്ക്-പടിഞ്ഞാറ് ഭാഗത്തെ പ്രധാന വാണിജ്യകേന്ദ്രമാണ് കൊടുവായൂർ. ഈ സ്ഥലത്തുള്ളവർക്ക് ആവശ്യമായ എല്ലാതരം സേവനങ്ങളും ഇവിടെ ലഭ്യമാണ്. ഓരോ സേവനത്തിന്റെയും രേഖകൾ സൂക്ഷിക്കുകയും ആവശ്യസമയത്ത് അവ ഉപയോഗിക്കുകയും ചെയ്യുന്നത് ബുദ്ധിമുട്ടാണ്. ഈ സ്ഥലത്ത് ലഭ്യമായ എല്ലാ സേവനങ്ങളുടെയും വിശദാംശങ്ങളും വിവരങ്ങളും, വിഭാഗങ്ങളും ഉപ വിഭാഗങ്ങളുമായി വൃത്തിയായി ക്രമീകരിച്ചിരിക്കുന്നതുമായ വിവരങ്ങളടങ്ങിയ ഈ പേജ് MyKoduvayur  നാട്ടുകാർക്ക് സമർപ്പിക്കുന്നു. ആവശ്യമുള്ളപ്പോഴെല്ലാം അത് നോക്കി ഉപയോഗിക്കുക. ഈ പേജ് എല്ലാവര്ക്കും ഉപയോഗപ്രദമാകുമെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു. നിങ്ങൾ അത് ഉപയോഗപ്രദമായി കണ്ടെത്തുമെന്ന് ഞങ്ങൾ പ്രതീക്ഷിക്കുന്നു.."
        },
        emergency: {
            title: "അത്യാവശ്യം"
        },
        categories: {
            title: "വിഭാഗങ്ങൾ",
            list: [
                {
                    title: "വിദ്യാഭ്യാസം",
                    myid: "education",
                    pic: "./images/thumbs/01.jpg",
                    sublist: [
                        {
                            type: "വിദ്യാലയങ്ങൾ",
                            listid: "school",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കോളേജ്",
                            listid: "college",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ട്യൂഷൻ  കോളേജ്",
                            listid: "tuitionclg",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ട്യൂഷൻ സെന്റർ",
                            listid: "tuition",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കമ്പ്യൂട്ടർ കോഴ്സ്",
                            listid: "computercourse",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടി ടി സി",
                            listid: "ttc",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇതര കോഴ്സുകൾ",
                            listid: "othercourse",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "ആരോഗ്യം",
                    myid: "health",
                    pic: "./images/thumbs/02.jpg",
                    sublist: [
                        {
                            type: "ആശുപത്രികൾ",
                            listid: "hospital",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ക്ലിനിക്കുകൾ",
                            listid: "clinic",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹോമിയോ",
                            listid: "homoeo",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ആയുർവ്വേദം",
                            listid: "ayurveda",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇംഗ്ലീഷ് മരുന്ന്",
                            listid: "engmed",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ആയുർ. മരുന്ന്",
                            listid: "ayurmed",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ആംബുലൻസ്",
                            listid: "ambulance",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "വാഹനം",
                    myid: "transport",
                    pic: "./images/thumbs/03.jpg",
                    sublist: [
                        {
                            type: "ഓട്ടോ",
                            listid: "auto",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഓട്ടോ-ടാക്സി",
                            listid: "autotaxi",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടാക്സി",
                            listid: "taxi",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "എസ്.യു.വി",
                            listid: "suv",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ട്രാവലർ",
                            listid: "traveller",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പെട്ടി ഓട്ടോ",
                            listid: "carrier",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹെവി മോട്ടോർ",
                            listid: "heavy",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഏജൻസികൾ",
                            listid: "agency",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "വീട്ടുകാര്യങ്ങൾ",
                    myid: "household",
                    pic: "./images/thumbs/04.jpg",
                    sublist: [
                        {
                            type: "ഇലക്ട്രിഷ്യൻ",
                            listid: "electrician",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പ്ലംബർ ",
                            listid: "plumber",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ആശാരി ",
                            listid: "carpenter",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പെയിന്റിംഗ്",
                            listid: "painting",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കെട്ടുപണി",
                            listid: "construction",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വീട്ടുജോലി",
                            listid: "servant",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മരംകേറാൻ ",
                            listid: "treeclimb",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മരംവെട്ടൽ ",
                            listid: "treecut",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: " ഗ്യാസ് ഏജൻസി",
                            listid: "gas",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ബാങ്കുകൾ",
                            listid: "bank",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "എ.ടി.എം",
                            listid: "atm",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "സലൂൺ",
                            listid: "saloon",
                            typeitems: [
                                {

                                }
                            ]
                        },{
                            type: "ബ്യൂട്ടിപാർലർ ",
                            listid: "beauty",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടെയ്‌ലർ",
                            listid: "tailor",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇൻഷുറൻസ്",
                            listid: "insurance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫിനാൻസ്",
                            listid: "finance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ലോക്ക്പിക്കിങ്",
                            listid: "lockpick",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "ഭക്ഷണം & താമസം",
                    myid: "foodnstay",
                    pic: "./images/thumbs/05.jpg",
                    sublist: [
                        {
                            type: "ബേക്കറി",
                            listid: "bakery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "റെസ്റ്ററന്റ്",
                            listid: "restaurant",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ചായക്കട",
                            listid: "teastall",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "തട്ടുകട",
                            listid: "thattukada",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇറച്ചിക്കട",
                            listid: "meat",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹോട്ടൽ",
                            listid: "hotel",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ലോഡ്ജ്",
                            listid: "lodge",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മറ്റു ഭക്ഷണം",
                            listid: "other",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പാനീയങ്ങൾ",
                            listid: "bevarage",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "ഷോപ്പിംഗ്",
                    myid: "shopping",
                    pic: "./images/thumbs/06.jpg",
                    sublist: [
                        {
                            type: "സൂപ്പർമാർക്കറ്റ്",
                            listid: "supermarket",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ജ്വല്ലറി",
                            listid: "jewellery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫർണിച്ചർ",
                            listid: "furniture",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മെറ്റൽസ്",
                            listid: "metals",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹാർഡ്‌വെയർ",
                            listid: "hardware",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പെയിന്റ്",
                            listid: "paint",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇലക്ട്രിക്കൽസ്",
                            listid: "electrical",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇലക്ട്രോണിക്സ്",
                            listid: "electronics",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹോം അപ്ലയൻസ്",
                            listid: "homeappliance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഗിഫ്റ് & ഫാൻസി",
                            listid: "giftnfancy",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പലചരക്ക്",
                            listid: "grocery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "സ്റ്റേഷനറി",
                            listid: "stationery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫൂട്ട്‍വെയർ",
                            listid: "footwear",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫ്രൂട്ട് സ്റ്റാൾ",
                            listid: "fruits",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പച്ചക്കറി",
                            listid: "vegetables",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫ്ലവർ മാർട്ട്",
                            listid: "flower",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ബുക്ക് സ്റ്റാൾ",
                            listid: "books",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മിൽമ സ്റ്റാൾ",
                            listid: "milma",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വാച്ച് മാർട്ട്",
                            listid: "watch",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മൊബൈൽ സ്റ്റോർ",
                            listid: "mobile",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "അക്‌സെസ്സറിസ്",
                            listid: "mobaccessories",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "റീച്ചാർജ്",
                            listid: "recharge",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടൂ വീലേഴ്സ്",
                            listid: "twowheeler",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "ഗവ. സേവനങ്ങൾ",
                    myid: "govtservices",
                    pic: "./images/thumbs/07.jpg",
                    sublist: [
                        {
                            type: "റേഷൻ കട",
                            listid: "ration",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഗ്രാമപഞ്ചായത്ത് ",
                            listid: "panchayat",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വാട്ടർ അതോറിറ്റി",
                            listid: "water",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കെ.എസ്.ഇ.ബി",
                            listid: "kseb",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഗവ. ആശുപത്രി",
                            listid: "govthospital",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വൃദ്ധ സദനം",
                            listid: "oldagehome",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "പരിപാടികൾ",
                    myid: "eventservice",
                    pic: "./images/thumbs/08.jpg",
                    sublist: [
                        {
                            type: "സ്റ്റുഡിയോ",
                            listid: "studio",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ലൈറ്റ് സൗണ്ട്",
                            listid: "lightnsound",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "അലങ്കാരം",
                            listid: "decoration",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഓഡിറ്റോറിയം",
                            listid: "auditorium",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കാർഡ് ഷോപ്പ്",
                            listid: "cardshoppe",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഡിസൈനിംഗ്",
                            listid: "graphicdesign",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വൈദീകം",
                            listid: "priest",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "സർവീസ് & റിപ്പയർ",
                    myid: "servicenrepair",
                    pic: "./images/thumbs/09.jpg",
                    sublist: [
                        {
                            type: "വാച്ച് റിപ്പയർ",
                            listid: "watchrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മൊബൈലുകൾ",
                            listid: "mobilerepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടിവി റിപ്പയർ",
                            listid: "tvrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫ്രിഡ്ജ് റിപ്പയർ",
                            listid: "fridgerepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മറ്റു ഇലക്ട്രോണിക്സ്",
                            listid: "otherelectronicsrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കമ്പ്യൂട്ടറുകൾ",
                            listid: "computerrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "നെറ്റ്വർക്കുകൾ",
                            listid: "mobilenetwork",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടൂ വീലർ",
                            listid: "twowheelers",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ത്രീ വീലർ ",
                            listid: "threewheelers",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫോർ വീലർ",
                            listid: "fourwheelers",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };
    
    $rootScope.engdata.trending = {
        alerts: {
            title: "ALERTS",
            list: {

            }
        },
        offers: {
            title: "OFFERS",
            list: {

            }
        },
        trends: {
            news: {
                title: "NEWS",
                list: {

                    krishnankovilroad: {
                        date: "27.11.2017",
                        title: "KERALAPURAM KRISHNAN KOVIL ROAD CONSTRUCTION",
                        pic: "./images/trending/news/krishnankovilroad.jpg",
                        news: "സത്യപ്രതിജ്ഞ കഴിഞ്ഞു അധികാരത്തിൽ കയറി സഖാവ്‌ ഇബ്രാഹിം'മിൽ നിന്നും ഏറ്റുവാങ്ങിയ സഖാവ് പത്മകൃഷ്ണന്റെ ആദ്യത്തെ പരാതി ആയിരുന്നു കേരളപുരം കൃഷ്ണൻ കോവിൽ റോഡ്. അധികാരമേറ്റ് ഒരു മാസത്തിനുള്ളിൽ ഇതിനായി ഫണ്ട് മാറ്റിവച്ചു. പഞ്ചായത്ത് പ്രസിഡന്റ് ജി.കൃഷ്ണപ്രസാദ് അവറുകളുടെ വളരെ ശക്തമായ ഇടപെടലുകൾ കൊണ്ട് വളരെ പെട്ടെന്ന് അതിന്റെ പുറകിലുള്ള സാങ്കേതിക പ്രശ്നങ്ങൾ പരിഹരിച്ചു. കഴിഞ്ഞ 35 വർഷത്തോളമായി ആ പരിസരവാസികളുടെ ഏറ്റവും വലിയ ആവശ്യവും,സ്വപ്നവും ഇന്ന് പൂർത്തീകരിച്ചു. "
                    },

                    cleankoduvayur: {
                        date: "07.12.2017",
                        title: "CLEAN KODUVAYUR",
                        pic: "./images/trending/news/cleankoduvayur.jpg",
                        news: "മൃഗ സംരക്ഷണ വകുപ്പിന്റെ ആദിമുഖ്യത്തിൽ നടന്ന ക്ലീൻ കൊടുവായൂർ മിഷൻന്റെ മാലിന്യ സംസ്കരണ ബോധവത്കരണ റാലി "
                    },

                    superbloodmoon: {
                        date: "31.01.2018",
                        title: "SUPER BLOOD MOON",
                        pic: "./images/trending/news/superbloodmoon.jpg",
                        news: "Super Blood Moon Lunar Eclipse Occcurs once in 152 years. It happened at 5.30 pm to 9.00 pm on 31 Jan 2018. Was clearly visible in Koduvayur. Photographed by Aravind Mohan."
                    }


                }
            },
            articles: {
                title: "ARTICLES",
                list: {

                }
            },
            pictures: {
                title: "PICTURES",
                list: {

                }
            },
            videos: {
                title: "VIDEOS",
                list: {

                }
            }

        }
    };

    $rootScope.maldata.trending = {
        alerts: {
            title: "അറിയിപ്പുകൾ",
            list: {

            }
        },
        offers: {
            title: "ആനുകൂല്യങ്ങള്‍",
            list: {

            }
        },
        trends: {
            news: {
                title: "വാർത്ത",
                list:{
                    krishnankovilroad: {
                        date: "27.11.2017",
                        title: "കേരളപുരം കൃഷ്ണൻ കോവിൽ റോഡ് രൂപീകരിച്ചു",
                        pic: "./images/trending/news/krishnankovilroad.jpg",
                        news: "സത്യപ്രതിജ്ഞ കഴിഞ്ഞു അധികാരത്തിൽ കയറി സഖാവ്‌ ഇബ്രാഹിം'മിൽ നിന്നും ഏറ്റുവാങ്ങിയ സഖാവ് പത്മകൃഷ്ണന്റെ ആദ്യത്തെ പരാതി ആയിരുന്നു കേരളപുരം കൃഷ്ണൻ കോവിൽ റോഡ്. അധികാരമേറ്റ് ഒരു മാസത്തിനുള്ളിൽ ഇതിനായി ഫണ്ട് മാറ്റിവച്ചു. പഞ്ചായത്ത് പ്രസിഡന്റ് ജി.കൃഷ്ണപ്രസാദ് അവറുകളുടെ വളരെ ശക്തമായ ഇടപെടലുകൾ കൊണ്ട് വളരെ പെട്ടെന്ന് അതിന്റെ പുറകിലുള്ള സാങ്കേതിക പ്രശ്നങ്ങൾ പരിഹരിച്ചു. കഴിഞ്ഞ 35 വർഷത്തോളമായി ആ പരിസരവാസികളുടെ ഏറ്റവും വലിയ ആവശ്യവും,സ്വപ്നവും ഇന്ന് പൂർത്തീകരിച്ചു. "
                    },

                    cleankoduvayur: {
                        date: "07.12.2017",
                        title: "CLEAN KODUVAYUR",
                        pic: "./images/trending/news/cleankoduvayur.jpg",
                        news: "മൃഗ സംരക്ഷണ വകുപ്പിന്റെ ആദിമുഖ്യത്തിൽ നടന്ന ക്ലീൻ കൊടുവായൂർ മിഷൻന്റെ മാലിന്യ സംസ്കരണ ബോധവത്കരണ റാലി "
                    },

                    superbloodmoon: {
                        date: "31.01.2018",
                        title: "SUPER BLOOD MOON",
                        pic: "./images/trending/news/superbloodmoon.jpg",
                        news: "Super Blood Moon Lunar Eclipse Occcurs once in 152 years. It happened on 5.30 pm to 9.00 pm on 31 Jan 2018. Was clearly visible in Koduvayur. Photographed by Aravind Mohan."
                    }



                    }
            },
            articles: {
                title: "ലേഖനം",
                list: [
                    {

                    }
                ]
            },
            pictures: {
                title: "ചിത്രങ്ങൾ",
                list: [
                    {

                    }
                ]
            },
            videos: {
                title: "വീഡിയോ",
                list: [
                    {

                    }
                ]
            }

        }
    };

    $rootScope.engdata.emergency = {
        intro: {
            title: "INTRODUCTION",
            para1: "This venture - MyKoduvayur, was planned and processed with the motive of making the Life better for the people in and from this place, using the Web Technology that is growing higher and reaching farther each passing day. So each one of you definitely have a say in here. Your opinions, suggestions and appreciations are a huge motivation for us to go forward and do further. We appreciate each of your support. "
        },
        haveyoursay: {
            title: "HAVE YOUR SAY"
        }

    };

    $rootScope.maldata.emergency = {
        intro: {
            title: "ആമുഖം",
            para1: "MyKoduvayur എന്ന ഈ സംരംഭം ഇപ്പോൾ വളർന്നുവരുന്ന വെബ് ടെക്നോളജി ഉപയോഗിച്ച് കൊടുവായൂരിലെ ജനങ്ങളുടെ ജീവിതശൈലി എളുപ്പമാക്കുവാൻ സഹായിക്കുക എന്ന ഉദ്ദേശത്തോടെയാണ് ആരംഭിച്ചത്. നാട്ടുകാർക്ക് വേണ്ടിയുള്ള ഈ വെബ്‌സൈറ്റിൽ നിങ്ങൾക്കെല്ലാവർക്കും നിങ്ങളുടെ അഭിപ്രായങ്ങളും നിർദേശങ്ങളും ഇവിടെ നിങ്ങളുടെ ഫേസ്ബുക് അക്കൗണ്ട് ഉപയോഗിച്ച് പങ്കുവെക്കാം. നിങ്ങൾ ഓരോരുത്തരുടെയും പിന്തുണയ്ക്കും പ്രോത്സാഹനത്തിനും ഞങ്ങളുടെ നന്ദി പ്രകടിപ്പിക്കുന്നു."
        },
        haveyoursay: {
            title: "HAVE YOUR SAY"
        }

    };

    $rootScope.engdata.eventpage = {
        intro: {
            title: "INTRODUCTION",
            para1: "Our busy lives may hinder us from witnessing and attending many events we wish to watch and participate. Also, memories of the ones we were part of will give us the sheer joy of watching and reading through them again and again. MyKoduvayur gives you the chance to do this with this page, where you can go through every kind of important events that happen in and around this place. Do enjoy the experience..."
        },
        general: {
            title: "GENERAL EVENTS",
            list: {

            }
        },
        festive: {
            title: "FESTIVE EVENTS",
            list: {

                ganeshothsavam2017: {
                    pagetitle: "GANESHOTHSAVAM 2017",
                    cover: "./images/events/ganeshothsavam2017/cover.jpg",
                    thumb: "./images/events/ganeshothsavam2017/thumb.jpg",
                    gallery: {
                        title: "PHOTO ALBUM",
                        info: "",
                        list: [
                            {
                                pic: "./images/events/ganeshothsavam2017/1.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/2.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/3.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/4.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/5.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/6.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/7.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/8.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/9.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/10.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/11.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/12.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/13.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/14.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/15.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/16.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/17.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/18.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/19.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/20.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/21.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/22.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/23.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/24.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/25.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/26.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/27.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/28.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/29.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/30.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/31.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/32.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/33.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/34.jpg",
                                caption: ""
                            }
                        ]
                    }
                },

                thaipooyam2018: {
                    pagetitle: "THAIPOOYAM 2018",
                    cover: "./images/events/thaipooyam2018/cover.jpg",
                    thumb: "./images/events/thaipooyam2018/thumb.jpg",
                    gallery: {
                        title: "PHOTO ALBUM",
                        info: "",
                        list: [
                            {
                                pic: "./images/events/thaipooyam2018/1.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/2.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/3.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/4.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/5.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/6.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/7.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/8.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/9.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/10.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/11.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/12.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/13.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/14.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/thaipooyam2018/15.jpg",
                                caption: ""
                            }
                        ]
                    }
                }

            }
        },
        artsnsports: {
            title: "ARTS & SPORTS",
            list: {

                keralotsavam2017 : {
                    coverpic:  "./images/events/keralothsavam2017/klogo.jpg",
                    thumb:  "./images/events/keralothsavam2017/kthumbs.jpg",
                    pagetitle: "KERALOTSAVAM 2017",
                    title: "WELCOME",
                    intro1: "22 of the strongest football teams of Koduvayur featuring in 21 thrilling matches...",
                    intro2: "9 cricket teams to match up for the trophy ( stitch ball cricket tournament )....",
                    intro3: "To swish up magic while ball is in the air and get the crowd ballistic with Engaging Volleyball bouts ...",
                    intro4: "Photo finishes and Snapshots with various Athletic events ....",
                    intro5: "And many other events...",
                    intro6: "Our Place.. Our Fest.. Our Sport.. Our Passion...",
                    intro7: "2017 Keralotsavam, Koduvayur Grama Panchayath Sep 29,30 & Oct 1...",
                    intro8: "'Show the Real sportsman's spirit'",
                    cricket: "CRICKET",
                    cricketpic: "./images/events/keralothsavam2017/kcricket.jpg",
                    football: "FOOTBALL",
                    footballpic : "./images/events/keralothsavam2017/kfootball.jpg",
                    volleyball: "VOLLEYBALL",
                    volleyballpic : "./images/events/keralothsavam2017/kvolleyball.jpg",
                    results : "RESULTS",
                    resultlist: [
                        {
                            title: "TRACK EVENTS",
                            list: [
                                {
                                    a: "5000m RACE JUNIOR BOYS",
                                    b: "1st Place: KiranKrishna.P.R, KFC",
                                    c: "2nd Place: Vipin.M, Individual",
                                    d: "3rd Place: Sabarish.J, New Bhavana"
                                },
                                {
                                    a: "5000m RACE SENIOR BOYS",
                                    b: "1st Place: Vineeth, New Bhavana",
                                    c: "2nd Place: Sreenath, KFC",
                                    d: "3rd Place: Sudheesh, New Bhavana"
                                },
                                {
                                    a: "200m RACE JUNIOR BOYS",
                                    b: "1st Place: Subin, New Bhavana",
                                    c: "2nd Place: Ramesh.B, KFC",
                                    d: "3rd Place: Shafeer, Friends"
                                },
                                {
                                    a: "200m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Dinesh, KFC",
                                    d: "3rd Place: Sanjay, KFC"
                                },
                                {
                                    a: "1500m RACE JUNIOR BOYS",
                                    b: "1st Place: Vipin.M, Individual",
                                    c: "2nd Place: Binu Prasad, KFC",
                                    d: "3rd Place: Sijin, KFC"
                                },
                                {
                                    a: "1500m RACE SENIOR BOYS",
                                    b: "1st Place: Praveen.V, KFC",
                                    c: "2nd Place: Sanoop, KFC",
                                    d: "3rd Place: Sudeep, New Boys"
                                },
                                {
                                    a: "400m RACE JUNIOR BOYS",
                                    b: "1st Place: BinuPrasad, KFC",
                                    c: "2nd Place: Ajith, KFC",
                                    d: "3rd Place: Muhamed Farvesh, CHM"
                                },
                                {
                                    a: "400m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Praveen.V, KFC",
                                    d: "3rd Place: Arjun, KFC"
                                },
                                {
                                    a: "100m RACE JUNIOR BOYS",
                                    b: "1st Place: Ramesh.B, KFC",
                                    c: "2nd Place: Sujith.S, KFC",
                                    d: "3rd Place: Haridas, Madathil"
                                },
                                {
                                    a: "100m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Dinesh.B, KFC"
                                },
                                {
                                    a: "800m RACE JUNIOR BOYS",
                                    b: "1st Place: Sijin, KFC",
                                    c: "2nd Place: Sivadas.N, Star Arts",
                                    d: "3rd Place: Vipin.M, Individual"
                                },
                                {
                                    a: "800m RACE SENIOR BOYS",
                                    b: "1st Place: Aneesh.P, KFC",
                                    c: "2nd Place: Sreenath, KFC",
                                    d: "3rd Place: Praveen.V, KFC"
                                },
                                {
                                    a:"4x100m RELAY JUNIOR BOYS",
                                    b: "1st Place: KFC",
                                    c: "2nd Place: New Bhavana",
                                    d: "3rd Place: New Boys"
                                },
                                {
                                    a:"4x100m RELAY SENIOR BOYS",
                                    b: "1st Place: KFC",
                                    c: "2nd Place: Star Arts",
                                    d: "3rd Place: Friends Club"
                                }
                            ]
                        },
                        {
                            title: "THROW EVENTS",
                            list : [
                                {
                                    a: "SHOT PUT JUNIOR BOYS",
                                    b: "1st Place: Ramesh.B, KFC",
                                    c: "2nd Place: Aditya Rajesh, KFC",
                                    d: "3rd Place: Abdul Rehman, Yuvadhara"
                                },
                                {
                                    a: "SHOT PUT SENIOR BOYS",
                                    b: "1st Place: Nithin, New Bhavana",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Nithin, Yuvathara"

                                },
                                {
                                    a: "JAVELIN THROW SENIOR BOYS",
                                    b: "1st Place: Nithin, Yuvathara",
                                    c: "2nd Place: Prateesh, Star Arts",
                                    d: "3rd Place: Sainuddheen, Friends Club"

                                },
                                {
                                    a: "JAVELIN THROW JUNIOR BOYS",
                                    b: "1st Place: Pranav.M, Star Arts",
                                    c: "2nd Place: Ajith Prasad, New Bhavana",
                                    d: "3rd Place: Aditya Rajesh, KFC"
                                },
                                {
                                    a: "DISCUSS THROW SENIOR BOYS",
                                    b: "1st Place: Arjun.R.Das, KFC",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Abu Thahir, CHM"
                                },
                                {
                                    a: "DISCUSS THROW JUNIOR BOYS",
                                    b: "1st Place: Sujith.S, KFC",
                                    c: "2nd Place: Ajith Prasad, New Bhavana",
                                    d: "3rd Place: Aditya Rajesh, KFC"
                                }
                            ]
                        },
                        {
                            title: "CRICKET",
                            list: [
                                {
                                    b: "Cancelled due to Damp Pitch and Bad Weather",
                                    c: "Mixed team to be sent for Block Tournament"
                                }
                            ]
                        },
                        {
                            title: "FOOTBALL",
                            list: [
                                {
                                    a: "FIRST ROUND",
                                    b: "LEGENDS-B 0-0 GALAXY FC. LEGENDS-B win on Penalties.",
                                    c: "KFC-B 0-0 MAJESTIC FC. MAJESTIC FC win on Penalties.",
                                    d: "NFC-A 2-0 STAR CLUB",
                                    e: "THIRA-B wins vs EFC. Walk Over",
                                    f: "THIRA-A 0-0 NEW BHAVANA. THIRA-A wins on Penalties.",
                                    g: "RYDERS 1-0 BLUE BOYS(FRIENDS)"
                                },
                                {
                                    a: "SECOND ROUND",
                                    b: "LEGENDS-A 1-0 MADATHIL FC.",
                                    c: "YUVADHARA 0-0 LEGENDS-B. YUVADHARA wins on Penalties.",
                                    d: "MAJESTCIC FC 0-0 NFC-A. NFC-A wins on Penalties.",
                                    e: "NEW BOYS 0-0 CHM. NEW BOYS wins in Penalties.",
                                    f: "SEVENS wins vs VFC. Walk over.",
                                    g: "THIRA-B wins vs THIRA-A. Walk over.",
                                    h: "RYDERS 0-0 CFC. CFC wins in Penalties.",
                                    i: "NFC-B 0-1 KFC"
                                },
                                {
                                    a: "QUARTER FINALS",
                                    b: "LEGENDS-A 1-0 YUVADHARA",
                                    c: "NFC 0-0 NEW BOYS. NFC wins in Penalties.",
                                    d: "SEVENS 0-0 THIRA-B. SEVENS wins in Penalties.",
                                    e: "KFC 0-0 CFC. CFC wins in Penalties."
                                },
                                {
                                    a: "SEMI FINALS",
                                    b: "LEGENDS-A 1-0 NFC.",
                                    c: "SEVENS 0-3 CFC"
                                },
                                {
                                    a: "FINALE",
                                    b: "LEGENDS-A 0-0 CFC. CFC wins in Penalties.",
                                    c: "CFC are the KERALOTSAVAM 2017 FOOTBALL CHAMPIONS !!!"
                                }


                            ]
                        },
                        {
                            title: "VOLLEYBALL",
                            list: [
                                {
                                    a: "FIRST ROUND",
                                    b: "KFC wins vs FRIENDS-A."
                                },
                                {
                                    a: "SECOND ROUND",
                                    b: "CHEATERS-ETR wins vs NFC.",
                                    c: "KFC wins vs CHANGAYIES.",
                                    d: "CHM wins vs FRIENDS-B",
                                    e: "CHALLENGERS wins vs MST"
                                },
                                {
                                    a: "SEMI FINALS",
                                    b: "KFC wins vs CHEATERS-ETR",
                                    c: "CHALLENGERS wins vs CHM"
                                },
                                {
                                    a: "FINALE",
                                    b: "KFC wins vs CHALLENGERS",
                                    c: "KFC aka KAKKAYUR UNITED are the KERALOTSAVAM 2017 VOLLEYBALL CHAMPIONS !!!"
                                }
                            ]
                        },
                        {
                            title: "ATHLETICS CHAMPIONSHIP",
                            list: [
                                {
                                    a: "KFC aka KAKKAYUR UNITED are the KERALOTSAVAM 2017 OVERALL ATHLETIC CHAMPIONS !!!"
                                }
                            ]
                        }
                    ],
                    gallery: "PHOTO GALLERY",
                    photolist: [
                        {
                            img: "./images/events/keralothsavam2017/1.jpg",
                            desc1: "KERALOTSAVAM 2017 - NOTICE",
                            desc2: "Propoganda and Schedule of the Events."
                        },
                        {
                            img: "./images/events/keralothsavam2017/inaug1.jpg",
                            desc1: "KERALOTSAVAM 2017 - INAUGRAL FUNCTION",
                            desc2: "Inaugrated by: Smt. Saratha Thulasidas, Hon'ble Kollengode Block Panchayat President."
                        },
                        {
                            img: "./images/events/keralothsavam2017/inaug2.jpg",
                            desc1: "KERALOTSAVAM 2017 - INAUGRAL FUNCTION",
                            desc2: "Addressing by: Sri. G.Krishnaprasad, Hon'ble Koduvayur Grama Panchayat President."
                        },
                        {
                            img: "./images/events/keralothsavam2017/2.jpg",
                            desc1: "KERALOTSAVAM 2017 - THE GAME BEGINS",
                            desc2: "The Ground And the Crowd."
                        },
                        {
                            img: "./images/events/keralothsavam2017/3.jpg",
                            desc1: "KERALOTSAVAM 2017 - VOLLEYBALL",
                            desc2: "The Volley Court surrounded by crowd."
                        },
                        {
                            img: "./images/events/keralothsavam2017/4.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "The View from the top."
                        },
                        {
                            img: "./images/events/keralothsavam2017/5.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "The Fight is Intense."
                        },
                        {
                            img: "./images/events/keralothsavam2017/6.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "So who gets the ball?."
                        }
                    ]
                },

                majesticfc7sdec2017: {
                    coverpic: "./images/events/majesticfc7sdec2017/cover.jpg",
                    thumb: "./images/events/majesticfc7sdec2017/thumb.jpg",
                    pagetitle: "MAJESTIC FC 7's DEC 2017",
                    held: "HELD AT GHSS KODUVAYUR GROUND ON 9, 10 DECEMBER 2017...",
                    results: {
                        title: "RESULTS",
                        resultlist: [
                            {
                                a: "TOTAL TEAMS PARTICIPATED : 22",
                                b: "",
                                c: "SEMI FINALS",
                                d: "ESFC PANDIYODE 2 - 0 PFC PUTHUR. ESFC TO THE FINALS.",
                                e: "AL FIDHA PALAKKAD 1 - 1 PFC PPERUVEMBU. AL FIDHA WINS 5-4 IN PENALTIES. AL FIDHA INTO THE FINALS.",
                                f: "",
                                g: "FINALS",
                                h: "AL FIDHA PALAKKAD 2 - 1 ESFC PANDIYODE. AL FIDHA WINS.",
                                i: "",
                                j: "AL FIDHA PALAKKAD ARE THE CHAMPIONS !!!",
                                k: "",
                                m: "BEST PLAYER: 'AACHI' OF AL FIDHA PALAKKAD.",
                                n: "",
                                o: "CONGRAGULATIONS TO THE WINNERS...",
                                p: "A BIG THANK YOU FOR ALL THE CHIEF GUESTS, TEAMS, PLAYERS, HIGH SCHOOL AUTHORITY, ALL THE VOLUNTEERS AND THE PASSIONATE CROWD..."
                            }
                        ]
                    },
                    gallery: {
                        title: "PHOTO GALLERY",
                        photolist: [
                            {
                                img: "./images/events/majesticfc7sdec2017/0.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/1.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/2.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/3.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/4.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/5.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/6.jpg"
                            }
                        ]
                    }
                }
            }
        },
        ours: {
            title: "MYKODUVAYUR",
            list: {

                mobilephotographycontest2017: {
                    pagetitle: "MOBILE PHOTOGRAPHY CONTEST 2017",
                    cover: "./images/events/contest2017/contest2017cover.jpg",
                    thumb: "./images/events/contest2017/contest2017thumb.jpg",
                    pic: "./images/events/contest2017/pic.jpg",
                    intro: {
                        title: "INTRODUCTION",
                        info: "Team BehindBrains organised a Mobile Photography Contest in connection to the announcement of their venture of a web platform - MYKODUVAYUR, during the festive season of Koduvayur Ratholsavam on January 2017."
                    },
                    theme: {
                        title: "THEME : ",
                        info: "KODUVAYUR RATHOLSAVAM"
                    },
                    from: {
                        title: "FROM : ",
                        info: "07 January 2017 (Sat) 7pm"
                    },
                    to: {
                        title: "TO : ",
                        info: "13 January 2017 (Fri) 7pm"
                    },
                    eligibility: {
                        title: "ELIGIBILITY",
                        e1: "People of ANY AGE GROUP can participate in this contest.",
                        e2: "Mobile Cameras of ANY RANGE can be used for this contest.",
                        e3: "Only Photos submitted through EMAIL are considered eligible for the contest.",
                    },
                    rules: {
                        title: "RULES",
                        r1: "Only photos less than 10 MB size shall be submitted for the contest.",
                        r2: "A Maximum of 3 PHOTOS is allowed for 1 PERSON.",
                        r3: "Any Digital Alteration Or Editing done to the Captured Image will result in DISQUALIFICATION.",
                        r4: "The Original Photo Should Be Presented for Verification if announced WINNER."
                    },
                    howtoenter: {
                        title: "HOW TO ENTER",
                        intro1: "Anyone who wish to Participate in this CONTEST should Send the Captured Photo to the following E-MAIL ID – ",
                        intromail: " contest.mykoduvayur@gmail.com ",
                        intro2: "along with following details : ",
                        hte1: "PHOTO CAPTION",
                        hte2: "NAME OF THE PHOTOGRAPHER",
                        hte3: "CONTACT PHONE NO.",
                        hte4: "MOBILE PHONE MODEL",
                        ps: "P.S. ONLY 3 PHOTOS PER E-MAIL/CONTESTANT IS PERMITTED."
                    },
                    judging: {
                        title: "JUDGING",
                        info: "The Submitted Photographs will be judged based on the following criteria:",
                        j1: "QUALITY",
                        j2: "RELEVANCE TO THE THEME",
                        j3: "ORIGINALITY",
                        j4: "CREATIVE ELEMENT",
                        j5: "OVERALL IMPACT"
                    },
                    results: {
                        title: "RESULTS",
                        intro: "Winners of this Contest was announced on 23 February 2017, Sunday during the Official Preview of our website - ",
                        introsite: "www.mykoduvayur.in",
                        first: {
                            title: "WINNER",
                            pic: "./images/events/contest2017/1.jpg",
                            name: "MIDHUN.P.V",
                            certificate: "./images/events/contest2017/first.jpg",
                            caption: ""
                        },
                        second: {
                            title: "RUNNER UP",
                            pic: "./images/events/contest2017/2.jpg",
                            name: "SUJESH.K.APPU",
                            certificate: "./images/events/contest2017/second.jpg",
                            caption: ""
                        }
                    },
                    gallery: {
                        title: "SELECTED BEST PHOTOS",
                        info: "",
                        list: [
                            {
                                pic: "./images/events/contest2017/3.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/4.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/5.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/6.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/7.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/8.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/9.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/10.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/11.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/12.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/13.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/14.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/15.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/16.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/17.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/18.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/19.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/20.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/21.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/22.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/23.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/24.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/25.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/26.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/27.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/28.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/29.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/30.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/31.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/32.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/33.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/34.jpg",
                                caption: ""
                            }
                        ]
                    },
                    officialpreview: {
                        title: "OFFICIAL ANNOUNCEMENT",
                        info: "Prizes were distributed and the Official Preview of the Website was announced on 23 February 2017 at Althara, Keralapuram Gramam, Koduvayur.",
                        chiefguest: {
                            title: "CHIEF GUEST",
                            info: "The session was headed and prizes were distributed by our beloved Gopal Sir, who was on our side right from the beginning and provided us with his support.",
                        },
                        list: [
                            {
                                pic: "./images/events/contest2017/preview1.jpg"
                            },
                            {
                                pic: "./images/events/contest2017/preview2.jpg"
                            }
                        ]
                    }
                }

            }
        }

    };

    $rootScope.maldata.eventpage = {
        intro: {
            title: "ആമുഖം",
            para1: "നമ്മുടെ തിരക്കുപിടിച്ച ജീവിതം കാരണം നാം കാണുന്നതും പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്നതുമായ നിരവധി സംഭവങ്ങളിൽ നമുക്ക് എത്താൻ പറ്റാതെ വന്നേക്കാം. കൂടാതെ, നാം ഭാഗമായിരുന്നവയുടെ ഓർമ്മകൾ വീണ്ടും കാണാനും വായിക്കാനും കഴിയുന്നത് നമുക്ക് അതിയായ സന്തോഷം നൽകും. ഈ സ്ഥലത്ത് ചുറ്റുമുള്ള എല്ലാ പ്രധാന സംഭവങ്ങളും ഈ പേജ് ഉപയോഗിച്ച് ഞങ്ങൾ നിങ്ങളിലേക്ക് എത്തിക്കുന്നു. അനുഭവം ആസ്വദിക്കൂ..."
        },
        general: {
            title: "പൊതു പരിപാടികൾ",
            list: [
                {

                }
            ]
        },
        festive: {
            title: "ആഘോഷങ്ങൾ",
            list: {
                    ganeshothsavam2017: {
                        pagetitle: "ഗണേശോത്സവം 2017",
                        cover: "./images/events/ganeshothsavam2017/cover.jpg",
                        thumb: "./images/events/ganeshothsavam2017/thumb.jpg",
                        gallery: {
                            title: "PHOTO ALBUM",
                            info: "",
                            list: [
                                {
                                    pic: "./images/events/ganeshothsavam2017/1.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/2.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/3.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/4.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/5.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/6.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/7.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/8.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/9.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/10.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/11.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/12.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/13.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/14.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/15.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/16.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/17.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/18.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/19.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/20.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/21.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/22.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/23.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/24.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/25.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/26.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/27.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/28.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/29.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/30.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/31.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/32.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/33.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/34.jpg",
                                    caption: ""
                                }
                            ]
                        }
                    },

                    thaipooyam2018: {
                        pagetitle: "തൈപ്പൂയ്യം 2018",
                        cover: "./images/events/thaipooyam2018/cover.jpg",
                        thumb: "./images/events/thaipooyam2018/thumb.jpg",
                        gallery: {
                            title: "PHOTO ALBUM",
                            info: "",
                            list: [
                                {
                                    pic: "./images/events/thaipooyam2018/1.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/2.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/3.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/4.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/5.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/6.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/7.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/8.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/9.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/10.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/11.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/12.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/13.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/14.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/thaipooyam2018/15.jpg",
                                    caption: ""
                                }
                            ]
                        }
                    }
            }
        },
        artsnsports: {
            title: "കലാ - കായികം",
            list: {

                keralotsavam2017 : {
                    coverpic:  "./images/events/keralothsavam2017/klogo.jpg",
                    thumb:  "./images/events/keralothsavam2017/kthumbs.jpg",
                    pagetitle: "കേരളോത്സവം 2017",
                    title: "സ്വാഗതം",
                    intro1: "കൊടുവായൂരിലെ കരുത്തരായ 22 ടീമിന്റെ ആവേശകരമായ 21 ഫുട്ബോൾ മത്സരങ്ങൾ ...",
                    intro2: "തീപാറുന്ന കളികൾ കാഴ്ചവയ്ക്കാൻ 9 ക്രിക്കറ്റ് ടീമുകൾ ( സ്റ്റിച്ച് ബോൾ ക്രിക്കറ്റ് ടൂർണമെന്റ് )...",
                    intro3: "വായുവിൽ ഉയരുന്ന പന്തിന്റെ ഒപ്പം കാണികളെ ആവേശമൂർച്ചയിൽ എത്തിക്കുന്ന 8 ടീമിന്റെ വോളീബോൾ ടൂർണമെന്റ് ...",
                    intro4: "സെക്കൻഡ്കളുടെ വ്യത്യാസത്തിൽ ഫിനിഷിങ് ലൈനിലെ ഫോട്ടോഫിനിഷ്‌കൾ കാഴ്ച വെക്കുന്ന അത്ലറ്റിക്‌സ് ഇനങ്ങൾ ....",
                    intro5: "കൂടാതെ മറ്റു അനവധി മത്സരങ്ങൾ...",
                    intro6: "ഇതു ഞങ്ങളുടെ ഉത്സവം , കൊടുവായൂരിലെ യുവാക്കൾ ഒന്നടങ്കം ഏറ്റെടുത്തു നടത്തുന്ന കായിക മാമാങ്കം കേരളോത്സവം ...",
                    intro7: "2017 കേരളോത്സവം , കൊടുവായൂർ പഞ്ചായത്ത് Sep 29,30 & Oct 1...",
                    intro8: "'ഷോ ദി റിയൽ സ്പോർട്സ്മാൻ സ്പിരിറ്റ് '",
                    cricket: "ക്രിക്കറ്റ്",
                    cricketpic: "./images/events/keralothsavam2017/kcricket.jpg",
                    football: "ഫുട്ബോൾ",
                    footballpic : "./images/events/keralothsavam2017/kfootball.jpg",
                    volleyball: "വോളീബോൾ",
                    volleyballpic : "./images/events/keralothsavam2017/kvolleyball.jpg",
                    results : "ഫലങ്ങൾ",
                    resultlist: [
                        {
                            title: "TRACK EVENTS",
                            list: [
                                {
                                    a: "5000m RACE JUNIOR BOYS",
                                    b: "1st Place: KiranKrishna.P.R, KFC",
                                    c: "2nd Place: Vipin.M, Individual",
                                    d: "3rd Place: Sabarish.J, New Bhavana"
                                },
                                {
                                    a: "5000m RACE SENIOR BOYS",
                                    b: "1st Place: Vineeth, New Bhavana",
                                    c: "2nd Place: Sreenath, KFC",
                                    d: "3rd Place: Sudheesh, New Bhavana"
                                },
                                {
                                    a: "200m RACE JUNIOR BOYS",
                                    b: "1st Place: Subin, New Bhavana",
                                    c: "2nd Place: Ramesh.B, KFC",
                                    d: "3rd Place: Shafeer, Friends"
                                },
                                {
                                    a: "200m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Dinesh, KFC",
                                    d: "3rd Place: Sanjay, KFC"
                                },
                                {
                                    a: "1500m RACE JUNIOR BOYS",
                                    b: "1st Place: Vipin.M, Individual",
                                    c: "2nd Place: Binu Prasad, KFC",
                                    d: "3rd Place: Sijin, KFC"
                                },
                                {
                                    a: "1500m RACE SENIOR BOYS",
                                    b: "1st Place: Praveen.V, KFC",
                                    c: "2nd Place: Sanoop, KFC",
                                    d: "3rd Place: Sudeep, New Boys"
                                },
                                {
                                    a: "400m RACE JUNIOR BOYS",
                                    b: "1st Place: BinuPrasad, KFC",
                                    c: "2nd Place: Ajith, KFC",
                                    d: "3rd Place: Muhamed Farvesh, CHM"
                                },
                                {
                                    a: "400m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Praveen.V, KFC",
                                    d: "3rd Place: Arjun, KFC"
                                },
                                {
                                    a: "100m RACE JUNIOR BOYS",
                                    b: "1st Place: Ramesh.B, KFC",
                                    c: "2nd Place: Sujith.S, KFC",
                                    d: "3rd Place: Haridas, Madathil"
                                },
                                {
                                    a: "100m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Dinesh.B, KFC"
                                },
                                {
                                    a: "800m RACE JUNIOR BOYS",
                                    b: "1st Place: Sijin, KFC",
                                    c: "2nd Place: Sivadas.N, Star Arts",
                                    d: "3rd Place: Vipin.M, Individual"
                                },
                                {
                                    a: "800m RACE SENIOR BOYS",
                                    b: "1st Place: Aneesh.P, KFC",
                                    c: "2nd Place: Sreenath, KFC",
                                    d: "3rd Place: Praveen.V, KFC"
                                },
                                {
                                    a:"4x100m RELAY JUNIOR BOYS",
                                    b: "1st Place: KFC",
                                    c: "2nd Place: New Bhavana",
                                    d: "3rd Place: New Boys"
                                },
                                {
                                    a:"4x100m RELAY SENIOR BOYS",
                                    b: "1st Place: KFC",
                                    c: "2nd Place: Star Arts",
                                    d: "3rd Place: Friends Club"
                                }
                            ]
                        },
                        {
                            title: "THROW EVENTS",
                            list : [
                                {
                                    a: "SHOT PUT JUNIOR BOYS",
                                    b: "1st Place: Ramesh.B, KFC",
                                    c: "2nd Place: Aditya Rajesh, KFC",
                                    d: "3rd Place: Abdul Rehman, Yuvadhara"
                                },
                                {
                                    a: "SHOT PUT SENIOR BOYS",
                                    b: "1st Place: Nithin, New Bhavana",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Nithin, Yuvathara"

                                },
                                {
                                    a: "JAVELIN THROW SENIOR BOYS",
                                    b: "1st Place: Nithin, Yuvathara",
                                    c: "2nd Place: Prateesh, Star Arts",
                                    d: "3rd Place: Sainuddheen, Friends Club"

                                },
                                {
                                    a: "JAVELIN THROW JUNIOR BOYS",
                                    b: "1st Place: Pranav.M, Star Arts",
                                    c: "2nd Place: Ajith Prasad, New Bhavana",
                                    d: "3rd Place: Aditya Rajesh, KFC"
                                },
                                {
                                    a: "DISCUSS THROW SENIOR BOYS",
                                    b: "1st Place: Arjun.R.Das, KFC",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Abu Thahir, CHM"
                                },
                                {
                                    a: "DISCUSS THROW JUNIOR BOYS",
                                    b: "1st Place: Sujith.S, KFC",
                                    c: "2nd Place: Ajith Prasad, New Bhavana",
                                    d: "3rd Place: Aditya Rajesh, KFC"
                                }
                            ]
                        },
                        {
                            title: "CRICKET",
                            list: [
                                {
                                    b: "Cancelled due to Damp Pitch and Bad Weather",
                                    c: "Mixed team to be sent for Block Tournament"
                                }
                            ]
                        },
                        {
                            title: "FOOTBALL",
                            list: [
                                {
                                    a: "FIRST ROUND",
                                    b: "LEGENDS-B 0-0 GALAXY FC. LEGENDS-B win on Penalties.",
                                    c: "KFC-B 0-0 MAJESTIC FC. MAJESTIC FC win on Penalties.",
                                    d: "NFC-A 2-0 STAR CLUB",
                                    e: "THIRA-B wins vs EFC. Walk Over",
                                    f: "THIRA-A 0-0 NEW BHAVANA. THIRA-A wins on Penalties.",
                                    g: "RYDERS 1-0 BLUE BOYS(FRIENDS)"
                                },
                                {
                                    a: "SECOND ROUND",
                                    b: "LEGENDS-A 1-0 MADATHIL FC.",
                                    c: "YUVADHARA 0-0 LEGENDS-B. YUVADHARA wins on Penalties.",
                                    d: "MAJESTCIC FC 0-0 NFC-A. NFC-A wins on Penalties.",
                                    e: "NEW BOYS 0-0 CHM. NEW BOYS wins in Penalties.",
                                    f: "SEVENS wins vs VFC. Walk over.",
                                    g: "THIRA-B wins vs THIRA-A. Walk over.",
                                    h: "RYDERS 0-0 CFC. CFC wins in Penalties.",
                                    i: "NFC-B 0-1 KFC"
                                },
                                {
                                    a: "QUARTER FINALS",
                                    b: "LEGENDS-A 1-0 YUVADHARA",
                                    c: "NFC 0-0 NEW BOYS. NFC wins in Penalties.",
                                    d: "SEVENS 0-0 THIRA-B. SEVENS wins in Penalties.",
                                    e: "KFC 0-0 CFC. CFC wins in Penalties."
                                },
                                {
                                    a: "SEMI FINALS",
                                    b: "LEGENDS-A 1-0 NFC.",
                                    c: "SEVENS 0-3 CFC"
                                },
                                {
                                    a: "FINALE",
                                    b: "LEGENDS-A 0-0 CFC. CFC wins in Penalties.",
                                    c: "CFC are the KERALOTSAVAM 2017 FOOTBALL CHAMPIONS !!!"
                                }


                            ]
                        },
                        {
                            title: "VOLLEYBALL",
                            list: [
                                {
                                    a: "FIRST ROUND",
                                    b: "KFC wins vs FRIENDS-A."
                                },
                                {
                                    a: "SECOND ROUND",
                                    b: "CHEATERS-ETR wins vs NFC.",
                                    c: "KFC wins vs CHANGAYIES.",
                                    d: "CHM wins vs FRIENDS-B",
                                    e: "CHALLENGERS wins vs MST"
                                },
                                {
                                    a: "SEMI FINALS",
                                    b: "KFC wins vs CHEATERS-ETR",
                                    c: "CHALLENGERS wins vs CHM"
                                },
                                {
                                    a: "FINALE",
                                    b: "KFC wins vs CHALLENGERS",
                                    c: "KFC aka KAKKAYUR UNITED are the KERALOTSAVAM 2017 VOLLEYBALL CHAMPIONS !!!"
                                }
                            ]
                        },
                        {
                            title: "ATHLETICS CHAMPIONSHIP",
                            list: [
                                {
                                    a: "KFC aka KAKKAYUR UNITED are the KERALOTSAVAM 2017 OVERALL ATHLETIC CHAMPIONS !!!"
                                }
                            ]
                        }
                    ],
                    gallery: "PHOTO GALLERY",
                    photolist: [
                        {
                            img: "./images/events/keralothsavam2017/1.jpg",
                            desc1: "KERALOTSAVAM 2017 - NOTICE",
                            desc2: "Propoganda and Schedule of the Events."
                        },
                        {
                            img: "./images/events/keralothsavam2017/inaug1.jpg",
                            desc1: "KERALOTSAVAM 2017 - INAUGRAL FUNCTION",
                            desc2: "Inaugrated by: Smt. Saratha Thulasidas, Hon'ble Kollengode Block Panchayat President."
                        },
                        {
                            img: "./images/events/keralothsavam2017/inaug2.jpg",
                            desc1: "KERALOTSAVAM 2017 - INAUGRAL FUNCTION",
                            desc2: "Addressing by: Sri. G.Krishnaprasad, Hon'ble Koduvayur Grama Panchayat President."
                        },
                        {
                            img: "./images/events/keralothsavam2017/2.jpg",
                            desc1: "KERALOTSAVAM 2017 - THE GAME BEGINS",
                            desc2: "The Ground And the Crowd."
                        },
                        {
                            img: "./images/events/keralothsavam2017/3.jpg",
                            desc1: "KERALOTSAVAM 2017 - VOLLEYBALL",
                            desc2: "The Volley Court surrounded by crowd."
                        },
                        {
                            img: "./images/events/keralothsavam2017/4.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "The View from the top."
                        },
                        {
                            img: "./images/events/keralothsavam2017/5.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "The Fight is Intense."
                        },
                        {
                            img: "./images/events/keralothsavam2017/6.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "So who gets the ball?."
                        }
                    ]
                },

                majesticfc7sdec2017: {
                    coverpic: "./images/events/majesticfc7sdec2017/cover.jpg",
                    thumb: "./images/events/majesticfc7sdec2017/thumb.jpg",
                    pagetitle: "MAJESTIC FC 7's DEC 2017",
                    held: "HELD AT GHSS KODUVAYUR GROUND ON 9, 10 DECEMBER 2017...",
                    results: {
                        title: "RESULTS",
                        resultlist: [
                            {
                                a: "TOTAL TEAMS PARTICIPATED : 22",
                                b: "",
                                c: "SEMI FINALS",
                                d: "ESFC PANDIYODE 2 - 0 PFC PUTHUR. ESFC TO THE FINALS.",
                                e: "AL FIDHA PALAKKAD 1 - 1 PFC PPERUVEMBU. AL FIDHA WINS 5-4 IN PENALTIES. AL FIDHA INTO THE FINALS.",
                                f: "",
                                g: "FINALS",
                                h: "AL FIDHA PALAKKAD 2 - 1 ESFC PANDIYODE. AL FIDHA WINS.",
                                i: "",
                                j: "AL FIDHA PALAKKAD ARE THE CHAMPIONS !!!",
                                k: "",
                                m: "BEST PLAYER: 'AACHI' OF AL FIDHA PALAKKAD.",
                                n: "",
                                o: "CONGRAGULATIONS TO THE WINNERS...",
                                p: "A BIG THANK YOU FOR ALL THE CHIEF GUESTS, TEAMS, PLAYERS, HIGH SCHOOL AUTHORITY, ALL THE VOLUNTEERS AND THE PASSIONATE CROWD..."
                            }
                        ]
                    },
                    gallery: {
                        title: "PHOTO GALLERY",
                        photolist: [
                            {
                                img: "./images/events/majesticfc7sdec2017/0.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/1.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/2.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/3.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/4.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/5.jpg"
                            },
                            {
                                img: "./images/events/majesticfc7sdec2017/6.jpg"
                            }
                        ]
                    }
                }

            }

        },
        ours: {
            title: "MYKODUVAYUR",
            list: {
                mobilephotographycontest2017: {
                    pagetitle: "മൊബൈല്‍ ഫോട്ടോഗ്രഫി മത്സരം - 2017",
                    cover: "./images/events/contest2017/contest2017cover.jpg",
                    thumb: "./images/events/contest2017/contest2017thumb.jpg",
                    pic: "./images/events/contest2017/pic.jpg",
                    intro: {
                        title: "INTRODUCTION",
                        info: "Team BehindBrains organised a Mobile Photography Contest in connection to the announcement of their venture of a web platform - MYKODUVAYUR, during the festive season of Koduvayur Ratholsavam on January 2017."
                    },
                    theme: {
                        title: "THEME : ",
                        info: "KODUVAYUR RATHOLSAVAM"
                    },
                    from: {
                        title: "FROM : ",
                        info: "07 January 2017 (Sat) 7pm"
                    },
                    to: {
                        title: "TO : ",
                        info: "13 January 2017 (Fri) 7pm"
                    },
                    eligibility: {
                        title: "ELIGIBILITY",
                        e1: "People of ANY AGE GROUP can participate in this contest.",
                        e2: "Mobile Cameras of ANY RANGE can be used for this contest.",
                        e3: "Only Photos submitted through EMAIL are considered eligible for the contest.",
                    },
                    rules: {
                        title: "RULES",
                        r1: "Only photos less than 10 MB size shall be submitted for the contest.",
                        r2: "A Maximum of 3 PHOTOS is allowed for 1 PERSON.",
                        r3: "Any Digital Alteration Or Editing done to the Captured Image will result in DISQUALIFICATION.",
                        r4: "The Original Photo Should Be Presented for Verification if announced WINNER."
                    },
                    howtoenter: {
                        title: "HOW TO ENTER",
                        intro1: "Anyone who wish to Participate in this CONTEST should Send the Captured Photo to the following E-MAIL ID – ",
                        intromail: " contest.mykoduvayur@gmail.com ",
                        intro2: "along with following details : ",
                        hte1: "PHOTO CAPTION",
                        hte2: "NAME OF THE PHOTOGRAPHER",
                        hte3: "CONTACT PHONE NO.",
                        hte4: "MOBILE PHONE MODEL",
                        ps: "P.S. ONLY 3 PHOTOS PER E-MAIL/CONTESTANT IS PERMITTED."
                    },
                    judging: {
                        title: "JUDGING",
                        info: "The Submitted Photographs will be judged based on the following criteria:",
                        j1: "QUALITY",
                        j2: "RELEVANCE TO THE THEME",
                        j3: "ORIGINALITY",
                        j4: "CREATIVE ELEMENT",
                        j5: "OVERALL IMPACT"
                    },
                    results: {
                        title: "RESULTS",
                        intro: "Winners of this Contest was announced on 23 February 2017, Sunday during the Official Preview of our website - ",
                        introsite: "www.mykoduvayur.in",
                        first: {
                            title: "WINNER",
                            pic: "./images/events/contest2017/1.jpg",
                            name: "MIDHUN.P.V",
                            certificate: "./images/events/contest2017/first.jpg",
                            caption: ""
                        },
                        second: {
                            title: "RUNNER UP",
                            pic: "./images/events/contest2017/2.jpg",
                            name: "SUJESH.K.APPU",
                            certificate: "./images/events/contest2017/second.jpg",
                            caption: ""
                        }
                    },
                    gallery: {
                        title: "SELECTED BEST PHOTOS",
                        info: "",
                        list: [
                            {
                                pic: "./images/events/contest2017/3.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/4.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/5.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/6.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/7.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/8.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/9.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/10.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/11.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/12.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/13.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/14.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/15.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/16.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/17.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/18.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/19.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/20.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/21.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/22.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/23.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/24.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/25.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/26.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/27.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/28.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/29.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/30.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/31.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/32.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/33.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/34.jpg",
                                caption: ""
                            }
                        ]
                    },
                    officialpreview: {
                        title: "OFFICIAL ANNOUNCEMENT",
                        info: "Prizes were distributed and the Official Preview of the Website was announced on 23 February 2017 at Althara, Keralapuram Gramam, Koduvayur.",
                        chiefguest: {
                            title: "CHIEF GUEST",
                            info: "The session was headed and prizes were distributed by our beloved Gopal Sir, who was on our side right from the beginning and provided us with his support.",
                        },
                        list: [
                            {
                                pic: "./images/events/contest2017/preview1.jpg"
                            },
                            {
                                pic: "./images/events/contest2017/preview2.jpg"
                            }
                        ]
                    }
                }
            }
        }

    };


    $rootScope.dataSelected = $rootScope.engdata ;

}
]);



// create the controller and inject Angular's $scope
mykdrApp.controller('mainController', function($rootScope, $scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    document.body.scrollTop = 0;

    // inject rootScope variables
    $rootScope.fbloader = true;



    $rootScope.closed = function() {
        var z= document.getElementById("mymenuglyph");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
        var y= document.getElementById("closenav");
        y.style.display="none";
    };

    $rootScope.opened = function() {
        var z= document.getElementById("closenav");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
        var y= document.getElementById("mymenuglyph");
        y.style.display="none";
    };

    $rootScope.eng = function() {

        var x= document.getElementById("english");
        var y= document.getElementById("malayalam");

        x.style.backgroundColor = "#34495E";
        x.style.color = "#FF6347";

        y.style.color = "#5b3930";
        y.style.background = "none";



        var mm = window.matchMedia("(max-width:1080px)");
        if(mm.matches) {
            $rootScope.closed();
        }

        if($rootScope.langChange === true) {
            var w = document.getElementById("alertlang");
            w.style.display = "block";
        }

        $rootScope.myLang = "ENGLISH";
        $rootScope.dataSelected = $rootScope.engdata ;



    };

    $rootScope.mal = function() {

        var y= document.getElementById("english");
        var x= document.getElementById("malayalam");

        x.style.backgroundColor = "#34495E";
        x.style.color = "#FF6347";

        y.style.color = "#5b3930";
        y.style.background = "none";


        var mml = window.matchMedia("(max-width:1080px)");
        if(mml.matches) {
            $rootScope.closed();
        }

        if($rootScope.langChange === true) {
            var w = document.getElementById("alertlang");
            w.style.display = "block";
        }

        $rootScope.myLang = " മലയാളം";
        $rootScope.dataSelected = $rootScope.maldata;

    };

    $rootScope.changetoeng = function () {

        $rootScope.langChange=true;
        $rootScope.eng();

    };
    $rootScope.changetomal = function () {

        $rootScope.langChange=true;
        $rootScope.mal();

    };


    if( $rootScope.myLang === "ENGLISH") {
        $rootScope.eng();
    }
    else {
        $rootScope.mal();
    }

    $rootScope.alertClose = function() {

        var x = document.getElementById("alertlang");
        x.style.display = "none";

        $rootScope.langChange = false;
    };

    $rootScope.menuload = function() {

        var x = document.getElementById("alertlang");
        x.style.display = "none";

        $rootScope.langChange = false;

    };


});

mykdrApp.controller('homeController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';
    

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

    // alert($scope.message);


});

mykdrApp.controller('localityController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    $scope.kdrMapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjyFs7nzkwdQ9YhT1AeALSYEeGEBbFpuQ";

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

    $scope.myMap = function() {
        var mapProp= {
            center: new google.maps.LatLng(10.678849, 76.646882),
            zoom:14
        };
        var map = new google.maps.Map(document.getElementById("kdrmap"),mapProp);

    };
    $scope.myMap();


});

mykdrApp.controller('aboutController', function($rootScope, $scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }


});

mykdrApp.controller('servicesController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

});

mykdrApp.controller('cultureController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

});

mykdrApp.controller('eventsController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

});

mykdrApp.controller('trendingController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';



    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

    $scope.news = function() {

        var z = document.getElementById("news");
        z.style.display = "block";

        var w = document.getElementById("articles");
        w.style.display = "none";

        var x = document.getElementById("pictures");
        x.style.display = "none";

        var y = document.getElementById("videos");
        y.style.display = "none";

    };

    $scope.articles = function() {

        var w = document.getElementById("news");
        w.style.display = "none";

        var z = document.getElementById("articles");
        z.style.display = "block";

        var x = document.getElementById("pictures");
        x.style.display = "none";

        var y = document.getElementById("videos");
        y.style.display = "none";

    };

    $scope.pictures = function() {

        var w = document.getElementById("news");
        w.style.display = "none";

        var x = document.getElementById("articles");
        x.style.display = "none";

        var z = document.getElementById("pictures");
        z.style.display = "block";

        var y = document.getElementById("videos");
        y.style.display = "none";
    };

    $scope.videos = function() {

        var w = document.getElementById("news");
        w.style.display = "none";

        var x = document.getElementById("articles");
        x.style.display = "none";

        var y = document.getElementById("pictures");
        y.style.display = "none";

        var z = document.getElementById("videos");
        z.style.display = "block";

    };

});

mykdrApp.controller('emergencyController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';


    // alert("hi");

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

});