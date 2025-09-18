import ServicesPage from "./ServicePage";

export default function CategoriesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return <ServicesPage type={searchParams.type} />;
}
