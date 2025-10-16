export  const mobileItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];
   export const slides = [
    {
      id: 1,
      subtitle: "Our Mission",
      title: "Unleashing Creativity to Transform Your Business",
      description:
        "Welcome to our Multimedia agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you thrive in the evolving world of digital.",
      image: "/assets/img/about_img.jpg",
    },
    {
      id: 2,
      subtitle: "Our Vision",
      title: "Empowering Brands Through Innovation",
      description:
        "We believe every brand has a story. Our vision is to transform your ideas into impactful digital experiences that connect with your audience and drive real results.",
      image: "/assets/img/about_img.jpg",
    },
    {
      id: 3,
      subtitle: "Our Values",
      title: "Creativity, Quality & Growth",
      description:
        "From creative design to technical execution, we focus on delivering quality and helping businesses grow with cutting-edge solutions tailored to their needs.",
      image: "/assets/img/about_img.jpg",
    },
  ];
   export const services = [
  { id: "01", title: "Video & Motion Graphics", desc: "We specialize in helping businesses succeed online." , slug: "video_motion_graphics",},
  { id: "02", title: "Branding & Strategy", desc: "Creative branding solutions for your business.", slug: "branding_strategy",},
  { id: "03", title: "Advertising", desc: "Targeted ad campaigns to grow your reach." , slug: "advertising", },
  { id: "04", title: "Web Development", desc: "Modern and scalable web applications." , slug: "Web_development", },
  { id: "05", title: "Digital Marketing", desc: "SEO, social media, and online growth." , slug: "digital_marketing", },
  { id: "06", title: "Printing", desc: "Line production and equipment rentals.", slug: "printing", },
  { id: "07", title: "Line Production", desc: "Explore our complete service list." , slug: "line_production",},
  { id: "08", title: "Equipment Rentals", desc: "Explore our complete service list.",  slug: "equipment_rentals", },
  { id: "09", title: "Social Media", desc: "Explore our complete service list." , slug: "social_media",},
];
export const logos = [
    "partner_9.svg",
    "partner_10.svg",
    "partner_11.svg",
    "partner_12.svg",
    "partner_13.svg",
    "partner_14.svg",
    "partner_15.svg",
    "partner_1.svg",
    "partner_3.svg",
  ];
 export const FORM_FIELDS = [
  { id: "test1", name: "name", type: "text", placeholder: "Name", label: "Name" },
  { id: "test2", name: "email", type: "email", placeholder: "Email", label: "Email" },
  { id: "test3", name: "phone", type: "text", placeholder: "Phone", label: "Phone" },
  { id: "test4", name: "subject", type: "text", placeholder: "Subject", label: "Subject" },
  { id: "test5", name: "message", type: "text", placeholder: "Message", label: "Message" },
];

export const FORM_BUTTON = {
  text: "Send Now",
  svg: (
    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
        fill="currentColor"
      />
    </svg>
  ),
};
export const steps = [
    {
      number: "One",
      title: "Understand",
      description: "Welcome to our digital agency. We specialize in helping your business most.",
    },
    {
      number: "Two",
      title: "Design",
      description: "Welcome to our digital agency. We specialize in helping your business most.",
    },
    {
      number: "Three",
      title: "Development",
      description: "Welcome to our digital agency. We specialize in helping your business most.",
    },
    {
      number: "Four",
      title: "Testing",
      description: "Welcome to our digital agency. We specialize in helping your business most.",
    },
  ];
  export const categories = [
    { label: "All", filter: "*" },
    { label: "Video & Motion Graphics", filter: "video_motion_graphics" },
    { label: "Branding & Strategy", filter: "branding_strategy" },
    { label: "Advertising", filter: "advertising" },
    { label: "Web Development", filter: "Web_development" },
    { label: "Digital Marketing", filter: "digital_marketing" },
    { label: "Printing", filter: "printing" },
    { label: "Line Production", filter: "line_production" }, 
    { label: "Equipment Rentals", filter: "equipment_rentals" },       
    { label: "Social Media", filter: "social_media" },
  ];

  export const portfolioItems = [
    {
      id: 1,
      slug: "video_motion_graphics",
      title: "Video & Motion Graphics",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_1.png",
      categories: ["video_motion_graphics"],
    },
    {
      id: 2,
      slug: "branding_strategy",
      title: "Branding & Strategy",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_2.png",
      categories: ["branding_strategy"],
    },
    {
      id: 3,
      slug: "advertising",
      title: "Advertising",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_3.png",
      categories: ["advertising"],
    },
    {
      id: 4,
      slug: "Web_development",
      title: "Web Development",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_5.png",
      categories: ["Web_development"],
    },
   
    {
      id: 5,
      slug: "digital_marketing",
      title: "Digital Marketing",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_7.png",
      categories: ["digital_marketing"],
    },
    {
      id: 6,
      slug: "printing",
      title: "Printing",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_7.png",
      categories: ["printing"],
    },
    {
      id: 7,
      slug: "line_production",
      title: "Line Production",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_7.png",
      categories: ["line_production"],
    },
     {
      id: 8,
      slug: "social_media",
      title: "Social Media",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_6.png",
      categories: ["social_media"],
    },
     {
      id: 9,
      slug: "equipment_rentals",
      title: "Equipment Rentals",
      subtitle: "Digital Services / App Design",
      image: "/assets/img/portfolio_6.png",
      categories: ["equipment_rentals"],
    },
  ];