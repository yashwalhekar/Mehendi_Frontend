import ServicesPage from "./ServicePage";

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // If it's a Promise (as Next.js types it), await it
  const resolvedParams = searchParams ? await searchParams : {};
  const type = resolvedParams?.type as string | undefined;

  return <ServicesPage type={type} />;
}
