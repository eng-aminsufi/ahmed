import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { getAboutContent } from "@/lib/cms";

export function AboutSection() {
  const content = getAboutContent();

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{content.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-justify">
            {content.content}
          </p>
          <div className="space-y-6">
            {content.experience.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}