// plain, -6 , and -9
import fishPrint from "../assets/images/png/fishprints/fish-print-9.png";
import logo from "../assets/images/aqquualogo.svg";
import logoRound from "../assets/images/aqquualogoround.svg";
import tagline from "../assets/images/tagline.svg";
import backbutton from "../assets/images/fishboneback.svg";
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
import genetics1 from "../assets/images/png/genetics/petridish.png";
import genetics2 from "../assets/images/png/genetics/closeview.png";
import genetics3 from "../assets/images/png/genetics/fossilish.png";
import genetics4 from "../assets/images/png/genetics/flask.png";
//
import sus1 from "../assets/images/png/sus/girl.png";
import sus2 from "../assets/images/png/sus/picking.png";
import sus3 from "../assets/images/png/sus/twogirls.png";
import sus4 from "../assets/images/png/sus/largegroup.png";
import sus5 from "../assets/images/png/sus/flatbed.png";
//
import farm1 from "../assets/images/png/farm/farmwide.png";
//
import bu1 from "../assets/images/png/burapha/handfish.png";
//
import um2 from "../assets/images/png/um/clearfish.png";
import um3 from "../assets/images/png/um/fishintank.png";
import um4 from "../assets/images/png/um/boattank2.png";
import um5 from "../assets/images/png/um/ruler.png";
import um6 from "../assets/images/png/um/twoguys.png";
import um7 from "../assets/images/png/um/schooloffish.png";
import um8 from "../assets/images/png/um/twofish.png";
//
import recipewave from "../assets/images/png/food/recipesectionwave.gif";
import recipeicon from "../assets/images/png/food/recipeicon.png";
import recipetips from "../assets/images/png/food/recipetipsicon.png";
//
import sectionalMangroves from "../assets/images/png/fishprints/sectional-mangroves.png";
import sectionalGrouper from "../assets/images/png/fishprints/sectional-grouper.png";
import sectionalFishTank from "../assets/images/png/fishprints/sectional-fishtank.png";
import sectionalHirame from "../assets/images/png/fishprints/sectional-hirame.png";
import sectionalRaceways from "../assets/images/png/fishprints/sectional-raceways.png";
import sectionalBaby from "../assets/images/png/fishprints/sectional-baby.png";
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
const recipesImages = {
  images: [recipes3, recipes2, recipes1],
  backgroundImage: recipewave,
  icon: recipeicon,
  tips: recipetips
};
const geneticsImages = [
  {
    image: genetics1,
    title: "Snapper eggs"
  },
  {
    image: genetics2,
    title: "Mahi-Mahi Larvae"
  },
  {
    image: genetics3,
    title: "Hirame juvenilles"
  },
  {
    image: genetics4,
    title: "American Red Snapper eggs"
  }
];
const sustainabilityImages = {
  titleImage: sus5,
  images: [
    {
      image: sus4,
      title: ""
    },

    {
      image: sus2,
      title: ""
    }
  ]
};
const buraphaImages = {
  bigImage: bu1
};
const umImages = {
  bigImage: "",
  images: [
    {
      image: um5,
      title: "Hirame"
    },
    {
      image: um3,
      title: "Mahi-Mahi broodstock"
    },
    {
      image: um4,
      title: "Live transport"
    },
    {
      image: um6,
      title: "Dr. Dan Benetti & Zack Daugherty"
    },
    {
      image: um8,
      title: "First Mini Mahi harvest for canning tryouts"
    },
    {
      image: um7,
      title: "American Red Snapper broodstock"
    },
    {
      image: um2,
      title: "Hirame fingerling production"
    }
  ]
};
const sectionals = {
  sectionalFishTank,
  sectionalHirame,
  sectionalGrouper,
  sectionalMangroves,
  sectionalRaceways,
  sectionalBaby
};
const farmImages = { farm1 };
const images = {
  farmImages,
  backbutton,
  fishPrint,
  logo,
  logoRound,
  tagline,
  productsFish,
  schools,
  ribbons,
  eatfishicons,
  heroImages,
  recipesImages,
  backarrow,
  geneticsImages,
  sustainabilityImages,
  umImages,
  buraphaImages,
  sectionals
};

export default images;
