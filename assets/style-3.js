// Initialize font properties
const fontname = "Roboto+Mono";
const fontweights = [300, 400]

// Color properties
const basecolor = "#555";
const accentcolor = "#007";
const highlightcolor = "#111";

// const basecolor = "#888";
// const accentcolor = "#222";
// const highlight = "#111";

// Body properties
const bodyfontweight = 450;
const bodyfontsize = "12pt";
const backgroundcolor = "#FFFAF0";

// Link properties
const acolor = accentcolor;
const adecoration = "none";
const ahovercolor = basecolor;
const ahoverduration = "0.3s";
const ahoverdecoration = "underline"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Menu properties
const menucolor = "#000";
const menufontsize = "14pt";
const menudecoration = "none";
// const menuhover = accentcolor;
// const menuhoverduration = "0.3s";
// const menuhoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Header properties
const headercolor = accentcolor;
const headerfontsize = "17pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "19pt";


// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = bodyfontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

//     .institution {
//             font - size: 12px;
//             color: #222;
//         }
//   .years {
//             font - size: 11px;
//             color: #888;
//         }

// Works for sans serif, change otherwise
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", fontname);

$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

// $("a").css("color", acolor);
// $("a").css("text-decoration", adecoration);
// $("a:hover").css("color", basecolor);
// $("a:hover").css("text-decoration", ahoverdecoration);

$(".menulink").css("color", menucolor);
$(".menulink").css("font-weight", "350");
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".menulink2").css("color", "#007");
$(".menulink2").css("font-weight", "700");
$(".menulink2").css("font-size", menufontsize);
$(".menulink2").css("text-decoration", headerdecoration);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);

$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);