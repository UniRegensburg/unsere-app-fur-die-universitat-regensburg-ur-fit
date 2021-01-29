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

export const pages = [
  {
    key: "MY_PAGE",
    value: "/",
    title: "Meine Seite",
    icon: <Heart />,
  },
  {
    key: "RELAXATION_PAGE",
    value: "/relaxation",
    title: "Entspannung",
    icon: <Relaxation />,
  },
  {
    key: "FITNESS_PAGE",
    value: "/fitness",
    title: "Fitness",
    icon: <Sport />,
  },
  {
    key: "WELL_BEING_PAGE",
    value: "/wellbeing",
    title: "Wohlbefinden",
    icon: <WellBeing />,
  },
  {
    key: "NUTRITION_PAGE",
    value: "/nutrition",
    title: "Ernährung",
    icon: <Nutrition />,
  },
  {
    key: "SETTINGS_PAGE",
    value: "/settings",
    title: "Einstellungen",
    icon: <Settings />,
  },
  {
    key: "FEEDBACK_PAGE",
    value: "/feedback",
    title: "Feedback",
    icon: <Feedback />,
  },
  {
    key: "IMPRINT_PAGE",
    value: "/imprint",
    title: "Impressum",
    icon: <Conditions />,
  },
  {
    key: "CONDITIONS_PAGE",
    value: "/conditions",
    title: "AGB",
    icon: <Conditions />,
  },
  {
    key: "LOGOUT_PAGE",
    value: "/login",
    title: "Abmelden",
    icon: <Logout />,
  },
];
