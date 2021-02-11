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

  relaxation: {
    key: "RELAXATION_PAGE",
    value: "/relaxation",
    title: "Entspannung",
    icon: <Relaxation />,
    subcategories: [
      {
        title: "Achtsamkeit",
        text: "Erlebe die Vorzüge der Achtsamkeitspraxis.",
        value: "/relaxation/mindfulness",
      },
      {
        title: "Meditation",
        text: "Gib deinem Geist Freiraum.",
        value: "/relaxation/meditation",
      },
      {
        title: "Yoga",
        text: "Yoga praktizieren mit unseren Videos.",
        value: "/relaxation/yoga",
      },
      {
        title: "Progressive Muskelentspannung",
        text: "Aktive Entspannung mithilfe deines Körpers.",
        value: "/relaxation/progressive-muscle-relaxation",
      },
      {
        title: "Autogenes Training",
        text: "Übe dich in der Selbstentspannung mit unseren Audioanleitungen.",
        value: "/relaxation/autogenous-training",
      },
      {
        title: "Körperreisen",
        text: "Finde Entspannung durch deine eigene Vorstellungskraft.",
        value: "/relaxation/body-travel",
      },
      {
        title: "Qi Gong",
        text: "Erreiche Entspannung durch Bewegung.",
        value: "/relaxation/qi-gong",
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
        text:
          "Kraft, Ausdauer oder allgemeine Fitness verbessern mit unseren Videos.",
        value: "/fitness/workouts",
      },
      {
        title: "Yoga",
        text: "Yoga praktizieren mit unseren Videos.",
        value: "/fitness/yoga",
      },
      {
        title: "Gesundheit",
        text: "Rückenschule, Pausenfit, Mobilisation und mehr.",
        value: "/fitness/health",
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
        text: "Entdecke wie sich Schlaf auf deinen Alltag auswirkt.",
        value: "/wellbeing/sleep",
      },
      {
        title: "Entspannung",
        text: "Finde die richtige Form der Entspannung für dich.",
        value: "/wellbeing/relaxation",
      },
      {
        title: "Zeitmanagement",
        text: "Finde deine passenden Zeitmanagement-Strategien.",
        value: "/wellbeing/time-management",
      },
      {
        title: "Methoden",
        text: "Lerne Strategien für dein Wohlbefinden kennen.",
        value: "/wellbeing/methods",
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
        text: "Aktueller Speiseplan der Mensa an der Uni Regensburg.",
        value: "/nutrition/mensa",
      },
      {
        title: "Infobereich",
        text: "Nährstoffe, Grundumsatz, Rezepte und mehr.",
        value: "/nutrition/info",
      },
      {
        title: "Mythencheck",
        text:
          "Wusstest du, dass eine Paprika mehr Vitamin C enthält als eine Orange?",
        value: "/nutrition/myth-check",
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
