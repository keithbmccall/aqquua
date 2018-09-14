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
    id: "Farm",
    link: true
  },
  {
    title: "Fin-fish",
    color: "#5ad0ba",
    id: "Products"
  },
  {
    title: "Recipes",
    color: "#ea5924",
    id: "Recipes"
  },
  {
    title: "EatFish",
    color: "#ff2882",
    id: "Eatfish",
    link: true
  },
  {
    title: "R&D",
    color: "#e15d44",
    id: "RD"
  },
  {
    title: "Genetics",
    color: "#620c5f",
    id: "Genetics",
    link: true
  },

  {
    title: "Sustainability",
    color: "#28c900",
    id: "Sustainability",
    link: true
  },

  {
    title: "Contact",
    color: "#ffc702",
    id: "Contact"
  }
];
export const aqquuaLogo = {
  word: images.logo,
  round: images.logoRound,
  tagLine: images.tagline,
  back: images.backbutton
};
export const headerContent = {
  title: "We're Wild about Farmed ™",
  caption: "We're wild about farmed fish'",
  logo: aqquuaLogo,
  background: images.fishPrint
};
export const sectionData = [
  {
    title: "We Are",
    content: weAreContent,
    logo: images.logo
  },
  {
    backgroundImage: images.sectionals.sectionalRaceways
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
    id: "About",

    title: "Our Products",
    number: 1,
    headline: "WE TAKE OUR JOB SERIOUSLY",
    caption: [
      "Our philosophy at Aqquua is that producing a source of sustainably farmed, healthy, antibiotic and microplastic free fin-fish is not only globally necessary, but financially and technically feasible.",
      "Our mission is to develop the innovative and scalable technology and best practices to meet this global need and bring a sublime seafood experience to the customer’s table.",
      "We’ve succeeded."
    ]
  },
  {
    backgroundImage: images.sectionals.sectionalGrouper
  },
  
  {
    clickImage: " ",
    id: "Farm",
    number: 2,
    title: "Non-Conformists",
    headline: "WE ARE NON CONFORMISTS",
    caption: [
      "Combatting the full breadth of challenges to creating the next generation of aquaculture meant acknowledging the well-deserved, negative-consumer sentiment toward existing sources of farmed fish.",
      "Beyond the technical and management innovations necessary to grow a better farmed fish, Aqquua has pioneered unprecedented degrees of transparency at all stages of the aquaculture process.",
      "Making the transition from a “wild caught” fish to a farmed one will ultimately be achieved by earning public trust.",
      "Our collective health, as well as saving of our oceans depends on it."
    ]
  },
  {
    caption: [
      "It is a ook like readable English.  editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "
    ],
    id: "Recipes",
    images: images.recipesImages
  },
  {
    id: "Eat-fish",
    title: "Eat Fish",
    eatFishTag: images.eatfishicons,
    number: 3,
    headline: "WE'RE DOING IT IN STYLE",
    caption: [
      "Showing our true colors in the way we raise our fish is our way to promote authenticity, transparency and traceability.",
      "That’s why we have become proud members of the EATFISH platform, whose sole purpose is to track fish from our farm directly to your table."
    ],
    content:
      "The EATFISH platform is useful as an educational tool that lets our customer verify, learn and enjoy their purchase in a truly and innovative way by successfully providing them with 100% transparency, sustainability and traceability information. Eat Fish sole purpose is to efficiently track fish from our farm all the way to our end users table. Eat Fish enables our customer to scan the Eat Fish tag attached to our fish, which has a QR and serial code. After scanning any given fish at the retailer, our customers will find an actual image of their specific fish potential purchase, nutritional facts and farm and country of origin. It also provides a recipe api leading our customers to great food recipes for the specific fish purchase. Once at home you can submit a video of your sea-food cooking experience from your very own kitchen. This allows us to connect to our customers and get immediate reviews that can help us to best serve them in the future. We sell our products under the trade mark “Sea food for what it is”… We don’t sell you a story, we prefer to hear yours!"
  },
  {
    backgroundImage: images.sectionals.sectionalRuler
  },
  {
    id: "RD",
    number: 4,
    headline: "WE NURTURE LEADERS",
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
    headline: "WE ARE DESIGNING THE FUTURE",
    caption: [
      "Conceptualizing and manufacturing a new RAS is at the core of the future of aquaculture. Aqquua is developing a modular RAS that can be constructed in a cost-effective way with the added flexibility to move assets from one site to another, as necessary.",
      "Our experts are exploring innovations to re-circulate water economically and efficiently, while finding the best procedures to manage waste-water in an environmentally conscious and responsible way."
    ]
  },
  {
    backgroundImage: images.sectionals.sectionalHirame
  },
  {
    clickImage: " ",
    id: "Genetics",
    number: 6,
    headline: "WE ARE INNOVATORS",
    caption: [
      "We are actively contributing to the development of scientifically comprehensive research.",
      "This work is integral to positioning diversity in fin-fish offerings, and the marine aquaculture industry, as the dominant contributor of environmentally sustainable marine protein worldwide.",
      "To this end, Aqquuas’ scientific mission is to integrate every breakthrough achieved, towards improving the commercial viability of the subject species within the local and global aquaculture industry."
    ]
  },

  {
    id: "Sustainability",
    title: "Sustainability",
    number: 7,
    headline: "WE PLANT THE SEED",
    caption: [
      "The earth is warming at an alarming rate and as a consequence seasonal and climate change are a challenge to the “fish food” industry out at sea.",
      "We raise our fish in controlled, clean and self-contained environment, with no external effects.",
      "Beyond our minimal impact promise, we’ve gone further still, replanting mangroves, in our own back yard.",
      "To learn how you can contribute to our initiatives, please visit our sustainability page."
    ],
    content: {
      headline: "Mangrove Conservation:",
      text:
        "Mangrove forests, along with the animal species they shelter, represent globally significant sources of biodiversity and provide humanity with valuable ecosystem services. They are used by mammals, reptiles and migratory birds as feeding and breeding grounds, and provide crucial habitats for fish and crustacean species of commercial importance. The roots of the mangrove physically buffer shorelines from the erosive impacts of ocean waves and storms. Additionally, they protect riparian zones by absorbing floodwaters and slowing down the flow of sediment-loaded river water. This allows sediments to drop to the bottom where they are held in place, thus containing potentially toxic waste products and improving the quality of water and sanitation in coastal communities. Aqquua has undergone a mangrove planting restoration project, planting more than 80 mangrove trees on our property alone and helping our farming neighbors to do the same. "
    }
  },
  {
    backgroundImage: images.sectionals.sectionalMangroves
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
  title: "Hello",
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
export const researchInfo = {
  um: {
    logo: images.schools.miami,
    name: "um",
    color: "#f37224",
    title: "Rosenstiel School of Marine and Atmospheric Science",
    images: images.umImages.images,
    bigImage: images.umImages.bigImage,
    caption: [
      "Our collaborative research agreement with the University of Miami is helping to advance aquaculture technology for high-value marine fish such as Tuna and Hirame (Japanese flounder) at the UM experimental fish hatchery.",
      "The agreement between Aqquua and the UM Rosensteil School-based aquaculture program is aimed at improving hatchery and other aquaculture technologies of a number of economically valuable species that have never been developed elsewhere in the world.",
      "'This research agreement will help advance sustainable aquaculture research at a time when it is critically needed to support increased demand for highly quality protein to feed the worlds growing population,' said UM Rosensteil School professor Dan Benetti, director of the UM aquaculture program. “We are pleased by Aqquuas’ commitment to advance aquaculture technology in a sustainable way."
    ]
  },
  burapha: {
    logo: images.schools.burapha,
    name: "burapha",
    color: "#ffdf10",
    title: "Burapha University",
    bigImage: images.buraphaImages.bigImage,
    images: [],
    caption: [
      "Aqquua has a Memorandum of Understanding with the University of Burapha to help us with egg producing brood-stock and the advancement of our larval rearing efforts in Thailand.",
      "Aqquuas’ commitment to nurturing leaders in aquaculture has prompted the company to provide scholarships in aquaculture studies and has also moved to hire graduate students from the University to work at our Aqquua farm. This allows for a smooth transition of a well educated aquaculture work force directly into a state of the art sustainable farming facility.",
      "Our objective at the Burapha hatchery is to produce locally grown Aqquua Grouper fingerlings that will go directly into our commercial grow-out at the farm. In this way we secure the best quality fingerlings that will guarantee optimal growth of our fish while avoiding any prolonged travel."
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
  titleImage: images.farmImages.farm1,

  video: "https://player.vimeo.com/video/281181900"
};
export const geneticsInfo = {
  title: "DIVERSITY IN FIN FISH IS THE FUTURE OF AQUACULTURE",
  caption: [
    "Aqquua has engaged the University of Miami’s Rosenstiel School of Marine and Atmospheric Science (RSMAS) and its Aquaculture Program to help develop sustainable marina aquaculture in the United States. Through this partnership, Aqquua has strategically positioned itself to meet ever increasing demand for high quality seafood. The University of Miami Experimental Hatchery (UMEH) has commercial production capacity for a number of different marine finfish species, and has proven hatchery production methods for Japanese flounder and mahi-mahi that are ready for commercialization. Full cycle production of Japanese flounder, from egg to market, has been conducted at UMEH and samples have been sent out to chefs around the country for test marketing of the product. Aqquua and UM have been working on developing new markets for mahi-mahi that capitalize on the extraordinary growth rates of this species. At UMEH, juvenile mahi-mahi (~45 days old) have been harvested and prepared as a canned sardine alternative while 90 day old individuals have been well received by local chefs as a new plate size fish offering. The next step with these species for Aqquua and UM is to identify economically viable methods for commercial-scale growout in the United States. One aspect of this initiative could include implementation of an economically viable land-based recirculating aquaculture system (RAS) for the production of these species. UM and Aqquua continue to collaborate on efforts to improve the economic and ecological efficiency of growing marine fish in the US and abroad, including recent work by the UM Aquaculture nutritionist who has been assisting Aqquua’s Thailand operation with a custom grouper feed formulation to help improve the aquaculture performance of the fish.",
    "Aqquua is also looking to the future with research aimed at developing new marine species for commercial production by addressing a major industry bottleneck: consistent availability of marine finfish juveniles for growout. Currently two new state of the art RAS maturation tanks for American red snapper and blackfin tuna broodstock are about to come online at UMEH. Once successful spawning begins, the eggs will be collected, stocked for hatching, and subsequent larval rearing trials will be conducted. Among other things, UMEH will investigate the effectiveness of different live prey items at first feeding, optimal photoperiod, and commercially-viable live feeds regimes for these species. The end goal is to establish repeatable protocols that allow for the consistent production of commercial quantities of red snapper and blackfin tuna."
  ],
  titleColor: "#620c5f",
  titleImage: images.geneticsImages.bigImage,
  images: images.geneticsImages.images
};
export const eatFishInfo = {
  video: "https://player.vimeo.com/video/210481738?title=0&byline=0&portrait=0",
  backgroundColor: "#ff2882",
  titleColor: "#ff2882",
  title: "SEA FOOD FOR WHAT IT IS",
  subTitle: "WE DON’T SELL YOU A STORY, WE PREFER TO HEAR YOURS!",
  caption: [
    "Aqquua has become a proud member of EATFISH™ The platform is the first hardware/software supply chain tool to not only trace, but verify a product from source to destination in a manner designed to boost consumer and retailer faith in their distribution partners as well as to drive sales through consumer education.",
    "The platform is empowering as an authentication tool that lets the customer, verify, learn and enjoy their fish purchase in a truly new and innovative way. It successfully provides them with 100% transparency, sustainability and traceability information.  This level of authenticity is made possible by photographing, time/date stamping, if desired, and the weighing of each individual fish at time of processing.",
    "EATFISH™ provides customizable tools to consumers at every level to be able to go as deep as they wish into the story of their purchase, from the moment of harvest, to the point of sale, and every stop in between.",
    "This sets EATFISH apart from any other traceability platform currently on the market and why we decided to join.",
    "The sole purpose of EATFISH™ is to efficiently track fish from the farm all the way to the end users kitchen while adding an easy to use and convenient way to provide the best seafood cooking experience."
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
  bigImage: images.sustainabilityImages.bigImage,
  titleImage: images.sustainabilityImages.titleImage,
  images: images.sustainabilityImages.images
};
export const recipesTipsInfo = {
  title: "Five Must-Try Techniques",
  content: [
    {
      headline: "Pan Searing",
      caption: [
        "Searing gives fish a tasty, caramelized crust on the outside while the interior stays moist. It’s ideal for skin-on fillets since high heat and oil crisp up the skin nicely, making it particularly tasty. Searing is best done in a skillet over direct heat on the stovetop; it’s simple and speedy. You’ll want a thin layer of oil or fat in the pan to keep the fish from sticking.",
        "Starting with a very hot pan is key: Your oil should be so hot it almost smokes. Put fillets in skin-side down. Once the fish is in, give your pan a shake by the handle just strong enough to jiggle the fish — this will help keep it from sticking. Cook it until the skin is crispy and the sides of the fish have turned mostly opaque before flipping; you might need to turn the heat down so it doesn't overcook.",
        "Aqquua Hirame, Aqquua Grouper, trout fillets and salmon."
      ]
    },
    {
      headline: "Roasting",
      caption: [
        "Roasting uses the dry heat of your oven to cook fish. Temperature is easy to control during roasting, and the heat is even and consistent, making it one of the easiest techniques for cooking fish. It’s ideal for thicker, denser fillets as well as for whole fish. Another bonus: There’s no spattering, so cleanup is a snap.",
        "Using a heavy, oven-proof skillet, brown your fish first on the stove-top, then let it finish cooking through inside the stove. This gives you the best of both worlds: A crunchy, browned exterior and evenly cooked interior. If you’re roasting a whole fish, a few slashes cut into the fish’s sides help it cook more evenly.",
        "Aqquua Grouper, mahi-mahi, salmon, halibut, monkfish, or any whole fish."
      ]
    },
    {
      headline: "Steaming",
      caption: [
        "Moist heat circulates around the fish during steaming, helping to keep it tender and juicy. I like this technique for the way the pure flavor and texture of the fish is preserved. It also requires no added fat, so you get an exceptionally lean finished dish.",
        "A good trick is to put flavoring right into the water you’re steaming over. I like to use aromatic ingredients like star anise, wine, soy sauce, lemongrass and herbs. The aroma will be fantastic, and your fish will be subtly flavored.",
        "Aqquua Grouper, cod, Aqquua Hirame, or any small whole fish like whole snapper or black sea bass."
      ]
    },
    {
      headline: "Grilling",
      caption: [
        "Grilling has you cooking directly over your heat source, and it’s fantastic for imparting subtle smoky flavor while giving you a crisp exterior. A very hot grill is ideal, although you don’t want to cook fish over the very hottest area: Place fish on a slightly cooler section to prevent charring and flare-ups.",
        "Keep fish from sticking by first making sure your grates are very clean, then brushing them lightly with oil or drizzling oil directly on your fish. For great grill marks, let the fish sit on the grill for 1 to 2 minutes, then rotate it a quarter turn. After you flip the fish, do the same on the other side.",
        "Tuna, swordfish, salmon, bluefish, striped bass, whole snapper or just about any whole fish."
      ]
    },
    {
      headline: "Cook it tonight",
      caption: [
        "Poaching has you cooking your fish directly in liquid. This keeps it very tender and infuses it with a huge amount of flavor. As an added bonus, your poaching liquid can be your sauce. This technique is tops for delicate fish that needs to be cooked with extra love to preserve their texture.",
        "To keep fillets from curling during poaching, use a sharp knife to score the skin-side of each fillet, making very shallow cuts at about 1-inch intervals. And be sure to poach with the liquid at a low simmer — not a rolling boil — for even cooking.",
        "Try it with: Aqquua Hirame,sole, salmon, halibut, cod."
      ]
    }
  ],
  title2: "Two More Secrets for Delicious Fish",
  content2: [
    {
      headline: "Know When It’s Done",
      caption:
        "It’s easy: Just use a skewer or cake tester to poke your fish — if it goes through with no resistance it’s done. If you want a slightly more rare fillet (for salmon or tuna, for instance), your fish will be medium when the skewer meets just a bit of resistance at the center. Start testing a little before your recipe’s recommended cooking time is up."
    },
    {
      headline: "Flip it Right",
      caption:
        "Use a good spatula: A long, wide spatula fits easily under most fillets, and one that’s a little flexible will slip under the fish easily. If you’re flipping a whole fish or a really big fillet, try using two spatulas, one under each half. Flip fish just once so there’s less chance it’ll break."
    }
  ]
};
