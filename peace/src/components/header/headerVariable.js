import MoreMenuImage from "../../images/header/moreMenu.png";
import ServicesMenuImage from "../../images/header/servicesMenu.png";
import FacilitiesMenuImage from "../../images/header/facilitiesMenu.png";

const navLinks = [
  {
    name: "Our Services",
    img: ServicesMenuImage,
    link: "#",
    subMenu: [
      {
        title: "Residential Services",
        link: "/services/residential",
        menus: [
          {
            title: "Acute Psychiatry Care",
            id: "acute",
            link: "/services/residential?name=acute",
          },
          {
            title: "Intensive Care Unit",
            id: "intensive",
            link: "/services/residential?name=intensive",
          },
          {
            title: "Sukoon At Home",
            id: "sukoon",
            link: "/services/residential?name=sukoon",
          },
          {
            title: "Geriatric Psychiatry",
            id: "geriatric",
            link: "/services/residential?name=geriatric",
          },
          {
            title: "Women Focused Care",
            id: "women",
            link: "/services/residential?name=women",
          },
          {
            title: "Child Psychiatry",
            id: "child",
            link: "/services/residential?name=child",
          },
        ],
      },
      {
        title: "Rehabilitation Services",
        link: "/services/rehabilitation",
        menus: [
          {
            title: "Alcohol Deaddiction",
            id: "alcohol",
            link: "/services/rehabilitation?name=alcohol",
          },
          {
            title: "Drug Deaddiction",
            id: "drug",
            link: "/services/rehabilitation?name=drug",
          },
          {
            title: "Habit Deaddiction",
            id: "habit",
            link: "/services/rehabilitation?name=habit",
          },
        ],
      },
      {
        title: "Outpatient Services",
        link: "/services/outPatient",
        menus: [
          {
            title: "Clinical Psychology",
            id: "clinical",
            link: "/services/outPatient?name=clinical",
          },
          {
            title: "Counselling Psychology",
            id: "counselling",
            link: "/services/outPatient?name=counselling",
          },
          {
            title: "Art-Based Therapy",
            id: "art",
            link: "/services/outPatient?name=art",
          },
          {
            title: "RTMS Treatments",
            id: "rTMS",
            link: "/services/outPatient?name=rTMS",
          },
          {
            title: "Remediation",
            id: "remediation",
            link: "/services/outPatient?name=remediation",
          },
          {
            title: "Psychoanalytical Therapy",
            id: "psychoanalytical",
            link: "/services/outPatient?name=psychoanalytical",
          },
          {
            title: "Occupational Therapy",
            id: "occupational",
            link: "/services/outPatient?name=occupational",
          },
          {
            title: "Psychiatry",
            id: "psychiatry",
            link: "/services/outPatient?name=psychiatry",
          },
          {
            title: "Psycho - Oncology",
            id: "psycho",
            link: "/services/outPatient?name=psycho",
          },
          {
            title: "Psychometric Testing",
            id: "psychometric",
            link: "/services/outPatient?name=psychometric",
          },
        ],
      },
    ],
  },
  {
    name: "Our Facilities",
    img: FacilitiesMenuImage,
    link: "#",
    subMenu: [
      {
        title: "Our Facilities",
        menus: [
          {
            title: "Gurgaon",
            link: "/facilities/gurgaon",
          },
          {
            title: "Chhatarpur",
            link: "/facilities/chattarpur",
          },
          {
            title: "Delhi",
            link: "/facilities/delhi",
          },
        ],
      },
    ],
  },
  {
    name: "International Patients",
    link: "/international-patients",
  },
  {
    name: "Suicide Help",
    link: "/suicide",
  },
  {
    name: "Insurance",
    link: "/insurance",
  },
  {
    name: "More",
    img: MoreMenuImage,
    link: "#",
    subMenu: [
      {
        title: "More",
        menus: [
          {
            title: "About Us",
            link: "/aboutus",
          },
          {
            title: "Media",
            link: "/media",
          },
          {
            title: "Blogs",
            link: "/articles",
          },
          {
            title: "Careers",
            link: "/career",
          },
          {
            title: "Contact Us",
            link: "/get-in-touch/",
          },
        ],
      },
    ],
  },
  {
    icon: true,
  },
];

export { navLinks };
