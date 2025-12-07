import { getIntlayer } from 'intlayer';
 
export default function NotFoundPage() {
  const content = getIntlayer("main-page");
  return <h1>{content.notFound}</h1>;
}