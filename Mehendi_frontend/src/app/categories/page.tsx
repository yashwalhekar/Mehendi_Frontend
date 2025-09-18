import ServicesPage from "./ServicePage";

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function CategoriesPage({ searchParams }: PageProps) {
  return <ServicesPage type={searchParams?.type as string | undefined} />;
}
