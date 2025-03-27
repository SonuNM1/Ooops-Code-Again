

import { Code, Smartphone, Layers, ShieldCheck, Users, BarChart3 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpeg";


export const testimonials = [
  {
    user: "Garima Joshi",
    company: "Salesforce Developer",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Badal Kumar",
    company: "Coding Room",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
];

export const features = [
  {
    icon: <Code/>,
    text: "Custom Web Development",
    description:
      "Tailor-made websites built from scratch to match your brand's identity and business goals.",
  },
  {
    icon: <Smartphone/>,
    text: "Mobile-Responsive Design",
    description:
      "Seamlessly adaptive layouts for an optimal browsing experience on all devices.",
  },
  {
    icon: <Layers/>,
    text: "SEO Optimization",
    description:
      "Rank higher on search engines with our performance-driven SEO strategies.",
  },
  {
    icon: <ShieldCheck/>,
    text: "Secure & Scalable Solutions",
    description:
      "Ensure a safe and scalable online presence with our robust security measures.",
  },
  {
    icon: <Users/>,
    text: "User-Friendly CMS",
    description:
      "Easily manage your website’s content with intuitive Content Management Systems.",
  },
  {
    icon: <BarChart3/>,
    text: "Analytics & Performance Tracking",
    description:
      "Gain insights into visitor behavior and optimize your website for better conversions.",
  },
];

export const checklistItems = [
  {
    title: "Seamless Code Merging",
    description:
      "Effortlessly merge changes with streamlined version control, reducing conflicts.",
  },
  {
    title: "Efficient Code Reviews",
    description:
      "Collaborate with your team using smart suggestions and inline comments.",
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Get intelligent code suggestions and error detection to boost productivity.",
  },
  {
    title: "Instant Collaboration",
    description:
      "Share your progress with teammates in real-time for faster feedback loops.",
  },
];

export const pricingOptions = [
  {
    title: "Basic Portfolio",
    price: "₹8,000",
    features: [
      "Custom portfolio website (1-3 pages)",
      "Responsive design for mobile & desktop",
      "Basic SEO optimization",
      "Contact form integration",
      "Deployment & hosting support",
    ],
  },
  {
    title: "Advanced Portfolio",
    price: "₹15,000",
    features: [
      "Custom portfolio website (4 pages)",
      "Enhanced UI/UX design",
      "SEO optimization & analytics setup",
      "Social media integration",
      "Basic animations & interactivity",
    ],
  },
  {
    title: "E-commerce Enterprise",
    price: "₹30,000",
    features: [
      "Fully dynamic e-commerce website",
      "Unlimited pages & product listings",
      "Payment gateway integration",
      "Admin dashboard for order management",
      "Advanced security & scalability",
    ],
  },
];

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const platformLinks = [
  { href: "#services", text: "Our Services" },
  { href: "#pricing", text: "Pricing Plans" },
  { href: "#testimonials", text: "Client Testimonials" }
];


export const contactInfo = {
  whatsapp: "7903648044",
  email: "sonumahto362000@gmail.com",
};

