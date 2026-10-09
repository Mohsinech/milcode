interface Service {
  id: number;
  lottieIcon: string;
  title: string;
  Options: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    lottieIcon:
      "https://lottie.host/03457988-468c-40d5-abb9-2ce6fd1e5ca4/wkTdhnVLNJ.lottie",
    title: "Strategy",
    Options: [
      "Digital Strategy",
      "Content Strategy",
      "Brand Positioning",
      "Discoverability",
    ],
  },
  {
    id: 2,
    lottieIcon:
      "https://lottie.host/03457988-468c-40d5-abb9-2ce6fd1e5ca4/wkTdhnVLNJ.lottie",
    title: "Design",
    Options: [
      "Branding",
      "UX/UI Design",
      "Web design",
      "motion design",
      "Content Creation",
      "Interactive developement",
    ],
  },
  {
    id: 3,
    lottieIcon:
      "https://lottie.host/03457988-468c-40d5-abb9-2ce6fd1e5ca4/wkTdhnVLNJ.lottie",
    title: "Technology",
    Options: [
      "Front-end Development",
      "Back-end Development",
      "E-commerce Solutions",
      "CMS Integration",
      "Mobile App Development",
    ],
  },
  {
    id: 4,
    lottieIcon:
      "https://lottie.host/03457988-468c-40d5-abb9-2ce6fd1e5ca4/wkTdhnVLNJ.lottie",
    title: "Performance",
    Options: [
      "Online Optimization (SEO)",
      "Convertion Rate Optimization (CRO)",
      "Data Analysis",
      "Social Compaigns",
    ],
  },
];

export default servicesData;
