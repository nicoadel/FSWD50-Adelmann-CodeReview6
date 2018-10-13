var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Father class Information with attribute "abstract" so it can only be inheritated from // protected cause i do everything in my class constructer & render() AND INHERITATE (thats why no private)  //
var Information = /** @class */ (function () {
    function Information(name, city, zip, adress, img) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.adress = adress;
        this.img = img;
    }
    return Information;
}());
// these classes dont have abstract cause we call them to create objects // i use private here cause these variables dont get used anywhere else than inside my class. //
var Location_ = /** @class */ (function (_super) {
    __extends(Location_, _super);
    function Location_(name, city, zip, adress, img) {
        return _super.call(this, name, city, zip, adress, img) || this;
    }
    Location_.prototype.render = function () {
        return "<div class=\"col-12 col-md-6 col-lg-4 col-xl-3 p-3\">\n\t\t\t\t\t<div class=\"card text-center\">\n\t\t\t\t\t\t<img class=\"card-img-top d-none d-sm-block\" src=\"img/" + this.img + "\" alt=\"" + this.name + "\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t\t\t<p class=\"card-text\">" + this.adress + ", " + this.zip + this.city + "<a href=\"https://www.google.com/maps/place/" + this.zip + " " + this.city + ", " + this.adress + "\"></a></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Location_;
}(Information));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, zip, adress, img, tel_nr, type, url) {
        var _this = _super.call(this, name, city, zip, adress, img) || this;
        _this.telephone_number = tel_nr;
        _this.restaurant_type = type;
        _this.homepage = url;
        return _this;
    }
    Restaurants.prototype.render = function () {
        return "<div class=\"col-12 col-md-6 col-lg-4 col-xl-3 p-2\">\n\t\t\t\t\t<div class=\"card text-center\">\n  \t\t\t\t\t\t<img class=\"card-img-top d-none d-sm-block\" src=\"img/" + this.img + "\" alt=\"" + this.name + "\">\n  \t\t\t\t\t\t<div class=\"card-body\">\n    \t\t\t\t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t\t\t\t<p class=\"lead\">" + this.restaurant_type + "</p>\n    \t\t\t\t\t\t<p class=\"card-text\">" + this.adress + ", " + this.zip + this.city + "<a href=\"https://www.google.com/maps/place/" + this.zip + " " + this.city + ", " + this.adress + "\"></a></p>\n    \t\t\t\t\t\t<a href=\"" + this.homepage + "\">" + this.homepage.slice(7) + "</a>\n    \t\t\t\t\t\t<p>" + this.telephone_number + "\n    \t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Restaurants;
}(Information));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip, adress, img, url) {
        var _this = _super.call(this, name, city, zip, adress, img) || this;
        _this.homepage = url;
        return _this;
    }
    //Had to use slice to get rid of the ugly http://  -- i tried inserting the links of the homepage as www.example.com instead of http://www.example.com but if I do it the first way he doesnt open the link as a external website//
    Events.prototype.render = function () {
        return "<div class=\"col-12 col-md-6 col-lg-4 col-xl-3 p-3\">\n\t\t\t\t\t<div class=\"card text-center\">\n  \t\t\t\t\t\t<img class=\"card-img-top d-none d-sm-block\" src=\"img/" + this.img + "\" alt=\"" + this.name + "\">\n  \t\t\t\t\t\t<div class=\"card-body\">\n    \t\t\t\t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t\t\t\t<p class=\"card-text\">" + this.adress + ", " + this.zip + this.city + "&nbsp;<a href=\"https://www.google.com/maps/place/" + this.zip + " " + this.city + ", " + this.adress + "\"></a></p>\n    \t\t\t\t\t\t<a href=\"" + this.homepage + "\">" + this.homepage.slice(7) + "</a>\n    \t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Events;
}(Information));
// Creating 3 Arrays of type Location_ , Restaurants & Events.  THen i push my information in them (Can only be of the corrent type/else he wont accept it)       //
// I only have 2 types of dataset cause i was too lazy to create 6 individual ones -- I added 6 items to each array so the page is not that empty //
var location_array = [];
var restaurant_array = [];
var events_array = [];
location_array.push(new Location_("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "schloss.jpg"));
location_array.push(new Location_("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "zoo.jpg"));
location_array.push(new Location_("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "schloss.jpg"));
location_array.push(new Location_("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "zoo.jpg"));
location_array.push(new Location_("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "schloss.jpg"));
location_array.push(new Location_("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "zoo.jpg"));
restaurant_array.push(new Restaurants("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "lemon_leaf.png", "+43(1)5812308", "thai food", "http://www.lemonleaf.at"));
restaurant_array.push(new Restaurants("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "sixta.png", "+43 158 528 56 | +43 158 52856", "austrian food", "http://www.sixta-restaurant.at"));
restaurant_array.push(new Restaurants("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "lemon_leaf.png", "+43(1)5812308", "thai food", "http://www.lemonleaf.at"));
restaurant_array.push(new Restaurants("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "sixta.png", "+43 158 528 56 | +43 158 52856", "austrian food", "http://www.sixta-restaurant.at"));
restaurant_array.push(new Restaurants("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "lemon_leaf.png", "+43(1)5812308", "thai food", "http://www.lemonleaf.at"));
restaurant_array.push(new Restaurants("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "sixta.png", "+43 158 528 56 | +43 158 52856", "austrian food", "http://www.sixta-restaurant.at"));
events_array.push(new Events("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "kristofferson.jpg", "http://kriskristofferson.com"));
events_array.push(new Events("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "kravitz.jpg", "http://www.lennykravitz.com"));
events_array.push(new Events("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "kristofferson.jpg", "http://kriskristofferson.com"));
events_array.push(new Events("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "kravitz.jpg", "http://www.lennykravitz.com"));
events_array.push(new Events("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "kristofferson.jpg", "http://kriskristofferson.com"));
events_array.push(new Events("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "kravitz.jpg", "http://www.lennykravitz.com"));
//everytime i call my function i set my item_container to "" because else the items would add up (e.g if i press Location 3 times, all location items get display *3) //
function display_location() {
    document.getElementById("item_container").innerHTML = "";
    for (var i = 0; i < location_array.length; i++) {
        document.getElementById("item_container").innerHTML += (location_array[i].render());
    }
}
function display_restaurants() {
    document.getElementById("item_container").innerHTML = "";
    for (var i = 0; i < restaurant_array.length; i++) {
        document.getElementById("item_container").innerHTML += (restaurant_array[i].render());
    }
}
function display_events() {
    document.getElementById("item_container").innerHTML = "";
    for (var i = 0; i < events_array.length; i++) {
        document.getElementById("item_container").innerHTML += (events_array[i].render());
    }
}
//addeventlistener 
document.getElementById("v-pills-location-tab").addEventListener("click", display_location);
document.getElementById("v-pills-restaurants-tab").addEventListener("click", display_restaurants);
document.getElementById("v-pills-events-tab").addEventListener("click", display_events);
