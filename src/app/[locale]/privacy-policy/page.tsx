
import InnerLayout from "@/components/InnerLayout";
import { GoogleSupportForm } from "@/components/Links/GoogleSupportForm";
import { getPageMetadata } from "@/utils";
import { getIntlayer } from "intlayer";
import { Metadata } from "next";
import { LocalPromiseParams, NextPageIntlayer } from "next-intlayer";
import { InnerLayout as InnerLayoutType } from "@/components/types";

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  return getPageMetadata({locale})
};

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  const intlayerKey = "privacy-page";
  const content = getIntlayer(intlayerKey, locale);

  const layoutParams: InnerLayoutType = {
    intlayerKey,
    locale,
  }

  return (
    <InnerLayout params={layoutParams}>
      <div className="row-start-3 flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
      {content.title}
      </div>
  
      <div className="row-start-3 flex gap-6 text-sm text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
      {content.text}
      
      </div>
      <div className="row-start-3 flex gap-6 text-sm text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">      
      <GoogleSupportForm />
      </div>
    </InnerLayout>
  );
}

export default Page;
