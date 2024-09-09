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
    <main className="flex flex-col items-center h-screen overflow-hidden">
      <div className="w-full pt-8 px-8 sticky top-0 z-10">
        <Navbar page="events" showContent={false} />
      </div>
      <section className="px-40 pt-10 pb-20 max-md:px-30 max-sm:px-20 overflow-scroll h-screen">
        <Mdx code={doc.body.code} />
      </section>
    </main>
  );
}
