import { Dispatch, SetStateAction } from "react";

interface basicContent {
  ka: string;
  en: string;
}
interface Categories {
  name: string;
  path: string;
}
export interface LocalizedString {
  ka: string;
  en: string;
}

interface Language {
  path: string;
  lang: string;
}
interface LanguageLabels {
  name: string;
  surname: string;
  email: string;
  message: string;
  submit: string;
  errorMsg: string;
}
interface LabelsLang {
  ka: LanguageLabels;
  en: LanguageLabels;
}
interface serviceTitle {
  ka: {
    service: string;
    our: string;
  };
  en: {
    service: string;
    our: string;
  };
}
interface About {
  ka: {
    about: string;
    info: string;
  };
  en: {
    about: string;
    info: string;
  };
}
interface ReviewContent {
  ka: {
    title: string;
    testimonials: string[];
    footer: string;
  };
  en: {
    title: string;
    testimonials: string[];
    footer: string;
  };
}
interface HeroContent {
  ka: {
    description1: string;
    description2: string;
  };
  en: {
    description1: string;
    description2: string;
  };
}
export const categories: Categories[] = [
  { name: "main", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "contact", path: "contact" },
  { name: "otp", path: "otp" },
];
// export interface Country {
//   id: number;
//   infoLink: string;
//   name: { ka: string; en: string };
//   capitalCity: { ka: string; en: string };
//   population: number;
//   like: number;
//   isDeleted: boolean;
// }
export interface Service {
  title: {
    ka: string;
    en: string;
  };
  description: {
    ka: string;
    en: string;
  };
}
export interface Destination {
  continent: { ka: string; en: string };
  description: { ka: string; en: string };
}
// export const detailedInfo: DetailedInfo[] = [
//   {
//     officialName: {
//       ka: "საქართველო",
//       en: "Georgia",
//     },
//     capital: {
//       ka: "თბილისი",
//       en: "Tbilisi",
//     },
//     population: 3688647,
//     area: 69700,
//     region: {
//       ka: "ევრაზია",
//       en: "Eurasia",
//     },
//     officialLanguage: {
//       ka: "ქართული",
//       en: "Georgian",
//     },
//     currency: {
//       ka: "საქართველოს ლარი (GEL)",
//       en: "Georgian Lari (GEL)",
//     },
//     majorCities: {
//       ka: "თბილისი, ბათუმი, ქუთაისი, რუსთავი, ზუგდიდი",
//       en: "Tbilisi, Batumi, Kutaisi, Rustavi, Zugdidi",
//     },
//     cuisineDescription: {
//       ka: "ქართული სამზარეულო ცნობილია მდიდარი გემოების და უნიკალური კერძების გამო, რომელშიც შემავალია ბევრი ახალი გული და სანელებელი. მნიშნვნელოვანი კერძებია ხაჭაპური (ჩიზით სავსე პური), ხინკალი (პური) და პხალი (ბოსტნეულის პასტა). ქვეყანა ასევე ცნობილი არის თავისი ღვინით, რომლის წარმოების ტრადიცია რამდენიმე ათასწლეულის განმავლობაში გრძელდება, განსაკუთრებით კახეთის რეგიონში.",
//       en: "Georgian cuisine is known for its rich flavors and unique dishes, featuring a variety of fresh herbs and spices. Notable foods include khachapuri (cheese-filled bread), khinkali (dumplings), and pkhali (vegetable spreads). The country is also famous for its wine, with a winemaking tradition that dates back thousands of years, particularly in the Kakheti region.",
//     },
//     independenceDay: {
//       ka: "26 მაისი (დამოუკიდებლობის დღე)",
//       en: "May 26 (Independence Day)",
//     },

//   },
//   {
//     officialName: {
//       ka: "გერმანიის ფედერალური რესპუბლიკა",
//       en: "Federal Republic of Germany",
//     },
//     capital: {
//       ka: "ბერლინი",
//       en: "Berlin",
//     },
//     population: 82719540,
//     area: 357022,
//     region: {
//       ka: "ევროპა",
//       en: "Europe",
//     },
//     officialLanguage: {
//       ka: "გერმანული",
//       en: "German",
//     },
//     currency: {
//       ka: "ევრო (€)",
//       en: "Euro (€)",
//     },
//     majorCities: {
//       ka: "ბერლინი, მიუნხენი, ფრანკფურტი, ჰამბურგი, კოლონი",
//       en: "Berlin, Munich, Frankfurt, Hamburg, Cologne",
//     },
//     cuisineDescription: {
//       ka: "გერმანული სამზარეულო მრავალფეროვანია და გულუხვია, ცნობილი თავისი ვარიაციის საკვების, პურისა და რეგიონალური კერძების გამო. პოპულარული კერძებია ბრატვურლე, კეპლახი, პრეტცელი და შნიცელი, რომელიც განსხვავებული რეგიონალური ლუდების რაოდენობით სრულდება. თითოეულ რეგიონს აქვს საკუთარი სპეციალობები, ადგილობრივი ტრადიციებისა და ინგრედიენტების საებე.",
//       en: "German cuisine is diverse and hearty, known for its variety of sausages, bread, and regional dishes. Popular foods include bratwurst, sauerkraut, pretzels, and schnitzel, complemented by a wide range of regional beers. Each area has its own specialties, reflecting local traditions and ingredients.",
//     },
//     independenceDay: {
//       ka: "3 ოქტომბერი (გერმანიის ერთობის დღე)",
//       en: "October 3 (German Unity Day)",
//     },

//   },
//   {
//     officialName: {
//       ka: "ფრანგული რესპუბლიკა",
//       en: "French Republic",
//     },
//     capital: {
//       ka: "პარიზი",
//       en: "Paris",
//     },
//     population: 68373433,
//     area: 551695,
//     region: {
//       ka: "ევროპა",
//       en: "Europe",
//     },
//     officialLanguage: {
//       ka: "ფრანგული",
//       en: "French",
//     },
//     currency: {
//       ka: "ევრო (€)",
//       en: "Euro (€)",
//     },
//     majorCities: {
//       ka: "პარიზი, მარსელი, ლიონი, ტულუზა, ნიცა",
//       en: "Paris, Marseille, Lyon, Toulouse, Nice",
//     },
//     cuisineDescription: {
//       ka: "ფრანგული სამზარეულო ცნობილია თავისი მრავალფეროვნებითა და ხარისხით, მდიდარი სოუსებისა და გურმანი საკვების ფართო სპექტრით, ახალი ზღვის პროდუქტებისა და გემრიელი ღვინის. აღსანიშნავია კერძებია კოკ აუვ ვენი, ბუიაბესი და სხვადასხვა ტიპის ყველი.",
//       en: "French cuisine is renowned worldwide for its diversity and quality, featuring a wide array of regional dishes and cooking styles, from rich sauces and gourmet pastries to fresh seafood and exquisite wines. Notable dishes include coq au vin, bouillabaisse, and various types of cheese.",
//     },
//     independenceDay: {
//       ka: "14 ივლისი (ბასტილიის დღე)",
//       en: "July 14 (Bastille Day)",
//     },

//   },
// ];
export const services: Service[] = [
  {
    title: {
      ka: "პერსონალიზებული მოგზაურობის დაგეგმვა",
      en: "Personalized Travel Planning",
    },
    description: {
      ka: "ჩვენ ვქმნით პერსონალიზებულ მოგზაურობის გეგმებს თქვენი უპირატესობების მიხედვით.",
      en: "We create personalized travel plans based on your preferences.",
    },
  },
  {
    title: {
      ka: "ჯგუფური ტურები და პაკეტები",
      en: "Group Tours and Packages",
    },
    description: {
      ka: "შეიერთდით ჩვენს საინტერესო ჯგუფურ ტურებზე, რათა მიიღოთ სასიამოვნო და სოციალური მოგზაურობის გამოცდილება.",
      en: "Join our exciting group tours for a fun and social travel experience.",
    },
  },
  {
    title: {
      ka: "დაფინანსება და ბიუჯეტის ვარიანტები",
      en: "Luxury and Budget Options",
    },
    description: {
      ka: "თუ ძვირადღირებული ან ბიუჯეტის-friendly მოგზაურობა გსურთ, ჩვენ გვაქვს საუკეთესო ვარიანტები თქვენთვის.",
      en: "Whether you want luxury or budget-friendly travel, we have the best options for you.",
    },
  },
  {
    title: {
      ka: "24/7 მომხმარებელთა მხარდაჭერა",
      en: "24/7 Customer Support",
    },
    description: {
      ka: "ჩვენი სპეციალიზებული გუნდი მზად არის დახმარებისთვის ნებისმიერ დროს, რათა უზრუნველყოს გლუვი მოგზაურობის გამოცდილება.",
      en: "Our dedicated team is here for you anytime, ensuring a smooth travel experience.",
    },
  },
  {
    title: {
      ka: "მოგზაურობის უსაფრთხოება და უსაფრთხოება",
      en: "Travel Safety and Security",
    },
    description: {
      ka: "ჩვენ გთავაზობთ რესურსებს და რჩევებს, რათა უსაფრთხოდ იყოთ მოგზაურობის დროს, მათ შორის საგანგებო კონტაქტების ინფორმაცია და უსაფრთხოების რჩევები.",
      en: "We offer resources and advice to keep you safe during your travels, including emergency contact information and safety tips.",
    },
  },
];
export const destination: Destination[] = [
  {
    continent: { ka: "ევროპა", en: "Europe" },
    description: {
      ka: "პარიზის რომანტიკული ქუჩებიდან რომის ისტორიულ ნანგრევებამდე.",
      en: "From the romantic streets of Paris to the historic ruins of Rome.",
    },
  },
  {
    continent: { ka: "აზია", en: "Asia" },
    description: {
      ka: "ცოცხალი კულტურებისა და breathtaking ლანდშაფტების გამოცდილება.",
      en: "Experience the vibrant cultures and breathtaking landscapes.",
    },
  },
  {
    continent: { ka: "ჩრდილოეთ ამერიკა", en: "North America" },
    description: {
      ka: "თავგადასავალი გელით ეროვნულ პარკებსა და ხმაურიან ქალაქებში.",
      en: "Adventure awaits in the national parks and bustling cities.",
    },
  },
];

// export const countries: Country[] = [
//   {
//     id: 1,
//     infoLink: "https://en.wikipedia.org/wiki/Georgia_(country)",
//
//     name: { ka: "საქართველო", en: "Georgia" },
//     capitalCity: { ka: "თბილისი", en: "Tbilisi" },
//     population: 3688647,
//     like: 0,
//     isDeleted: false,
//   },
//   {
//     id: 2,
//     infoLink: "https://en.wikipedia.org/wiki/Germany",
//
//     name: { ka: "გერმანია", en: "Germany" },
//     capitalCity: { ka: "ბერლინი", en: "Berlin" },
//     population: 82719540,
//     like: 0,
//     isDeleted: false,
//   },
//   {
//     id: 3,
//     infoLink: "https://en.wikipedia.org/wiki/France",
//
//     name: { ka: "საფრანგეთი", en: "France" },
//     capitalCity: { ka: "პარიზი", en: "Paris" },
//     population: 68373433,
//     like: 0,
//     isDeleted: false,
//   },
// ];
export const languages: Language[] = [
  { path: "/ka/home", lang: "GEO" },
  { path: "/en/home", lang: "ENG" },
];
export const labelsLang: LabelsLang = {
  ka: {
    name: "სახელი:",
    surname: "გვარი:",
    email: "Email:",
    message: "შეტყობინება:",
    submit: "გაგზავნა",
    errorMsg: "შენ გაქვს შეცდომა შეავსე სწორად",
  },
  en: {
    name: "Name:",
    surname: "Surname:",
    email: "Email:",
    message: "Message:",
    submit: "Send",
    errorMsg: "You have an error, please fill it out correctly",
  },
};
export const serviceTitle: serviceTitle = {
  ka: { service: "სერვისები", our: "ჩვენი სერვისები" },
  en: { service: "SERVICES", our: "Our Services" },
};
export const about: About = {
  ka: {
    about: "ჩვენ შესახებ",
    info: "კეთილი იყოს თქვენი მობრძანება ტურისტულ სააგენტოში, სადაც თქვენი ოცნებები გაცოცხდება! ტურისტულ ინდუსტრიაში მრავალწლიანი გამოცდილებით, ჩვენ ვქმნით მორგებული მარშრუტები მხოლოდ თქვენთვის..",
  },
  en: {
    about: "ABOUT US",
    info: "Welcome to Explore the world Travel Agency, where your dream adventures come to life! With years of experience in the travel industry, We create custom itineraries just for you..",
  },
};
export const review: ReviewContent = {
  ka: {
    title: "რა ამბობენ ჩვენი კლიენტები",
    testimonials: [
      "Explore THE WORLD ტურისტული სააგენტომ მოგზაურობა და დასვენება გააუმჯობესა! ყველაფერი სრულყოფილად იყო დაგეგმილი.",
      "ისინი ითვალისწინებენ ჩვენს საჭიროებებს, ამიტომაც ვუწევთ რეკომენდაციას",
    ],
    footer: "შემოგვიერთდით, რათა აღმოაჩინოთ საუკეთესო ადგილები",
  },
  en: {
    title: "What Our Clients Say",
    testimonials: [
      "Explore THE WORLD Travel Agency made our family vacation amazing! Everything was planned perfectly.",
      "They listened to our needs and created the perfect trip for us. Highly recommend!",
    ],
    footer: "Join us in exploring the world, one adventure at a time!",
  },
};
export const heroContent: HeroContent = {
  ka: {
    description1:
      "ჩვენი პლატფორმა გთავაზობთ შეუზღუდავ შესაძლებლობებს მოგზაურობის მოყვარულთათვის!",
    description2: "მოგვმართეთ დღეს და დაიწყეთ თავგადასავალი!",
  },
  en: {
    description1:
      "Our platform offers unlimited opportunities for travel enthusiasts!",
    description2: "Contact us today and start your adventure!",
  },
};
export const cardHeaderContent: basicContent = {
  ka: "ინფორმაცია ქვეყნების შესახებ",
  en: "Info About Country",
};
export const cardFooterContent: basicContent = {
  ka: "ინფორმაცია",
  en: "Info",
};

export const labelsCard = {
  ka: {
    name: "დასახელება",
    city: "დედაქალაქი",
    population: "მოსახლეობა",
  },
  en: {
    name: "Name",
    city: "Capital City",
    population: "Population",
  },
};
export const sortLabels = {
  ka: {
    ascending: "ზრდადობა (ლაიქი)",
    descending: "კლებადობა (ლაიქი)",
  },
  en: {
    ascending: "Ascending (like)",
    descending: "Descending (like)",
  },
};
export const detailedTitle = {
  ka: {
    flag: "დროშა",
    population: "მოსახლეობა",
    area: "ფართობი",
    region: "რეგიონი",
    officialLanguage: "ოფიციალური ენა",
    currency: "ვალუტა",
    majorCities: "ძირითადი ქალაქები",
    cuisine: "სამზარეულო",
    independenceDay: "დამოუკიდებლობის დღე",
  },
  en: {
    flag: "Flag",
    population: "Population",
    area: "Area",
    region: "Region",
    officialLanguage: "Official Language",
    currency: "Currency",
    majorCities: "Major Cities",
    cuisine: "Cuisine",
    independenceDay: "Independence Day",
  },
};
export const createFormPlaceholder = {
  ka: {
    name: "სახელი",
    city: "დედაქალაქი",
    population: "მოსახლეობა",
    Infolink: "ლინკი",
    btnVal: "ქვეყნის დამატება",
    updateVal: "ქვეყნის რედაქტირება",
  },
  en: {
    name: "Country Name",
    city: "Capital City",
    population: "Population",
    Infolink: "Info link",
    btnVal: "Create Country",
    updateVal: "Update country",
  },
};
interface changeLabels {
  lang: "ka" | "en";
  language: { ka: string; en: string };
}
export interface OtpProps {
  length: number;
}
export const changeLanugeageTab: changeLabels[] = [
  { lang: "ka", language: { ka: "ქართული", en: "Georgia" } },
  { lang: "en", language: { ka: "ინგლისური", en: "English" } },
];
export const otpInputLabels = {
  ka: {
    password: "შეიყვანე ერთჯერადი პაროლი",
    code: "შენს მიერ შეყვანილი კოდია:",
  },
  en: { password: "Enter One Time Password", code: "The code you entered is:" },
};
export interface Country {
  id: string;
  infoLink: string;
  name: LocalizedString;
  capitalCity: LocalizedString;
  population: number;
  like: number;
  img: string;
  detaildInfo: DetailedInfo | null;
}
export interface CountryUpdates {
  name: { ka: string; en: string };
  capitalCity: { ka: string; en: string };
  population: number;
  infoLink: string;
  img: string;
  like?: number;
  detaildInfo?: DetailedInfo | null;
}
export interface DetailedInfo {
  area: number;
  region: LocalizedString;
  officialLanguage: LocalizedString;
  currency: LocalizedString;
  majorCities: LocalizedString;
  cuisineDescription: LocalizedString;
  independenceDay: LocalizedString;
}
export interface LocalizedString {
  ka: string;
  en: string;
}
export interface FormProps {
  onCountryCreate: (countryFields: {
    name: { ka: string; en: string };
    capitalCity: { ka: string; en: string };
    population: number;
    infoLink: string;
    img: string;
  }) => void;
  errors: {
    name: { ka: string; en: string };
    capitalCity: { ka: string; en: string };
    population: { ka: string; en: string };
    infoLink: { ka: string; en: string };
    img: { ka: string; en: string };
  };
  onEditId: string;
  countriesList: Country[] | undefined;
  onCountryUpdate: (id: string, updates: CountryUpdates) => void;
  setEditId: Dispatch<SetStateAction<string>>;
  isPending: boolean;
}
