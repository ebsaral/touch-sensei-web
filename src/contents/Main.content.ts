import { Locales, t, type Dictionary } from "intlayer";

const pageContent = {
    key: "main-page",
    content: {
        notFound: {
            en: "Page not found",
            tr: "Sayfa bulunamadı",
            de: "Seite nicht gefunden"
        },
        soon: t({
            en: "soon at Google Play Store [postponed]",
            tr: "yakında Google Play Store'da! [ertelendi]",
            de: "bald im Google Play Store verfügbar! [postponed]"
        }),
        title: t({
            en: "Hello world English!",
            tr: "Hello world Turkce!",
            de: "Hallo Welt Deutsch!"
        }),
        about: t({
            en: "Go to the about page",
            tr: "Go to the about page",
            de: "Go to the about page"
        }),
        gameInfoTitle: t({
            en: "Game Info",
            tr: "Oyun Hakkında",
            de: "Spiel-Infos"
        }),
        gameInfo: t({
            en: "Touch Sensei has traveled to different lands over the years, touching new cultures in each country, touching the depths of different souls. On each journey he encountered new emotions: the warmth of love, the jolt of pain, the cold breath of fear, the shadow of worry, the light of happiness, the glow of courage, the depth of sadness, the lightness of joyful upliftment, the freshness of hope and the heavy darkness of despair... Every feeling tasted different, every emotion had a different texture.\n\nOver time, Sensei learned to bring all his senses together; when he could feel everything at once, he realized the magic behind the coincidences. He wove this secret deep into the game.\n\nTo join Touch Sensei on his secret and true journey, you must play the game carefully. Place your finger on the circle and move with it for the longest time. Along the path of your finger, every detail you encounter will bring you one step closer to the secret doors of your own senses.\n\nTouch Sensei is the perfect guide to get you fully synchronized with yourself and life, and we wish you a lot of fun on this magical journey. :)",
            tr: "Touch Sensei, yıllar boyu farklı diyarları gezdi, her bir ülkede yeni kültürlere, farklı ruhların derinliklerine dokundu. Her yolculukta yeni duygularla tanıştı: sevginin sıcaklığı, acının sarsıntısı, korkunun soğuk nefesi, endişenin gölgesi, mutluluğun ışığı, cesaretin parıltısı, hüznün derinliği, sevinçle yükselmenin hafifliği, umudun tazeliği ve umutsuzluğun ağır karanlığı… Her hissin tadı başka, her duygunun dokusu farklıydı.\n\nZamanla, Sensei tüm duyularını bir araya getirmeyi öğrendi; her şeyi aynı anda hissedebildiğinde, tesadüflerin arkasındaki büyüyü fark etti. Bulduğu bu sırrı, oyunun derinliklerine işledi.\n\nTouch Sensei’nin gizli ve gerçek yolculuğuna katılmak için, oyunu dikkatle oynamalısınız. Parmağınızı dairenin üzerine yerleştirin ve onunla birlikte en uzun süre boyunca ilerleyin. Parmağınızın izlediği yol boyunca, karşınıza çıkan her detay sizi kendi duyularınızın gizli kapılarına bir adım daha yaklaştıracak.\n\nKendinizle ve hayatla tam anlamıyla senkronize olmanız için mükemmel bir rehber olan Touch Sensei, sizlere bu büyülü yolculukta bol eğlence diliyor. :)",
            de: "Touch Sensei ist im Laufe der Jahre in verschiedene Länder gereist, hat in jedem Land neue Kulturen kennengelernt und die Tiefen der verschiedenen Seelen berührt. Auf jeder Reise begegnete er neuen Emotionen: der Wärme der Liebe, dem Ruck des Schmerzes, dem kalten Atem der Angst, dem Schatten der Sorge, dem Licht des Glücks, dem Glühen des Mutes, der Tiefe der Traurigkeit, der Leichtigkeit des freudigen Aufschwungs, der Frische der Hoffnung und der schweren Dunkelheit der Verzweiflung... Jedes Gefühl schmeckte anders, jede Emotion hatte eine andere Beschaffenheit.\n\nMit der Zeit lernte Sensei, alle seine Sinne zusammenzubringen; als er alles auf einmal fühlen konnte, erkannte er die Magie hinter den Zufällen. Dieses Geheimnis hat er tief in das Spiel eingewoben.\n\nUm Touch Sensei auf seiner geheimen und wahren Reise zu begleiten, musst du das Spiel sorgfältig spielen. Legen Sie Ihren Finger auf den Kreis und bewegen Sie ihn so lange wie möglich. Auf dem Weg deines Fingers bringt dich jedes Detail, das du entdeckst, einen Schritt näher an die geheimen Türen deiner eigenen Sinne.\n\nTouch Sensei ist der perfekte Führer, um dich mit dir selbst und dem Leben in Einklang zu bringen, und wir wünschen dir viel Spaß auf dieser magischen Reise :)"
        }),
        flags: {
            [Locales.ENGLISH]: '🇺🇸',
            [Locales.TURKISH]: '🇹🇷',
            [Locales.GERMAN]: '🇩🇪'
        }
    },
} satisfies Dictionary;

export default pageContent;
