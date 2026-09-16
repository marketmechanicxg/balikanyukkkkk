/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "240624";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Mutiara Retno Kinasih";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Shape Of My Heart",             // ← GANTI JUDUL LAGU
    artist: "Backstreet Boys",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "ngl one smile from you and my whole day just gets so much better." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "you're literally the reason my heart feels this full, no cap." },
  { file: "img3.jpeg", caption: "every single sec with you is hands down my fave." },
  { file: "img4.jpeg", caption: "some people search their whole life for happiness, i just found it in you, fr." },
  { file: "img5.jpeg", caption: "you turned my whole ordinary life into something this beautiful, idk how." },
  { file: "img6.jpeg", caption: "my heart genuinely feels safest whenever it's with you." },
  { file: "img7.jpeg", caption: "if i could relive literally any moment, i'd pick us every single time." },
  { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"ayy aku blum siap kehilangan kamu sayang aku ga bakalan bisa dan ga bakalan kuat kalo ga sama kamu maafin aku sekali lagi ya sayang🥺 kasih aku kesempatan buat oerbaiki semuanya aku sayang kmu aku gamau kehilangan kmu",
"maaff soal egoku maaff untuk kesalahan kecil maupun besar yang ku buat maaf belum bisa jadi yang terbaik buat kamu tapi aku selalu usahain jadi yang terbaik aku oengen kamu selalu ada buat aku dan aku ngak datang kali ini buat maksa kamu balik ke aku aku cuma mau jujur sama perasaan e aku senidiri setelah semua yang terjadi",
"aku sadari kehilangan kamu bukan hal kecil ada banyak hal yang sekaramg teraasa sepi karena dulu selalu ada kamu di situ aku akui aku punya salah ada sikapku yang mungkin nyakitin kamu kata kata ne aku yang seharusnya keluar dan caraku yang kadang ga peka sama perasaan e kmu semua itu bukan beratti aku ga sayang kamu tapi aku yang masih banyak kurangnya dan itu yang sekarang benar benar aku sesali",
"hari hai setalah berpisah bikin aku belajar banyak tentang arti sabar tentang cara menghargai dan tentang betapa berharganya seseorang yang dulu aku anggap aku selalu ada bukan sekedar kenagangan kamu adalah baguan oenting dari hidupmu yang sampai sekarang belum tergantikan",
"kalau saja ay masih ada ruang sedikit di hatimu aku inigin memperbaiki mencoba lagi bukan untuk mengulang kesalahan yang sama tapi memperbaiki semuanya semuanya tentang kita aku gak janji jadi sempurna tapi aku janji akan berusaha jadi lebih baik dari versi diriku yang dulu",
"kalaupun kamu belum siap juga aku akan menghargai nya aku cuma ingin kamu tau aku masih fi sini dengan perasan yang sama bahkan lebih dewasa dan suatu hari atau hari ini kamu mau kembali lagi aku akan menyambut mu dengan hati lebih tenang dan penuh tanggung jawab aku sayang kamuuu💗💞💖",
"i love you mutiara retno kinasih💓💗",
"AKU GA BERENTI BERUSAHA SEBELEUM KAMU BILANG AKU BUKAN ORANG YANG KAMU MAU LAGI🙂",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "where it all started",
    text:  "that exact moment when everything just clicked, dan tiba-tiba semuanya mulai make so much sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the quiet days",
    text:  "literally cuma kamu, aku, and those lil simple moments yang ternyata ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "through the storms",
    text:  "we've had our rough patches fr, ada badai dan chaos juga, but somehow kita selalu find our way back to each other.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "finding the light",
    text:  "you're genuinely the brightest part of my whole journey, yang selalu bikin everything feels a little lighter even when things get heavy.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "may this year give you all the calm of the ocean, dan sedalam itu juga hati kamu yang selalu penuh dengan kindness, fr." },
  { icon: "shell",   text: "hope your days stay this bright, kayak sun yang mantul di atas water, and your nights tetap peaceful seperti tide yang pelan-pelan balik ke laut." },
  { icon: "star",    text: "may every lil wish kamu pelan-pelan come true, exactly when you need it the most, no cap." },
  { icon: "compass", text: "wherever this year takes you, i hope kamu selalu find your way back to the people who genuinely care and adore you." },
  { icon: "anchor",  text: "stay grounded, stay grateful, and tbh tetap jadi kamu yang sekarang — beautiful in your own way, always." },
  { icon: "heart",   text: "pintu ini selalu terbuka buat kamu, aku ga minta buru-buru, cuma pengen kamu tau aku masih di sini nungguin." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6282136715162";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy aku udah baca pesannya, kita perlu ngobrol 🥺💗"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);