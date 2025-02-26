
import { useTranslations } from "next-intl";
import {getTranslations} from 'next-intl/server';
import { unstable_setRequestLocale } from "next-intl/server";


export async function generateMetadata({params: {locale}}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title')
  };
}

function Content({ locale }: {locale: string}) {
    if (locale == "tr") {
      return (
        <div className="text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Başlangıç</b></h2><br></br>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">2014 yılında eğlenmek amacıyla ortaya attığım fikrimi hayata geçirme kararı aldım. Oyunun fikri çok basit olduğu için, sıkıcı olacağını düşündüm. Zaman ilerledikçe, tecrübemi yansıtabileceğim mükemmel bir fikir olduğuna ikna oldum. Böylece Eylül 2024’te Unity kullanarak oyunu geliştirmeye başladım. 1 Ekim 2024’te Touch Sensei’nin ilk sürümü App Store’da yayına girdi. Google Play Store sürümü ise birkaç gün gecikecek gibi duruyor.</p>
            <h2 className="mb-2 mt-16 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Oyunun Geleceği</b></h2><br></br>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Aslında Touch Sensei, sadece parmağınızı basılı tutarak renkli bir daireyi takip etmekten ibaret değil. <b>Arka plandaki resim, çevrenizdeki sesler (müzik, doğa, vs) ve vücudunuzun biyolojik tepkiler bir araya geldiklerinde, kendinizle ve hayatınızla senkronize olmanızı sağlayacak.</b>Bu yüzden, sabretmeyi, detaylara odaklanmayı ve farkındalık kazanmayı gerektiriyor. Zamanla kendine ait özel bir kitlesi olabilir, veya maziye karışabilir. Bu biraz da kullanıcıların farkındalık kabiliyetlerine ve ilgilerine bağlı olacak.</p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Birkaç arkadaşım “eski Windows temasını andırıyor” şeklinde yorumlarda bulundular. Bu tarz bir tasarımla başlamasının amacı, biraz nostalji havasını yaşatmak istememdi. Günümüz tasarım evreninde, bazı kullanıcılara negatif bir anlam yansıtacağını pek tahmin etmedim. Bu yüzden tasarımı modern bir görünüme kavuşturabilirim. Oyunun fonksiyonu çok daha önemli olduğu için, modern bir tasarımın önceliği bulunmuyor. En azından şimdilik. :)<br></br><br></br>Bir sonraki büyük güncellemede, kendi galerinizdeki fotoğrafları arka plan resimleri olarak kullanmanızı amaçlıyorum. Böylece oyun farklı bir boyut kazanacak. Daha sonraki bir sürümde ise kameranızın canlı görüntüsünü (video) arka plan olarak kullanmanızı sağlayacağım. Böylece Touch Sensei eşliğinde, çevrenizle farklı şekillerde etkileşim kurmaya başlayacaksınız. Bu noktaya gelindiğinde, oynanış biçimine yeni özellikler de eklenecek. Kamera görüntüsü aracılığıyla kullanabileceğiniz aksiyonlar / eylemler olacak. Bu özellikleri nasıl bir tasarımla (UX) sunmam gerektiğine henüz karar vermedim. Bana da sürpriz olsun.<br></br><br></br>Tahmin ettiğim gibi ilerlerse, oyundaki arka planla olan etkileşim biçimi, kullanıcıların farkındalık seviyelerinde ve hayatlarıyla olan etkileşimlerinde sükse yaratabilir.</p>
        </div>
      );
    }
    if(locale == "en") {
      return (
        <div className="text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Beginning</b></h2><br></br>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">In 2014, I decided to realize my idea that I came up with for fun. Because the idea of the game was so simple, I thought it would be boring. As time progressed, I was convinced that it was a great idea that I could reflect my experience. So in September 2024, I started developing the game using Unity. On October 1, 2024, the first version of Touch Sensei went live on the App Store. The Google Play Store version is likely to be delayed by a few days.</p>
            <h2 className="mb-2 mt-16 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Future of The Game</b></h2><br></br>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">In fact, Touch Sensei is more than just holding your finger down and following a colored circle. <b>The picture in the background, the sounds around you (music, nature, etc.) and your body&apos;s biological responses, when combined, will bring you in sync with yourself and your life.</b>Therefore, it requires patience, focus on details and awareness. Over time, it may have its own special audience, or it may fade into the past. This will depend a bit on the users&apos; awareness and interest.</p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">A few of my friends commented that it “reminds me of the old Windows theme”. The purpose of starting with this kind of design was to create a bit of a nostalgic atmosphere. In today&apos;s design universe, I didn&apos;t really expect it to have a negative connotation for some users. So I can make the design look modern. Since the function of the game is much more important, a modern design is not a priority. At least for now. :)<br></br><br></br>In the next major update, I aim to use photos from your own gallery as background images. This will give the game a different dimension. In a later version, I will allow you to use your camera&apos;s live image (video) as the background. This way, you will start interacting with your surroundings in different ways with Touch Sensei. When this point is reached, new features will be added to the gameplay. There will be actions / actions that you can use via the camera view. I haven&apos;t decided yet how I should present these features with a design (UX). Let it be a surprise for me too.<br></br><br></br>If it progresses as I predict, the way the game interacts with the background could create a sensation in users&apos; awareness levels and interactions with their lives.</p>
            <p>Note: Translated from the original text in Turkish (via Google Translate).</p>
        </div>
      );
    }
    
    if(locale == "de") {
      return (
        <div className="text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Anfang</b></h2><br></br>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Im Jahr 2014 beschloss ich, meine aus Spaß entstandene Idee in die Tat umzusetzen. Da die Idee des Spiels so einfach ist, dachte ich, es wäre langweilig. Mit der Zeit kam ich zu der Überzeugung, dass es eine hervorragende Idee war, über die ich meine Erfahrungen reflektieren konnte. Also begann ich im September 2024 mit der Entwicklung des Spiels mit Unity. Am 1. Oktober 2024 ging die erste Version von Touch Sensei im App Store online. Es sieht so aus, als würde sich die Google Play Store-Version um einige Tage verzögern.</p>
            <h2 className="mb-2 mt-16 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Zukunft des Gamings</b></h2><br></br>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Tatsächlich geht es bei Touch Sensei nicht nur darum, einem farbigen Kreis zu folgen, indem man den Finger drückt und hält. <b>Wenn das Hintergrundbild, die Geräusche um Sie herum (Musik, Natur usw.) und die biologischen Reaktionen Ihres Körpers zusammenkommen, ermöglichen sie Ihnen, sich mit sich selbst und Ihrem Leben zu synchronisieren.</b>Daher ist Geduld erforderlich, Konzentration auf Details und Bewusstseinsbildung. Im Laufe der Zeit kann es sein, dass es ein eigenes spezielles Publikum hat, oder dass es der Vergangenheit angehört. Dies hängt in gewissem Maße von den Bewusstseinsfähigkeiten und Interessen der Benutzer ab.</p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Einige meiner Freunde meinten: „Es erinnert mich an das alte Windows-Design.“ Der Zweck, mit dieser Art von Design zu beginnen, war, dass ich eine etwas nostalgische Atmosphäre schaffen wollte. Im heutigen Designuniversum war mir nicht klar, dass es für einige Benutzer eine negative Bedeutung haben würde. So kann ich dem Design einen modernen Look verleihen. Da die Funktion des Spiels viel wichtiger ist, steht ein modernes Design nicht im Vordergrund. Zumindest für den Moment. :)<br></br><br></br>Im nächsten großen Update beabsichtige ich, Fotos aus Ihrer eigenen Galerie als Hintergrundbilder zu verwenden. Dadurch erhält das Spiel eine andere Dimension. In einer späteren Version werde ich Ihnen erlauben, die Live-Ansicht (Video) Ihrer Kamera als Hintergrund zu verwenden. So beginnen Sie, begleitet von Touch Sensei, auf unterschiedliche Weise mit Ihrer Umgebung zu interagieren. An diesem Punkt werden dem Gameplay neue Funktionen hinzugefügt. Es wird Aktionen/Aktionen geben, die Sie über die Kameraansicht nutzen können. Ich habe mich noch nicht entschieden, in welcher Art von Design (UX) ich diese Features präsentieren soll. Lassen Sie es auch für mich eine Überraschung sein.<br></br><br></br>Wenn es so voranschreitet, wie ich es vorhergesagt habe, kann die Art und Weise, wie es mit dem Hintergrund im Spiel interagiert, zu einem Erfolg im Bekanntheitsgrad der Benutzer führen Interaktionen mit ihrem Leben.</p>
            <p>Hinweis: Aus dem Originaltext ins Türkische übersetzt (über Google Translate).</p>
        </div>
      );
    }

    return <></>;
  }

export default function Home({params: {locale}}: {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <Content locale={locale}></Content>
  );
}
