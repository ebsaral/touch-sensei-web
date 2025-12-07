import {type NextPageIntlayer } from "next-intlayer";

import InnerLayout from "@/components/InnerLayout";
import HomePage from "@/components/HomePage";
import { InnerLayout as InnerLayoutType } from "@/components/types";

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  const layoutParams: InnerLayoutType = {
    intlayerKey: "main-page",
    locale
  }
  return (
    <InnerLayout params={layoutParams}>
      <HomePage />
    </InnerLayout>
  );
}

export default Page;
