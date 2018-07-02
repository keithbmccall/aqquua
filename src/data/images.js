import fishPrint from "../assets/images/fish-print.png";
import logo from "../assets/images/aqquua-logo-optimised.svg";
//
import coraltrout from "../assets/images/png/coraltrout.png";
import redsnapper from "../assets/images/png/redsnapper.png";
import hirame from "../assets/images/png/hirame.png";
import mahi from "../assets/images/png/mahi.png";
import grouper from "../assets/images/png/grouper.png";

const productsFish = [coraltrout, redsnapper, hirame, mahi, grouper].map(
  (x, i) => {
    let colors = ["#EC5D73", "#f32e37", "#71CC51", "#5ad0ba", "#ffc702"];
    return {
      fish: x,
      color: colors[i]
    };
  }
);

const images = {
  fishPrint,
  logo,
  productsFish
};

export default images;
