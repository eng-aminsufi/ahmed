import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const fullPath = path.join(process.cwd(), "content/blog", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-muted-foreground mb-8">
        {new Date(data.date).toLocaleDateString("ar-EG")}
      </p>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}