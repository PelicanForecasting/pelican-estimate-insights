import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Mason Hennings",
      title: "Founder & CEO",
      description: "Mason is a construction industry veteran with over 15 years of experience in estimating, project management, and business development.",
      imageUrl: "/lovable-uploads/0368858b-3354-444f-9999-bf4192c95913.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/mason-hennings-409a8113b/"
    },
    {
      name: "Jane Cooper",
      title: "Estimating Consultant",
      description: "Jane is an estimating expert with a proven track record of helping contractors improve their bidding accuracy and win more projects.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b8d21c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      linkedinUrl: "#"
    },
    {
      name: "Cody Fisher",
      title: "Project Management Advisor",
      description: "Cody provides strategic guidance to construction companies on project planning, execution, and risk management.",
      imageUrl: "https://images.unsplash.com/photo-1570295999919-56ceb7e86ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      linkedinUrl: "#"
    },
    {
      name: "Chelsea Hagon",
      title: "Business Development Consultant",
      description: "Chelsea helps construction firms identify new market opportunities, build strategic partnerships, and drive revenue growth.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00d56c3f6147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      linkedinUrl: "#"
    }
  ];

  return (
    <PageLayout>
      <section className="py-12 md:py-16">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-1 mb-6">About Us</h1>
            <p className="text-lg text-pelican-slate">
              We are a team of construction industry experts dedicated to helping contractors improve their estimating processes and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="content-container">
          <h2 className="heading-2 mb-8">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-pelican-slate mb-6">
              Our mission is to empower construction companies with the knowledge, tools, and strategies they need to make informed decisions, optimize their bidding processes, and maximize profitability.
            </p>
            <p className="text-lg text-pelican-slate">
              We believe that accurate estimating is the foundation of successful construction projects, and we are committed to providing our clients with the highest quality consulting services and resources.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="content-container">
          <h2 className="heading-2 mb-8">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar>
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.title}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-pelican-slate mb-4">{member.description}</p>
                  <a 
                    href={member.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary font-medium hover:text-pelican-navy transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn Profile
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="content-container">
          <h2 className="heading-2 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="heading-3 mb-4">Integrity</h3>
              <p className="text-pelican-slate">
                We conduct our business with the highest ethical standards, honesty, and transparency.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-3 mb-4">Excellence</h3>
              <p className="text-pelican-slate">
                We are committed to providing our clients with exceptional service, innovative solutions, and measurable results.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-3 mb-4">Collaboration</h3>
              <p className="text-pelican-slate">
                We believe in building strong partnerships with our clients, working together to achieve their goals.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-3 mb-4">Innovation</h3>
              <p className="text-pelican-slate">
                We embrace new technologies, methodologies, and ideas to continuously improve our services and deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
