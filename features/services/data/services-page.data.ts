import {
  BarChart3,
  Printer,
  Building2,
  Network,
  Search,
  PenTool,
  PanelsTopLeft,
  Presentation,
  BadgeDollarSign,
  LayoutGrid,
  Package,
  ScanText,
  PaintBucket,
  Hammer,
  Ruler,
  Sofa,
  Wrench,
  Router,
  ShieldCheck,
  Server,
  Headphones,
} from "lucide-react";

export const servicesPageData = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "We create data-driven digital marketing strategies that increase visibility, engagement, and conversions. From social media management to paid advertising and SEO, we help your business connect with customers where they spend most of their time—online. Our approach focuses on measurable results, ensuring every campaign contributes to your growth.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    groups: [
      {
        title: "Performance Strategy",
        items: [
          {
            title: "SEO & Search Growth",
            icon: Search,
          },
          {
            title: "Campaign Planning",
            icon: Presentation,
          },
          {
            title: "Content & Copy Direction",
            icon: PenTool,
          },
          {
            title: "Paid Media Optimization",
            icon: BadgeDollarSign,
          },
        ],
      },
      {
        title: "Digital Presence Design",
        items: [
          {
            title: "Landing Page Structuring",
            icon: LayoutGrid,
          },
          {
            title: "Visual Ad Concepts",
            icon: PanelsTopLeft,
          },
          {
            title: "Brand Messaging Design",
            icon: PenTool,
          },
          {
            title: "Audience Journey Mapping",
            icon: Search,
          },
        ],
      },
      {
        title: "Branding and Identity",
        items: [
          {
            title: "Campaign Visual Language",
            icon: PanelsTopLeft,
          },
          {
            title: "Social Media Branding",
            icon: Presentation,
          },
          {
            title: "Conversion-Oriented Creative",
            icon: BadgeDollarSign,
          },
          {
            title: "Digital Brand Consistency",
            icon: PenTool,
          },
        ],
      },
    ],
  },
  {
    slug: "creative-printing",
    title: "Creative Printing",
    description:
      "We deliver premium printing solutions that make your brand stand out in the physical world. From business cards and brochures to banners and packaging, we combine creativity with precision to produce materials that leave a lasting impression. Our team ensures consistency in branding across all printed assets.",
    icon: Printer,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    groups: [
      {
        title: "Print Collateral",
        items: [
          {
            title: "Brochures & Flyers",
            icon: ScanText,
          },
          {
            title: "Business Cards",
            icon: PanelsTopLeft,
          },
          {
            title: "Brand Stationery",
            icon: PenTool,
          },
          {
            title: "Presentation Prints",
            icon: Presentation,
          },
        ],
      },
      {
        title: "Packaging and Display",
        items: [
          {
            title: "Product Packaging",
            icon: Package,
          },
          {
            title: "Retail Signage",
            icon: LayoutGrid,
          },
          {
            title: "Banner & Large Format",
            icon: PaintBucket,
          },
          {
            title: "Promotional Materials",
            icon: BadgeDollarSign,
          },
        ],
      },
    ],
  },
  {
    slug: "interior-design-construction",
    title: "Interior Design & Construction",
    description:
      "We design and build modern, efficient, and visually appealing spaces tailored to your needs. Whether it’s office interiors, commercial spaces, or renovations, our team handles everything from concept to completion. We focus on aesthetics, functionality, and durability to create environments that enhance productivity and reflect your brand identity.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    groups: [
      {
        title: "Space Planning",
        items: [
          {
            title: "Concept Development",
            icon: Ruler,
          },
          {
            title: "Layout Planning",
            icon: LayoutGrid,
          },
          {
            title: "Interior Styling",
            icon: Sofa,
          },
          {
            title: "Visual Material Boards",
            icon: PaintBucket,
          },
        ],
      },
      {
        title: "Execution and Build",
        items: [
          {
            title: "Renovation Oversight",
            icon: Hammer,
          },
          {
            title: "Construction Coordination",
            icon: Wrench,
          },
          {
            title: "Brand Space Alignment",
            icon: PanelsTopLeft,
          },
          {
            title: "Finish and Detailing",
            icon: PaintBucket,
          },
        ],
      },
    ],
  },
  {
    slug: "networking-it-solutions",
    title: "Networking & IT Solutions",
    description:
      "We provide smart and reliable IT and networking solutions that ensure your business stays connected and efficient. From network setup and server installation to system integration and maintenance, we design scalable and secure IT infrastructures. Our goal is to support your operations with technology that is fast, reliable, and future-ready.",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    groups: [
      {
        title: "Infrastructure Setup",
        items: [
          {
            title: "Network Architecture",
            icon: Router,
          },
          {
            title: "Server Installation",
            icon: Server,
          },
          {
            title: "Connectivity Planning",
            icon: Network,
          },
          {
            title: "Security Configuration",
            icon: ShieldCheck,
          },
        ],
      },
      {
        title: "Support and Optimization",
        items: [
          {
            title: "Monitoring & Maintenance",
            icon: Headphones,
          },
          {
            title: "System Upgrades",
            icon: Wrench,
          },
          {
            title: "Operational Reliability",
            icon: ShieldCheck,
          },
          {
            title: "Future-Ready Scalability",
            icon: Server,
          },
        ],
      },
    ],
  },
];