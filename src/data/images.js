// plain, -6 , and -9
import fishPrint from "../assets/images/png/fishprints/fish-print-9.png";
import logo from "../assets/images/aqquualogo.svg";
//product circle map
import coraltrout from "../assets/images/png/coraltrout.png";
import redsnapper from "../assets/images/png/redsnapper.png";
import hirame from "../assets/images/png/hirame.png";
import mahimahi from "../assets/images/png/mahimahi.png";
import grouper from "../assets/images/png/grouper.png";
import tuna from "../assets/images/png/tuna.png";
// schools emblems
import burapha from "../assets/images/png/burapha.png";
import miami from "../assets/images/png/miami.png";
// svgtexts  for product circle map
import coraltroutsvg from "../assets/images/svgs/text/coraltrout.svg";
import redsnappersvg from "../assets/images/svgs/text/redsnapper.svg";
import hiramesvg from "../assets/images/svgs/text/hirame.svg";
import mahimahisvg from "../assets/images/svgs/text/mahimahi.svg";
import groupersvg from "../assets/images/svgs/text/grouper.svg";
import tunasvg from "../assets/images/svgs/text/tuna.svg";
// ribbons
import coraltroutribbon from "../assets/images/png/fishprints/fishribbons/coraltroutsmall.png";
import hirameribbon from "../assets/images/png/fishprints/fishribbons/hiramesmall.png";
//
import eatfishred from "../assets/images/png/eatfishiconred.png";
import eatfishyellow from "../assets/images/png/eatfishiconyellow.png";
//reicpes
import recipes1 from "../assets/images/png/food/greensauce.png";
import recipes2 from "../assets/images/png/food/bellpeppers.png";
import recipes3 from "../assets/images/png/food/stringbeans.png";
//
import backarrow from "../assets/images/svgs/backarrow.svg";
// geneitcs
import genetics1 from "../assets/images/png/farm/petridish.png";
import genetics2 from "../assets/images/png/farm/closeview.png";
import genetics3 from "../assets/images/png/farm/fossilish.png";
import genetics4 from "../assets/images/png/farm/flask.png";
//
const schools = { miami, burapha };
const productsFish = [
  { png: grouper, svg: groupersvg },
  { png: hirame, svg: hiramesvg },
  { png: mahimahi, svg: mahimahisvg },
  { png: redsnapper, svg: redsnappersvg },
  { png: coraltrout, svg: coraltroutsvg },
  { png: tuna, svg: tunasvg }
].map((fish, i) => {
  return {
    png: fish.png,
    name: fish.png.split(".")[0].split("/")[3],
    svg: fish.svg
  };
});
const ribbons = [
  {
    pic: coraltroutribbon,
    color: "#ec5d73"
  },
  {
    pic: hirameribbon,
    color: "#9ce881"
  }
];
const eatfishicons = [eatfishred, eatfishyellow];
const heroImages = {
  redsnapper,
  coraltrout,
  hirame,
  mahimahi,
  grouper,
  tuna
};
const recipesImages = [recipes1, recipes2, recipes3];
const geneticsImages = [genetics1, genetics2, genetics3, genetics4];
const images = {
  fishPrint,
  logo,
  productsFish,
  schools,
  ribbons,
  eatfishicons,
  heroImages,
  recipesImages,
  backarrow,
  geneticsImages
};

export default images;
