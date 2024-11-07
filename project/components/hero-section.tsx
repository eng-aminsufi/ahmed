import { Button } from "./ui/button";
import { Code2, Facebook } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="py-20 md:py-32 text-center">
      <div className="space-y-6 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          مرحباً، أنا أحمد صوفي
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          مطور برمجيات متخصص في بناء تطبيقات الويب الحديثة والمتطورة
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/#contact">
              <Code2 className="ml-2 h-4 w-4" />
              تواصل معي
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.facebook.com/share/19Vg1ujZQN/" target="_blank">
              <Facebook className="ml-2 h-4 w-4" />
              فيسبوك
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}