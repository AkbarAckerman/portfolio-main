import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Backend Development Intern (Python)",
        company: "Udevs · Internship",
        logo: "/u-devs.jpg", // Replace with actual logo
        duration: "Mar 2025 - Present · 1 mo",
        description:
            "Working on backend development tasks, improving API performance, and collaborating on remote projects.",
        link: "https://udevs.io", // Replace with actual company link if available
        images: [],
    },
    {
        role: "Founder & Leader | Goldendevs",
        company: "Goldendevs · Self-employed",
        logo: "/golden-devs.jpg", // Replace with actual logo
        duration: "Mar 2025 - Present · 1 mo",
        description:
            "Founded and lead Goldendevs, a volunteer-driven developer community that builds and launches MVP SaaS solutions. Empowering developers through hands-on projects and collaboration.",
        link: "https://goldendevs.com", // Replace with actual community link
        images: [
            "/devuzcommnunity.jpg", // Replace with relevant images
        ],
    },
];

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{j.role}</h3>
                                        <p className="text-sm text-muted-foreground">{j.company}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2" />
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description}</p>
                                {/* Job Images */}
                                <JobImages role={j.role} link={j.link} images={j.images} duration={j.duration} />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    );
};
