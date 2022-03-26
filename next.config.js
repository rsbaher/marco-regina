const WEB_TITLE="Marco & Regina"
const WEDDING_DATE="2022-09-04"
const WEDDING_TIME = {
    ceremony: "3:00 pm",
    cocktail: "6:30 pm",
    dinner: "7:30 pm",
    photo: "4:30 pm"
}
const MEAL_OPTIONS = {0: "Chicken 1", 1: "Chicken 2"}
const MEAL_DESC = {0: "Description of Chicken 1", 1: "Description of Chicken 2"}
const CEREMONY_VENUE = "St. Mary Coptic Church"
const RECEPTION_VENUE = "Jacaranda Country Club"

const CEREMONY_ADDR = {
    l1: "15450 Lyons Rd", 
    l2: "Delray Beach", 
    l3: "FL 33484", 
    url: "https://goo.gl/maps/PJGBChxM4cyxFyTd6",
    embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3572.2646253697417!2d-80.1892661!3d26.4471977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91f53337aebf9%3A0xa96800bd8bdd1e25!2sSt%20Mary%20Coptic%20Orthodox%20Church!5e0!3m2!1sen!2sca!4v1637361269921!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
}
const RECEPTION_ADDR = {
    l1: "9200 W Broward Blvd", 
    l2: "Plantation", 
    l3: "FL 33324", 
    url: "https://goo.gl/maps/u5Z3ywaQ8bMXLBK47",
    embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6118475503463!2d-80.27400558497182!3d26.111586383479167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1412cb752ae799e3%3A0x38516863778ea5fb!2sJacaranda%20Country%20Club!5e0!3m2!1sen!2sca!4v1637361249420!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
}

const HOTELS = [
    {
    name: "Courtyard by Marriott Plantation",
    addr: {
        l1: "7780 SW 6th Street", 
        l2: "Plantation", 
        l3: "FL 33324", 
        url: "https://goo.gl/maps/6HbAVfKhmQtnBZiW9",
        embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.572420524587!2d-80.25705918597072!3d26.11287280035101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d907c006ecbea7%3A0x2a877b5af07f6d6e!2sCourtyard%20by%20Marriott%20Fort%20Lauderdale%20Plantation!5e0!3m2!1sen!2sca!4v1637360987106!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    phone: "888-236-2427",
    url: "https://www.plantationcourtyard.com",
    amenities: ["10.45 USD Breakfast", "Free Internet Access", "Free Parking",  "Airport Shuttle from FLL Airport", "Digital Check-In", "Mobile Key", "Outdoor Pool", "Gym"],
    price: "160 USD"
},
{
    name: "Hyatt Place Plantation",
    addr: {
        l1: "8530 West Broward Boulevard", 
        l2: "Plantation", 
        l3: "FL 33324", 
        url: "https://goo.gl/maps/cH3NPsCFGbJsMoCZ8",
        embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3863584592127!2d-80.26502958597052!3d26.118942800098164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d907c480a58115%3A0x4cba698ecff77c81!2sHyatt%20Place%20Fort%20Lauderdale%2FPlantation!5e0!3m2!1sen!2sca!4v1637361095769!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    phone: "954-370-2220",
    url: "https://www.hyatt.com/en-US/hotel/florida/hyatt-place-fort-lauderdale-plantation/fllzp",
    amenities: ["Free Breakfast", "Free Internet Access", "Free Parking", "Pet-Friendly", "Digital Check-In", "Outdoor Pool", "Gym"],
    price: "130 USD"
},
{
    name: "Renaissance Plantation",
    addr: {
        l1: "1230 South Pine Island Rd.", 
        l2: "Plantation", 
        l3: "FL 33324", 
        url: "https://g.page/RenaissanceFortLauderdalePlantat?share",
        embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.847403000462!2d-80.26489888597096!3d26.103899500724726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d907eefcd16387%3A0x2ebc694c97f816a0!2sRenaissance%20Fort%20Lauderdale%20West%20Hotel!5e0!3m2!1sen!2sca!4v1637361141138!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    phone: "954-308-4502",
    url: "https://www.renaissanceplantation.com",
    amenities: ["8 USD Breakfast", "Free Internet Access", "Parking 10 USD Daily", "Digital Check-In", "Outdoor Pool", "Gym"],
    price: "270 USD"
},
{
    name: "Sheraton Suites Plantation",
    addr: {
        l1: "311 North University Drive", 
        l2: "Plantation", 
        l3: "FL 33324", 
        url: "https://g.page/SheratonSuitesPlantation?share",
        embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28657.826741809637!2d-80.27415136044918!3d26.1240968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d907c809cf1705%3A0x693a05085c1f5ec1!2sSheraton%20Suites%20Fort%20Lauderdale%20Plantation!5e0!3m2!1sen!2sca!4v1637361203684!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    phone: "954-424-3300",
    url: "https://www.marriott.com/fllsi",
    amenities: ["10-12 USD Breakfast", "Free Internet Access", "Free Parking", "Pet Friendly", "Digital Check-In", "Mobile Key", "Outdoor Pool", "Gym"],
    price: "195 USD",
},
]

HOTEL_DISCOUNT = { key: 0, code: "XYZ1", percent: 15}

module.exports = {
  reactStrictMode: true,
  env: {
    WEB_TITLE: WEB_TITLE,
    CEREMONY_VENUE: CEREMONY_VENUE,
    RECEPTION_VENUE: RECEPTION_VENUE,
    WEDDING_DATE: WEDDING_DATE,
    WEDDING_TIME: WEDDING_TIME,
    MEAL_OPTIONS: MEAL_OPTIONS,
    MEAL_DESC: MEAL_DESC,
    CEREMONY_ADDR: CEREMONY_ADDR,
    RECEPTION_ADDR: RECEPTION_ADDR,
    HOTELS: HOTELS,
    HOTEL_DISCOUNT: HOTEL_DISCOUNT
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.child_process = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
    }
    return config;
  },
}
