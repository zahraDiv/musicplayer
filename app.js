const homeMenu = document.getElementById("homeMenu");
const searchMenu = document.getElementById("searchMenu");
const libraryMenu = document.getElementById("libraryMenu");
const likedMenu = document.getElementById("likedMenu");

const mobileHomeMenu = document.getElementById("mobileHomeMenu");
const mobileSearchMenu = document.getElementById("mobileSearchMenu");
const mobileLibraryMenu = document.getElementById("mobileLibraryMenu");
const mobileLikedMenu = document.getElementById("mobileLikedMenu");

const searchInput = document.getElementById("searchInput");
const playlistGrid = document.getElementById("playlistGrid");
const artistsGrid = document.getElementById("artistsGrid");

///////// پلی‌لیست‌ها ///////////////

const playlists = {

    "Night Mix": [
        {
            title: "Divaneye Shahr",
            artist: "Hamid Hiraad",
            cover: "img/162-HamidHiraad-DivaneyeShahr.jpg",
            sound: "https://dl5.download1music.ir/Music/2019/Hamid%20Hiraad/Hamid%20Hiraad%20-%20Divaneye%20Shahr%20128.mp3"
        },
        {
            title: "Goli",
            artist: "Masih & Arash",
            cover: "img/images (19).jfif",
            sound: "https://dl.rozmusic.com/Music/1396/11/25/Masih%20%26%20Arash%20-%20Goli%20(128).mp3"
        },
        {
            title: "Darya",
            artist: "Garsha Rezaei",
            cover: "img/Garsha-Rezaei-Darya-Darya.jpg",
            sound: "https://dl.sevilmusics.com/cdn/music/svu/sv/Garsha%20Rezaei%20%20-%20Darya%20Darya%20[SevilMusic].mp3"
        },
        {
            title: "A Dreamy Night",
            artist: "Aron Afshar",
            cover: "img/images (20).jfif",
            sound: "https://dl.rozmusic.com/Music/1398/07/16/Aron%20Afshar%20-%20Shabe%20Royaei%20%28128%29.mp3"
        },
        {
            title: "Bade Raftane To",
            artist: "Macan Band",
            cover: "img/images (21).jfif",
            sound: "https://dl.rozmusic.com/Music/1404/06/06/Macan%20Band%20-%20Bade%20Raftane%20To%20%28128%29.mp3"
        }
    ],

    "Persian Classics": [
        {
            title: "Cupbearer",
            artist: "Hayedeh",
            cover: "img/images (22).jfif",
            sound: "https://sepidmusic.musitraf.com/Download/Music/1404/09/Hayedeh%20-%20Saghi.mp3"
        },
        {
            title: "Gole Yakh",
            artist: "Kourosh Yaghmaei",
            cover: "img/images (24).jfif",
            sound: "https://dl.musicdel.ir/Music/1400/05/kourosh_yaghmaei_gole_yakh%20128.mp3"
        },
        {
            title: "Age Ye Rooz",
            artist: "Faramarz Aslani",
            cover: "img/Faramarz-Aslanii-Age-Ye-Rooz.jpg",
            sound: "https://dl.gisomusic.com/Music/1403/01/02/Faramarz%20Aslani%20-%20Age%20Yerooz.mp3"
        },
        {
            title: "Marde Tanha",
            artist: "Farhad Mehrad",
            cover: "img/images (25).jfif",
            sound: "https://dl.musicdel.ir/Music/1400/08/farhad_mehrad_marde_tanha%20128.mp3"
        },
        {
            title: "Ghoozak-e Pa",
            artist: "Fereydoun Foroughi",
            cover: "img/images (26).jfif",
            sound: "https://dl.musicdel.ir/Music/1403/02/fereydoun_foroughi_quzake_pa%20128.mp3"
        },
        {
            title: "Sultan of Hearts",
            artist: "Aref",
            cover: "img/images (27).jfif",
            sound: "https://dl.musicsweb.ir/musics/01/03/Aref%20%20-%20Soltane%20Ghalbha%20-%20320%20-%20musicsweb.ir.mp3"
        }
    ],

    "Fresh Hits": [
        {
            title: "Janam Bash",
            artist: "Aron Afshar",
            cover: "img/images (28).jfif",
            sound: "https://dl.musicdel.ir/Music/1400/04/aron_afshar_janam_bash%20128.mp3"
        },
        {
            title: "Darya",
            artist: "Garsha Rezaei",
            cover: "img/images (29).jfif",
            sound: "https://dl.musicdel.ir/Music/99/04/Music/Garsha%20Rezaei%20-%20Darya%20Darya.mp3"
        },
        {
            title: "Delam Gerefte",
            artist: "Hamid Hiraad",
            cover: "img/images (30).jfif",
            sound: "https://dl.musicdel.ir/tag/music/1403/10/06/Hamid%20Hiraad%20Ft%20Meysam%20Akbari%20-%20Boghze%20Penhan%20(128).mp3"
        },
        {
            title: "Be Ki Begam",
            artist: "Hoorosh Band",
            cover: "img/images (31).jfif",
            sound: "https://dl.musicdel.ir/Music/1400/10/hoorosh_band_be_ki_pose_midi%20128.mp3"
        },
        {
            title: "Man Delam Gerefte",
            artist: "Ragheb",
            cover: "img/images (32).jfif",
            sound: "https://dl.musicdel.ir/Music/1400/12/ragheb_gharare_asheghi%20128.mp3"
        }
    ],

    "Focus": [
        {
            title: "Hanoozam",
            artist: "Ali Lohrasbi",
            cover: "img/images.jfif",
            sound: "https://dl.musicdel.ir/Music/1405/03/Ali%20Lohrasbi-Mahtab%20-musicdel.ir%20128.mp3"
        },
        {
            title: "You and I",
            artist: "Farzad Farzin",
            cover: "img/images (33).jfif",
            sound: "https://dl.musicdel.ir/Music/1401/03/farzad_farzin_manoto.mp3"
        },
        {
            title: "Divooneh",
            artist: "Puzzle Band",
            cover: "img/images (34).jfif",
            sound: "https://dl.musicdel.ir/tag/music/1402/05/29/Puzzle%20Band%20-%20Hagh%20Dare%20(128).mp3"
        }
    ],

    "Road Trip": [
        {
            title: "Baran Toee",
            artist: "Chaartaar",
            cover: "img/images (35).jfif",
            sound: "https://dl.rozmusic.com/Music/1396/01/08/Chaartaar%20-%20Baran%20Toee%20(128).mp3"
        },
        {
            title: "Har Baar In Dafe",
            artist: "Macan Band",
            cover: "img/images (21).jfif",
            sound: "https://dl.musicdel.ir/Music/1400/04/macan_band_har_bar%20in%20daro%20128.mp3"
        },
        {
            title: "Shal",
            artist: "Ragheb",
            cover: "img/images (32).jfif",
            sound: "https://dl.musicdel.ir/tag/music/1400/07/24/Ragheb%20-%20Shalet%20(128).mp3"
        },
        {
            title: "Trance",
            artist: "Mehdi Ahmadvand",
            cover: "img/images (36).jfif",
            sound: "https://dl.musicdel.ir/Music/1400/10/mehdi_ahmadvand_khalse%20128.mp3"
        }
    ],

    "Chill Beats": [
        {
            title: "Cool",
            artist: "Hossein",
            cover: "img/Ho3ein-Khafan.jpg",
            sound: "https://dl.mokhtalefmusic.com/music/1403/10/07/Ho3ein%20-%20Khafan.mp3"
        },
        {
            title: "Deprived",
            artist: "Sepehr Khalseh",
            cover: "img/images (37).jfif",
            sound: "https://dl.musicgitar.ir/Music/Sepehr%20Khalse/320/Sepehr%20Khalse%20-%20Mahroom%20%5B320%5D.mp3?_=1"
        },
        {
            title: "Unlimited",
            artist: "Reza Pishro",
            cover: "img/download.jfif",
            sound: "https://dl.bandmusic.ir/files/mp3/s1/Reza%20Pishro%20-%20Namahdood.mp3"
        },
        {
            title: "I remain steadfast.",
            artist: "Sina Saei",
            cover: "img/sina-sae-pabarjam-300x300.jpg",
            sound: "https://dl.sevilmusics.com/cdn/music/srvrs/Sina%20SaE%20-%20Pabarjam%20[SevilMusic].mp3"
        }
    ],

    "Energy": [
        {
            title: "Bekhatere Man",
            artist: "Yas",
            cover: "img/images (38).jfif",
            sound: "https://dl.mahanmusic.net/ahang/01/03/Yas%20-%20Bekhatere%20Man%20-%20128%20-%20mahanmusic.net.mp3"
        },
        {
            title: "Ye Roozi Khoob Miad",
            artist: "Hichkas",
            cover: "img/images (39).jfif",
            sound: "https://xx.sahand-music.ir/Archive/H/Hichkas/Single/14%20Hichkas%20-%20Ye%20Rooze%20Khoob%20Miad.mp3"
        },
        {
            title: "With pleasure.",
            artist: "Shayea",
            cover: "img/images.webp",
            sound: "https://dl.musicgitar.ir/Music/Shayea%20-%20Cheshmami%20%5B128%5D.mp3?_=2"
        }
    ]
};

const allSongs = Object.values(playlists).flat();


///////////// آهنگ‌های جدید ///////////////

const newReleaseSongs = [
    {
        title: "Shadmehr Release",
        artist: "Shadmehr Aghili",
        cover: "img/images (2).jfif",
        sound: "https://dl.musicdel.ir/Music/1405/06/Shadmehr%20Aghili-Shabe%20Berehne-musicdel.ir.mp3"
    },
    {
        title: "Mohsen Release",
        artist: "Mohsen Yeganeh",
        cover: "img/images (1).jfif",
        sound: "https://dl.musicdel.ir/Music/1400/04/mohsen_yeganeh_khiyale_to.mp3"
    },
    {
        title: "Googoosh Release",
        artist: "Googoosh",
        cover: "img/images (4).jfif",
        sound: "https://dl.musicgitar.ir/Music/Googoosh/320/Googoosh%20-%20Man%20Amadeham%20%5B320%5D.mp3?_=3"
    }
];

allSongs.push(...newReleaseSongs);


/////////// آهنگ‌های خواننده‌ها ///////////////

const artistSongs = {

    "Googoosh": [
        {
            title: "Creature",
            artist: "Googoosh",
            cover: "img/images (5).jfif",
            sound: "https://xx.sahand-music.ir/Archive/G/Googoosh/Googoosh%20-%20Kooh/01%20Makhloogh.mp3"
        },
        {
            title: "Kuli",
            artist: "Googoosh",
            cover: "img/images (5).jfif",
            sound: "https://xx.sahand-music.ir/Archive/G/Googoosh/Googoosh%20-%20Asheghaneha/07%20Koli.mp3"
        },
        {
            title: "Two Windows",
            artist: "Googoosh",
            cover: "img/images (5).jfif",
            sound: "https://xx.sahand-music.ir/Archive/G/Googoosh/Googoosh%20-%20Asheghaneha/05%20Do%20Panjereh.mp3"
        },
        {
            title: "Curse",
            artist: "Googoosh",
            cover: "img/images (5).jfif",
            sound: "https://xx.sahand-music.ir/Archive/G/Googoosh/Googoosh%20-%20Pol/05%20Talaagh.mp3"
        },
        {
            title: "Divorce",
            artist: "Googoosh",
            cover: "img/images (5).jfif",
            sound: "https://xx.sahand-music.ir/Archive/G/Googoosh/Googoosh%20-%20Kavir/04%20Nafrin%20Bar%20Zandegi.mp3"
        },
        {
            title: "jadeh",
            artist: "Googoosh",
            cover: "img/images (5).jfif",
            sound: "https://xx.sahand-music.ir/Archive/G/Googoosh/Googoosh%20-%20Asheghaneha/02%20Jadeh.mp3"
        },
        {
            title: "A Familiar Stranger",
            artist: "Googoosh",
            cover: "img/images (5).jfif",
            sound: "https://xx.sahand-music.ir/Archive/G/Googoosh/Googoosh%20-%20Kavir/01%20Gharibeh%20Ashena.mp3"
        }
    ],

    "Ebi": [
        {
            title: "Persian Gulf",
            artist: "Ebi",
            cover: "img/images (6).jfif",
            sound: "https://xx.sahand-music.ir/Archive/E/Ebi/Ebi%20-%20Khalij/01%20Khalij.mp3"
        },
        {
            title: "Night-stricken",
            artist: "Ebi",
            cover: "img/images (6).jfif",
            sound: "https://dl.gisomusic.com/Music/1403/02/11/Ebi%20-%20Shabzadeh.mp3"
        },
        {
            title: "Lion's Skin",
            artist: "Ebi",
            cover: "img/images (6).jfif",
            sound: "https://dl.mokhtalefmusic.com/music/1401/11/29/Ebi%20-%20Pooste%20Shir.mp3"
        },
        {
            title: "Honey",
            artist: "Ebi",
            cover: "img/images (6).jfif",
            sound: "https://dl.gisomusic.com/Music/1403/02/11/Ebi%20-%20Asal.mp3"
        },
        {
            title: "Desert",
            artist: "Ebi",
            cover: "img/images (6).jfif",
            sound: "https://dl.gisomusic.com/Music/1403/02/11/Ebi%20-%20Kavir.mp3"
        }
    ],

    "Dariush": [
        {
            title: "Don't tell me you love me.",
            artist: "Dariush",
            cover: "img/images (7).jfif",
            sound: "https://dl.gisomusic.com/Music/1403/02/26/Dariush%20-%20Beman%20Nagoo%20Dooset%20Daram.mp3"
        },
        {
            title: "Prisoner",
            artist: "Dariush",
            cover: "img/images (7).jfif",
            sound: "https://dl.gisomusic.com/Music/1403/02/26/Dariush%20-%20Zendooni.mp3"
        },
        {
            title: "Your hands",
            artist: "Dariush",
            cover: "img/images (7).jfif",
            sound: "https://xx.sahand-music.ir/Archive/D/Dariush/Dariush%20-%20Cheshme%20Man/03%20Dastaye%20To.mp3"
        },
        {
            title: "The Scent of Wheat",
            artist: "Dariush",
            cover: "img/images (7).jfif",
            sound: "https://dl.mokhtalefmusic.com/music/1403/09/26/Dariush%20-%20Booye%20Gandom.mp3"
        },
        {
            title: "Poppy",
            artist: "Dariush",
            cover: "img/images (7).jfif",
            sound: "https://xx.sahand-music.ir/Archive/D/Dariush/Dariush%20Va%20Sahneh%20(1)/06%20Shaghayegh.mp3"
        },
        {
            title: "Traveler",
            artist: "Dariush",
            cover: "img/images (7).jfif",
            sound: "https://xx.sahand-music.ir/Archive/D/Dariush/Dariush%20-%20Aman%20Az/01%20Do%20Mosafer.mp3"
        },
        {
            title: "Home",
            artist: "Dariush",
            cover: "img/images (7).jfif",
            sound: "https://dl.gisomusic.com/Music/1403/02/26/Dariush%20-%20Khooneh.mp3"
        }
    ],

    "Shadmehr": [
        {
            title: "Fate",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://dl.mokhtalefmusic.com/music/1403/09/12/Shadmehr%20Aghili%20-%20Taghdir%20-%20128.mp3"
        },
        {
            title: "Wings for Flight",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://dl.musicdel.ir/Music/1403/12/Shadmehr-Pare%20Parvaz%20-musicdel.ir%20128.mp3"
        },
        {
            title: "Habit",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://dl.mokhtalefmusic.com/music/1402/06/04/Shadmehr%20Aghili%20-%20Adat.mp3"
        },
        {
            title: "Question mark",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://dl.hamavayetaraneh.com/music/Shadmehr-Aghili-Alamate-Soal.mp3"
        },
        {
            title: "Cause",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://xx.sahand-music.ir/Archive/S/Shadmehr%20Aghili/Shadmehr%20Aghili%20-%20Sabab/01%20Sabab.mp3"
        },
        {
            title: "Impossible",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://dl.mokhtalefmusic.com/music/1402/06/04/Shadmehr%20Aghili%20-%20Mahal.mp3"
        },
        {
            title: "A Cold Day",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://dl.mokhtalefmusic.com/music/1402/06/04/Shadmehr%20Aghili%20-%20Rooze%20Sard.mp3"
        },
        {
            title: "a salesman",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://irsv.golsarmusic.ir/GolsarMusic-Root-DL3/98/10%20Dey/18/shadmehr/1.%20Adam%20Forosh.mp3"
        },
        {
            title: "It doesn't matter",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://dl.gisomusic.com/Music/1402/05/30/Shadmehr%20Aghili%20-%20Khiali%20Nist.mp3"
        },
        {
            title: "rustic",
            artist: "Shadmehr Aghili",
            cover: "img/images (9).jfif",
            sound: "https://dl.mahanmusic.net/Music/1403/06/Shadmehr%20Aghili-Dehati-mahanmusic.net%20128.mp3"
        }
    ],

    "Mohsen Chavoshi": [
        {
            title: "Where are you?",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://irsv.upmusics.com/Downloads/Musics/Mohsen%20Chavoshi%20-%20Kojaei%20(320).mp3"
        },
        {
            title: "Confidant",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://irsv.upmusics.com/Tracks/Songs/Mohsen%20Chavoshi%20%E2%80%93%20Sangeh%20Saboor(UpMusic).mp3"
        },
        {
            title: "After You",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://dl.rozmusic.com/Music/1404/02/24/Mohsen%20Chavoshi%20-%20Bad%20Az%20To%20%28128%29.mp3"
        },
        {
            title: "Wall clock",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://dl.rozmusic.com/Music/1403/11/17/Mohsen%20Chavoshi%20-%20Saat%20Divari%20%28128%29.mp3"
        },
        {
            title: "Bird",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://nicmusic.musitraf.com/nicmusic/023/043/Mohsen%20Chavoshi%20-%20Parandeh%20320.mp3"
        },
        {
            title: "Bedfellow",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://dl.rozmusic.com/Music/1396/02/20/Mohsen%20Chavoshi%20-%20Hamkhaab%20(128).mp3"
        },
        {
            title: "Mortal Wound",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://dl.rozmusic.com/Music/1402/06/16/Mohsen%20Chavoshi%20-%20Zakhm%20Kari%20%28128%29.mp3"
        },
        {
            title: "Train",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://dl.musicsweb.ir/musics/01/08/Mohsen%20Chavoshi%20-%20Ghatar%20-%20320%20-%20musicsweb.ir.mp3"
        },
        {
            title: "Uncle Chain-Maker",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://dl.rozmusic.com/Music/1396/10/21/Mohsen%20Chavoshi%20-%20Amoo%20%20Zanjir%20Baf%20(128).mp3"
        },
        {
            title: "Golash",
            artist: "Mohsen Chavoshi",
            cover: "img/images (10).jfif",
            sound: "https://dl.rozmusic.com/Music/1400/10/03/Mohsen%20Chavoshi%20-%20Ghalash%20%28128%29.mp3"
        }
    ],

    "Sirvan": [
        {
            title: "Autumn Rain",
            artist: "Sirvan Khosravi",
            cover: "img/images (11).jfif",
            sound: "https://dl.rozmusic.com/Music/1399/04/18/Sirvan%20Khosravi%20-%20Baroone%20Payizi%20%28128%29.mp3"
        },
        {
            title: "Memories of You",
            artist: "Sirvan Khosravi",
            cover: "img/images (11).jfif",
            sound: "https://dl.rozmusic.com/Music/1399/04/18/Sirvan%20Khosravi%20-%20Khaterate%20To%20%28128%29.mp3"
        },
        {
            title: "No, don't go",
            artist: "Sirvan Khosravi",
            cover: "img/images (11).jfif",
            sound: "https://irsv.upmusics.com/Tracks/Songs/Sirvan%20Khosravi%20%E2%80%93%20Na%20Naro(UpMusic).mp3"
        },
        {
            title: "This too shall pass.",
            artist: "Sirvan Khosravi",
            cover: "img/images (11).jfif",
            sound: "https://dl.rozmusic.com/Music/1402/01/20/Sirvan%20Khosravi%20-%20Inam%20Migzare%20%28128%29.mp3"
        }
    ]
};

Object.values(artistSongs).forEach((songs) => {
    allSongs.push(...songs);
});


///////////// تاپ چارت ////////////////

const topChartSongs = [
    {
        title: "Shabe Berahne",
        artist: "Shadmehr Aghili",
        cover: "img/images (8).jfif",
        sound: "https://nicmusic.musitraf.com/upload/2026/04/29/Shadmehr%20Aghili%20-%20Shabe%20Berahne.mp3"
    },
    {
        title: "Vaysa Donya",
        artist: "Reza Sadeghi",
        cover: "img/images (12).jfif",
        sound: "https://dl.rozmusic.com/Music/1396/01/15/Reza%20Sadeghi%20-%20Vaysa%20Donya%20%28128%29.mp3"
    },
    {
        title: "Ghaf",
        artist: "Alireza Talischi",
        cover: "img/images (13).jfif",
        sound: "https://dl.rozmusic.com/Music/1399/11/10/Alireza%20Talischi%20-%20Ghaaf%20%28128%29.mp3"
    },
    {
        title: "Ghorse Ghamar",
        artist: "Behnam Bani",
        cover: "img/images (14).jfif",
        sound: "https://dl.rozmusic.com/Music/1396/11/15/Behnam%20Bani%20-%20Ghorse%20Ghamar%20(128).mp3"
    },
    {
        title: "Salam Akhar",
        artist: "Ehsan Khajeh-Amiri",
        cover: "img/images (15).jfif",
        sound: "https://dl.rozmusic.com/Music/1396/01/15/Ehsan%20Khajeh%20Amiri%20-%20Salame%20Akhar%20%28128%29.mp3"
    }
];

allSongs.push(...topChartSongs);


///////////آهنگ‌های ژانر /////////////

const genreSongs = {

    Pop: [
        {
            title: "Souvenir",
            artist: "Hayedeh",
            cover: "img/images (40).jfif",
            sound: "https://dl.kelmusic.ir/pop/Hayedeh%20-%20Soghati.mp3"
        },
        {
            title: "Kaaba",
            artist: "Moein",
            cover: "img/images (41).jfif",
            sound: "https://dl.mehrdl.top/Music/A/A/Album/Asheghaneha/03%20Kabeh.mp3"
        },
        {
            title: "Jomeh",
            artist: "Farhad",
            cover: "img/images (42).jfif",
            sound: "https://dl.musicdel.ir/Music/1401/03/farhad_mehrad_jome%20128.mp3"
        }
    ],

    Rock: [
        {
            title: "Little Figure",
            artist: "Fereydoun Foroughi",
            cover: "img/images (26).jfif",
            sound: "https://dl.mokhtalefmusic.com/Music/1395/05/24/Adamak.mp3"
        },
        {
            title: "I am the lonely man of the night.",
            artist: "Habib",
            cover: "img/images (43).jfif",
            sound: "https://dl.musicdel.ir/Music/1400/05/habib_marde_tanhaye%20shab.mp3"
        },
        {
            title: "Marsh crabs",
            artist: "Habib",
            cover: "img/images (43).jfif",
            sound: "https://dl.musicdel.ir/Music/1401/01/habib_kharchanghay_mordabi%20128.mp3"
        }
    ],

    Chill: [
        {
            title: "Azadeh",
            artist: "Hayedeh",
            cover: "img/images (40).jfif",
            sound: "https://dl.mehrdl.top/Music/A/G/Album/Hayedeh-Bolbol/06%20Azadeh.MP3"
        },
        {
            title: "I love someone.",
            artist: "Moein",
            cover: "img/images (44).jfif",
            sound: "https://dl.mokhtalefmusic.com/music/1403/09/28/Moein%20-%20Yeki%20Ra%20Doost%20Midaram.mp3"
        },
        {
            title: "Mask",
            artist: "Siavash Ghomayshi",
            cover: "img/download (1).jfif",
            sound: "https://dl.gisomusic.com/Music/1403/02/10/Siavash%20Ghomayshi%20-%20Neghab.mp3"
        }
    ],

    Jazz: [
        {
            title: "Moonlight",
            artist: "Vigen",
            cover: "img/images (45).jfif",
            sound: "https://dl.gisomusic.com/Music/1403/03/03/Viguen%20-%20Mahtab.mp3"
        },
        {
            title: "Spring has arrived.",
            artist: "Captivating",
            cover: "img/images (46).jfif",
            sound: "https://dl.musicrooz.com/2024/music/4/New/delkesh%20amad%20no%20bahar.mp3"
        },
        {
            title: "Autumn Leaf",
            artist: "Marzieh",
            cover: "img/images (47).jfif",
            sound: "https://xx.sahand-music.ir/Archive/M/Marziyeh/Marziyeh%20-%20Khab%20E%20Nooshin/Bidad%20Zaman.mp3"
        }
    ],

    "Hip Hop": [
        {
            title: "I  The undersigned",
            artist: "Shaye'a",
            cover: "img/images.webp",
            sound: "https://dl.pmcmusic.tv/1398/05/Shayea%20-%20Injaneb%20%5B128%5D.mp3"
        },
        {
            title: "This is Iran",
            artist: "Bahram",
            cover: "img/images (48).jfif",
            sound: "https://dl.bandmusic.ir/files/1404/11/02/Bahram%20-%20Inja%20Irane.mp3"
        },
        {
            title: "Forgive me",
            artist: "Tataloo",
            cover: "img/images (49).jfif",
            sound: "https://dl.mokhtalefmusic.com/music/1400/03/16/Amir%20Tataloo%20-%20Mano%20Bebakhsh%20%5B320%5D.mp3"
        }
    ],

    Electronic: [
        {
            title: "Romantic",
            artist: "Farzad Farzin",
            cover: "img/images (33).jfif",
            sound: "https://dl.rozmusic.com/Music/1395/12/24/Farzad%20Farzin%20-%20Asheghaneh%20(128).mp3"
        },
        {
            title: "Trance",
            artist: "Mehdi Ahmadvand",
            cover: "img/images (50).jfif",
            sound: "https://dl.rozmusic.com/Music/1397/11/04/Mehdi%20Ahmadvand%20-%20Khalse%20(128).mp3"
        },
        {
            title: "Broken Angel",
            artist: "Arash",
            cover: "img/images (51).jfif",
            sound: "https://irsv.golsarmusic.ir/GolsarMusic-Root-DL3/98/11%20Bahman/288/Arash/Arash-Broken-Angel-%28Ft-Helena%29-320.mp3"
        }
    ]
};

Object.values(genreSongs).forEach((songs) => {
    allSongs.push(...songs);
});

//////////بخش‌ها //////////

const playlistSection = playlistGrid?.closest("section");

const genreCards = document.querySelectorAll(".genre-card");
const genreSection = genreCards[0]?.closest("section");
const genreGrid = genreCards[0]?.parentElement;

const playlistsHTML = playlistGrid?.innerHTML || "";
const genreHTML = genreGrid?.innerHTML || "";


 ////////////Made For You //////////

function showPlaylist(name) {

    const songs = playlists[name];

    if (!songs) {
        return;
    }

    playlistGrid.innerHTML = `
        <div class="col-span-full">
            <button
                id="backToPlaylists"
                class="mb-4 text-sm text-gray-400 transition hover:text-purple-400">
                <i class="fa-solid fa-arrow-left mr-1"></i>
                Back to Playlists
            </button>

            <h3 class="text-xl font-semibold">
                ${name}
            </h3>

            <p class="mt-1 text-sm text-gray-500">
                ${songs.length} songs
            </p>
        </div>

        <div class="col-span-full space-y-2">
            ${songs.map((song) => `
                <div
                    class="song-row flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-white/[0.035] p-3 transition hover:bg-white/[0.06]"
                    data-song="${song.title}">

                    <img
                        src="${song.cover}"
                        alt="${song.title}"
                        class="h-10 w-10 rounded-lg object-cover">

                    <div class="min-w-0 flex-1">
                        <h3 class="truncate text-sm font-medium">
                            ${song.title}
                        </h3>

                        <p class="mt-1 truncate text-xs text-gray-500">
                            ${song.artist}
                        </p>
                    </div>

                    <button
                        class="play-button text-purple-400"
                        data-song="${song.title}">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            `).join("")}
        </div>
    `;
}


function showPlaylists() {

    if (playlistGrid) {
        playlistGrid.innerHTML = playlistsHTML;
    }

}


playlistSection?.addEventListener("click", (e) => {

    const backButton = e.target.closest("#backToPlaylists");

    if (backButton) {
        showPlaylists();
        return;
    }

    if (e.target.closest(".play-button")) {
        return;
    }

    const row = e.target.closest(".song-row");

    if (row) {

        const song = findSong(row.dataset.song);

        if (song) {
            playSong(song);
        }

        return;
    }

    const card = e.target.closest("article");

    if (card) {

        const title = card.querySelector("h3");

        if (title) {
            showPlaylist(title.textContent.trim());
        }
    }
});

///////////ژانر ////////////

function showGenre(genre) {

    const songs = genreSongs[genre] || [];

    if (!genreGrid) {
        return;
    }

    genreGrid.innerHTML = `
        <div class="col-span-full">
            <button
                id="backToGenres"
                class="mb-4 text-sm text-gray-400 transition hover:text-purple-400">
                <i class="fa-solid fa-arrow-left mr-1"></i>
                Back to Genres
            </button>

            <h3 class="text-xl font-semibold">
                ${genre}
            </h3>

            <p class="mt-1 text-sm text-gray-500">
                ${songs.length} songs
            </p>
        </div>
    `;

    if (!songs.length) {

        genreGrid.innerHTML += `
            <div class="col-span-full py-10 text-center">
                <i class="fa-solid fa-music mb-3 text-2xl text-purple-400"></i>

                <p class="text-sm text-gray-500">
                    No songs added yet
                </p>
            </div>
        `;

        return;
    }

    songs.forEach((song) => {

        genreGrid.innerHTML += `
            <div
                class="song-row col-span-full flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-white/[0.035] p-3 transition hover:bg-white/[0.06]"
                data-song="${song.title}">

                <img
                    src="${song.cover}"
                    alt="${song.title}"
                    class="h-10 w-10 rounded-lg object-cover">

                <div class="min-w-0 flex-1">
                    <h3 class="truncate text-sm font-medium">
                        ${song.title}
                    </h3>

                    <p class="mt-1 truncate text-xs text-gray-500">
                        ${song.artist}
                    </p>
                </div>

                <button
                    class="play-button text-purple-400"
                    data-song="${song.title}">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
        `;
    });
}


function showGenres() {

    if (genreGrid) {
        genreGrid.innerHTML = genreHTML;
    }

}


genreSection?.addEventListener("click", (e) => {

    const backButton = e.target.closest("#backToGenres");

    if (backButton) {
        showGenres();
        return;
    }

    if (e.target.closest(".play-button")) {
        return;
    }

    const row = e.target.closest(".song-row");

    if (row) {

        const song = findSong(row.dataset.song);

        if (song) {
            playSong(song);
        }

        return;
    }

    const card = e.target.closest(".genre-card");

    if (card) {
        showGenre(card.dataset.genre);
    }
});

////////// پلیر ////////////

const audioPlayer = document.getElementById("audioPlayer");
const bottomPlayer = document.getElementById("bottomPlayer");
const playerImage = document.getElementById("playerImage");
const playerSong = document.getElementById("playerSong");
const playerArtist = document.getElementById("playerArtist");
const playerPlayButton = document.getElementById("playerPlayButton");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const backwardButton = document.getElementById("backwardButton");
const forwardButton = document.getElementById("forwardButton");
const playerFavoriteButton = document.getElementById("playerFavoriteButton");
const volumeButton = document.getElementById("volumeButton");
const volumeRange = document.getElementById("volumeRange");

let currentSong = null;
let currentIndex = 0;

let likedSongs = JSON.parse(localStorage.getItem("likedSongs")) || [];


/////////آهنگ هدر ///////////////

const heroSong = playlists["Night Mix"][0];

const heroPlayButton =
    document.querySelector(
        '.play-button[data-song="Late Night Vibes"]'
    );

if (heroPlayButton) {
    heroPlayButton.dataset.song = heroSong.title;
}

const heroFavoriteButton =
    heroPlayButton?.parentElement.querySelector(
        'button:not(.play-button)'
    );


////////// توابع اصلی ////////////

function findSong(name) {

    return allSongs.find((song) => song.title === name);

}


function formatTime(time) {

    if (isNaN(time)) {
        return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

}


function setFavorite(button, liked) {

    const icon = button?.querySelector("i");

    if (!icon) {
        return;
    }

    button.classList.toggle("text-purple-400", liked);

    icon.classList.toggle("fa-solid", liked);
    icon.classList.toggle("fa-regular", !liked);

}


function isLiked(song) {

    return likedSongs.some(
        (item) => item.title === song.title
    );

}


function saveLikes() {

    localStorage.setItem(
        "likedSongs",
        JSON.stringify(likedSongs)
    );

}


function toggleLike(song, button) {

    if (isLiked(song)) {

        likedSongs = likedSongs.filter(
            (item) => item.title !== song.title
        );

    } else {

        likedSongs.push(song);

    }

    saveLikes();

    setFavorite(button, isLiked(song));

    if (currentSong?.title === song.title) {
        setFavorite(
            playerFavoriteButton,
            isLiked(song)
        );
    }

    updateHeroFavorite();
    updateTopChartFavorites();

}


////////////تنظیم Top Charts /////////////

function setupTopCharts() {

    const sections = document.querySelectorAll("section");
    let topChartSection = null;

    sections.forEach((section) => {

        const heading = section.querySelector("h2");

        if (
            heading && heading.textContent.trim() === "Top Charts"
        ) {
            topChartSection = section;
        }

    });

    if (!topChartSection) {
        return;
    }

    const playButtons = topChartSection.querySelectorAll(".play-button");

    topChartSongs.forEach((song, index) => {

        const playButton = playButtons[index];

        if (!playButton) {
            return;
        }

        const row = playButton.parentElement;

        if (!row) {
            return;
        }

        const likeButton = row.querySelector(
                "button:not(.play-button)"
            );

        playButton.dataset.song = song.title;
        row.dataset.song = song.title;

        row.classList.add(
            "song-row",
            "top-chart-row"
        );

        if (likeButton) {

            likeButton.classList.add(
                "top-chart-like"
            );

            setFavorite(
                likeButton,
                isLiked(song)
            );
        }
    });
}

setupTopCharts();


//////// لایک هدر //////////////

function updateHeroFavorite() {

    setFavorite(
        heroFavoriteButton,
        isLiked(heroSong)
    );

}


/////////لایک Top Charts ///////////

function updateTopChartFavorites() {

    const buttons = document.querySelectorAll(".top-chart-like");

    buttons.forEach((button) => {

        const row = button.closest(".song-row");

        if (!row) {
            return;
        }

        const song =  findSong(row.dataset.song);

        if (song) {
            setFavorite(
                button,
                isLiked(song)
            );
        }
    });
}


//////////// پخش آهنگ //////////////

function playSong(song) {

    if (!song?.sound) {

        alert(
            "Audio for this song has not been added yet."
        );

        return;
    }

    currentSong = song;
    currentIndex = allSongs.indexOf(song);

    audioPlayer.src = song.sound;
    audioPlayer.load();

    playerImage.src = song.cover;
    playerSong.textContent = song.title;
    playerArtist.textContent = song.artist;

    bottomPlayer.classList.remove("hidden");

    setFavorite(
        playerFavoriteButton,
        isLiked(song)
    );

    audioPlayer.play().catch((error) => {

        console.log(
            "Audio could not be played:",
            error
        );

    });
}


////////// دکمه‌های هدر ////////////////

heroPlayButton?.addEventListener("click", (e) => {

    e.stopPropagation();
    playSong(heroSong);

});


heroFavoriteButton?.addEventListener("click", (e) => {

    e.stopPropagation();

    toggleLike(
        heroSong,
        heroFavoriteButton
    );

});

////////// وضعیت پخش آهنگ ////////////

audioPlayer.addEventListener("play", () => {

    playerPlayButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;

});


audioPlayer.addEventListener("pause", () => {

    playerPlayButton.innerHTML =  `<i class="fa-solid fa-play"></i>`;

});


audioPlayer.addEventListener("ended", () => {

    playerPlayButton.innerHTML =
        `<i class="fa-solid fa-play"></i>`;

});

//////////////دکمه‌های پلیر /////////////

playerPlayButton.addEventListener("click", () => {

    if (!currentSong) {
        return;
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }

});


prevButton.addEventListener("click", () => {

    if (currentIndex > 0) {
        playSong(allSongs[currentIndex - 1]);
    }

});


nextButton.addEventListener("click", () => {

    if (currentIndex < allSongs.length - 1) {
        playSong(allSongs[currentIndex + 1]);
    }

});


backwardButton.addEventListener("click", () => {

    audioPlayer.currentTime -= 10;

});


forwardButton.addEventListener("click", () => {

    audioPlayer.currentTime += 10;

});


playerFavoriteButton.addEventListener("click", () => {

    if (currentSong) {
        toggleLike(
            currentSong,
            playerFavoriteButton
        );
    }

});


///////////// صدا ///////////

volumeRange.addEventListener("input", () => {

    audioPlayer.volume = volumeRange.value;

    volumeButton.innerHTML =
        audioPlayer.volume === 0
            ? `<i class="fa-solid fa-volume-xmark"></i>`
            : `<i class="fa-solid fa-volume-high"></i>`;

});

//////////////زمان آهنگ ////////////

audioPlayer.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audioPlayer.duration);

});


audioPlayer.addEventListener("timeupdate", () => {

    currentTime.textContent =  formatTime(audioPlayer.currentTime);

    if (audioPlayer.duration) {

        const percent =
            (audioPlayer.currentTime /
                audioPlayer.duration) * 100;

        progressFill.style.width =
            `${percent}%`;
    }

});


progressBar.addEventListener("click", (e) => {

    if (!audioPlayer.duration) {
        return;
    }

    const percent = e.offsetX / progressBar.clientWidth;

    audioPlayer.currentTime = percent * audioPlayer.duration;

});


///////// دکمه پخش آهنگ‌ها /////////////

document.addEventListener("click", (e) => {

    const button = e.target.closest(".play-button");

    if (!button || button === heroPlayButton) {
        return;
    }

    const song = findSong(button.dataset.song);

    if (song) {
        playSong(song);
    }

});


/////////// کلیک روی ردیف آهنگ ///////////

document.addEventListener("click", (e) => {

    const row =
        e.target.closest(".song-row");

    if (!row) {
        return;
    }

    if (
        e.target.closest(".play-button") ||
        e.target.closest(".top-chart-like")
    ) {
        return;
    }

    const song =
        findSong(row.dataset.song);

    if (song) {
        playSong(song);
    }

});


////////// لایک Top Charts ////////////////

document.addEventListener("click", (e) => {

    const button =
        e.target.closest(".top-chart-like");

    if (!button) {
        return;
    }

    e.stopPropagation();

    const row =
        button.closest(".song-row");

    if (!row) {
        return;
    }

    const song =
        findSong(row.dataset.song);

    if (song) {
        toggleLike(song, button);
    }

});


///////////// خواننده‌ها ///////////////

const artistsHTML =
    artistsGrid.innerHTML;


function showArtist(name) {

    const songs =
        artistSongs[name] || [];

    artistsGrid.innerHTML = `
        <div class="col-span-full mb-4">

            <button
                id="backToArtists"
                class="mb-4 text-sm text-gray-400 transition hover:text-purple-400">

                <i class="fa-solid fa-arrow-left"></i>
                Back to Artists

            </button>

            <h2 class="text-2xl font-semibold">
                ${name}
            </h2>

            <p class="mt-1 text-sm text-gray-500">
                ${songs.length} songs
            </p>

        </div>
    `;

    if (!songs.length) {

        artistsGrid.innerHTML += `
            <div class="col-span-full py-10 text-center">

                <i class="fa-solid fa-music mb-3 text-2xl text-purple-400"></i>

                <p class="text-sm text-gray-500">
                    No songs found for this artist
                </p>

            </div>
        `;

        return;
    }

    songs.forEach((song) => {

        artistsGrid.innerHTML += `
            <div
                class="song-row col-span-full flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-white/[0.035] p-3 transition hover:bg-white/[0.06]"
                data-song="${song.title}">

                <img
                    src="${song.cover}"
                    alt="${song.title}"
                    class="h-10 w-10 rounded-lg object-cover">

                <div class="min-w-0 flex-1">

                    <h3 class="truncate text-sm font-medium">
                        ${song.title}
                    </h3>

                    <p class="mt-1 truncate text-xs text-gray-500">
                        ${song.artist}
                    </p>

                </div>

                <button
                    class="play-button text-purple-400"
                    data-song="${song.title}">

                    <i class="fa-solid fa-play"></i>

                </button>
            </div>
        `;
    });
}


function showArtists() {

    artistsGrid.innerHTML =
        artistsHTML;

}


artistsGrid.addEventListener("click", (e) => {

    const card =
        e.target.closest("[data-artist]");

    if (card) {

        showArtist(
            card.dataset.artist
        );

        return;
    }

    const backButton =
        e.target.closest("#backToArtists");

    if (backButton) {
        showArtists();
    }

});


artistsGrid.addEventListener("click", (e) => {

    const row =
        e.target.closest(".song-row");

    if (!row) {
        return;
    }

    if (e.target.closest(".play-button")) {
        return;
    }

    const song =
        findSong(row.dataset.song);

    if (song) {
        playSong(song);
    }

});

///////////// صفحه جستجو ///////////////

function openSearchPage(text = "") {

    if (document.getElementById("searchPageBox")) {
        return;
    }

    const box =
        document.createElement("div");

    box.id = "searchPageBox";
    box.className = "music-page hide-scrollbar";

    box.innerHTML = `
        <div class="mb-5 flex items-center justify-between border-b border-white/5 pb-3">

            <div class="flex min-w-0 items-center gap-3">

                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <i class="fa-solid fa-magnifying-glass text-sm"></i>
                </div>

                <div>

                    <h2 class="text-base font-semibold text-white">
                        Search
                    </h2>

                    <p class="mt-0.5 text-xs text-gray-500">
                        Search songs and artists
                    </p>

                </div>

            </div>

            <button
                id="closeSearchBox"
                class="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-white/5 hover:text-white">

                <i class="fa-solid fa-xmark text-sm"></i>

            </button>

        </div>

        <div class="relative">

            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-600"></i>

            <input
                id="searchPageInput"
                type="text"
                placeholder="Search songs, artists or albums..."
                class="h-11 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition">

        </div>

        <div
            id="searchPageResults"
            class="mt-4 space-y-2">
        </div>
    `;

    document.body.appendChild(box);

    bottomPlayer.classList.remove("z-50");
    bottomPlayer.classList.add("z-[60]");

    const input =
        document.getElementById("searchPageInput");

    const results =
        document.getElementById("searchPageResults");

    input.value = text;
    input.focus();

    input.addEventListener("input", () => {

        const value =
            input.value.toLowerCase().trim();

        searchInput.value =
            input.value;

        results.innerHTML = "";

        if (!value) {
            return;
        }

        const songs =
            allSongs.filter((song) => {

                return (
                    song.title.toLowerCase().includes(value) ||
                    song.artist.toLowerCase().includes(value)
                );

            });

        if (!songs.length) {

            results.innerHTML = `
                <p class="py-6 text-center text-sm text-gray-500">
                    No results found
                </p>
            `;

            return;
        }

        songs.forEach((song) => {

            results.innerHTML += `
                <div
                    class="search-song flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-white/[0.035] p-3 transition hover:bg-purple-500/10"
                    data-song="${song.title}">

                    <img
                        src="${song.cover}"
                        alt="${song.title}"
                        class="h-12 w-12 rounded-lg object-cover">

                    <div class="min-w-0 flex-1">

                        <h3 class="truncate text-sm font-medium text-white">
                            ${song.title}
                        </h3>

                        <p class="mt-1 truncate text-xs text-gray-500">
                            ${song.artist}
                        </p>

                    </div>

                    <i class="fa-solid fa-play text-xs text-purple-400"></i>

                </div>
            `;
        });

    });

    results.addEventListener("click", (e) => {

        const item =
            e.target.closest(".search-song");

        if (!item) {
            return;
        }

        const song =
            findSong(item.dataset.song);

        if (song) {
            playSong(song);
        }

    });

    document
        .getElementById("closeSearchBox")
        .addEventListener(
            "click",
            closeSearchPage
        );

    if (text.trim()) {
        input.dispatchEvent(
            new Event("input")
        );
    }
}


function closeSearchPage() {

    const box =
        document.getElementById("searchPageBox");

    if (box) {
        box.remove();
    }

    searchInput.value = "";

    bottomPlayer.classList.remove("z-[60]");
    bottomPlayer.classList.add("z-50");

}

////////////////// دکمه‌های جستجو ////////////////

searchMenu.addEventListener("click", (e) => {

    e.preventDefault();
    openSearchPage();

});


mobileSearchMenu.addEventListener("click", (e) => {

    e.preventDefault();
    openSearchPage();

});


searchInput.addEventListener("click", () => {

    openSearchPage(
        searchInput.value
    );

});

/////////// صفحه لایک‌ها ////////////

function openLikedPage() {

    if (document.getElementById("likedBox")) {
        return;
    }

    const box =
        document.createElement("div");

    box.id = "likedBox";
    box.className = "music-page hide-scrollbar";

    box.innerHTML = `
        <div class="mb-4 flex items-center justify-between border-b border-white/5 pb-3">

            <div class="flex items-center gap-3">

                <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <i class="fa-solid fa-heart text-sm"></i>
                </div>

                <div>

                    <h2 class="text-base font-semibold text-white">
                        Liked Songs
                    </h2>

                    <p class="mt-0.5 text-xs text-gray-500">
                        Your favorite songs
                    </p>

                </div>

            </div>

            <button
                id="closeLikedBox"
                class="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-white/5 hover:text-white">

                <i class="fa-solid fa-xmark text-sm"></i>

            </button>

        </div>

        <div
            id="likedSongsList"
            class="space-y-2">
        </div>
    `;

    document.body.appendChild(box);

    bottomPlayer.classList.remove("z-50");
    bottomPlayer.classList.add("z-[60]");

    const list =
        document.getElementById("likedSongsList");

    if (!likedSongs.length) {

        list.innerHTML = `
            <p class="py-6 text-center text-sm text-gray-500">
                No liked songs yet
            </p>
        `;

    } else {

        likedSongs.forEach((song) => {

            list.innerHTML += `
                <div
                    class="liked-song flex cursor-pointer items-center gap-3 rounded-xl p-2.5 transition hover:bg-purple-500/10"
                    data-song="${song.title}">

                    <img
                        src="${song.cover}"
                        alt="${song.title}"
                        class="h-11 w-11 rounded-lg object-cover">

                    <div class="min-w-0 flex-1">

                        <h3 class="truncate text-sm font-medium text-white">
                            ${song.title}
                        </h3>

                        <p class="mt-1 truncate text-xs text-gray-500">
                            ${song.artist}
                        </p>

                    </div>

                    <i class="fa-solid fa-heart mr-1 text-xs text-purple-400"></i>

                </div>
            `;
        });
    }

    list.addEventListener("click", (e) => {

        const item =
            e.target.closest(".liked-song");

        if (!item) {
            return;
        }

        const song =
            findSong(item.dataset.song);

        if (song) {
            playSong(song);
        }

    });

    document
        .getElementById("closeLikedBox")
        .addEventListener(
            "click",
            closeLikedPage
        );
}


function closeLikedPage() {

    const box =
        document.getElementById("likedBox");

    if (box) {
        box.remove();
    }

    bottomPlayer.classList.remove("z-[60]");
    bottomPlayer.classList.add("z-50");

}


///////// دکمه‌های لایک //////////

likedMenu.addEventListener("click", (e) => {

    e.preventDefault();
    openLikedPage();

});


mobileLikedMenu.addEventListener("click", (e) => {

    e.preventDefault();
    openLikedPage();

});


/////////////// خانه 

function goHome() {

    closeSearchPage();
    closeLikedPage();

    searchInput.value = "";

    showPlaylists();
    showArtists();
    showGenres();

}


homeMenu.addEventListener("click", (e) => {

    e.preventDefault();
    goHome();

});


mobileHomeMenu.addEventListener("click", (e) => {

    e.preventDefault();
    goHome();

});


////////// کتابخانه ///////////

function openLibrary() {

    closeSearchPage();
    closeLikedPage();

    playlistGrid.innerHTML = `
        <div class="col-span-full">

            <h2 class="text-2xl font-semibold">
                Your Library
            </h2>

            <p class="mt-1 text-sm text-gray-500">
                Your saved music and playlists
            </p>

        </div>
    `;

}


libraryMenu.addEventListener("click", (e) => {

    e.preventDefault();
    openLibrary();

});


mobileLibraryMenu?.addEventListener("click", (e) => {

    e.preventDefault();
    openLibrary();

});

/////////// شروع برنامه /////////////////

updateHeroFavorite();
updateTopChartFavorites();