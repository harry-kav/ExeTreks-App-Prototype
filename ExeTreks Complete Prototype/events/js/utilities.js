//Adds the loading spinner to the app
function setLoading()
{
  var loading = '<div id="loadingSpinner"><b>Loading...</b> <span class="fa fa-spinner fa-spin fa-5x"></span></div>' ;
  document.getElementById("eventContent").innerHTML = loading;
  feed = "events" ;
  window.setTimeout(loadEvents, 1000);
  console.log("loading...") ;
}

//Render the data
var items = [
  {title: "Carroll College", 
  eventLocation: "<a href = 'https://www.google.com/maps/place/Carroll+College/@46.6007369,-112.0408774,17z/data=!3m1!4b1!4m5!3m4!1s0x534354e48c4b2fa9:0x4d7ce8fe207f0362!8m2!3d46.6007369!4d-112.0386887'>Montana, USA</a>",
  image: "<img src = 'carrollcollege.jpg' alt = 'Image of Carroll College' width = '100%' height = '100%'>", 
  description: "<a href = 'https://www.carroll.edu/'>Uni website</a>", 
  travelDocs: "<a href = 'https://uk.usembassy.gov/covid-19-coronavirus-information/'> Click for travel documentation requirements </a>", 
  covidRisk: "<a href = 'https://www.nytimes.com/interactive/2021/us/montana-covid-cases.html'>Medium- 66 average daily cases, >100,000 total cases</a>", 
  zooDiseases: "COVID-19", 
  vecDiseases: "<a href = 'https://dphhs.mt.gov/Portals/85/publichealth/documents/CDEpi/DiseasesAtoZ/Vectorborne/vectorbornediseases20032018infographicADA.pdf'>Tickborne Disease and Mosquito Disease </a>", 
  comDiseases: "<a href = 'https://dphhs.mt.gov/Portals/85/publichealth/documents/CDEpi/DiseasesAtoZ/influenza/MontanaInfluenzaSummary20192020.pdf'>Influenza</a>", 
  climate: "Short summers, temps between -11°C and 29°C, <a href = 'https://weather.com/forecast/allergy/l/bac8c4a7e5017ea7bd5312344a6720fc9c7e766085f2ca2f749626d87715b491'>Allergy forecast</a>", 
  envFactors: "7 people per square mile",
  othRisks: "N/A",
  othAdvice: "N/A",
  rep: "Contact a rep: +44 1632 960729" },

  {title: "Universidad de La Sabana", 
  eventLocation: "<a href = 'https://www.google.com/maps/place/Universidad+de+La+Sabana/@4.8615787,-74.0325368,15z/data=!4m2!3m1!1s0x0:0x590e68a0f80af0a4?sa=X&ved=2ahUKEwiujYSuiIjxAhWjEWMBHR_FCKgQ_BIwFHoECEwQBQ'>Chía, Cundinamarca, Columbia, South America</a> ",
  image: "<img src = 'sabana.jpg' alt = 'Universidad de La Sabana' width = '100%' height = '100%'>", 
  description: "<a href = 'https://www.unisabana.edu.co/'>Uni website</a>", 
  travelDocs: "<a href = 'https://travelhealthpro.org.uk/country/53/colombia'> Click for travel documentation requirements </a>", 
  covidRisk: "<a href = 'https://covid19.who.int/region/amro/country/co'>High- 2000 average daily cases, >100,000 total cases</a>", 
  zooDiseases: "COVID-19", 
  vecDiseases: "<a href = 'https://www.fitfortravel.nhs.uk/destinations/south-america-antarctica/colombia'>Zika, Yellow Fever, Malaria, Rabies </a>", 
  comDiseases: "<a href = 'https://www.cdc.gov/diphtheria/index.html#:~:text=Diphtheria%20is%20a%20serious%20infection,and%20adults%20to%20prevent%20diphtheria.'>Diptheria</a>", 
  climate: "Tropical, average temperature of 27°C. Severe temperature shocks, <a href = 'https://www.wunderground.com/health/co/chipa?cm_ven=localwx_moduv'>Allergy forecast</a>", 
  envFactors: "Lots of areas of high altitude. If at high altitude, take time to adjust and avoid altitude sickness",
  othRisks: "Poor water quality",
  othAdvice: "N/A",
  rep: "Contact a rep: +44 1632 960729" },

  {title: "Queensland University of Technology", 
  eventLocation: "<a href = 'https://www.google.com/maps/place/QUT+Gardens+Point+Campus/@-27.477617,153.0302635,15z/data=!4m2!3m1!1s0x0:0xaeb9c00d1ef00171?sa=X&ved=2ahUKEwitp9q1oorxAhXUTMAKHU-rAbIQ_BIwHHoECFUQBQ'>Brisbane, Australia</a> ",
  image: "<img src = 'queensland.jpg' alt = 'Queensland University of Technology' width = '100%' height = '100%'>", 
  description: "<a href = 'https://www.qut.edu.au/'>Uni website</a>", 
  travelDocs: "<a href = 'https://www.gov.uk/foreign-travel-advice/australia/entry-requirements');'> Click for travel documentation requirements </a>", 
  covidRisk: "<a href = 'https://www.australia.gov.au/'>Low- <2 cases per week</a>", 
  zooDiseases: "<a href = 'https://www1.health.gov.au/internet/main/publishing.nsf/Content/cda-cdi3601a11.html'>COVID-19, Anthrax, Australian Bat Lyssavirus or Lyssavirus (unspecified) infection, Brucellosis, Leptospirosis, Ornithosis, Q fever, and Tularaemia are the zoonotic diseases present, but they have a low prevalence (532 cases)</a> ", 
  vecDiseases: "<a href = 'https://www1.health.gov.au/internet/main/publishing.nsf/Content/ohp-rabies-consumer-info.html'>Rabies, Yellow Fever, Japanese Encephalitis- vaccinations recommended for all </a>", 
  comDiseases: "<a href = 'https://www.betterhealth.vic.gov.au/health/HealthyLiving/immunisation-dtp-polio-hep-b-and-hib'>Hepatitis B, Tetanus- vaccinations are recommended</a>", 
  climate: "AQI 30 Temperature averages between 11 and 21 degrees, 145 people per km2, severe weather warning for damaging wind, <a href = 'https://www.accuweather.com/en/au/brisbane/24741/allergies-weather/24741'>Allergy forecast</a>", 
  envFactors: "Be wary of extreme winds",
  othRisks: "N/A",
  othAdvice: "N/A",
  rep: "Contact a rep: +44 1632 960729" },

  {title: "University of Auckland", 
  eventLocation: "<a href = 'https://www.google.com/maps/place/The+University+of+Auckland/@-36.8523378,174.7691073,15z/data=!4m2!3m1!1s0x0:0xbd49f61f758a9e5b?sa=X&ved=2ahUKEwj3na_7worxAhXfD2MBHYI9AK0Q_BIwG3oECFAQBQ'>Auckland, New Zealand</a> ",
  image: "<img src = 'auckland.jpg' alt = 'Auckland' width = '100%' height = '100%'>", 
  description: "<a href = 'https://www.auckland.ac.nz/en.html'>Uni website</a>", 
  travelDocs: "<a href = 'https://www.gov.uk/foreign-travel-advice/new-zealand/entry-requirements');'> Click for travel documentation requirements </a>", 
  covidRisk: "<a href = 'https://covid19.who.int/region/wpro/country/nz'>Low- <2 cases per week</a>", 
  zooDiseases: "<a href = 'https://covid19.govt.nz/'>COVID-19</a> ", 
  vecDiseases: "N/A", 
  comDiseases: "<a href = 'https://www.betterhealth.vic.gov.au/health/HealthyLiving/immunisation-dtp-polio-hep-b-and-hib'>Hepatitis B, Tetanus- vaccinations are recommended</a>", 
  climate: "AQI 174 (unhealthy), Average temperature of 15.5 degrees Celsius, 1210 people per km2, <a href = 'https://www.accuweather.com/en/nz/auckland/252066/allergies-weather/252066'>Allergy forecast</a>", 
  envFactors: "Be wary of extreme winds",
  othRisks: "Asthma sufferers are at greater risk of attacks",
  othAdvice: "N/A",
  rep: "Contact a rep: +44 1632 960729" },

  {title: "Venice International University", 
  eventLocation: "<a href = 'https://www.google.com/maps/place/Venice+International+University/@45.4198542,12.3565135,15z/data=!4m2!3m1!1s0x0:0x51b5ce7c280270f2?sa=X&ved=2ahUKEwiworK2xYrxAhXVmFwKHT9NA2QQ_BIwHnoECFUQBQ'>Venice, Italy</a> ",
  image: "<img src = 'venice.jpg' alt = 'venice' width = '100%' height = '100%'>", 
  description: "<a href = 'https://www.univiu.org/'>Uni website</a>", 
  travelDocs: "<a href = 'https://www.gov.uk/foreign-travel-advice/italy/entry-requirements');'> Click for travel documentation requirements </a>", 
  covidRisk: "<a href = 'https://covid19.who.int/region/euro/country/it'>Medium- >2000 cases per week</a>", 
  zooDiseases: "<a href = 'https://www.statista.com/topics/6061/coronavirus-covid-19-in-italy/'>COVID-19</a> ", 
  vecDiseases: "<a href = 'https://www.nhs.uk/conditions/tick-borne-encephalitis/'>Tickborne Encephalitis and Rabies- vaccinations recommended</a>", 
  comDiseases: "<a href = 'https://www.betterhealth.vic.gov.au/health/HealthyLiving/immunisation-dtp-polio-hep-b-and-hib'>Tetanus- vaccination recommended</a>", 
  climate: "AQI 27, Average temperature is 13 degrees, 620 people per km2, <a href = 'https://weather.com/en-GB/forecast/allergy/l/a2632fd8ed3c3874fc2561c52658160eb7a3277f1c1577cfa46a273822427932'>Allergy forecast</a>", 
  envFactors: "N/A",
  othRisks: "Don't fall in the water!",
  othAdvice: "Moving between orange and red regions requires a ‘green certificate’ where you must be fully vaccinated or recovered from Covid and it lasts 6 months",
  rep: "Contact a rep: +44 1632 960729" },

  {title: "Hong Kong University of Science and Technology", 
  eventLocation: "<a href = 'https://www.google.com/maps/place/Hong+Kong+University+of+Science+and+Technology/@22.3363998,114.2654655,15z/data=!4m2!3m1!1s0x0:0x2bedd58f9cf841be?sa=X&ved=2ahUKEwi1sKOlyYrxAhXkQ0EAHZJMDhIQ_BIwG3oECGIQBQ'>Clear Water Bay Peninsula, Hong Kong</a> ",
  image: "<img src = 'hongkong.jpg' alt = 'hong kong' width = '100%' height = '100%'>", 
  description: "<a href = 'https://hkust.edu.hk/home'>Uni website</a>", 
  travelDocs: "<a href = 'https://www.gov.uk/foreign-travel-advice/hong-kong/entry-requirements');'> Click for travel documentation requirements </a>", 
  covidRisk: "<a href = 'https://ourworldindata.org/coronavirus/country/hong-kong'>Low- >10 cases per week</a>", 
  zooDiseases: "<a href = 'https://www.coronatracker.com/country/hong-kong/'>COVID-19- wet markets and live poultry markets are potential Covid hotspots, so avoiding those places is advised</a> ", 
  vecDiseases: "<a href = 'https://www.timeout.com/hong-kong/things-to-do/how-to-deal-with-mosquitoes-in-hong-kong'>Yellow fever- vaccination recommended, especially for summer</a>", 
  comDiseases: "N/A", 
  climate: " 4th highest population density in 2020, poor air quality, plumbing and sewage <a href = 'https://www.accuweather.com/en/hk/hong-kong/1123655/allergies-weather/1123655'>Allergy forecast</a>", 
  envFactors: "N/A",
  othRisks: "N/A",
  othAdvice: "It is currently mandatory to wear a face mask in public areas<br><a href= 'https://www.coronavirus.gov.hk/eng/high-risk-places.html'>High risk areas</a><br><a href = 'https://www.coronavirus.gov.hk/eng/public-transport-faq.html'>Public transport information</a>",
  rep: "Contact a rep: +44 1632 960729" },

  {title: "University of Exeter", 
  eventLocation: "<a href = 'https://www.google.com/search?q=uni+of+exeter&rlz=1C1CHBF_en-GBGB909GB909&oq=uni+of+exe&aqs=chrome.0.0i355j46j46i175i199j0l5j46i175i199j0.3895j0j4&sourceid=chrome&ie=UTF-8#'>Exeter, Devon, United Kingdom</a> ",
  image: "<img src = 'exeter.jpg' alt = 'exeter' width = '100%' height = '100%'>", 
  description: "<a href = 'https://www.exeter.ac.uk/'>Uni website</a>", 
  travelDocs: "<a href = 'https://www.gov.uk/uk-border-control');'> Click for travel documentation requirements </a>", 
  covidRisk: "<a href = 'https://www.exeter.ac.uk/coronavirus/statistics/'>Low- >10 cases per week</a>", 
  zooDiseases: "<a href = 'https://www.gov.uk/government/publications/list-of-zoonotic-diseases/list-of-zoonotic-diseases'>COVID-19, Animal Influenza, Anthrax</a> ", 
  vecDiseases: "N/A", 
  comDiseases: "N/A", 
  climate: "<a href= 'https://en.climate-data.org/europe/united-kingdom/england/exeter-52/'>See up-to-date climate info here</a>", 
  envFactors: "N/A",
  othRisks: "N/A",
  othAdvice: "N/A",
  rep: "Contact a rep: +44 1632 960729" }
];
function loadEvents()
{
  var output = '<ul class="list">';
  //var items = jsonData.items;
  for (var i = 0; i < items.length; i++)
  {
      var title = '<h3>'+ items[i].title +'</h3>' ;
      if(items[i].eventLocation !== null && items[i].eventLocation !== "") {
        eventLocation = '<p><b>Location:</b> '+ items[i].eventLocation + '</p>' ;
      }
      var image = '<p>'+items[i].image+'</p>'
      var book = "<p><b><a href='#'>Going on a placement here? Click here to receive up to date notifications</a></b></p>"
      var description = '<p>'+ items[i].description +'</p>' ;
      var travelDocs = '<p><b>Travel Requirements and Recommendations:</b> '+ items[i].travelDocs +'</p>' ;
      var covidRisk = '<p><b>COVID Risk: </b>'+ items[i].covidRisk +'</p>' ;
      var zooDiseases = '<p><b>Zoonotic Diseases: </b>'+ items[i].zooDiseases +'</p>' ;
      var vecDiseases = '<p><b>Vector Borne Diseases: </b>'+ items[i].vecDiseases +'</p>' ;
      var comDiseases = '<p><b>Communicable Diseases: </b>'+ items[i].comDiseases +'</p>' ;
      var climate = '<p><b>Climate: </b>'+ items[i].climate +'</p>' ;
      var envFactors = '<p><b>Environmental Factors: </b>'+ items[i].zooDiseases +'</p>' ;
      var rep = '<p><b>Contact a representative: </b>'+ items[i].rep +'</p>' ;
      var othRisks = '<p><b>Other risks: </b>'+ items[i].othRisks +'</p>' ;
      var othAdvice = '<p><b>Other advice: </b>'+ items[i].othAdvice +'</p><br>' ;
      var localHealth = "<p><b><a href='#'>Local health centre</a></b></p>";
      var localSustain = "<p><b><a href='#'>Sustainable projects to get involved with in the area</a></b></p>";

      var comment = '<form action="javascript:void(0);"><label for="comment">Tell us your experience here</label><br><textarea id="comment" name="comment" rows="4" width="100%"></textarea><br><br><input type="submit" value="Submit"></form><br>'
      var reviews = '<a href = "#">See student reviews here </a>'

      output += '<li>' + title + eventLocation + image + book + description + travelDocs + covidRisk + zooDiseases + vecDiseases + comDiseases + climate + envFactors + rep + othRisks + othAdvice + localHealth + localSustain + comment + reviews + '</li></a>' ;
  }
  document.getElementById("eventContent").innerHTML = output;
}

//Output error if unable to get data
function showError(error)
{
  document.getElementById("eventContent").innerHTML = error ;
  console.log(error) ;
}


//This function appends the responsive class to topNav on click of the mobile menu. This creates the responsive stacked menu
function showResponsiveMenu()
{
    var topNav = document.getElementById("myTopnav");
    if (topNav.className === "topnav")
    {
        topNav.className += " responsive";
    }
    else
    {
        topNav.className = "topnav";
    }
}

//window.onload = loadEvents;

pushNot = setTimeout(alertFunc, 30000); //30 seconds
pushNot1 = setTimeout(alertFunc, 120000); //2 mins
pushNot2 = setTimeout(alertFunc, 3600000); //5 mins

function alertFunc() {
  num = Math.floor(Math.random() * 6);
  if (num == 0)
  {
    alert("Try to wear masks made from sustainable materials when on your travels :)");
  }
  else if (num == 1)
  {
    alert("Offset your carbon footprint with one of our sustainable travel packs in the marketplace :)");
  }
  else if (num == 2)
  {
    alert("Tell us your experiences for a discount :)");
  }
  else if (num == 3)
  {
    alert("Avoid travel to red-listed countries");
  }
  else if (num == 4)
  {
    alert("Make sure you have all necessary vaccines before going abroad");
  }
  else if (num == 5)
  {
    alert("Any questions? Try the helpline, or a student rep");
  }
  
  else
  {
    alert("Have a nice day :)")
  }
}
