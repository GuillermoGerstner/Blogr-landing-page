import Hero from "@/components/Hero";
import Editor from "@/components/Editor";
import Phones from "@/components/Phones";
import Laptop from "@/components/Laptop";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Editor />
      <Phones />
      <Laptop />
    </main>
  );
}
