import {
  Settings,
  FitnessCenter as Sport,
  Spa as WellBeing,
  Restaurant as Nutrition,
  Feedback,
  Info as Conditions,
  ExitToApp as Logout,
  Home,
} from "@material-ui/icons";
import { ReactComponent as Relaxation } from "../assets/images/relaxation.svg";

export const pages = {
  home: {
    key: "MY_PAGE",
    value: "/",
    title: "Meine Seite",
    icon: <Home />,
  },
  favorites: {
    value: "favorites",
    content: [
      {
        type: "Video",
        id: "1",
        tags: ["fit", "zwischendrin"],
        title:
          "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
        duration: "15:35 min",
        src: "https://www.youtube.com/embed/8ZAe3JETvkI",
        favorite: true,
      },
      {
        type: "Audio",
        id: "2",
        tags: ["tag1", "tag2"],
        title: "Traumreise auf eine einsame Insel",
        duration: "03:34 min",
        favorite: false,
      },
      {
        type: "Text",
        id: "3",
        tags: ["tag1", "tag2", "tag3"],
        title: "Spielend gesunde Ernährung",
        duration: "",
        favorite: true,
      },
      {
        type: "Audio",
        id: "4",
        tags: [],
        title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
        duration: "03:34 min",
        favorite: true,
      },
    ],
  },

  relaxation: {
    key: "RELAXATION_PAGE",
    value: "relaxation",
    title: "Entspannung",
    icon: <Relaxation />,
    subcategories: [
      {
        title: "Achtsamkeit",
        text: "kjhfas sdfh asdf adf af dsfjh sdfiu af kjdsfh vj jh adjfh ala",
        value: "mindfulness",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Meditation",
        text: "kjhfas sdfh asdf adf af dsfjh sdfiu af kjdsf",
        value: "meditation",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Yoga",
        text: "test tes jkhdf dfkjh nbvja jhdfnc kajsd ivh dksfjh  kjvhds kjdh",
        value: "yoga",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "PMR",
        text: "jhf asdjfh akjdfh nueui  kjdfhiu eiur wiu skjdf ieu",
        value: "progressive-muscle-relaxation",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Autogenes Training",
        text: "kjdsfh jd akh h qwiuez kjdfh nbdfj kjhdf njkdf skdjfh ne jdhf",
        value: "autogenous-training",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Körperreisen",
        text: "hdf kjdsfh kjshd asdj dnjfk dsfjh dfks",
        value: "body-travel",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Qi Gong",
        text: "djhf sdkfjh njkd",
        value: "qi-gong",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
    ],
  },

  fitness: {
    key: "FITNESS_PAGE",
    value: "fitness",
    title: "Fitness",
    icon: <Sport />,
    subcategories: [
      {
        title: "Workouts",
        text: "kjhdf kjshd  hkjdf kjhdf",
        value: "workouts",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Yoga",
        text: "kjhdfjf jdhf kjhd asdjh  kjhf kjh kjh kjhkjh kjh asdjh kjh sd",
        value: "yoga",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Gesundheit",
        text: "jsdhf kjdhf ksjhd kjhd ddhhdsj akjs",
        value: "health",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
    ],
  },

  wellbeing: {
    key: "WELL_BEING_PAGE",
    value: "wellbeing",
    title: "Wohlbefinden",
    icon: <WellBeing />,
    subcategories: [
      {
        title: "Schlaf",
        text: "hdf kj",
        value: "sleep",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Entspannung",
        text: "kjd kjhd kjhkj asd asd asdjh  asdkj asdjh da",
        value: "relaxation",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Zeitmanagement",
        text: "df lkjdf sdfkj sdflkj sdflkj dsf",
        value: "time-management",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
      {
        title: "Methoden",
        text: "dsjf lkjdsf lkjdsf",
        value: "methods",
        content: [
          {
            type: "Video",
            id: "1",
            tags: ["fit", "zwischendrin"],
            title:
              "Tolle Rückenübung für zwischendurch - werde fit und mache diesen Titel immer noch etwas länger",
            duration: "15:35 min",
            src: "https://www.youtube.com/embed/8ZAe3JETvkI",
            favorite: true,
          },
          {
            type: "Audio",
            id: "2",
            tags: ["tag1", "tag2"],
            title: "Traumreise auf eine einsame Insel",
            duration: "03:34 min",
            favorite: false,
          },
          {
            type: "Text",
            id: "3",
            tags: ["tag1", "tag2", "tag3"],
            title: "Spielend gesunde Ernährung",
            duration: "",
            favorite: true,
          },
          {
            type: "Audio",
            id: "4",
            tags: [],
            title: "Entspannung auf der grünen Wiese... Was weiß denn ich...",
            duration: "03:34 min",
            favorite: true,
          },
        ],
      },
    ],
  },

  nutrition: {
    key: "NUTRITION_PAGE",
    value: "nutrition",
    title: "Ernährung",
    icon: <Nutrition />,
    subcategories: [
      {
        title: "Mensa",
        text: "lkjdf lkjdsf",
        value: "mensa",
      },
      {
        title: "Infobereich",
        text: "ljdf lkjdf lkjsd lkjdf",
        value: "info",
      },
      {
        title: "Mythencheck",
        text: "dfkjsdf lkdf slkf",
        value: "myth-check",
      },
    ],
  },
  settings: {
    key: "SETTINGS_PAGE",
    value: "/settings",
    title: "Einstellungen",
    icon: <Settings />,
  },
  feedback: {
    key: "FEEDBACK_PAGE",
    value: "/feedback",
    title: "Feedback",
    icon: <Feedback />,
  },
  imprint: {
    key: "IMPRINT_PAGE",
    value: "/imprint",
    title: "Impressum",
    icon: <Conditions />,
  },
  conditions: {
    key: "CONDITIONS_PAGE",
    value: "/conditions",
    title: "AGB",
    icon: <Conditions />,
  },

  logout: {
    key: "LOGIN_PAGE",
    value: "/login",
    title: "Abmelden",
    icon: <Logout />,
  },
};
export const week = ["Mo", "Di", "Mi", "Do", "Fr"];

export const meals = {
  mainDish: "HG",
  garnish: "B",
  dessert: "N",
};

export const mensaContentInfo = {
  V: "Vegetarisch",
  VG: "Vegan",
  G: "Geflügel",
  S: "Schwein",
  R: "Rind",
  L: "Lamm",
  W: "Wild",
  F: "Fisch",
  A: "Alkohol",
  B: "Bio",
};
export const mensaAdditionalInfo = {
  1: "Farbstoff",
  2: "Konservierungsstoff",
  3: "Antioxidationsmittel",
  4: "Geschmacksverstärker",
  5: "geschwefelt",
  6: "geschwärzt",
  7: "gewachst",
  8: "Phosphat",
  9: "Süssungsmittel Saccharin",
  10: "Süssungsmittel Aspartam",
  11: "Süssungsmittel Cyclamat",
  12: "Süssungsmittel Acesulfam",
  13: "chininhaltig",
  14: "coffeinhaltig",
  15: "gentechnisch verändert",
  16: "Sulfite",
  17: "Phenylalanin",
  AA: "Weizengluten",
  AB: "Roggengluten",
  AC: "Gerstengluten",
  AD: "Hafergluten",
  AE: "Dinkelgluten",
  AF: "Kamutgluten",
  B: "Krebstiere",
  C: "Eier",
  D: "Fisch",
  E: "Erdnüsse",
  F: "Soja",
  G: "Milch und Milchprodukte",
  HA: "Mandel",
  HB: "Haselnuss",
  HC: "Walnuss",
  HD: "Cashew",
  HE: "Pecannuss",
  HF: "Paranuss",
  HG: "Pistazie",
  HH: "Macadamianuss",
  HI: "Queenslandnuss",
  I: "Sellerie",
  J: "Senf",
  K: "Sesamsamen",
  L: "Schwefeldioxid und Sulfite",
  M: "Lupinen",
  N: "Weichtiere",
  O: "Nitrat",
  P: "Nitritpökelsalz",
};

export const relaxation_categories = [
  {
    title: "Achtsamkeit",
    text: "kjhfas sdfh asdf adf af dsfjh sdfiu af kjdsfh vj jh fashd adjfh ala",
  },
  {
    title: "Meditation",
    text: "kjhfas sdfh asdf adf af dsfjh sdfiu af kjdsf",
  },
  {
    title: "Yoga",
    text: "test tes jkhdf dfkjh nbvja jhdfnc kajsd ivh dksfjh  kjvhds kjdh",
  },
  {
    title: "PMR",
    text: "jhf asdjfh akjdfh nueui  kjdfhiu eiur wiu skjdf ieu",
  },
  {
    title: "Autogenes Training",
    text:
      "kjdsfh jd fnkjh akh h qwiuez kjdfh nbdfj kjhdf njkdf skdjfh ne fkjhdf jdhf",
  },
  {
    title: "Körperreisen",
    text: "hdf kjdsfh kjshd asdj dnjfk dsfjh dfks",
  },
  {
    title: "Qi Gong",
    text: "djhf sdkfjh njkd",
  },
];

export const fitness_categories = [
  {
    title: "Workouts",
    text: "kjhdf kjshd  hkjdf kjhdf",
  },
  {
    title: "Yoga",
    text: "kjhdfjf jdhf kjhd asdjh  kjhf kjh kjh kjhkjh kjh asdjh kjh sd",
  },
  {
    title: "Gesundheit",
    text: "jsdhf kjdhf ksjhd kjhd ddhhdsj akjs",
  },
];

export const wellbeing_categories = [
  {
    title: "Schlaf",
    text: "hdf kj",
  },
  {
    title: "Entspannung",
    text: "kjd kjhd kjhkj asd asd asdjh  asdkj asdjh da",
  },
  {
    title: "Zeitmanagement",
    text: "df lkjdf sdfkj sdflkj sdflkj dsf",
  },
  {
    title: "Methoden",
    text: "dsjf lkjdsf lkjdsf",
  },
];

export const nutrition_categories = [
  {
    title: "Mensa",
    text: "lkjdf lkjdsf",
  },
  {
    title: "Infobereich",
    text: "ljdf lkjdf lkjsd lkjdf",
  },
  {
    title: "Mythencheck",
    text: "dfkjsdf lkdf slkf",
  },
];
