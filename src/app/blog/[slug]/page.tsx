import { Mdx } from "../../_components/mdx-components";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Navbar from "../../_components/Navbar";

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = await getDocFromParams(params.slug);

  return (
    <main className="flex min-w-full h-screen flex-col items-center">
      <div className="w-full pt-8 px-8 sticky top-0 bg-background">
        <Navbar page="events" showContent={false} />
      </div>
      <Mdx code={doc.body.code} />
    </main>
  );
}
