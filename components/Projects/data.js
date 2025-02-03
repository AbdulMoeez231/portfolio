import {
    IconBrandAws,
    IconBrandJavascript,
    IconBrandLaravel,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandPhp,
    IconBrandReact,
    IconBrandStripe,
    IconBrandTailwind,
} from "@tabler/icons-react";

export const projects = [
    {
        title: "Skin OS",
        link: "http://skin-os.com/",
        description:
            "A SaaS platform for beauty businesses utilizing AI-driven skin data collection, progress tracking, personalized recommendations, and CRM integration to enhance client care.",
        technologies: [<IconBrandPhp />, <IconBrandLaravel />, <IconBrandReact />, <IconBrandTailwind />, <span className="text-sm text-white font-bold">AI</span>],
        images: [
            "/assets/skin-os/img-4.png",
            "/assets/skin-os/img-1.png",
            "/assets/skin-os/img-3.png",
            "/assets/skin-os/img-2.png",
            "/assets/skin-os/img-5.png",
        ],
        gradientClass: "text-gradient-skinos",
        category: "2250 AI",
    },
    {
        title: "Just imagine careers",
        link: "https://www.careerjustimagine.com/",
        description:
            "A platform for searching full-time jobs and freelance projects, or creating recruiter accounts. Includes identity card verification for freelancers to ensure trust.",
        technologies: [<IconBrandMongodb />, <IconBrandNodejs />, <IconBrandReact />, <IconBrandTailwind />, <IconBrandAws />],
        images: [
            "/assets/imagine/img-2.png",
            "/assets/imagine/img-1.png",
            "/assets/imagine/img-3.png",
            "/assets/imagine/img-4.png",
            "/assets/imagine/img-5.png",
        ],
        gradientClass: "text-gradient-green",
        category: "IMAGINE",
    },
    {
        title: "Guideline dream home",
        link: "http://gldreamhome.com/",
        description:
            "A furniture store with Stripe integration for secure payments and advanced filtering options for easy product discovery.",
        technologies: [<IconBrandMongodb />, <IconBrandNodejs />, <IconBrandReact />, <IconBrandStripe />, <IconBrandTailwind />],
        images: [
            "/assets/furniture/img-4.png",
            "/assets/furniture/img-1.jpg",
            "/assets/furniture/img-3.png",
            "/assets/furniture/img-2.png",
            "/assets/furniture/img-5.png",
        ],
        gradientClass: "text-gradient-orange",
        category: "FURNITURE",
    },
    {
        title: "Squid Academy",
        link: "https://squid.academy/",
        description:
            "A project built in Next.js with server-side rendering, integrated CMS for blogs, and an exceptional user interface.",
        technologies: [<IconBrandMongodb />, <IconBrandJavascript />, <IconBrandNextjs />, <IconBrandTailwind />, <IconBrandAws />],
        images: [
            "/assets/squid-academy/img-4.png",
            "/assets/squid-academy/img-3.png",
            "/assets/squid-academy/img-1.png",
            "/assets/squid-academy/img-2.png",
            "/assets/squid-academy/img-5.png",
        ],
        gradientClass: "text-gradient-squid",
        category: "SQUID",
    },
];