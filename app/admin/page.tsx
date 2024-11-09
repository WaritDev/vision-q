import ImageUpload from "@/components/ImageUpload";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Person Detection</h1>
      <ImageUpload />
    </main>
  );
}