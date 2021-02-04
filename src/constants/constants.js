import {
  Settings,
  FavoriteBorder as Heart,
  SentimentVerySatisfiedOutlined as Relaxation,
  SportsHandballOutlined as Sport,
  SpaOutlined as WellBeing,
  RestaurantOutlined as Nutrition,
  FeedbackOutlined as Feedback,
  InfoOutlined as Conditions,
  ExitToAppOutlined as Logout,
} from "@material-ui/icons";

export const pages = {
  home: {
    key: "MY_PAGE",
    value: "/",
    title: "Meine Seite",
    icon: <Heart />,
  },

  relaxation: {
    key: "RELAXATION_PAGE",
    value: "/relaxation",
    title: "Entspannung",
    icon: <Relaxation />,
    subcategories: [
      {
        title: "Achtsamkeit",
        text:
          "kjhfas sdfh asdf adf af dsfjh sdfiu af kjdsfh vj jh fashd adjfh ala",
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
    ],
  },

  fitness: {
    key: "FITNESS_PAGE",
    value: "/fitness",
    title: "Fitness",
    icon: <Sport />,
    subcategories: [
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
    ],
  },

  wellbeing: {
    key: "WELL_BEING_PAGE",
    value: "/wellbeing",
    title: "Wohlbefinden",
    icon: <WellBeing />,
    subcategories: [
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
    ],
  },

  nutrition: {
    key: "NUTRITION_PAGE",
    value: "/nutrition",
    title: "Ernährung",
    icon: <Nutrition />,
    subcategories: [
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
