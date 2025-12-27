import { fetchStrapiData } from "@/lib/strapi";

export default async function Home() {
  const strapiData = await fetchStrapiData("/api/home-page");
  console.log(strapiData);
  

  const { title, description } = strapiData;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </main>
  );
}
