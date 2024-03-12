import { callApi } from "./fetchApi.js";

const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=14fd34af35fe4493b10114972dcc064b";


const request=callApi(url);
request.then((data)=>{
    renderUI(data);
})

// const dummyData={
//     "status": "ok",
//     "totalResults": 38,
//     "articles": [
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT Education Desk",
//             "title": "TS SSC 2024 Hall Ticket LIVE: Telangana Class 10th admit card out, link here - Hindustan Times",
//             "description": "Telangana TS SSC 2024 Hall Ticket Live: Class 10 hall tickets out. Follow the blog for latest updates.",
//             "url": "https://www.hindustantimes.com/education/board-exams/telangana-ts-ssc-2024-hall-ticket-live-updates-bse-telangana-class-10th-admit-card-direct-link-at-bsetelanganagovin-101709810587567.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/ts_ssc_admit_card_2024_1709811273161_1709811279920.png",
//             "publishedAt": "2024-03-07T14:17:42Z",
//             "content": "Telangana TS SSC 2024 Hall Ticket Live: Directorate of Government Examinations, Telangana has released TS SSC Hall Ticket 2024 on March 7, 2024. The admit card for Class 10 board examination can be d… [+4904 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT News Desk",
//             "title": "‘Cong won’t get more than 40 seats in Lok Sabha': Himanta Biswa's prediction - Hindustan Times",
//             "description": "Speaking at the Republic TV Summit, Sarma said that his wish was that the seats of the Congress should be reduced to 11 but that would not happen. | Latest News India",
//             "url": "https://www.hindustantimes.com/india-news/congress-won-t-get-more-than-40-ls-seats-in-upcoming-polls-assam-cm-himanta-biswa-sarmas-prediction-101709816905770.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/PTI03-07-2024-000034B-0_1709818162616_1709818187809.jpg",
//             "publishedAt": "2024-03-07T13:54:44Z",
//             "content": "Assam chief minister Himanta Biswa Sarma attacked the Congress ahead of the upcoming Lok Sabha polls and said that the party will not get more than 30 to 40 seats in the polls. Speaking at the Republ… [+2176 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Indian Express"
//             },
//             "author": "The Indian Express",
//             "title": "Xiaomi 14 with Leica optics debuts in India: Price starts at Rs 69,999 - The Indian Express",
//             "description": null,
//             "url": "https://indianexpress.com/article/technology/tech-news-technology/xiaomi-14-with-leica-optics-debuts-in-india-9201240/",
//             "urlToImage": null,
//             "publishedAt": "2024-03-07T13:44:58Z",
//             "content": null
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT Entertainment Desk",
//             "title": "Twinkle Khanna changes Instagram display pic, bio to Kumar's +1. Internet reacts - Hindustan Times",
//             "description": "Author and celebrity columnist Twinkle Khanna, who is married to actor Akshay Kumar, seems to have taken a jibe at those who recognise her only as his wife. | Bollywood",
//             "url": "https://www.hindustantimes.com/entertainment/bollywood/twinkle-khanna-changes-instagram-display-pic-bio-to-kumars-1-internet-reacts-101709817555344.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/twinkle_khanna_1675586367604_1709817732383.png",
//             "publishedAt": "2024-03-07T13:41:32Z",
//             "content": "Author, celebrity columnist and former actor Twinkle Khanna seems to have pulled off an Instagram stunt. She inserted a strap on her display picture that reads, Kumar's +1, probably referring to her … [+2100 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT Sports Desk",
//             "title": "Kuldeep Yadav reveals R Ashwin's exact words during dramatic 'ball-swap' moment - Hindustan Times",
//             "description": "Kuldeep Yadav had reserved a special gesture for Ashwin after the latter took four wickets in his 100th Test in Dharamsala | Cricket",
//             "url": "https://www.hindustantimes.com/cricket/kuldeep-yadav-reveals-r-ashwins-exact-words-during-dramatic-ball-exchange-moment-in-5th-test-i-got-35-101709814727561.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/PTI03-07-2024-000233A-0_1709817679120_1709817708241.jpg",
//             "publishedAt": "2024-03-07T13:30:48Z",
//             "content": "Kuldeep Yadav's magical spell led India's charge on the opening day of the fifth Test against England in Dharamsala. The left-arm wrist spinner scalped five wickets, helping India bundle the visitors… [+2342 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Moneycontrol"
//             },
//             "author": "Christin Mathew Philip",
//             "title": "Rameshwaram Cafe blast: How cameras in Bengaluru buses are aiding in the probe - Moneycontrol",
//             "description": "Footage of the suspect traveling on BMTC buses was captured on its CCTV cameras.",
//             "url": "https://www.moneycontrol.com/news/technology/rameshwaram-cafe-blast-how-cameras-in-bengaluru-buses-are-aiding-in-the-probe-12420921.html",
//             "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/03/Rameshwaram-Cafe-blast-1-770x433.jpg",
//             "publishedAt": "2024-03-07T12:56:54Z",
//             "content": "The Rameshwaram Cafe blast suspect presumably ran a recce of the spot before the actual operation, and took measures to avoid identification. He wore a cap, glasses and mask and paid for his Rava idl… [+3422 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "NDTV News"
//             },
//             "author": null,
//             "title": "After State Win, Cold Feet In Karnataka Congress Over National Battle - NDTV",
//             "description": "Karnataka's ruling Congress is having trouble finding candidates to field in the Lok Sabha elections.",
//             "url": "https://www.ndtv.com/india-news/after-state-win-cold-feet-in-karnataka-congress-over-national-battle-5194508",
//             "urlToImage": "https://c.ndtvimg.com/2023-05/e6mcd1qo_karnataka-congress-pti_650x400_14_May_23.jpg",
//             "publishedAt": "2024-03-07T12:45:17Z",
//             "content": "Bengaluru: Karnataka's ruling Congress is having trouble finding candidates to field in the Lok Sabha elections. Sources told NDTV that several ministers of the state -- which is also the home state … [+2209 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "YouTube"
//             },
//             "author": null,
//             "title": "Parrot Fever Outbreak Claims 5 Lives Across Europe | World Health Organization Raises Alarm - MIRROR NOW",
//             "description": "The World Health Organization has raised an alarm over the deadly flu spreading across Europe. The parrot fever outbreak has impacted several European countr...",
//             "url": "https://www.youtube.com/watch?v=dkw74sYTnpM",
//             "urlToImage": "https://i.ytimg.com/vi/dkw74sYTnpM/maxresdefault.jpg",
//             "publishedAt": "2024-03-07T12:28:56Z",
//             "content": null
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT News Desk",
//             "title": "SEBI bars JM Financial from managing new bond issuances - Hindustan Times",
//             "description": "SEBI restricts JM Financial from new mandates for bond issuances, allows 60-day extension for debt issues.",
//             "url": "https://www.hindustantimes.com/business/sebi-bars-jm-financial-from-managing-new-bond-issuances-101709814243880.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/sebi_representative_Reuters_1630420808170_1709814252389.jpg",
//             "publishedAt": "2024-03-07T12:27:28Z",
//             "content": "In an interim order on Thursday, SEBI (Securities and Exchange Board of India) has restricted JM Financial from taking on new mandates as a manager for bond issuances.\r\nSEBI restricts JM Financial fr… [+1998 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Livemint"
//             },
//             "author": null,
//             "title": "Nazim clicks selfie with PM Modi in J-K, calls it 'joyful' moment — Who is he? - Mint",
//             "description": "Prime Minister Narendra Modi shared a “memorable selfie” with his “friend Nazim” on social media on Thursday.",
//             "url": "https://www.livemint.com/news/india/nazim-clicks-selfie-with-pm-modi-in-jammu-and-kashmir-calls-it-joyful-moment-who-is-he-11709813346171.html",
//             "urlToImage": "https://www.livemint.com/lm-img/img/2024/03/07/1600x900/PTI03-07-2024-000140B-0_1709813382762_1709813396315.jpg",
//             "publishedAt": "2024-03-07T12:13:52Z",
//             "content": "Prime Minister Narendra Modi took to X (formerly known as Twitter) on Thursday to post a \"memorable selfie\" with his \"friend Nazim\". PM Modi was in Jammu and Kashmir on Thursday to speak at a public … [+2264 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT News Desk",
//             "title": "Mamata Banerjee's message to former HC judge who joined BJP and a challenge - Hindustan Times",
//             "description": "Abhijit Gangopadhyay, who resigned as a judge of Calcutta High Court on Tuesday morning, joined the BJP on Thursday. | Latest News India",
//             "url": "https://www.hindustantimes.com/india-news/mamata-banerjees-message-to-former-hc-judge-who-joined-bjp-and-a-challenge-101709811255086.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/Mamata_Banerjee_judge_1709812583148_1709812596217.jpg",
//             "publishedAt": "2024-03-07T12:03:46Z",
//             "content": "West Bengal chief minister Mamata Banerjee on Thursday criticised former Calcutta high court judge Abhijit Gangopadhyay, who joined the Bharatiya Janata Party (BJP) hours ago.\r\nFormer Calcutta high c… [+2982 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "CNBCTV18"
//             },
//             "author": "Ekta Batra",
//             "title": "Puberty to Menopause: A comprehensive guide to women's health - CNBCTV18",
//             "description": "During the transition to adolescence, a critical period of physical and emotional development begins. Dr. Avan Dadina, a Mumbai-based gynecologist and obstetrician, stresses the significance of this phase and underscores the importance of a healthy lifestyle,…",
//             "url": "https://www.cnbctv18.com/healthcare/puberty-to-menopause-a-comprehensive-guide-to-women-health-19222761.htm",
//             "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2024/03/womens-health-1019x573.jpg",
//             "publishedAt": "2024-03-07T11:58:52Z",
//             "content": "Let's Connect with CNBCTV 18\r\n©TV18 Broadcast Limited. All rights reserved."
//         },
//         {
//             "source": {
//                 "id": "al-jazeera-english",
//                 "name": "Al Jazeera English"
//             },
//             "author": "Al Jazeera",
//             "title": "Could Houthi-sunk ship Rubymar spell eco-disaster for the Red Sea? - Al Jazeera English",
//             "description": "‘Time is of essence’: Greenpeace director warns that urgent strategy is needed to protect the Red Sea from catastrophe.",
//             "url": "https://www.aljazeera.com/news/2024/3/7/could-houthi-sunk-ship-rubymar-spell-eco-disaster-for-the-red-sea",
//             "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/2024-03-02T135501Z_195864721_RC2ZC6AMUJDA_RTRMADP_3_ISRAEL-PALESTINIANS-SHIPPING-YEMEN-1709737287.jpg?resize=1920%2C1440",
//             "publishedAt": "2024-03-07T11:31:51Z",
//             "content": "Rubymar, the Belize-flagged, British-owned cargo ship that was badly damaged in a Houthi attack in February, has almost completely sunk into the Red Sea, causing an oil slick and prompting serious co… [+5437 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT News Desk",
//             "title": "Mamata says Bengal safest for women, day after PM's attack over Sandeshkhali - Hindustan Times",
//             "description": "Mamata Banerjee accused the BJP of spreading fake information about Sandeshkhali, where women have accused TMC leaders of sexually abusing them. | Latest News India",
//             "url": "https://www.hindustantimes.com/india-news/mamata-banerjee-says-bengal-safest-for-women-day-after-pm-modis-attack-over-sandeshkhali-101709809174078.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/Mamata_Banerjee_1709819300195_1709819300449.jpg",
//             "publishedAt": "2024-03-07T11:20:44Z",
//             "content": "West Bengal chief minister Mamata Banerjee on Thursday accused the Bharatiya Janata Party (BJP) of spreading false information about Sandeshkhali, where women have accused TMC leaders of sexually abu… [+2965 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT News Desk",
//             "title": "Planning to buy a new car? Tata Motors to hike prices up to 2% from this date - Hindustan Times",
//             "description": "Tata Motors said that the price increase will be applicable across the entire range of commercial vehicles.",
//             "url": "https://www.hindustantimes.com/business/planning-to-buy-a-new-car-tata-motors-to-hike-prices-up-to-2-across-segments-from-this-date-101709801745987.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/TATA-MOTORS-STOCKS--0_1709804940177_1709805116336.JPG",
//             "publishedAt": "2024-03-07T10:47:00Z",
//             "content": "Tata Motors announced on Thursday that it would implement a price hike of up to 2 per cent on its commercial vehicles starting April 1 to compensate for lingering effects from previous input cost inc… [+2312 chars]"
//         },
//         {
//             "source": {
//                 "id": "espn-cric-info",
//                 "name": "ESPN Cric Info"
//             },
//             "author": "ESPNcricinfo staff",
//             "title": "Umpire Marais Erasmus to retire after second New Zealand-Australia Test - ESPNcricinfo",
//             "description": "He will finish his international career having stood as an on-field umpire in 82 men's Tests, 124 men's ODIs, 43 men's T20Is and 18 women's T20Is",
//             "url": "https://www.espncricinfo.com/story/umpire-marais-erasmus-to-retire-after-second-new-zealand-australia-test-1423882",
//             "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/292300/292328.6.jpg",
//             "publishedAt": "2024-03-07T10:36:23Z",
//             "content": "NewsHe will finish his international career having stood as an on-field umpire in 82 men's Tests, 124 men's ODIs, 43 men's T20Is and 18 women's T20Is"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "India Today"
//             },
//             "author": "Dr Rama Joshi",
//             "title": "Women's Day: How India can battle the menace of cervical cancer - India Today",
//             "description": "India contributes about one-fifth of the global cervical cancer burden Globacan 2020 estimates that 123907 women are diagnosed with cervical cancer in India annually and it claims the lives of approximately 77348 women each year",
//             "url": "https://www.indiatoday.in/health/story/international-womens-day-how-india-can-battle-the-menace-of-cervical-cancer-2511828-2024-03-07",
//             "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/high-incidence-of-cervical-cancer-is-often-linked-to-low-awareness--limited-screening-programs--and-071733191-16x9_0.png?VersionId=v82ylwPkn6KD7cyeE_eBiZLSiptJppGO",
//             "publishedAt": "2024-03-07T10:32:09Z",
//             "content": "Cervical cancer remains a significant health concern in India, with a high incidence that underscores the importance of prevention strategies. Understanding the risk factors, vaccination options, scr… [+3720 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT Tech",
//             "title": "Dreaming of space? NASA now accepting astronaut applications; Know requirements for signing up - HT Tech",
//             "description": "NASA has announced the opening of applications for aspiring astronauts, offering the chance to participate in missions to the moon and potentially Mars. Know the requirements for signing up for NASA’s space missions.",
//             "url": "https://tech.hindustantimes.com/tech/news/dreaming-of-space-nasa-now-accepting-astronaut-applications-know-requirements-for-signing-up-71709803225872.html",
//             "urlToImage": "https://images.hindustantimes.com/tech/img/2024/03/07/1600x900/6_1708610681378_1709803407582.jpg",
//             "publishedAt": "2024-03-07T09:25:26Z",
//             "content": "NASA has called for new astronauts, offering the opportunity to journey to the moon and potentially even Mars! With applications due on April 2, U.S. citizens with a passion for space exploration are… [+2564 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "swissinfo.ch"
//             },
//             "author": "SWI swissinfo.ch",
//             "title": "Gender-specific Covid-19 responses: men show greater physiological changes - SWI swissinfo.ch - SWI swissinfo.ch in English",
//             "description": "Men's skin temperature, heart rate and respiratory rate increase more than women's with Covid-19, study shows.",
//             "url": "https://www.swissinfo.ch/eng/science/gender-specific-covid-19-responses-men-show-greater-physiological-changes/73441600",
//             "urlToImage": "https://www.swissinfo.ch/content/wp-content/uploads/sites/13/2024/03/502511943_highres.jpg",
//             "publishedAt": "2024-03-07T09:09:43Z",
//             "content": "The scientists led by Lorenz Risch from the private University of Liechtenstein (UFL) and Inselspital Bern had around 1,100 people wear a wristband with a sensor for the study. \r\n KEYSTONE/© KEYSTONE… [+2667 chars]"
//         },
//         {
//             "source": {
//                 "id": "the-hindu",
//                 "name": "The Hindu"
//             },
//             "author": "The Hindu",
//             "title": "Padmaja Venugopal, Congress leader and late Kerala CM K. Karunakaran’s daughter, signals she will join BJP soon - The Hindu",
//             "description": null,
//             "url": "https://www.thehindu.com/news/national/kerala/padmaja-venugopal-congress-leader-and-late-kerala-cm-k-karunakarans-daughter-signals-she-will-join-bjp-soon/article67923995.ece",
//             "urlToImage": null,
//             "publishedAt": "2024-03-07T08:45:00Z",
//             "content": null
//         }
//     ]
// }

// renderUI(dummyData)

function renderUI(data){
    const articles=data.articles;
    console.log(articles)
    parent=document.getElementById("news-cards");
    articles.forEach((article) => {
        const card = createCard(article);
        parent.appendChild(card);
    })
}

function createCard(article){
    console.log(article)
    const card=document.createElement("div"); 
    card.className="card";

    //add image
    const image=document.createElement("img");
    image.src=article.urlToImage;
    image.className="card-img";
    card.appendChild(image);

    //title
    const title=document.createElement("a");
    title.className="card-title";
    title.href = article.url;
    title.innerText = article.title;
    title.target = '_blank';
    card.appendChild(title);

    return card;
}




