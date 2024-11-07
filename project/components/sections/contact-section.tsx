"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import { getContactContent } from "@/lib/cms";

export function ContactSection() {
  const content = getContactContent();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      to: content.email,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("حدث خطأ في إرسال الرسالة");

      toast.success("تم إرسال رسالتك بنجاح");
      e.currentTarget.reset();
    } catch (error) {
      toast.error("عذراً، حدث خطأ في إرسال الرسالة. الرجاء المحاولة مرة أخرى");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-lg text-muted-foreground">{content.description}</p>
        </div>
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  الاسم
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="اكتب رسالتك هنا"
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <Send className="ml-2 h-5 w-5" />
                    إرسال الرسالة
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            أو راسلني مباشرة على البريد الإلكتروني:
          </p>
          <a
            href={`mailto:${content.email}`}
            className="inline-flex items-center text-primary hover:underline mt-2"
          >
            <Mail className="ml-2 h-5 w-5" />
            {content.email}
          </a>
        </div>
      </div>
    </section>
  );
}