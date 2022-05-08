const sampleData = [
  {
    title: 'Aint Goin Home',
    artist: 'Kamaiyah',
    album: 'A Good Night in the Ghetto',
    songNo: 1
  },
  {
    title: 'Alive Nightmare feat. Ratatat',
    artist: 'Kid Cudi',
    album: 'Man on the Moon: The End of Day (Deluxe)',
    songNo: 2
  },
  {
    title: 'Andromeda ',
    artist: 'Gorillaz',
    album: 'Humanz (Deluxe)',
    songNo: 3
  },
  {
    title: 'Angels',
    artist: 'A$AP Rocky',
    album: 'LONG.LIVE.A$AP (Deluxe Version)',
    songNo: 4
  },
  {
    title: 'Apple Pie',
    artist: 'Travis Scott',
    album: 'Rodeo (Expanded Edition)',
    songNo: 5
  },
  {
    title: 'Ascension ',
    artist: 'Gorillaz',
    album: 'Humanz (Deluxe)',
    songNo: 6
  },
  {
    title: 'Aww Man ',
    artist: 'Lil Bibby',
    album: 'FC3 the Epilogue - EP',
    songNo: 7
  },
  {
    title: 'B.O.B. Bombs Over Baghdad',
    artist: 'Outkast',
    album: 'Stankonia',
    songNo: 8
  },
  {
    title: 'Bachelor ',
    artist: 'A$AP Mob',
    album: 'Cozy Tapes, Vol. 1: Friends',
    songNo: 9
  },
  {
    title: 'Bad Day',
    artist: 'Chiddy Bang',
    album: 'The Preview',
    songNo: 10
  },
  {
    title: 'Baptized in Fire ',
    artist: 'Kid Cudi',
    album: "Passion, Pain & Demon Slayin'",
    songNo: 11
  },
  { title: 'Beez ', artist: 'Kid Cudi', album: 'Indicud', songNo: 12 },
  {
    title: 'Big Pimpin ',
    artist: 'JAY-Z',
    album: 'Vol. 3... Life and Times of S. Carter',
    songNo: 13
  },
  {
    title: 'Biking ',
    artist: 'Frank Ocean',
    album: 'Biking ',
    songNo: 14
  },
  {
    title: 'Bring Em Out ',
    artist: 'Bodega Bamz',
    album: 'Sidewalk Exec',
    songNo: 15
  },
  {
    title: 'THE BROWN STAINS OF DARKEESE LATIFAH PART  REMIX feat. ScHoolboy Q',
    artist: 'Tyler, The Creator',
    album: 'Cherry Bomb',
    songNo: 16
  },
  {
    title: 'Cant Tell Me Nothing',
    artist: 'Kanye West',
    album: 'Graduation',
    songNo: 17
  },
  {
    title: 'Cash Out ',
    artist: 'Calvin Harris',
    album: 'Funk Wav Bounces Vol. 1',
    songNo: 18
  },
  {
    title: 'Classic Man ',
    artist: 'Jidenna',
    album: 'Wondaland Presents: The Eephus - EP',
    songNo: 19
  },
  {
    title: 'Clint Eastwood',
    artist: 'Gorillaz',
    album: 'Gorillaz',
    songNo: 20
  },
  {
    title: 'Cosmic Warrior',
    artist: 'Kid Cudi',
    album: "Passion, Pain & Demon Slayin'",
    songNo: 21
  },
  {
    title: 'Creepers',
    artist: 'Kid Cudi',
    album: 'Kanye West Presents: Good Music - Cruel Summer',
    songNo: 22
  },
  {
    title: 'Crutches Crosses Caskets',
    artist: 'Pusha T',
    album: 'King Push – Darkest Before Dawn: The Prelude',
    songNo: 23
  },
  {
    title: 'D.A.N.C.E',
    artist: 'Justice',
    album: 'Justice',
    songNo: 24
  },
  {
    title: 'D.R.U.G.S.',
    artist: 'Ab-Soul',
    album: 'Do What Thou Wilt',
    songNo: 25
  },
  {
    title: 'Dare',
    artist: 'Gorillaz',
    album: 'Demon Days',
    songNo: 26
  },
  {
    title: 'Diddy Bop ',
    artist: 'Noname',
    album: 'Telefone',
    songNo: 27
  },
  {
    title: 'Does It',
    artist: 'Kid Cudi',
    album: "Passion, Pain & Demon Slayin'",
    songNo: 28
  },
  {
    title: 'Dont Sweat the Technique',
    artist: 'Eric B.Rakim',
    album: 'Hip-Hop Legacy, Vol. 8',
    songNo: 29
  },
  {
    title: 'Electric Feel Justice Remix',
    artist: 'MGMT',
    album: 'Electric Feel (Justice Remix) - Single',
    songNo: 30
  },
  {
    title: 'Enemies',
    artist: 'Lil Uzi Vert',
    album: 'Luv Is Rage',
    songNo: 31
  },
  {
    title: 'Enter Galactic Love Connection Pt. I',
    artist: 'Kid Cudi',
    album: 'Man on the Moon: The End of Day (Deluxe)',
    songNo: 32
  },
  {
    title: 'F.I.F.A.',
    artist: 'Pusha T',
    album: 'King Push – Darkest Before Dawn: The Prelude',
    songNo: 33
  },
  {
    title: 'Feel Good Inc.',
    artist: 'Gorillaz',
    album: 'Demon Days',
    songNo: 34
  },
  {
    title: 'First Day Out',
    artist: 'Tee Grizzley',
    album: 'My Moment',
    songNo: 35
  },
  {
    title: 'Flight at First Sight/Advanced ',
    artist: 'Kid Cudi',
    album: "Passion, Pain & Demon Slayin'",
    songNo: 36
  },
  {
    title: 'Follow the Leader',
    artist: 'Eric B. & Rakim',
    album: 'Follow the Leader',
    songNo: 37
  },
  {
    title: 'F**k the World',
    artist: '2Pac',
    album: 'Me Against the World',
    songNo: 38
  },
  {
    title: 'Ghost',
    artist: 'Kid Cudi',
    album: 'Man On the Moon, Vol. II: The Legend of Mr. Rager (Deluxe Version)',
    songNo: 39
  },
  {
    title: 'Good Night ',
    artist: 'Denzel Curry',
    album: 'Imperial',
    songNo: 40
  },
  {
    title: 'Graduation Day',
    artist: 'Kanye West',
    album: 'The College Dropout',
    songNo: 41
  },
  {
    title: 'Heard Em Say ',
    artist: 'Kanye West',
    album: 'Late Registration',
    songNo: 42
  },
  {
    title: 'Heartless',
    artist: 'Kanye West',
    album: '808s & Heartbreak',
    songNo: 43
  },
  {
    title: 'Heartthrob',
    artist: 'Father',
    album: 'Heartthrob - Single',
    songNo: 44
  },
  {
    title: 'High Demand',
    artist: 'Future',
    album: 'FUTURE',
    songNo: 45
  },
  {
    title: 'Hit Em',
    artist: 'Migos',
    album: 'Rich Ni**a Timeline',
    songNo: 46
  },
  {
    title: 'How Does It Feel',
    artist: 'Kamaiyah',
    album: 'How Does It Feel - Single',
    songNo: 47
  },
  {
    title: 'I Aint No Joke',
    artist: 'Eric B. & Rakim',
    album: 'Paid In Full',
    songNo: 48
  },
  {
    title: 'I Can Drive',
    artist: 'Lil Uzi Vert',
    album: 'The Perfect LUV Tape',
    songNo: 49
  },
  {
    title: 'I Shot the Sheriff',
    artist: 'Bob Marley',
    album: 'Legend: The Best of Bob Marley and the Wailers',
    songNo: 50
  },
  {
    title: 'I. Flight of the Navigator',
    artist: 'Childish Gambino',
    album: 'Because the Internet',
    songNo: 51
  },
  {
    title: 'Ill Fly Away',
    artist: 'Kanye West',
    album: 'The College Dropout',
    songNo: 52
  },
  {
    title: 'Im so Groovy',
    artist: 'Future',
    album: 'FUTURE',
    songNo: 53
  },
  {
    title: 'III. Telegraph Ave. "Oakland" by Lloyd',
    artist: 'Childish Gambino',
    album: 'Because the Internet',
    songNo: 54
  },
  {
    title: 'It Aint Safe ',
    artist: 'Skepta',
    album: 'Konnichiwa',
    songNo: 55
  },
  {
    title: 'Just What I Am ',
    artist: 'Kid Cudi',
    album: 'Indicud',
    songNo: 56
  },
  {
    title: 'Kitchen',
    artist: 'Kid Cudi',
    album: "Passion, Pain & Demon Slayin'",
    songNo: 57
  },
  {
    title: 'Konnichiwa',
    artist: 'Skepta',
    album: 'Konnichiwa',
    songNo: 58
  },
  {
    title: 'Left Hollywood',
    artist: 'Meek Mill',
    album: 'MEEKEND MU$IC - Single',
    songNo: 59
  },
  {
    title: 'Let Me Out ',
    artist: 'Gorillaz',
    album: 'Humanz (Deluxe)',
    songNo: 60
  },
  {
    title: 'Lonely',
    artist: 'Speaker Knockerz',
    album: 'Lonely - Single',
    songNo: 61
  },
  {
    title: 'Microphone Fiend',
    artist: 'Eric B. & Rakim',
    album: 'Follow the Leader',
    songNo: 62
  },
  {
    title: 'Momentz ',
    artist: 'Gorillaz',
    album: 'Humanz (Deluxe)',
    songNo: 63
  },
  {
    title: 'Money Man ',
    artist: 'A$AP Mob',
    album: 'Cozy Tapes, Vol. 1: Friends',
    songNo: 64
  },
  {
    title: 'Mr. Rager',
    artist: 'Kid Cudi',
    album: 'Man On the Moon, Vol. II: The Legend of Mr. Rager (Deluxe Version)',
    songNo: 65
  },
  {
    title: 'Ms. Jackson',
    artist: 'Outkast',
    album: 'Stankonia',
    songNo: 66
  },
  {
    title: 'Neighborhood ',
    artist: 'Chiddy Bang',
    album: 'The Preview',
    songNo: 67
  },
  {
    title: 'Oh My Dis Side ',
    artist: 'Travis Scott',
    album: 'Rodeo (Expanded Edition)',
    songNo: 68
  },
  {
    title: 'One More Time',
    artist: 'Daft Punk',
    album: 'Discovery',
    songNo: 69
  },
  {
    title: 'Opposite of Adults',
    artist: 'Chiddy Bang',
    album: 'The Preview',
    songNo: 70
  },
  {
    title: 'Poison Hip Hop Mix',
    artist: 'Bell Biv DeVoe',
    album: 'Poison (Expanded Edition)',
    songNo: 71
  },
  {
    title: 'Ps  Qs',
    artist: 'Lil Uzi Vert',
    album: 'Lil Uzi Vert Vs. The World',
    songNo: 72
  },
  {
    title: 'Put That on My Set ',
    artist: 'A$AP Mob',
    album: 'Cozy Tapes, Vol. 1: Friends',
    songNo: 73
  },
  {
    title: 'Real Friends',
    artist: 'Kanye West',
    album: 'The Life of Pablo',
    songNo: 74
  },
  {
    title: 'Red Eye ',
    artist: 'Kid Cudi',
    album: 'Indicud',
    songNo: 75
  },
  {
    title: 'Redbone',
    artist: 'Childish Gambino',
    album: '"Awaken, My Love!"',
    songNo: 76
  },
  {
    title: 'Rollin ',
    artist: 'Calvin Harris',
    album: 'Funk Wav Bounces Vol. 1',
    songNo: 77
  },
  {
    title: 'Rolling Stone ',
    artist: 'Danny Brown',
    album: 'Atrocity Exhibition',
    songNo: 78
  },
  {
    title: 'Roses',
    artist: 'Outkast',
    album: 'Speakerboxxx/The Love Below',
    songNo: 79
  },
  {
    title: 'Santorini Greece',
    artist: 'Rick Ross',
    album: 'Rather You Than Me',
    songNo: 80
  },
  {
    title: 'Say It',
    artist: 'Tory Lanez',
    album: 'I Told You',
    songNo: 81
  },
  {
    title: 'School Spirit',
    artist: 'Kanye West',
    album: 'The College Dropout',
    songNo: 82
  },
  {
    title: 'See You In My Nightmares ',
    artist: 'Kanye West',
    album: '808s & Heartbreak',
    songNo: 83
  },
  {
    title: 'Seven Million ',
    artist: 'Lil Uzi Vert',
    album: 'The Perfect LUV Tape',
    songNo: 84
  },
  {
    title: 'Shabba REMIX ',
    artist: 'A$AP Ferg',
    album: 'Shabba REMIX ',
    songNo: 85
  },
  {
    title: 'Shes My Collar ',
    artist: 'Gorillaz',
    album: 'Humanz (Deluxe)',
    songNo: 86
  },
  {
    title: 'Shook Ones Pt. II',
    artist: 'Mobb Deep',
    album: 'The Infamous',
    songNo: 87
  },
  {
    title: 'Simple As...',
    artist: 'Kid Cudi',
    album: 'Man on the Moon: The End of Day (Deluxe)',
    songNo: 88
  },
  {
    title: 'Skateboard P',
    artist: 'MadeinTYO',
    album: 'Thank You, Mr. Tokyo',
    songNo: 89
  },
  {
    title: 'Smokin and Ridin ',
    artist: 'BJ the Chicago Kid',
    album: 'The Music of Grand Theft Auto V',
    songNo: 90
  },
  {
    title: 'Soundtrack  My Life',
    artist: 'Kid Cudi',
    album: 'Man on the Moon: The End of Day (Deluxe)',
    songNo: 91
  },
  {
    title: 'Spaceship ',
    artist: 'Kanye West',
    album: 'The College Dropout',
    songNo: 92
  },
  {
    title: 'Stepped On My Jz ',
    artist: 'Nelly',
    album: "Stepped On My J'z ",
    songNo: 93
  },
  {
    title: 'Stoney ',
    artist: 'Saba',
    album: 'Bucket List Project',
    songNo: 94
  },
  {
    title: 'Surfin ',
    artist: 'Kid Cudi',
    album: "Passion, Pain & Demon Slayin'",
    songNo: 95
  },
  {
    title: 'Talking to My Diary',
    artist: 'Dr. Dre',
    album: 'Compton',
    songNo: 96
  },
  {
    title: 'Top',
    artist: 'Lil Uzi Vert',
    album: 'Luv Is Rage',
    songNo: 97
  },
  {
    title: 'TradeOff',
    artist: 'Flatbush Zombies',
    album: '3001: A Laced Odyssey',
    songNo: 98
  },
  {
    title: 'Trouble on My Mind ',
    artist: 'Pusha T',
    album: 'Fear of God II: Let Us Pray',
    songNo: 99
  },
  {
    title: 'Tyrant ',
    artist: 'Kali Uchis',
    album: 'Isolation',
    songNo: 100
  }
]

export default sampleData;