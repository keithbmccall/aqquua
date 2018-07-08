import fishPrint from "../assets/images/png/fish-print-6.png";
import logo from "../assets/images/aqquualogo.svg";
//
import coraltrout from "../assets/images/png/coraltrout.png";
import redsnapper from "../assets/images/png/redsnapper.png";
import hirame from "../assets/images/png/hirame.png";
import mahi from "../assets/images/png/mahi.png";
import grouper from "../assets/images/png/grouper.png";
// schools emblems
import burapha from "../assets/images/png/burapha.png";
import miami from "../assets/images/png/miami.png";
// svg
import coraltroutsvg from "../assets/images/svgs/text/coraltrout.svg";
import redsnappersvg from "../assets/images/svgs/text/redsnapper.svg";
import hiramesvg from "../assets/images/svgs/text/hirame.svg";
import mahisvg from "../assets/images/svgs/text/mahi.svg";
import groupersvg from "../assets/images/svgs/text/grouper.svg";
//

const schools = { miami, burapha };
const productsFish = [
  { png: coraltrout, svg: coraltroutsvg },
  { png: redsnapper, svg: redsnappersvg },
  { png: hirame, svg: hiramesvg },
  { png: mahi, svg: mahisvg },
  { png: grouper, svg: groupersvg }
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
