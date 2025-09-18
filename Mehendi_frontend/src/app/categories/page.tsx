import ServicesPage from "./ServicePage";

export default function CategoriesPage({
  searchParams,
}: {
  searchParams?:
    | { [key: string]: string | string[] | undefined }
    | Promise<any>;
}) {
  // If Next.js gave us a Promise, resolve it
  if (searchParams instanceof Promise) {
    throw new Error(
      "searchParams is unexpectedly a Promise. Update Next.js types."
    );
  }

  return <ServicesPage type={searchParams?.type as string | undefined} />;
}
