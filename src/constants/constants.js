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
  },
  fitness: {
    key: "FITNESS_PAGE",
    value: "/fitness",
    title: "Fitness",
    icon: <Sport />,
  },
  wellbeing: {
    key: "WELL_BEING_PAGE",
    value: "/wellbeing",
    title: "Wohlbefinden",
    icon: <WellBeing />,
  },
  nutrition: {
    key: "NUTRITION_PAGE",
    value: "/nutrition",
    title: "Ernährung",
    icon: <Nutrition />,
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
    key: "LOGOUT_PAGE",
    value: "/logout",
    title: "Abmelden",
    icon: <Logout />,
  },
};

export const week = ["mo", "di", "mi", "do", "fr"];

export const meals = {
  mainDish: "H",
  garnish: "B",
  dessert: "N",
};
