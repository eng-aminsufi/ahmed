import { Button } from "@/components/ui/button";
import { Code2, Facebook } from "lucide-react";
import Link from "next/link";
import { getHeroContent, getSocialLinks } from "@/lib/cms";

export function HeroSection() {
  const content = getHeroContent();
  const social = getSocialLinks();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <p className="text-xl text-primary">{content.greeting}</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            {content.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            {content.subtitle}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {content.description}
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/#contact">
                <Code2 className="ml-2 h-5 w-5" />
                تواصل معي
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href={social.facebook} target="_blank">
                <Facebook className="ml-2 h-5 w-5" />
                فيسبوك
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}