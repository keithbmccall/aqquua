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
    title: "Farm",
    color: "#e15d44",
    id: "Farm"
  },
  {
    title: "Products",
    color: "#5ad0ba",
    id: "Products"
  },
  {
    title: "R&D",
    color: "#f32e37",
    id: "RD"
  },
  {
    title: "Health",
    color: "#573b30",
    id: "Health"
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
    title: "Contact",
    color: "#4D448A",
    id: "Contact"
  }
];
export const aqquuaLogo = images.logo;
export const headerContent = {
  title: "We're Wild about Farmed",
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

  // {
  //   title: "Aqquua",
  //   caption:
  //     "At aqquua™ we engage in best practices and device technological innovations in RAS and R&D to raise the bar in aquaculture at every level. Our fin-fish products are raised in a controlled environment and are 100% antibiotic and hormone free. We are committed to bring the freshest, highest quality seafood experience to the table."
  // },
  // { title: "placeholder" },
  {
    title: "Our Products",
    number: 1,
    headline: "WE TAKE OUR JOB SERIOUSLY",
    caption:
      "Every day we use best practices to make sure all of our operations are properly executed and managed to bring you a first rate high quality responsibly raised product, free of chemicals, antibiotics and hormones. Our job is to deliver 100% sustainably farmed, healthy, fresh and tasty fish. At Aqquua we are committed to developing innovative and scalable technologies that are necessary to bring the freshest, highest quality seafood experience to the table."
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
      "We took a deep dive to understand why aquaculture still gets a bad name, We learned that if we are to change that negative perception we need to be transparent and authentic in everything we do. Making the transition from a “wild caught” product to a farmed one will be achieved by earning public trust. We see it as our duty to educate the public to the multiple health benefits of eating farmed fish products. We are working tirelessly until this message has been made crystal clear."
  },
  {
    number: 3,
    headline: "WE ARE INNOVATORS",
    caption:
      "We are developing IP technologies and methodologies gathered from working closely with brood-stock, eggs, larval rearing techniques and genetics. The knowledge we gain will be implemented for optimum fingerling production. We believe by doing so we will have the opportunity to tackle food security issues and make definitive contributions to restocking our oceans.",
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
    id: "RD",
    number: 4,
    headline: "NURTURING LEADERS",
    caption:
      "Helping to educate the next leaders in aquaculture is something we take to heart. Bringing academic knowledge together with commercial aquaculture experience is the road to future achievements in aquaculture success. Our strategic partnerships with the university of Miami and Burapha university Thailand, have helped lay the necessary research foundation that informs our commercial strategy and allows us to be an exemplar of eco-friendly and sustainable business practices.",
    schoolEmblems: [
      {
        pic: images.schools.miami, //250
        name: "miami"
      },
      {
        pic: images.schools.burapha, //250
        name: "burapha"
      }
    ]
  },
  { caption: "health", id: "Health" },
  {
    number: 5,
    headline: "DESIGNING THE FUTURE",
    caption:
      "Conceptualizing and manufacturing a new RAS is at the heart of the future of aquaculture. Aqquua is developing a modular style RAS that can be constructed in a cost effective way with the flexibility to move ones’ assets from one site to another. We are also exploring new mechanisms to re-circulate water and the best procedures to manage waste-water in an environmental conscious and responsible way."
  },
  {
    id: "Eat-fish",
    title: "Eat Fish",
    eatFishTag: images.eatfishicons,
    number: 6,
    headline: "DOING IT IN STYLE",
    caption:
      "Showing our true colors in the way we raise our fish is the way to ensure 100% transparency and traceability. That’s why we have become proud members of the Eat Fish platform, whose sole purpose is to efficiently track fish from our farm directly to your table. To learn more visit EAT FISH (here)",
    content:
      "The Eat Fish platform is useful as an educational tool that lets our customer verify, learn and enjoy their purchase in a truly and innovative way by successfully providing them with 100% transparency, sustainability and traceability information. Eat Fish sole purpose is to efficiently track fish from our farm all the way to our end users table. Eat Fish enables our customer to scan the Eat Fish tag attached to our fish, which has a QR and serial code. After scanning any given fish at the retailer, our customers will find an actual image of their specific fish potential purchase, nutritional facts and farm and country of origin. It also provides a recipe api leading our customers to great food recipes for the specific fish purchase. Once at home you can submit a video of your sea-food cooking experience from your very own kitchen. This allows us to connect to our customers and get immediate reviews that can help us to best serve them in the future. We sell our products under the trade mark “Sea food for what it is”… We don’t sell you a story, we prefer to hear yours!"
  },
  {
    id: "Sustainability",
    title: "Sustainability",
    number: 7,
    headline: "WE PLANT THE SEED",
    caption:
      "Seasonal and climate changes are a challenge to the “fish food” industry whether out to sea or on land. Global warming is growing at an alarming rate. That’s why we take it to heart when tackling issues of conservation and the environment. Why we prepare ahead to meet whatever challenges may come our way in order to keep our fish home, a happy one. We know that happy fish make for great tasting fish, and that a happy planet will only come if we take appropriate action now. See our mangrove plantation initiatives (here)",
    content: {
      headline: "Mangrove Conservation:",
      text:
        "Mangrove forests, along with the animal species they shelter, represent globally significant sources of biodiversity and provide humanity with valuable ecosystem services. They are used by mammals, reptiles and migratory birds as feeding and breeding grounds, and provide crucial habitats for fish and crustacean species of commercial importance. The roots of the mangrove physically buffer shorelines from the erosive impacts of ocean waves and storms. Additionally, they protect riparian zones by absorbing floodwaters and slowing down the flow of sediment-loaded river water. This allows sediments to drop to the bottom where they are held in place, thus containing potentially toxic waste products and improving the quality of water and sanitation in coastal communities. Aqquua has undergone a mangrove planting restoration project, planting more than 80 mangrove trees on our property alone and helping our farming neighbors to do the same. "
    }
  }
];
export const fishProductsInfo = {
  redsnapper: {
    fish: "American Red Snapper",
    scienceName: "Lutjanus campechanus",
    hero: images.heroImages.redsnapper,
    caption: [
      'The northern or "American" red snapper is found in the Gulf of Mexico and the southeastern Atlantic coast of the United States and much less commonly northward as far as Massachusetts. In Latin American Spanish, it is known as huachinango, pargo, or chillo. They are a prized food fish, caught commercially, as well as recreationally. It is used in Vietnamese canh chua ("Sour soup"). Red snapper is the most commonly caught snapper in the continental USA (almost 50% of the total catch), with similar species being more common elsewhere. They eat almost anything, but prefer small fish and crustaceans. Interest in recreational fishing for northern red snapper, and in the Gulf of Mexico in general, has increased dramatically. From 1995–2003, the number of Louisiana fishing charter guide license holders increased eight-fold.Researchers estimate the bycatch of young red snapper, especially by shrimp trawlers, is a significant concern.'
    ]
  },
  mahimahi: {
    fish: "Mahi-Mahi",
    scienceName: "Coryphaena hippurus",
    hero: images.heroImages.mahimahi,
    caption: [
      "The mahi-mahi or common dolphinfish is a surface-dwelling ray-finned fish found in off-shore temperate, tropical and subtropical waters worldwide. Also widely called dorado and dolphin, it is one of two members of the Coryphaenidae family, the other being the pompano dolphinfish.  Mahi-mahi can be found in the Caribbean Sea, on the west coast of North and South America, the Pacific coast of Costa Rica, the Gulf of Mexico, the Atlantic coast of Florida and West Africa, South China Sea and Southeast Asia, Hawaii, Tahiti and many other places worldwide. They are highly sought for sport fishing and commercial purposes. Sport fishermen seek them due to their beauty, size, food quality, and healthy population. Mahi-mahi is popular in many restaurants."
    ]
  },
  grouper: {
    fish: "Hybrid Grouper",
    scienceName: "Epinephelus fuscoguttatus",
    hero: images.heroImages.grouper,
    caption: [
      "The Grouper is a new type of grouper produced by fertilizing the eggs of the Tiger Grouper (Epinephelus fuscoguttatus) with the sperm of the Giant Grouper (Epinephelus lanceolatus) through the in-vitro fertilisation (IVF) technique. The first hybrid grouper was cross-bred by researches from Universiti Malaysia Sabah (UMS), Malaysia, in collaboration among researchers of the Borneo Marine Research Institute of UMS, the Fisheries Development Authority of Malaysia (LKIM) and Kinki University of Japan, represented by Prof. Dr Shigeharu Senoo of UMS."
    ]
  },
  coraltrout: {
    fish: "Coral Trout",
    scienceName: "Plectropomus leopardus",
    hero: images.heroImages.coraltrout,
    caption: [
      "The Coral Trout is a species of fish in the Serranidae family, which includes groupers and coral cod (not related to true cod), which are all characterized by having three spines on the gill cover and a large mouth lined with more than one row of sharp teeth. Native to the western Pacific Ocean, its natural habitat includes open seas and coral reefs. Coral trout are piscivorous; juveniles mostly eat crustaceans, especially prawns, and adults feed upon a variety of reef fish, particularly damselfish.",
      "Coral trout are the favorite target fish for all sectors of the fishery because they are a good food fish and command high market prices locally and overseas. The total amount of Coral Trout caught commercially in Australia in 2010 was 974 tons, the majority coming from the Coral Reef Fin Fish Fishery (Queensland)."
    ]
  },
  hirame: {
    fish: "Hirame",
    scienceName: "Paralichthys olivaceus",
    hero: images.heroImages.hirame,
    caption: [
      "An important Japanese food-fish, which attains a large size, the hirame, also known as the olive flounder, bastard halibut or Japanese halibut is a temperate marine species of large-tooth flounder native to the north-western Pacific Ocean.  It is often referred to as the Japanese flatfish or Korea(n) flatfish (광어) when mentioned in the context of those countries. It can reach a length of 41 inches and a weight of 20 lbs.  It is the most common flatfish species raised in aquaculture in Korea. They are raised in Japan and China as well. It is the most highly prized of the Japanese flounders."
    ]
  }
};
export const contactInfo = {
  title: "Contact Us",
  caption:
    "AQQUUA IS AN OPEN DOOR OPERATION. WHETHER YOU ARE A SEAFOOD CUSTOMER, RETAILER, CHEF, MEMBER OF THE PRESS OR MEDIA, OR EDUCATOR LOOKING FOR MORE INFORMATION ABOUT AQQUUA, WE CAN BE REACHED THROUGH SOCIAL MEDIA OR WITH THE BELOW INFO. WE WELCOME ALL KINDS OF INQUIRIES.",
  addresses: [
    {
      country: "US",
      title: "WeWork c/o Aqquua",
      street: "450 Lexington Avenue",
      city: "New York, NY 10017",
      phone: "+1 646 719 0377"
    },
    {
      country: "Thailand",
      title: "39 Moo 9",
      street: "T.Bangkachai A.Leam Sing",
      city: "Chanthaburi 22120",
      phone: "+ 66 98 935 7644"
    }
  ]
};
export const ribbons = images.ribbons;
