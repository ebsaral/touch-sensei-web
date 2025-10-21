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
        <div className="notes text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Başlangıç</b></h2><br></br>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Touch Sensei, ilk kez 2014 yılında, <a href="http://hipolabs.com">Hipo</a>&apos;daki bir hackathon için aklıma gelen basit bir oyun fikriydi. Oyunun sıkıcı olduğunu düşündüğüm için oyunu geliştirmeye devam etmedim. Mobil uygulamalara yönelik tecrübemi yansıtmaya vaktim olduğu için oyunun orijinal versiyonunu biraz geliştirerek yayına almaya karar verdim. Böylece birkaç haftalık Unity&apos;de uygulamayı geliştirme sürecinin ardından, 1 Ekim 2024&apos;te Touch Sensei&apos;nin ilk sürümünü App Store&apos;da yayına aldım. Google Play Store sürümü ise gecikecek gibi duruyor.</p>
            <h2 className="mb-2 mt-16 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Oyunun Geleceği</b></h2><br></br>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Aslında Touch Sensei, sadece parmağınızı basılı tutarak renkli bir daireyi takip etmekten ibaret değil. <b>Arka plandaki resim, çevrenizdeki sesler (müzik, doğa, vs) ve vücudunuzun biyolojik tepkiler bir araya geldiklerinde, kendinizle ve hayatınızla senkronize olmanızı sağlayacak.</b>Bu yüzden, sabretmeyi, detaylara odaklanmayı ve farkındalık kazanmayı gerektiriyor. Zamanla kendine ait özel bir kitlesi olabilir, veya maziye karışabilir. Bu biraz da kullanıcıların farkındalık kabiliyetlerine ve ilgilerine bağlı olacak.</p>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Birkaç arkadaşım “eski Windows temasını andırıyor” şeklinde yorumlarda bulundular. Bu tarz bir tasarımla başlamasının amacı, biraz nostalji havasını yaşatmak istememdi. Günümüz tasarım evreninde, bazı kullanıcılara negatif bir anlam yansıtacağını pek tahmin etmedim. Bu yüzden tasarımı modern bir görünüme kavuşturabilirim. Oyunun fonksiyonu çok daha önemli olduğu için, modern bir tasarımın önceliği bulunmuyor. En azından şimdilik. :)<br></br><br></br>Bir sonraki büyük güncellemede, kendi galerinizdeki fotoğrafları arka plan resimleri olarak kullanmanızı amaçlıyorum. Böylece oyun farklı bir boyut kazanacak. Daha sonraki bir sürümde ise kameranızın canlı görüntüsünü (video) arka plan olarak kullanmanızı sağlayacağım. Böylece Touch Sensei eşliğinde, çevrenizle farklı şekillerde etkileşim kurmaya başlayacaksınız. Bu noktaya gelindiğinde, oynanış biçimine yeni özellikler de eklenecek. Kamera görüntüsü aracılığıyla kullanabileceğiniz aksiyonlar / eylemler olacak. Bu özellikleri nasıl bir tasarımla (UX) sunmam gerektiğine henüz karar vermedim. Bana da sürpriz olsun.<br></br><br></br>Tahmin ettiğim gibi ilerlerse, oyundaki arka planla olan etkileşim biçimi, kullanıcıların farkındalık seviyelerinde ve hayatlarıyla olan etkileşimlerinde sükse yaratabilir.</p>
        </div>
      );
    }
    if(locale == "en") {
      return (
        <div className="notes text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Beginning</b></h2><br></br>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Touch Sensei was a simple game idea that first came to me in 2014 during a hackathon at <a href="http://hipolabs.com">Hipo</a>. I stopped developing it because I thought it was boring. Since I had time to reflect on my experience with mobile apps, I decided to expand on the original version and release it. So, after a few weeks of developing the app in Unity, I released the first version of Touch Sensei on the App Store on October 1, 2024. The Google Play Store release is expected to be delayed.</p>
            <h2 className="mb-2 mt-16 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Future of The Game</b></h2><br></br>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">In fact, Touch Sensei is more than just holding your finger down and following a colored circle. <b>The picture in the background, the sounds around you (music, nature, etc.) and your body&apos;s biological responses, when combined, will bring you in sync with yourself and your life.</b>Therefore, it requires patience, focus on details and awareness. Over time, it may have its own special audience, or it may fade into the past. This will depend a bit on the users&apos; awareness and interest.</p>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">A few of my friends commented that it “reminds me of the old Windows theme”. The purpose of starting with this kind of design was to create a bit of a nostalgic atmosphere. In today&apos;s design universe, I didn&apos;t really expect it to have a negative connotation for some users. So I can make the design look modern. Since the function of the game is much more important, a modern design is not a priority. At least for now. :)<br></br><br></br>In the next major update, I aim to use photos from your own gallery as background images. This will give the game a different dimension. In a later version, I will allow you to use your camera&apos;s live image (video) as the background. This way, you will start interacting with your surroundings in different ways with Touch Sensei. When this point is reached, new features will be added to the gameplay. There will be actions / actions that you can use via the camera view. I haven&apos;t decided yet how I should present these features with a design (UX). Let it be a surprise for me too.<br></br><br></br>If it progresses as I predict, the way the game interacts with the background could create a sensation in users&apos; awareness levels and interactions with their lives.</p>
            <p className="text-xs mt-10">Note: Translated from the original text in Turkish (via Google Translate).</p>
        </div>
      );
    }
    
    if(locale == "de") {
      return (
        <div className="notes text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Anfang</b></h2><br></br>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Touch Sensei war eine einfache Spielidee, die mir 2014 während eines Hackathons bei <a href="http://hipolabs.com">Hipo</a> kam. Ich habe die Entwicklung eingestellt, weil ich sie langweilig fand. Da ich Zeit hatte, über meine Erfahrungen mit mobilen Apps nachzudenken, beschloss ich, die ursprüngliche Version zu erweitern und zu veröffentlichen. Nach einigen Wochen der App-Entwicklung in Unity veröffentlichte ich die erste Version von Touch Sensei am 1. Oktober 2024 im App Store. Die Veröffentlichung im Google Play Store wird sich voraussichtlich verzögern.</p>
            <h2 className="mb-2 mt-16 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><b>Zukunft des Gamings</b></h2><br></br>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Tatsächlich geht es bei Touch Sensei nicht nur darum, einem farbigen Kreis zu folgen, indem man den Finger drückt und hält. <b>Wenn das Hintergrundbild, die Geräusche um Sie herum (Musik, Natur usw.) und die biologischen Reaktionen Ihres Körpers zusammenkommen, ermöglichen sie Ihnen, sich mit sich selbst und Ihrem Leben zu synchronisieren.</b>Daher ist Geduld erforderlich, Konzentration auf Details und Bewusstseinsbildung. Im Laufe der Zeit kann es sein, dass es ein eigenes spezielles Publikum hat, oder dass es der Vergangenheit angehört. Dies hängt in gewissem Maße von den Bewusstseinsfähigkeiten und Interessen der Benutzer ab.</p>
            <p className="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Einige meiner Freunde meinten: „Es erinnert mich an das alte Windows-Design.“ Der Zweck, mit dieser Art von Design zu beginnen, war, dass ich eine etwas nostalgische Atmosphäre schaffen wollte. Im heutigen Designuniversum war mir nicht klar, dass es für einige Benutzer eine negative Bedeutung haben würde. So kann ich dem Design einen modernen Look verleihen. Da die Funktion des Spiels viel wichtiger ist, steht ein modernes Design nicht im Vordergrund. Zumindest für den Moment. :)<br></br><br></br>Im nächsten großen Update beabsichtige ich, Fotos aus Ihrer eigenen Galerie als Hintergrundbilder zu verwenden. Dadurch erhält das Spiel eine andere Dimension. In einer späteren Version werde ich Ihnen erlauben, die Live-Ansicht (Video) Ihrer Kamera als Hintergrund zu verwenden. So beginnen Sie, begleitet von Touch Sensei, auf unterschiedliche Weise mit Ihrer Umgebung zu interagieren. An diesem Punkt werden dem Gameplay neue Funktionen hinzugefügt. Es wird Aktionen/Aktionen geben, die Sie über die Kameraansicht nutzen können. Ich habe mich noch nicht entschieden, in welcher Art von Design (UX) ich diese Features präsentieren soll. Lassen Sie es auch für mich eine Überraschung sein.<br></br><br></br>Wenn es so voranschreitet, wie ich es vorhergesagt habe, kann die Art und Weise, wie es mit dem Hintergrund im Spiel interagiert, zu einem Erfolg im Bekanntheitsgrad der Benutzer führen Interaktionen mit ihrem Leben.</p>
            <p className='text-sm mt-10'>Hinweis: Aus dem Originaltext ins Türkische übersetzt (über Google Translate).</p>
        </div>
      );
    }

    return <></>;
  }

export default function Home({params: {locale}}: {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);

  return (
    <Content locale={locale}></Content>
  );
}
