import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ helpID: string }>;
}) {
  const helpId = (await params).helpID;
  console.log(helpId);
  return (
    <>
      <h1>hELP Details {helpId} </h1>
    </>
  );
}
