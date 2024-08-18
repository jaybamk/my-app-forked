import routes from "@/routes";
import access from "@/img/packages/access.svg";
import diamond from "@/img/packages/diamond.svg";
import enterprise from "@/img/packages/enterprise.svg";
import premium from "@/img/packages/premium.svg";
import accessImg from "@/img/packages/access.png";
import diamondImg from "@/img/packages/diamond.png";
import enterpriseImg from "@/img/packages/enterprise.png";
import premiumImg from "@/img/packages/premium.png";

const packages = [
  {
    title: "Enterprise",
    subtle:
      "ENTERPRISE-30 dollars Our enterprise package contain a whole lot to learn and earn with.",
    img: enterpriseImg,
    link: routes.home,
    subscribe: routes.auth,
    thumbsnail: enterprise,
    descriptions: [
      "Learn one language free",
      "Earn 10 dollars on every Diamond Plus Ambassador registered",
      "Earn 5  dollars on every Premium Ambassador registered",
      "Earn 3 dollars on every Enterprise Ambassador registered",
      "Earn 0 dollars on every Access Pro Ambassador registered",
      "Earn 10 dollars on every student you bring to language academy",
      "Earn 5 dollars each from all students your down line register every month",
    ],
  },
  {
    title: "Access Pro",
    subtle:
      "ACCESS PRO-Free Yes! FREE! Enjoy the best of our Access pro package all for FREE",
    img: accessImg,
    link: routes.home,
    subscribe: routes.auth,
    thumbsnail: access,
    descriptions: [
      "Learn a language at 60% discount ",
      "Earn 0 dollars on every Diamond Plus Ambassador registered",
      "Earn 0 dollars on every Premium Ambassador registered",
      "Earn 0 dollars on every Enterprise Ambassador registered",
      "Earn 0 dollars on every Access Pro Ambassador registered",
      "Earn 10 dollars on every student you bring to language academy",
      "Earn 5 dollars each from all students your down line register every month",
    ],
  },
  {
    title: "",
    subtle: "",
    img: diamondImg,
    link: routes.home,
    subscribe: routes.auth,
    thumbsnail: diamond,
    descriptions: [],
  },
  {
    title: "",
    subtle: "",
    img: premiumImg,
    link: routes.home,
    subscribe: routes.auth,
    thumbsnail: premium,
    descriptions: [],
  },
];

export default packages;
