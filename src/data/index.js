import images from "./images";
const weAreList = [
  "HEALTHY",
  "FRESH",
  "TASTY",
  "DYNAMIC",
  "EDUCATION",
  "EXPERTS",
  "SCIENTISTS",
  "FARMERS",
  "INNOVATION",
  "CLEAN",
  "FOOD",
  "FISH",
  "TECHNOLOGY",
  "GROUPER",
  ""
];
const weAreContent = weAreList.map((x, i) => {
  let colors = [
    "#e15d44",
    "#5ad0ba",
    "#ffc702",
    "#4D448A",
    "black",
    "#c3447a",
    "#f32e37",
    "#573b30"
  ];
  return {
    content: x,
    color: colors[i] || colors[i - 8]
  };
});
export const navbarLinks = [
  {
    title: "About",
    color: "#ffc702",
    id: "About"
  },
  {
    title: "Products",
    color: "#5ad0ba",
    id: "Products"
  },

  {
    title: "Farm",
    color: "#e15d44",
    id: "Farm"
  },
  {
    title: "R&D",
    color: "#f32e37",
    id: "RD"
  },
  {
    title: "Eat Fish",
    color: "#c3447a",
    id: "Eat-fish"
  },
  {
    title: "Sustainability",
    color: "#5ad0ba",
    id: "Sustainability"
  },
  {
    title: "Health",
    color: "#573b30",
    id: "Health"
  },
  {
    title: "Contact",
    color: "#4D448A",
    id: "Contact"
  }
];
export const aqquuaHead = images.logo;
export const headerContent = {
  title: "We do fish right",
  caption: "We're wild about farmed fish'",
  logo: images.logo,
  background: images.fishPrint
};
export const sectionData = [
  {
    id: "About",
    title: "We Are",
    content: weAreContent
  },
  { title: "placeholder" },
  {
    title: "Aqquua",
    caption:
      "At aqquua™ we engage in best practices and device technological innovations in RAS and R&D to raise the bar in aquaculture at every level. Our fin-fish products are raised in a controlled environment and are 100% antibiotic and hormone free. We are committed to bring the freshest, highest quality seafood experience to the table."
  },
  { title: "placeholder" },
  {
    title: "Our Products",
    number: 1,
    headline: "WE TAKE OUR JOB SERIOUSLY",
    caption:
      "We work day in and day out making sure all of our operations are properly executed and managed to bring you a first rate high quality product, free of antibiotics and hormones. We deliver 100% pure healthy, fresh and tasty fish."
  },

  {
    id: "Products",
    title: "Our Products",
    caption:
      "Our products are fresh, authentic, traceable and sustainable. The collaboration between scientists, farmers and individuals who work in our farms is imperative in this effort. It is from this connection that we are always trying to push the boundaries of what is possible in aquaculture to bring the best tasting fish to the market and families around the globe.",
    fish: images.productsFish
  },

  {
    id: "Farm",
    number: 2,
    title: "Farm",
    headline: "WE ARE NON CONFORMISTS",
    caption:
      "We took a deep dive to understand why aquaculture still gets a bad rap, We understood that if we are to change that perception we would need to be transparent and authentic in everything we do. Making the transition from a 'wild caught' product to a farmed one can only be achieved by gaining public trust. It is our duty to educate the public to the multiple benefits of eating farmed fish products. We are working tirelessly until this message has been made crystal clear. It is the path we have chosen towards saving our oceans and achieving food security for this and future generations."
  },
  {
    number: 3,
    title: "R&D",
    headline: "WE ARE INNOVATORS",
    caption:
      "IP technology and methodology that we gather from brood-stock, eggs, larval rearing techniques and genetics for optimum fingerling production are immensely important. By using best practices conditions for the grow-out of this sustainable protein source,we further our objective of making a significant contribution in supplying scientific and operational training. It will allow us to produce the highest quality fin fish product and help us to make definitive contributions to the restocking of our oceans.",

    content: {
      schools: [
        {
          school: "UM",
          caption:
            "Our COLLABORATIVE RESEARCH AGREEMENT WITH THE UNIVERSITY OF MIAMI WILL HELP ADVANCE AQUACULTURE TECHNOLOGY FOR HIGH-VALUE MARINE FISH SUCH AS TUNA AND HIRAME (JAPANESE FLOUNDER) AT THE UM EXPERIMENTAL FISH HATCHERY. THE THREE-YEAR AGREEMENT BETWEEN AQQUUA AND THE UM ROSENSTIEL SCHOOL-BASED AQUACULTURE PROGRAM IS AIMED AT IMPROVING HATCHERY AND OTHER AQUACULTURE TECHNOLOGIES OF A NUMBER OF ECONOMICALLY VALUABLE SPECIES THAT HAVE NEVER BEEN DEVELOPED ELSEWHERE IN THE WORLD. 'THIS RESEARCH AGREEMENT WILL HELP ADVANCE SUSTAINABLE AQUACULTURE RESEARCH AT A TIME WHEN IT IS CRITICALLY NEEDED TO SUPPORT INCREASING DEMAND FOR HIGH-QUALITY PROTEIN TO FEED THE WORLD’S GROWING POPULATION,' SAID UM ROSENSTIEL SCHOOL PROFESSOR DAN BENETTI, DIRECTOR OF THE UM AQUACULTURE PROGRAM. 'WE ARE PLEASED BY AQQUUA’S COMMITMENT TO ADVANCE AQUACULTURE TECHNOLOGY IN A SUSTAINABLE WAY.'"
        },
        {
          school: "Burapha",
          caption:
            "WE ALSO HAVE AN MOU WITH THE UNIVERSITY OF BURAPHA AND WITH KUNG KRABEAN ROYAL PROJECT TO HELP US WITH EGG PRODUCING BROODSTOCK AND ADVANCE OUR LARVAL REARING EFFORTS IN THAILAND.AQQUUA HAS ALSO PROVIDED SCHOLARSHIPS AND HAS HIRED GRADUATE STUDENTS FROM THE UNIVERSITY OF BURAPHA TO FURTHER THESE EFFORTS."
        }
      ]
    }
  },
  {
    number: 4,
    headline: "NURTURING LEADERS",
    caption:
      "Helping to educate the next leaders in aquaculture is something we take very seriously. The only way to succeed at getting to food security for this and future generations, is to bring academic knowledge together with commercial aquaculture experience. We currently offer scholarships in the advancement of aquaculture studies."
  },
  {
    number: 5,
    headline: "DESIGNING THE FUTURE",
    caption:
      "Conceptualizing and manufacturing a new RAS is at the heart of the future of aquaculture. Aqquua is developing a modular style RAS that can be constructed in a cost effective way with the flexibility to move ones’ assets from one site to another. We are also exploring new mechanisms to re-circulate water and the best procedures to manage waste-water in an environmental conscious and responsible way."
  },
  {
    id: "Eat-fish",
    title: "Eat Fish",
    number: 6,
    headline: "DOING IT IN STYLE",
    caption:
      "Showing our true colors in the way we raise our fish is the way to be 100% transparent, sustainable and traceabe. That’s why we have become proud members of the Eat Fish platform, whose sole purpose is to efficiently track fish from our farm to your table. To learn more visit EAT FISH",
    content:
      "The Eat Fish platform is useful as an educational tool that lets our customer verify, learn and enjoy their purchase in a truly and innovative way by successfully providing them with 100% transparency, sustainability and traceability information. Eat Fish sole purpose is to efficiently track fish from our farm all the way to our end users table. Eat Fish enables our customer to scan the Eat Fish tag attached to our fish, which has a QR and serial code. After scanning any given fish at the retailer, our customers will find an actual image of their specific fish potential purchase, nutritional facts and farm and country of origin. It also provides a recipe api leading our customers to great food recipes for the specific fish purchase. Once at home you can submit a video of your sea-food cooking experience from your very own kitchen. This allows us to connect to our customers and get immediate reviews that can help us to best serve them in the future. We sell our products under the trade mark “Sea food for what it is”… We don’t sell you a story, we prefer to hear yours!"
  },
  {
    id: "Sustainability",
    title: "Sustainability",
    number: 7,
    headline: "WE PLANT THE SEED",
    caption:
      "Seasonal and climate changes are a challenge to the “fish food” industry whether out to sea or on land. Global warming is growing at an alarming rate. We know how important is to be respectful of our planet. That’s why we take it to heart when tackling issues of sustainability and conservation and why we prepare ahead to meet whatever challenges may come our way in order to keep our fish home, a happy one. We know that happy fish make for great tasting fish, and that a happy planet will only come if we take appropriate action now.",
    content: {
      headline: "Mangrove Conservation:",
      text:
        "Mangrove forests, along with the animal species they shelter, represent globally significant sources of biodiversity and provide humanity with valuable ecosystem services. They are used by mammals, reptiles and migratory birds as feeding and breeding grounds, and provide crucial habitats for fish and crustacean species of commercial importance. The roots of the mangrove physically buffer shorelines from the erosive impacts of ocean waves and storms. Additionally, they protect riparian zones by absorbing floodwaters and slowing down the flow of sediment-loaded river water. This allows sediments to drop to the bottom where they are held in place, thus containing potentially toxic waste products and improving the quality of water and sanitation in coastal communities. Aqquua has undergone a mangrove planting restoration project, planting more than 80 mangrove trees on our property alone and helping our farming neighbors to do the same. "
    }
  }
];
