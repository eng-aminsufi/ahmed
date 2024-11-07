import { Progress } from "@/components/ui/progress";
import { getSkillsContent } from "@/lib/cms";

export function SkillsSection() {
  const content = getSkillsContent();

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{content.title}</h2>
          <div className="space-y-12">
            {content.categories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}