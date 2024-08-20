import { allDocs } from "contentlayer/generated";
import Navbar from "../_components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function Blog() {
  const docs = allDocs;

  return (
    <main className="flex min-w-full h-screen flex-col items-center">
      <div className="w-full pt-8 px-8 sticky top-0 bg-background">
        <Navbar page="events" showContent={false} />
      </div>

      {docs.length > 0 ? (
        <section className="mt-16 w-10/12 px-8 grid grid-cols-3 max-sm:grid-cols-1 gap-8">
          {docs.map((doc) => (
            <a
              key={doc._id}
              href={`blog/${doc.slugAsParams}`}
              className="hover:scale-105 transition-all duration-500"
            >
              <Card className="">
                <CardHeader>
                  <CardTitle>{doc.title}</CardTitle>
                  <CardDescription>Written by: {doc.author}</CardDescription>
                </CardHeader>
                <CardContent>{doc.description}</CardContent>
              </Card>
            </a>
          ))}
        </section>
      ) : (
        <section className="mt-16 w-full px-8 flex justify-center items-center">
          <p className="text-center text-gray-500 mb-8">No blogs in CoDE.</p>
        </section>
      )}
    </main>
  );
}
