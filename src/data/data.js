import images from "./images";
const weAreContent = [
  {
    content: "healthy",
    color: "#e15d44"
  },
  {
    content: "fresh",
    color: "#5ad0ba"
  },
  {
    content: "tasty",
    color: "#ffc702"
  },
  {
    content: "dynamic",
    color: "#4d448a"
  },
  {
    content: "education",
    color: "#c3447a"
  },
  {
    content: "experts",
    color: "#015b97"
  },
  {
    content: "scientists",
    color: "#f32e37"
  },
  {
    content: "farmers",
    color: "#9ce881"
  },
  {
    content: "innovation",
    color: "#ac4e4e"
  },
  {
    content: "clean",
    color: "#d9dc85"
  },
  {
    content: "food",
    color: "#00a7c7"
  },
  {
    content: "fin-fish",
    color: "#296525"
  },
  {
    content: "technology",
    color: "#66848f"
  },
  {
    content: "creative",
    color: "#00B6D9"
  },
  {
    content: "aquaculture",
    color: "#f16c4d"
  },
  {
    content: "authentic",
    color: "#ff2882"
  },
  {
    content: "lifestyle",
    color: "#55559b"
  },
  {
    content: "genetics",
    color: "#88c172"
  },
  {
    content: "family",
    color: "#dc3e71"
  },
  {
    content: "sustainable",
    color: "#4c3f87"
  },
  {
    content: "love",
    color: "#f32e37"
  },
  {
    content: "transparency",
    color: "#fadc00"
  },
  {
    content: "stewardship",
    color: "#00bfad"
  },
  {
    content: "passionate",
    color: "#ff5768"
  },
  {
    content: "diversity",
    color: "#da91be"
  },
  {
    content: "non-conformists",
    color: "#36be42"
  },
  {
    content: "omega-3's",
    color: "#1e7f86"
  },
  {
    content: "quality",
    color: "#015b97"
  },
  {
    content: "best practices",
    color: "#f55438"
  }
];

export const navbarLinks = [
  {
    title: "About",
    color: "#16639f",
    id: "About"
  },
  {
    title: "Farm",
    color: "#f32e37",
    id: "Farm"
  },
  {
    title: "Fin-fish",
    color: "#5ad0ba",
    id: "Products"
  },
  {
    title: "Recipes",
    color: "#573b30",
    id: "Recipes"
  },
  {
    title: "EatFish",
    color: "#ff2882",
    id: "Eat-fish"
  },
  {
    title: "R&D",
    color: "#e15d44",
    id: "RD"
  },
  {
    title: "Genetics",
    color: "#620c5f",
    id: "Genetics"
  },

  {
    title: "Sustainability",
    color: "#28c900",
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
  title: "We're Wild about Farmed ™",
  caption: "We're wild about farmed fish'",
  logo: images.logo,
  background: images.fishPrint
};
export const sectionData = [
  {
    title: "We Are",
    content: weAreContent,
    logo: images.logo
  },
  // {
  //   title: "Aqquua",
  //   caption:
  //     "At aqquua™ we engage in best practices and device technological innovations in RAS and R&D to raise the bar in aquaculture at every level. Our fin-fish products are raised in a controlled environment and are 100% antibiotic and hormone free. We are committed to bring the freshest, highest quality seafood experience to the table."
  // },
  // { title: "placeholder" },
  {
    id: "About",

    title: "Our Products",
    number: 1,
    headline: "WE TAKE OUR JOB SERIOUSLY",
    caption: [
      "The Aqquua philosophy is that a source of sustainably-farmed, heathful, and antibiotic- and hormone-free fin-fish is not only globally necessary, but financially and technically feasible.",
      "Our mission is was to develop the innovative and scalable technology and best practices to meet this global need and bring a sublime seafood experience to the customer’s table.",
      "We’ve succeeded."
    ]
  },

  {
    id: "Products",
    title: "Our Products",
    caption: [
      "Our desire to push the boundaries of what has been possible in aquaculture is motivated by growing global protein needs and the challenges this growth brings.",
      "We want to live in a world where healthful and delicious fish are produced sustainably and accessible to families, across the globe.",
      "Aqquua has surpassed existing standards of aquaculture to produce a truly chemical- and hormone-free farm-raised fish, at low cost and with zero environmental impact. This achievement is a reflection of both our mission and the team of smart and dedicated people, across the world, we've built to fulfill it."
    ],
    fish: images.productsFish
  },
  {
    id: "Farm",
    number: 2,
    title: "Non-Conformists",
    headline: "WE ARE NON CONFORMISTS",
    caption: [
      "Combatting the full breadth of challenges to creating the next generation of aquaculture meant acknowledging the well-deserved, negative-consumer sentiment toward existing sources of farmed fish.",
      "Beyond the technical and management innovations necessary for a better farmed product, Aqquua has pioneered unprecedented degrees of transparency at all stages of the aquaculture process.",
      "Making the transition from a “wild caught” product to a farmed one will ultimately be achieved by earning public trust.",
      "Our collective health as well as saving of our oceans depends on it."
    ]
  },
  {
    caption: "Recipes",
    id: "Recipes",
    images: images.recipesImages
  },
  {
    id: "Eat-fish",
    title: "Eat Fish",
    eatFishTag: images.eatfishicons,
    number: 3,
    headline: "DOING IT IN STYLE",
    caption: [
      "Showing our true colors in the way we raise our fish is our way to promote authenticity, transparency and traceability.",
      "That’s why we have become proud members of the EATFISH platform, whose sole purpose is to track fish from our farm directly to your table."
    ],
    content:
      "The EATFISH platform is useful as an educational tool that lets our customer verify, learn and enjoy their purchase in a truly and innovative way by successfully providing them with 100% transparency, sustainability and traceability information. Eat Fish sole purpose is to efficiently track fish from our farm all the way to our end users table. Eat Fish enables our customer to scan the Eat Fish tag attached to our fish, which has a QR and serial code. After scanning any given fish at the retailer, our customers will find an actual image of their specific fish potential purchase, nutritional facts and farm and country of origin. It also provides a recipe api leading our customers to great food recipes for the specific fish purchase. Once at home you can submit a video of your sea-food cooking experience from your very own kitchen. This allows us to connect to our customers and get immediate reviews that can help us to best serve them in the future. We sell our products under the trade mark “Sea food for what it is”… We don’t sell you a story, we prefer to hear yours!"
  },

  {
    id: "RD",
    number: 4,
    headline: "NURTURING LEADERS",
    caption: [
      "We are passionate about educating the next leaders in aquaculture. Bringing together academic knowledge and commercial aquaculture experience is the road to the future of aquaculture.",
      "Our strategic partnerships with the University of Miami and Burapha University, Thailand, have helped lay the necessary research foundation that informs our commercial strategy and allows us to be an exemplar of eco-friendly and sustainable business practices."
    ],
    schoolEmblems: [
      {
        pic: images.schools.miami, //250
        name: "um"
      },
      {
        pic: images.schools.burapha, //250
        name: "burapha"
      }
    ]
  },
  {
    backgroundImage: images.sectionals.sectionalFishTank
  },
  {
    number: 5,
    headline: "DESIGNING THE FUTURE",
    caption: [
      "Conceptualizing and manufacturing a new RAS is at the core of the future of aquaculture. Aqquua is developing a modular RAS that can be constructed in a cost-effective way with the added flexibility to move assets from one site to another, as necessary.",

      "Our experts are exploring innovations to re-circulate water economically and efficiently, while with finding the best procedures to manage waste-water in an environmentally conscious and responsible way."
    ]
  },
  {
    id: "Genetics",
    number: 6,
    headline: "WE ARE INNOVATORS",
    caption: [
      "We are actively contributing to the development of scientifically comprehensive genetics research.",
      "This work is integral to positioning diversity in fin-fish offerings, and the marine aquaculture industry, as the dominant contributor of environmentally sustainable marine protein worldwide.",
      "To this end, Aqquuas’ scientific mission is to integrate every genotypic and phenotypic breakthrough achieved, towards improving the commercial viability of the subject species within the local and global aquaculture industry."
    ]
  },
  {
    backgroundImage: images.sectionals.sectionalHirame
  },

  {
    id: "Sustainability",
    title: "Sustainability",
    number: 7,
    headline: "WE PLANT THE SEED",
    caption: [
      "The earth is warming at an alarming rate and as a consequence seasonal and climate change are a challenge to the “fish food” industry out at sea.",
      "We raise our fish in controlled, clean and self-contained environment, with no external effects.",
      "Beyond our zero-environmental impact promise, we’ve gone further still, replanting mangroves, in our own back yard.",
      "To learn how you can contribute to our initiatives, please visit our conservation and environmental improvements page."
    ],
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
    color: "#f32e37",
    scienceName: "Lutjanus campechanus",
    hero: images.heroImages.redsnapper,
    caption: [
      'The northern or "American" red snapper is found in the Gulf of Mexico and the southeastern Atlantic coast of the United States and much less commonly northward as far as Massachusetts. In Latin American Spanish, it is known as huachinango, pargo, or chillo. They are a prized food fish, caught commercially, as well as recreationally. It is used in Vietnamese canh chua ("Sour soup"). Red snapper is the most commonly caught snapper in the continental USA (almost 50% of the total catch), with similar species being more common elsewhere. They eat almost anything, but prefer small fish and crustaceans. Interest in recreational fishing for northern red snapper, and in the Gulf of Mexico in general, has increased dramatically. From 1995–2003, the number of Louisiana fishing charter guide license holders increased eight-fold.Researchers estimate the bycatch of young red snapper, especially by shrimp trawlers, is a significant concern.'
    ]
  },
  mahimahi: {
    fish: "Mahi-Mahi",
    color: "#5ad0ba",
    scienceName: "Coryphaena hippurus",
    hero: images.heroImages.mahimahi,
    caption: [
      "The mahi-mahi or common dolphinfish is a surface-dwelling ray-finned fish found in off-shore temperate, tropical and subtropical waters worldwide. Also widely called dorado and dolphin, it is one of two members of the Coryphaenidae family, the other being the pompano dolphinfish.  Mahi-mahi can be found in the Caribbean Sea, on the west coast of North and South America, the Pacific coast of Costa Rica, the Gulf of Mexico, the Atlantic coast of Florida and West Africa, South China Sea and Southeast Asia, Hawaii, Tahiti and many other places worldwide. They are highly sought for sport fishing and commercial purposes. Sport fishermen seek them due to their beauty, size, food quality, and healthy population. Mahi-mahi is popular in many restaurants."
    ]
  },
  grouper: {
    fish: "Hybrid Grouper",
    color: "#ffc702",
    scienceName: "Epinephelus fuscoguttatus",
    hero: images.heroImages.grouper,
    caption: [
      "The Grouper is a new type of grouper produced by fertilizing the eggs of the Tiger Grouper (Epinephelus fuscoguttatus) with the sperm of the Giant Grouper (Epinephelus lanceolatus) through the in-vitro fertilisation (IVF) technique. The first hybrid grouper was cross-bred by researches from Universiti Malaysia Sabah (UMS), Malaysia, in collaboration among researchers of the Borneo Marine Research Institute of UMS, the Fisheries Development Authority of Malaysia (LKIM) and Kinki University of Japan, represented by Prof. Dr Shigeharu Senoo of UMS."
    ]
  },
  coraltrout: {
    fish: "Coral Trout",
    color: "#ec5d73",
    scienceName: "Plectropomus leopardus",
    hero: images.heroImages.coraltrout,
    caption: [
      "The Coral Trout is a species of fish in the Serranidae family, which includes groupers and coral cod (not related to true cod), which are all characterized by having three spines on the gill cover and a large mouth lined with more than one row of sharp teeth. Native to the western Pacific Ocean, its natural habitat includes open seas and coral reefs. Coral trout are piscivorous; juveniles mostly eat crustaceans, especially prawns, and adults feed upon a variety of reef fish, particularly damselfish.",
      "Coral trout are the favorite target fish for all sectors of the fishery because they are a good food fish and command high market prices locally and overseas. The total amount of Coral Trout caught commercially in Australia in 2010 was 974 tons, the majority coming from the Coral Reef Fin Fish Fishery (Queensland)."
    ]
  },
  hirame: {
    fish: "Hirame",
    color: "#9ce881",
    scienceName: "Paralichthys olivaceus",
    hero: images.heroImages.hirame,
    caption: [
      "An important Japanese food-fish, which attains a large size, the hirame, also known as the olive flounder, bastard halibut or Japanese halibut is a temperate marine species of large-tooth flounder native to the north-western Pacific Ocean.  It is often referred to as the Japanese flatfish or Korea(n) flatfish (광어) when mentioned in the context of those countries. It can reach a length of 41 inches and a weight of 20 lbs.  It is the most common flatfish species raised in aquaculture in Korea. They are raised in Japan and China as well. It is the most highly prized of the Japanese flounders."
    ]
  },
  tuna: {
    fish: "Blackfin Tuna",
    color: "#16639f",
    scienceName: "Thunnus atlanticus",
    hero: images.heroImages.tuna,
    caption: [
      "This is a pelagic, schooling fish that generally feeds near the surface. Its diet consists of small fishes, squid, crustaceans, and plankton. An excellent light tackle species, it can be taken by trolling or casting small baits or lures, including ballyhoo, mullet and other small fishes as well as strip baits, spoons, feathers, jigs, or plugs; or by live bait fishing from boats at the surface of deep waters one to two miles offshore. It has some local commercial importance, but is predominantly an angler's fish. It is a spunky game species and the flesh is of good quality and flavor."
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
export const researchInfo = {
  um: {
    logo: images.schools.miami,
    name: "um",
    color: "#f37224",
    title: "Rosenstiel School of Marine and Atmospheric Science",
    images: images.umImages,
    caption: [
      "OUR COLLABORATIVE RESEARCH AGREEMENT WITH THE UNIVERSITY OF MIAMI IS HELPING TO ADVANCE AQUACULTURE TECHNOLOGY FOR HIGH-VALUE MARINE FISH SUCH AS TUNA AND HIRAME (JAPANESE FLOUNDER) AT THE UM EXPERIMENTAL FISH HATCHERY.",
      "THE THREE-YEAR AGREEMENT BETWEEN AQQUUA AND THE UM ROSENSTIEL SCHOOL-BASED AQUACULTURE PROGRAM IS AIMED AT IMPROVING HATCHERY AND OTHER AQUACULTURE TECHNOLOGIES OF A NUMBER OF ECONOMICALLY VALUABLE SPECIES THAT HAVE NEVER BEEN DEVELOPED ELSEWHERE IN THE WORLD.",
      '"THIS RESEARCH AGREEMENT WILL HELP ADVANCE SUSTAINABLE AQUACULTURE RESEARCH AT A TIME WHEN IT IS CRITICALLY NEEDED TO SUPPORT INCREASING DEMAND FOR HIGH-QUALITY PROTEIN TO FEED THE WORLD’S GROWING POPULATION,” SAID UM ROSENSTIEL SCHOOL PROFESSOR DAN BENETTI, DIRECTOR OF THE UM AQUACULTURE PROGRAM. “WE ARE PLEASED BY AQQUUA’S COMMITMENT TO ADVANCE AQUACULTURE TECHNOLOGY IN A SUSTAINABLE WAY."'
    ]
  },
  burapha: {
    logo: images.schools.burapha,
    name: "burapha",
    color: "#ffdf10",
    title: "Burapha University",
    images: [],
    caption: [
      "AQQUUA HAS AN M.O.U. WITH THE UNIVERSITY OF BURAPHA TO HELP US WITH EGG PRODUCING BROODSTOCK AND ADVANCEMENT OF OUR LARVAL REARING EFFORTS IN THAILAND. AQQUUA HAS ALSO PROVIDED SCHOLARSHIPS AND HAS HIRED GRADUATE STUDENTS FROM THE UNIVERSITY OF BURAPHA TO FURTHER THESE EFFORTS."
    ]
  }
};
export const farmInfo = {
  caption: [
    "Aqquua Farm is located on a peaceful 22 acres property in Bangachai Chanthaburi,Thailand, just a three hours drive from Cosmopolitan Bangkok.",
    "The farm includes a hatchery, quarantine, nursery, and multiple grow-out ponds equipped with raceway technology to eliminate any stress to our fish at time of harvest.",
    "Intake filtration and waste-water treatment technology systems are employed to give our species a controlled and clean growing habitat.",
    "Here we produce nutritious Aqquua Grouper, and after just twenty-two months from breaking ground, and as of July 2018, we have sampled and sold over 60 tons of our Grouper to customers in the US, Thailand, Canada, China, and Hong Kong."
  ],
  title: "sustainable farming at aqquua",
  titleColor: "#f32e37",

  video: "https://player.vimeo.com/video/281181900"
};
export const geneticsInfo = {
  title: "DIVERSITY IN FIN FISH IS THE FUTURE OF AQUACULTURE",
  caption: [
    "dreamcatcher swag YOLO occupy vegan cray wayfarers mumblecore keytar whatever Austin vinyl fingerstache Banksy pop-up organic ugh leggings roof party try-hard keffiyeh disrupt photo booth viral Williamsburg Pitchfork tofu stumptown McSweeney's pickled seitan tote bag artisan biodiesel shabby chic pour-over Thundercats Shoreditch plaid Tonx food truck mustache quinoa sriracha aesthetic bicycle rights bitters fixie squid raw denim kitsch cliche forage Helvetica brunch Etsy",
    "post-ironic farm-to-table chillwave four loko polaroid paleo meh actually Tumblr tousled small batch cornhole pug synth Kickstarter twee literally lomo Schlitz Portland chambray sartorial put a bird on it PBR&B mixtape wolf normcore XOXO heirloom DIY church-key direct trade  sustainable Intelligentsia gentrify craft beer umami 8-bit selvage gluten-free ennui Wes Anderson narwhal flexitarian deep v cred beard kale chips bespoke single-origin coffee hoodie PBR chia before they sold out skateboard blog butcher jean shorts selfies tattooed art party readymade master cleanse VHS retro kogi Marfa yr Godard Cosby sweater authentic Truffaut salvia cardigan you probably haven't heard of them lo-fi Carles gastropub asymmetrical Brooklyn fashion axe High Life Pinterest Vice street art iPhone semiotics scenester locavore Neutra letterpress 3 wolf moon crucifix banjo ethical hashtag Blue Bottle hella pork belly mlkshk drinking vinegar slow-carb irony fap +1 trust fund messenger bag American Apparel banh mi meggings freegan fanny pack next level Echo Park Bushwick 90's typewriter distillery flannel Odd"
  ],
  titleColor: "#620c5f",
  images: images.geneticsImages
};
export const eatFishInfo = {
  backgroundColor: "#ff2882",
  titleColor: "#ff2882",
  title: "SEE FOOD FOR WHAT IT IS",
  subTitle: "WE DON’T SELL YOU A STORY, WE PREFER TO HEAR YOURS!",
  caption: [
    "The Eat Fish platform is useful as an educational tool that lets you the customer verify, learn and enjoy your purchase in a truly and innovative way by successfully providing you with 100% transparency, sustainability and traceability information.  EATFISH's sole purpose is to efficiently track fish from our farm all the way to your table."
  ],
  list: {
    title: "This is how it works:",
    closing: "ITS THAT SIMPLE!",
    list: [
      "Scan the EATFISH tag on your fish of choice",
      "On your phone you will see an image of that exact fish at time of harvest",
      "See day and time of harvest",
      "See nutritional information",
      "See fantastic recipes for your fish preparation",
      "Send us a video from your very own kitchen telling us about your seafood experience"
    ]
  }
};
export const sustainabilityInfo = {
  titleColor: "#28c900",
  title: "SUSTAINABILITY, CONSERVATION & THE ENVIRONMENT.",
  caption: [
    "Mangroves are extremely important to the coastal ecosystems they inhabit. Physically, they serve as a buffer between marine and terrestrial communities and protect shorelines from damaging winds, waves, and floods. Mangrove thickets improve water quality by filtering pollutants and trapping sediments from the land, and they reduce coastal erosion. Ecologically, they provide habitat for a diverse array of terrestrial organisms, and many species of coastal and offshore fish and shellfish rely exclusively on mangroves as their breeding, spawning, and hatching grounds. Because of their high salt tolerance, mangroves are often among the first species to colonize mud and sandbanks flooded by seawater, but an increase in coastal development and altered land use led to a decline in global populations.",
    "Aqquua has undergone a mangrove planting restoration project, planting more than 80 mangrove trees on our property alone. Our mission is to spearhead an effort to get our farming neighbors to do the same along their coast-line.",
    "To make donations to the Aqquua mangrove initiative please donate here: "
  ],
  images: images.sustainabilityImages
};
