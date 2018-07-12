// plain, -6 , and -9
import fishPrint from "../assets/images/png/fish-print-9.png";
import logo from "../assets/images/aqquualogo.svg";
//product circle map
import coraltrout from "../assets/images/png/coraltrout.png";
import redsnapper from "../assets/images/png/redsnapper.png";
import hirame from "../assets/images/png/hirame.png";
import mahi from "../assets/images/png/mahi.png";
import grouper from "../assets/images/png/grouper.png";
import tuna from "../assets/images/png/tuna.png";
// schools emblems
import burapha from "../assets/images/png/burapha.png";
import miami from "../assets/images/png/miami.png";
// svgtexts  for product circle map
import coraltroutsvg from "../assets/images/svgs/text/coraltrout.svg";
import redsnappersvg from "../assets/images/svgs/text/redsnapper.svg";
import hiramesvg from "../assets/images/svgs/text/hirame.svg";
import mahisvg from "../assets/images/svgs/text/mahi.svg";
import groupersvg from "../assets/images/svgs/text/grouper.svg";
import tunasvg from "../assets/images/svgs/text/tuna.svg";
//

const schools = { miami, burapha };
const productsFish = [
  { png: coraltrout, svg: coraltroutsvg },
  { png: redsnapper, svg: redsnappersvg },
  { png: hirame, svg: hiramesvg },
  { png: mahi, svg: mahisvg },
  { png: grouper, svg: groupersvg },
  { png: tuna, svg: tunasvg }
].map((fish, i) => {
  return {
    png: fish.png,
    name: fish.png.split(".")[0].split("/")[3],
    svg: fish.svg
  };
});

const images = {
  fishPrint,
  logo,
  productsFish,
  schools
};

export default images;
