export const wedding = {
  theme: {
    burgundy: "#741B35",
    deepMaroon: "#551126",
    softRose: "#A85C72",
    ivory: "#FFFDFB",
    champagne: "#B69A68",
    mutedGrey: "#897A7D",
  },
  couple: {
    bride: {
      name: "Fathima Noorah",
      parents: "D/o Mr Ashraf Ali PK & Mrs Fathima Laila A",
      grandparents: [
        "Abdurahiman Haji & Khadeeja",
        "Ambarakkal Hamza Haji & Haleema (Late)",
        "Asiya",
      ],
    },
    groom: {
      name: "Dr. Muhammed Easa",
      parents: "S/o Mr Muhammed Harib & Mrs Shabana Harib",
      grandparents: [
        "Abdul Latheef Sahib & Rafeekha Latheef",
        "MM Yoonus & Parisha Yoonus",
      ],
    },
  },
  invitation: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    englishHeading: "In the Name of Allah",
    englishSubheading: "The Most Gracious & The Most Merciful",
    greeting: "You Are Cordially Invited",
    message:
      "With hearts full of joy and gratitude, we cordially invite your esteemed presence along with your family on the auspicious occasion of the Nikkah ceremony of our beloved ones. Your prayers, blessings, and gracious presence will make this sacred and joyous occasion truly memorable.",
  },
  verse: {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    reference: "SURAH AR-RUM · 30:21",
    translation:
      "And among His signs is that He created for you spouses from among yourselves so that you may find comfort in them, and He placed between you affection and mercy.",
  },
  nikah: {
    // Arabic "Insha Allah" shown above the heading
    intro: "إِنْ شَاءَ اللَّهُ",
    introMeaning: "If Allah wills",
    title: "NIKKAH",
    date: "Thursday, 17 December 2026",
    // Hijri date for 17 Dec 2026, shown as written.
    // VERIFY with the family's local moon-sighting calendar before publishing:
    // tabular/civil calendar = 7 Rajab 1448 (consistent with the reception's
    // 11 Rajab on 21 Dec); Umm al-Qura = 8 Rajab 1448.
    hijriDate: "7th Rajab 1448",
    time: "10:30 AM – 2:00 PM",
    venue: "Hayath Auditorium",
    address: "Cherumukku, Malappuram",
    // Paste the Google Maps share link for Hayath Auditorium here.
    // While empty, the button falls back to a Google Maps search for the venue name.
    mapUrl: "",
  },
  reception: {
    title: "RECEPTION",
    date: "Monday, 21 December 2026",
    // Edit to match the local Islamic calendar before publishing.
    hijriDate: "11th Rajab 1448",
    venue: "ORYX",
    address: "Convention Centre, Manjadi Junction",
    // Paste the Google Maps share link for ORYX Convention Centre here.
    mapUrl: "",
    dinner: "5:00 PM – 9:00 PM",
  },
  countdown: {
    heading: "COUNTING DOWN TO THE NIKKAH",
    displayDate: "Thursday · 17 December 2026 · 10:30 AM",
    target: "2026-12-17T10:30:00+05:30",
    timeZone: "Asia/Kolkata",
    closingMessage: "We look forward to celebrating this blessed day with you.",
    completeMessage:
      "The blessed day is here. Please join us in celebrating this beautiful occasion.",
  },
  music: {
    src: "/audio/wedding-music.mp4",
  },
} as const;
