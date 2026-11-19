const translations = {

    en: {
        title: "Let's Make Seed Balls!",
        subtitle: "Simple farming techniques for a greener future.",
        start: "Start Guide",
        aboutTitle: "What is a Seed Ball?",
        aboutText: "Seed balls are small balls made from seeds, clay and soil. They are used as a method of planting seeds.",
        aboutHeading: "A simple way to sow seeds",
        whyHeading: "Why do we use seed balls?",
        whyText: "Seed balls make seeds easier to handle and provide an alternative way of sowing.",
        guideTitle: "How to Make Seed Balls",
        step1: "Prepare the materials.",
        step2: "Mix the materials.",
        step3: "Make small balls.",
        step4: "Dry the seed balls.",
        navAbout: "About",
        navGuide: "How to Make",
        navContact: "Contact"
    },

    ja: {
        title: "種団子を作ってみよう！",
        subtitle: "緑豊かな未来のための簡単な農業技術",
        start: "作り方を見る",
        aboutTitle: "種団子とは？",
        aboutText: "種団子は、種・粘土・土を使って作る小さな団子です。種を植える方法の一つとして使われます。",
        aboutHeading: "種をまくための簡単な方法",
        whyHeading: "なぜ種団子を使うの？",
        whyText: "種団子なら種を扱いやすくし、種をまく別の方法を提供します。",
        guideTitle: "種団子の作り方",
        step1: "材料を準備する",
        step2: "材料を混ぜる",
        step3: "小さな団子を作る",
        step4: "種団子を乾燥させる",
        navAbout: "種団子とは",
        navGuide: "作り方",
        navContact: "お問い合わせ"
    },

    ne: {
        title: "बीउको डल्लो बनाऔं!",
        subtitle: "हरियाली भविष्यका लागि सरल कृषि प्रविधि।",
        start: "बनाउने तरिका हेर्नुहोस्",
        aboutTitle: "बीउको डल्लो भनेको के हो?",
        aboutText: "बीउको डल्लो बीउ, चिम्ट्याइलो माटो र साधारण माटोबाट बनाइन्छ। यसलाई बीउ छर्ने विधिको रूपमा प्रयोग गरिन्छ।",
        aboutHeading: "बीउ छर्ने सरल तरिका",
        whyHeading: "बीउको डल्लो किन प्रयोग गरिन्छ?",
        whyText: "बीउको डल्लाले बीउलाई सजिलै सम्हाल्न मिल्छ र छर्ने वैकल्पिक तरिका प्रदान गर्छ।",
        guideTitle: "बीउको डल्लो कसरी बनाउने?",
        step1: "सामग्री तयार गर्नुहोस्।",
        step2: "सामग्रीहरू मिसाउनुहोस्।",
        step3: "साना डल्लाहरू बनाउनुहोस्।",
        step4: "बीउका डल्लाहरू सुकाउनुहोस्।",
        navAbout: "परिचय",
        navGuide: "बनाउने तरिका",
        navContact: "सम्पर्क"
    }
};

function changeLanguage() {

    const language = document.getElementById("language").value;

    const text = translations[language];

    document.getElementById("title").textContent = text.title;
    document.getElementById("subtitle").textContent = text.subtitle;
    document.getElementById("start").textContent = text.start;

    document.getElementById("about-title").textContent = text.aboutTitle;
    document.getElementById("about-text").textContent = text.aboutText;
    document.getElementById("about-heading").textContent = text.aboutHeading;
    document.getElementById("why-heading").textContent = text.whyHeading;
    document.getElementById("why-text").textContent = text.whyText;
    document.getElementById("guide-title").textContent = text.guideTitle;
    document.getElementById("step1").textContent = text.step1;
    document.getElementById("step2").textContent = text.step2;
    document.getElementById("step3").textContent = text.step3;
    document.getElementById("step4").textContent = text.step4;
    document.getElementById("nav-about").textContent = text.navAbout;
    document.getElementById("nav-guide").textContent = text.navGuide;
    document.getElementById("nav-contact").textContent = text.navContact;

    document.documentElement.lang = language;
    localStorage.setItem("language", language);
}

const languageSelect = document.getElementById("language");
const savedLanguage = localStorage.getItem("language");

if (savedLanguage && translations[savedLanguage]) {
    languageSelect.value = savedLanguage;
}

languageSelect.addEventListener("change", changeLanguage);
changeLanguage();