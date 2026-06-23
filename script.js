/* HobbyX — precompiled static build (no Babel/CDN at runtime) — faithful 1:1 of HobbyX App.html */


/* ===== app2/data.jsx ===== */
/* HobbyX — unified data model (shadcn rebuild)
   Categories HobbyX grades: Pokémon, Football, Basketball, One Piece, Kakawow, Yu-Gi-Oh!, Weiss Schwarz */
const CATEGORIES = ['Pokémon', 'Football', 'Basketball', 'One Piece', 'Kakawow', 'Yu-Gi-Oh!', 'Weiss Schwarz'];

// real card art (public TCG CDNs). Categories without a reliable CDN are left
// imageless on purpose so the empty/placeholder state stays visible in the design.
const PKM = n => `https://images.pokemontcg.io/base1/${n}.png`;
const YGO = id => `https://images.ygoprodeck.com/images/cards/${id}.jpg`;
const PIPELINE = [{
  key: 'arrived',
  label: 'Order Arrived',
  desc: 'Your submission has arrived at the grading facility and been logged in.'
}, {
  key: 'research',
  label: 'Research & ID',
  desc: 'Your submission is being researched so each item can be correctly identified on the PSA label.'
}, {
  key: 'grading',
  label: 'Grading',
  desc: 'Your submission is going through the authentication and grading process.'
}, {
  key: 'assembly',
  label: 'Assembly',
  desc: 'PSA labels are being printed and each eligible item is being sonically sealed within a PSA holder.'
}, {
  key: 'ready',
  label: 'Grades Ready',
  desc: 'Your grades are ready to be revealed.'
}, {
  key: 'completing',
  label: 'Completing',
  desc: 'Your order has been completed. You\u2019ll receive an email when cards are ready for pickup at HobbyX Store.'
}, {
  key: 'complete',
  label: 'Ready for Pickup',
  desc: 'Your order is complete and ready for pickup at HobbyX Store.'
}];
const STEP_INDEX = Object.fromEntries(PIPELINE.map((s, i) => [s.key, i]));
function progressFor(key) {
  return STEP_INDEX[key] / (PIPELINE.length - 1);
}

// status → badge intent. ALL neutral so every label looks the same.
// Only "Complete" keeps the success (green) tone.
function statusIntent(key) {
  // Green from "Grades Ready" onward (ready → completing → complete) — grades can be revealed.
  if (STEP_INDEX[key] >= STEP_INDEX.ready) return 'success';
  return 'neutral';
}

// Fixed "today" so behind/on-schedule logic is deterministic in the prototype.
const TODAY = new Date('2026-06-06T00:00:00');
const ORDERS = [{
  id: 'o1',
  name: 'Autograph Series — Mackenyu',
  category: 'One Piece',
  service: 'Regular',
  shipment: 'May 15 · 1st Shipment',
  num: '26793937',
  itemCount: 1,
  est: 'Sep 25, 2026',
  estDays: '90 Business Days',
  status: 'research',
  group: 'progress',
  arrived: '2026-05-15',
  dates: {
    arrived: 'May 15, 2026',
    prep: 'May 18, 2026'
  },
  items: [{
    cert: '159788540',
    name: '2024 One Piece OP-05 Monkey D. Luffy Leader Parallel',
    category: 'One Piece'
  }]
}, {
  id: 'o6',
  name: 'Value Plus Review',
  category: 'Pokémon',
  service: 'Premium 1',
  shipment: 'Apr 12 · 1st Shipment',
  num: '26770330',
  itemCount: 44,
  est: 'Jul 23, 2026',
  estDays: '40 Business Days',
  status: 'ready',
  group: 'progress',
  arrived: '2026-04-12',
  dates: {
    arrived: 'Apr 12, 2026',
    prep: 'Apr 16, 2026',
    research: 'Apr 22, 2026',
    grading: 'Apr 30, 2026',
    assembly: 'May 06, 2026',
    qa: 'May 12, 2026',
    ready: 'May 18, 2026'
  },
  items: [{
    cert: '159790033',
    name: '1999 Pokémon Game Charizard Holo Unlimited #4',
    category: 'Pokémon',
    img: PKM(4),
    grade: 'PSA 7',
    sub: 'NM 7',
    val: '$700 – $950',
    lbl: {
      set: '1999 POKEMON GAME',
      nm: 'CHARIZARD-HOLO',
      va: '',
      no: '#4'
    }
  }, {
    cert: '159790034',
    name: '1999 Pokémon Game Blastoise Holo #2',
    category: 'Pokémon',
    img: PKM(2),
    grade: 'PSA 8',
    sub: 'NM-MT 8',
    val: '$250 – $360',
    lbl: {
      set: '1999 POKEMON GAME',
      nm: 'BLASTOISE-HOLO',
      va: '',
      no: '#2'
    }
  }, {
    cert: '159790035',
    name: '1999 Pokémon Game Venusaur Holo #15',
    category: 'Pokémon',
    img: PKM(15),
    grade: 'PSA 9',
    sub: 'MINT 9',
    val: '$300 – $440',
    lbl: {
      set: '1999 POKEMON GAME',
      nm: 'VENUSAUR-HOLO',
      va: '',
      no: '#15'
    }
  }, {
    cert: '159790036',
    name: '1999 Pokémon Game Mewtwo Holo #10',
    category: 'Pokémon',
    img: PKM(10),
    grade: 'PSA 8',
    sub: 'NM-MT 8',
    val: '$110 – $170',
    lbl: {
      set: '1999 POKEMON GAME',
      nm: 'MEWTWO-HOLO',
      va: '',
      no: '#10'
    }
  }]
}, {
  id: 'o2',
  name: 'Regular Order',
  category: 'Pokémon',
  service: 'Regular',
  shipment: 'Apr 30 · 2nd Shipment',
  num: '26717114',
  itemCount: 103,
  est: 'Jun 8, 2026',
  estDays: '25 Business Days',
  status: 'grading',
  group: 'progress',
  arrived: '2026-04-30',
  dates: {
    arrived: 'Apr 30, 2026',
    prep: 'May 04, 2026',
    research: 'May 09, 2026'
  },
  items: [{
    cert: '159788531',
    name: '1999 Pokémon Game Charizard Holo #4',
    category: 'Pokémon',
    img: PKM(4)
  }, {
    cert: '159788532',
    name: '1999 Pokémon Game Blastoise Holo #2',
    category: 'Pokémon',
    img: PKM(2)
  }, {
    cert: '159788533',
    name: '1999 Pokémon Game Venusaur Holo #15',
    category: 'Pokémon',
    img: PKM(15)
  }, {
    cert: '159788534',
    name: '1999 Pokémon Game Mewtwo Holo #10',
    category: 'Pokémon',
    img: PKM(10)
  }, {
    cert: '159788535',
    name: '1999 Pokémon Game Gyarados Holo #6',
    category: 'Pokémon',
    img: PKM(6)
  }, {
    cert: '159788536',
    name: '1999 Pokémon Game Raichu Holo #14',
    category: 'Pokémon',
    img: PKM(14)
  }, {
    cert: '159788537',
    name: '1999 Pokémon Game Alakazam Holo #1',
    category: 'Pokémon',
    img: PKM(1)
  }]
}, {
  id: 'o7',
  name: 'Bulk Submission #7',
  category: 'Yu-Gi-Oh!',
  service: 'Premium 1',
  shipment: 'May 20 · 2nd Shipment',
  num: '26781450',
  itemCount: 26,
  est: 'Jul 2, 2026',
  estDays: '45 Business Days',
  status: 'research',
  group: 'progress',
  arrived: '2026-05-20',
  dates: {
    arrived: 'May 20, 2026',
    prep: 'May 24, 2026',
    research: 'May 28, 2026'
  },
  items: [{
    cert: '159792010',
    name: '2002 Yu-Gi-Oh! LOB Blue-Eyes White Dragon 1st Edition',
    category: 'Yu-Gi-Oh!',
    img: YGO(89631139)
  }, {
    cert: '159792011',
    name: '2002 Yu-Gi-Oh! LOB Dark Magician',
    category: 'Yu-Gi-Oh!',
    img: YGO(46986414)
  }, {
    cert: '159792012',
    name: '2002 Yu-Gi-Oh! LOB Red-Eyes Black Dragon',
    category: 'Yu-Gi-Oh!',
    img: YGO(74677422)
  }]
}, {
  id: 'o8',
  name: 'Express QA Batch',
  category: 'Pokémon',
  service: 'Express',
  shipment: 'May 08 · 1st Shipment',
  num: '26788120',
  itemCount: 60,
  est: 'Jun 18, 2026',
  estDays: '20 Business Days',
  status: 'assembly',
  group: 'progress',
  arrived: '2026-05-08',
  dates: {
    arrived: 'May 08, 2026',
    prep: 'May 11, 2026',
    research: 'May 15, 2026',
    grading: 'May 20, 2026',
    assembly: 'May 25, 2026',
    qa: 'May 29, 2026'
  },
  items: [{
    cert: '159793020',
    name: '1999 Pokémon Game Ninetales Holo #12',
    category: 'Pokémon',
    img: PKM(12)
  }, {
    cert: '159793021',
    name: '1999 Pokémon Game Nidoking Holo #11',
    category: 'Pokémon',
    img: PKM(11)
  }, {
    cert: '159793022',
    name: '1999 Pokémon Game Zapdos Holo #16',
    category: 'Pokémon',
    img: PKM(16)
  }]
}, {
  id: 'o5',
  name: 'Reholder — High Value',
  category: 'Basketball',
  service: 'Premium 2',
  shipment: 'May 02 · 1st Shipment',
  num: '26780114',
  itemCount: 8,
  est: 'Jun 11, 2026',
  estDays: '30 Business Days',
  status: 'assembly',
  group: 'progress',
  arrived: '2026-05-02',
  dates: {
    arrived: 'May 02, 2026',
    prep: 'May 06, 2026',
    research: 'May 10, 2026',
    grading: 'May 16, 2026',
    assembly: 'May 22, 2026'
  },
  items: [{
    cert: '159790020',
    name: '2003 Topps Chrome LeBron James Rookie #111',
    category: 'Basketball'
  }]
}, {
  id: 'o9',
  name: 'Final Pack — Personal',
  category: 'Pokémon',
  service: 'Express',
  shipment: 'Apr 25 · 1st Shipment',
  num: '26795500',
  itemCount: 5,
  est: 'Jun 2, 2026',
  estDays: '15 Business Days',
  status: 'completing',
  group: 'progress',
  arrived: '2026-04-25',
  dates: {
    arrived: 'Apr 25, 2026',
    prep: 'Apr 29, 2026',
    research: 'May 03, 2026',
    grading: 'May 09, 2026',
    assembly: 'May 14, 2026',
    qa: 'May 18, 2026',
    ready: 'May 21, 2026',
    completing: 'May 26, 2026'
  },
  items: [{
    cert: '159794040',
    name: '1999 Pokémon Game Machamp Holo 1st Edition #8',
    category: 'Pokémon',
    img: PKM(8),
    grade: 'PSA 9',
    sub: 'MINT 9',
    val: '$150 – $230',
    lbl: {
      set: '1999 POKEMON GAME',
      nm: 'MACHAMP-HOLO',
      va: '1ST EDITION',
      no: '#8'
    }
  }, {
    cert: '159794041',
    name: '1999 Pokémon Game Poliwrath Holo #13',
    category: 'Pokémon',
    img: PKM(13),
    grade: 'PSA 7',
    sub: 'NM 7',
    val: '$55 – $85',
    lbl: {
      set: '1999 POKEMON GAME',
      nm: 'POLIWRATH-HOLO',
      va: '',
      no: '#13'
    }
  }]
}, {
  id: 'o10',
  name: 'Anime Series Draft',
  category: 'Weiss Schwarz',
  service: 'Premium 3',
  shipment: 'May 22 · 2nd Shipment',
  num: '26799010',
  itemCount: 3,
  est: 'Aug 1, 2026',
  estDays: '60 Business Days',
  status: 'research',
  group: 'progress',
  arrived: '2026-05-22',
  dates: {
    arrived: 'May 22, 2026',
    prep: 'May 25, 2026'
  },
  items: [{
    cert: '159795050',
    name: '2025 Weiss Schwarz Hatsune Miku SP Signed',
    category: 'Weiss Schwarz',
    img: 'assets/card-no-image.png'
  }]
}, {
  id: 'o4',
  name: 'Walk Through Crossover',
  category: 'Football',
  service: 'Walk-Through',
  shipment: 'May 26 · 2nd Shipment',
  num: '26801337',
  itemCount: 12,
  est: 'Nov 13, 2026',
  estDays: '120 Business Days',
  status: 'arrived',
  group: 'progress',
  arrived: '2026-05-26',
  locked: true,
  dates: {
    arrived: 'May 26, 2026'
  },
  items: [{
    cert: '159801001',
    name: '2020 Panini Prizm Justin Herbert Rookie',
    category: 'Football'
  }]
}, {
  id: 'c1',
  name: 'Super Express Order',
  category: 'Pokémon',
  service: 'Super Express',
  shipment: 'May 26 · 2nd Shipment',
  turnaround: '40-50 Business Days',
  num: '26655120',
  itemCount: 3,
  est: 'May 22, 2026',
  estDays: '5 Business Days',
  status: 'complete',
  group: 'completed',
  arrived: '2026-04-17',
  completedOn: 'May 15, 2026',
  tracking: '381339995314',
  dates: {
    arrived: 'Apr 17, 2026',
    prep: 'Apr 20, 2026',
    research: 'Apr 24, 2026',
    grading: 'Apr 30, 2026',
    assembly: 'May 05, 2026',
    qa: 'May 09, 2026',
    ready: 'May 11, 2026',
    completing: 'May 13, 2026',
    complete: 'May 15, 2026'
  },
  items: [{
    cert: '46721747',
    name: '1999 Pokémon Game Charizard-Holo #4',
    category: 'Pokémon',
    img: PKM(4),
    slab: 'assets/slab-charizard-psa8.png',
    grade: 'PSA 8',
    sub: 'NM-MT 8',
    val: '$1,400 – $1,800',
    lbl: {
      set: '1999 POKEMON GAME',
      nm: 'CHARIZARD-HOLO',
      va: '',
      no: '#4'
    }
  }, {
    cert: '51482369',
    name: '2020 Pokémon SWSH Champion’s Path Charizard V #079',
    category: 'Pokémon',
    img: PKM(2),
    slab: 'assets/slab-charizardv-psa9.png',
    grade: 'PSA 9',
    sub: 'MINT 9',
    val: '$90 – $140',
    lbl: {
      set: '2020 POKEMON SWSH',
      nm: 'FA/CHARIZARD V',
      va: 'CHAMPION’S PATH',
      no: '#079'
    }
  }, {
    cert: '59017663',
    name: '2020 Pokémon SWSH Vivid Voltage Pikachu VMAX #044',
    category: 'Pokémon',
    img: PKM(15),
    slab: 'assets/slab-pikachu-psa10.png',
    grade: 'PSA 10',
    sub: 'GEM MT 10',
    val: '$250 – $360',
    lbl: {
      set: '2020 POKEMON SWSH',
      nm: 'FA/PIKACHU VMAX',
      va: 'VIVID VOLTAGE',
      no: '#044'
    }
  }]
}, {
  id: 'c3',
  name: 'Autograph Single — Rayquaza',
  category: 'Pokémon',
  service: 'Regular',
  shipment: 'Jun 05 · 1st Shipment',
  turnaround: '10-15 Business Days',
  num: '26660300',
  itemCount: 1,
  est: 'Jun 02, 2026',
  estDays: '10 Business Days',
  status: 'complete',
  group: 'completed',
  arrived: '2026-05-18',
  completedOn: 'Jun 02, 2026',
  tracking: '381339774521',
  dates: {
    arrived: 'May 18, 2026',
    prep: 'May 20, 2026',
    research: 'May 22, 2026',
    grading: 'May 26, 2026',
    assembly: 'May 28, 2026',
    qa: 'May 29, 2026',
    ready: 'May 30, 2026',
    completing: 'Jun 01, 2026',
    complete: 'Jun 02, 2026'
  },
  items: [{
    cert: '137150278',
    name: '2017 Pokémon JPN Sun & Moon Rayquaza SM4+ #084 — Yoshinobu Saito Auto',
    category: 'Pokémon',
    slab: 'assets/slab-rayquaza-ex6.png',
    grade: 'PSA 6',
    sub: 'EX-MT 6',
    auto: 'AUTO 9',
    val: '$320 – $480',
    notes: 'EX-MT 6 with a PSA/DNA-certified Yoshinobu Saito autograph graded AUTO 9. Dual-graded holder — card grade and signature grade are certified separately.',
    lbl: {
      set: '2017 P.M. JPN. SUN & MOON',
      nm: 'RAYQUAZA-SM4+',
      va: 'YOSHINOBU SAITO',
      no: '#084'
    }
  }]
}, {
  id: 'c2',
  name: 'Legacy Duel Order',
  category: 'Pokémon',
  service: 'Regular',
  shipment: 'Apr 28 · 1st Shipment',
  turnaround: '10-15 Business Days',
  num: '26640088',
  itemCount: 2,
  est: 'May 04, 2026',
  estDays: '10 Business Days',
  status: 'complete',
  group: 'completed',
  arrived: '2026-04-05',
  completedOn: 'Apr 28, 2026',
  tracking: '381339118822',
  dates: {
    arrived: 'Apr 05, 2026',
    prep: 'Apr 08, 2026',
    research: 'Apr 12, 2026',
    grading: 'Apr 17, 2026',
    assembly: 'Apr 21, 2026',
    qa: 'Apr 24, 2026',
    ready: 'Apr 25, 2026',
    completing: 'Apr 27, 2026',
    complete: 'Apr 28, 2026'
  },
  items: [{
    cert: '59017657',
    name: '2020 Pokémon SWSH BSP Charizard V #050',
    category: 'Pokémon',
    slab: 'assets/slab-charizardv-psa10.png',
    grade: 'PSA 10',
    sub: 'GEM MT 10',
    val: '$55 – $75',
    lbl: {
      set: '2020 POKEMON SWSH BSP',
      nm: 'CHARIZARD V',
      va: 'CHMPN.PATH ELITE TRNR.BOX',
      no: '#050'
    }
  }, {
    cert: '59017660',
    name: '2020 Pokémon SWSH BSP Donphan-Holo #067',
    category: 'Pokémon',
    slab: 'assets/slab-donphan-psa10.png',
    grade: 'PSA 10',
    sub: 'GEM MT 10',
    val: '$30 – $45',
    lbl: {
      set: '2020 POKEMON SWSH BSP',
      nm: 'DONPHAN-HOLO',
      va: 'PRERELEASE',
      no: '#067'
    }
  }]
}];

// Pad each order's items up to its stated itemCount with neutral placeholder
// cards (no image → image-slot placeholder) so the "View all" list always shows
// exactly as many cards as the count printed on the order. Completed orders
// already carry their full set, so nothing is added there.
ORDERS.forEach(o => {
  const base = parseInt(o.num, 10) || 1000;
  let n = o.items.length;
  while (o.items.length < o.itemCount) {
    n += 1;
    o.items.push({
      cert: String(base * 1000 + n),
      name: o.category + ' Card',
      category: o.category,
      placeholder: true
    });
  }
});
const TABS = [{
  key: 'progress',
  label: 'In Progress'
}, {
  key: 'completed',
  label: 'Completed'
}];
const SORTS = [{
  key: 'newest',
  label: 'Date Arrived · Newest',
  short: 'Newest'
}, {
  key: 'oldest',
  label: 'Date Arrived · Oldest',
  short: 'Oldest'
}];
const STATUS_FILTERS = [{
  key: 'all',
  label: 'All Statuses'
}, ...['research', 'grading', 'assembly', 'ready', 'completing'].map(k => ({
  key: k,
  label: PIPELINE[STEP_INDEX[k]].label
}))];
const NOTIFICATIONS = [{
  id: 'n1',
  icon: 'sparkles',
  title: 'Grades are ready to reveal',
  body: 'Value Plus Review — 44 items are graded.',
  ship: 'June 24 - 1st Shipment',
  time: '2h ago',
  unread: true,
  orderId: 'o6'
}, {
  id: 'n2',
  icon: 'layers',
  title: 'Now grading',
  body: 'Regular Order moved to Grading.',
  ship: 'July 24 - 2nd Shipment',
  time: '1d ago',
  unread: true,
  orderId: 'o2'
}, {
  id: 'n3',
  icon: 'truck',
  title: 'Order shipped',
  body: 'Super Express Order is on the way.',
  ship: 'August 24 - 1st Shipment',
  time: '3d ago',
  unread: false,
  orderId: 'c1'
}, {
  id: 'n4',
  icon: 'check',
  title: 'Order arrived',
  body: 'Walk Through Crossover arrived at the facility.',
  ship: 'June 24 - 2nd Shipment',
  time: '5d ago',
  unread: false,
  orderId: 'o4'
}];
const ACCOUNT = {
  name: 'Alex Carter',
  initials: 'AC',
  member: 'HobbyX member since 2023',
  marketplaceListings: 2,
  info: {
    first: 'Alex',
    last: 'Carter',
    email: 'alex.carter@email.com',
    phone: '+852 6298 0425'
  },
  groups: [{
    group: 'Account',
    items: [['Account Info', 'user']]
  }, {
    group: 'Preferences',
    items: [['Appearance', 'sun'], ['Language', 'globe'], ['Notifications', 'bell']]
  }, {
    group: 'Support',
    items: [['Help Centre', 'help'], ['Terms & Policies', 'doc']]
  }, {
    group: 'Session',
    items: [['Sign Out', 'signout']]
  }, {
    group: 'Remove Account',
    items: [['Delete Account', 'trash']]
  }]
};
const PAYOUT_METHODS = ['Bank Transfer', 'PayPal', 'Store Credit', 'Cheque'];
const EMAIL_LANGS = ['English', '繁體中文 (Traditional Chinese)'];

// stable image-slot id for a card (drop once → shows in list, items, detail, reveal)
function slotId(cert) {
  return 'card-' + cert;
}
Object.assign(window, {
  CATEGORIES,
  PIPELINE,
  STEP_INDEX,
  progressFor,
  statusIntent,
  ORDERS,
  TABS,
  SORTS,
  STATUS_FILTERS,
  NOTIFICATIONS,
  ACCOUNT,
  PAYOUT_METHODS,
  EMAIL_LANGS,
  slotId
});

/* ===== app2/i18n.jsx ===== */
/* HobbyX — i18n (English + Traditional Chinese for Hong Kong)
   tx(englishString) → returns the translation for the current language,
   or the original string if there's no entry (so card product names,
   cert #s and dates pass through unchanged — which is realistic). */
const {
  useState: useI18nState,
  useEffect: useI18nEffect
} = React;
const ZH = {
  // —— auth ——
  'Log In': '登入',
  'Login': '登入',
  'Create account': '建立帳戶',
  'Register': '註冊',
  'E-mail': '電郵',
  'E-mail Address': '電郵地址',
  'Password': '密碼',
  'Confirm Password': '確認密碼',
  'First Name': '名字',
  'Last Name': '姓氏',
  'Mobile Number': '流動電話號碼',
  'Keep me signed in': '保持登入',
  'Forgot your password?': '忘記密碼？',
  'Need an account?': '未有帳戶？',
  'Sign Up': '註冊',
  'Already have an account?': '已有帳戶？',
  'Password Reset': '重設密碼',
  'Reset password': '重設密碼',
  'Back': '返回',
  'Back to Login': '返回登入',
  'Check your email': '查看你的電郵',
  'Privacy Policy': '私隱政策',
  'Terms of Use': '使用條款',
  'Terms of Service': '服務條款',
  'Grading, tracked.': '評級，盡在掌握。',
  'Developed by': '開發者',
  'Required': '必填',
  'Create a password': '建立密碼',
  'Re-enter password': '再次輸入密碼',
  'Enter your username or email': '輸入你的用戶名稱或電郵',
  'To reset your password, please enter your email address or username below.': '請於下方輸入你的電郵地址或用戶名稱以重設密碼。',
  'Enter a valid email address.': '請輸入有效的電郵地址。',
  'Password is required.': '請輸入密碼。',
  'Enter your email or username.': '請輸入你的電郵或用戶名稱。',
  'Passwords don’t match.': '兩次輸入的密碼不相符。',
  'Enter a valid number.': '請輸入有效的號碼。',
  '8+ chars with a capital, number & symbol.': '8 個字元以上，包含大階、數字及符號。',
  'By signing up, you agree to the': '註冊即表示你同意',
  'If an account matches': '如有帳戶符合',
  ', we’ve sent a link to reset your password.': '，我們已傳送重設密碼的連結。',
  // —— grading chrome ——
  'Grading': '評級',
  'Grading Orders': '評級訂單',
  'In Progress': '處理中',
  'Completed': '已完成',
  'Search by service name': '以服務名稱搜尋',
  'Sort': '排序',
  'Status': '狀態',
  'All Statuses': '所有狀態',
  'Date Arrived · Newest': '到達日期 · 最新',
  'Date Arrived · Oldest': '到達日期 · 最舊',
  'No orders match': '沒有符合的訂單',
  'Try a different search or status.': '請嘗試其他搜尋或狀態。',
  'item': '件',
  'items': '件',
  'Item': '項目',
  'Items': '項目',
  'Est.': '預計',
  'items shipped': '件已寄出',
  'Tracking': '追蹤編號',
  'View all': '查看全部',
  'Hidden until reveal': '揭曉後可查看',
  'Taking a little longer than expected': '處理時間比預期稍長',
  'Your order is still being processed and is running slightly behind the estimate. We’ll notify you as soon as it moves forward.': '您的訂單仍在處理中，目前略晚於預計時間。一有進展我們會立即通知您。',
  'Start Grade Reveal': '開始評級揭曉',
  'Sell on eBay': '在 eBay 出售',
  'Send to Vault': '存入保險庫',
  'Front': '正面',
  'Back': '背面',
  'Slab': '封裝',
  'First View': '首次檢視',
  'The First View images capture the card as received, inclusive of protective material such as sleeves and holders. Provided as a courtesy and may differ from the final slab.': '首次檢視影像呈現卡牌收到時的狀態，包括卡套及保護殼等保護物料。此影像僅供參考，可能與最終封裝有所不同。',
  'Save': '儲存',
  'Share': '分享',
  'Done': '完成',
  'Notifications': '通知',
  'Account': '帳戶',
  'Appearance': '外觀',
  'Language': '語言',
  'Light': '淺色',
  'Dark': '深色',
  'Account Info': '帳戶資料',
  'Addresses': '地址',
  'Payment Methods': '付款方式',
  'Help Centre': '協助中心',
  'Terms & Privacy': '條款及私隱',
  'Sign Out': '登出',
  'Preferences': '偏好設定',
  'Support': '支援',
  'Session': '登入狀態',
  'Active': '進行中',
  'Graded': '已評級',
  'In vault': '保險庫',
  'HobbyX member since 2023': '自 2023 年起成為 HobbyX 會員',
  'Delete your account?': '刪除你的帳戶？',
  'Delete account': '刪除帳戶',
  'This is permanent and cannot be undone.': '此操作為永久性，無法復原。',
  'What will be deleted': '將被刪除的資料',
  'Profile, saved cards, preferences, and other personal data linked to your account.': '個人資料、已儲存卡牌、偏好設定及其他與帳戶相關的個人資料。',
  'Data we may retain': '可能保留的資料',
  'Transaction records required for legal, tax, or accounting purposes. Not used for marketing.': '基於法律、稅務或會計需要而保留的交易記錄，不會用於市場推廣。',
  'Active activity': '進行中的活動',
  'grading submissions in progress': '項進行中的評級提交',
  'grading submission in progress': '項進行中的評級提交',
  'You will lose access to tracking and submission details.': '你將無法再存取相關追蹤及提交資料。',
  'cards on HobbyX Marketplace': '張卡牌於 HobbyX 市場上架',
  'card on HobbyX Marketplace': '張卡牌於 HobbyX 市場上架',
  'Listings will be removed and sale information will no longer be accessible.': '上架項目將被移除，相關出售資料將無法再存取。',
  'Please resolve these before deleting your account.': '請在刪除帳戶前先處理上述項目。',
  'Confirm you understand': '請確認你已明白',
  'Grading submissions': '評級提交',
  'Marketplace listings': '市場上架',
  'I accept responsibility for any loss of access to in-progress submission data.': '我接受因此可能無法再存取進行中提交資料的責任。',
  'I accept responsibility for removing listings and completing active sales first.': '我接受在刪除前先移除上架項目及完成進行中交易的責任。',
  'I understand this permanently deletes my account and cannot be undone.': '我明白此操作將永久刪除我的帳戶，且無法復原。',
  'Permanent deletion': '永久刪除',
  'No grading submissions in progress': '沒有進行中的評級提交',
  'No marketplace listings': '沒有市場上架項目',
  'You have no submissions currently being processed.': '你目前沒有正在處理中的提交。',
  'You have no cards listed for sale on HobbyX Marketplace.': '你沒有在 HobbyX 市場上架出售的卡牌。',
  'You can proceed once you confirm below.': '確認下方內容後即可繼續。',
  'Shipping to you': '寄送中',
  'In grading': '評級中',
  // —— pipeline / statuses ——
  'Order Arrived': '訂單已到達',
  'Order Prep': '訂單準備',
  'Research & ID': '研究及鑑定',
  'Assembly': '封裝',
  'QA Checks': '品質檢查',
  'Grades Ready': '評級完成',
  'Completing': '完成中',
  'Complete': '已完成',
  'Ready for Pickup': '可取貨',
  'On track for est. completion': '按預計完成日期進行中',
  'On track for estimated completion': '按預計完成日期進行中',
  'Est. Shipment': '預計寄送',
  'Est. Turnaround': '預計處理時間',
  'Completed ahead of schedule!': '比預計時間提前完成！',
  'Wrapped up on': '完成於',
  'day': '天',
  'days': '天',
  'early': '提前',
  'Order no': '訂單編號',
  // —— pipeline step descriptions ——
  'Your submission has arrived at the grading facility and been logged in.': '你的提交物品已送達評級中心並完成登記。',
  'Items are being unpacked, sorted and prepared for grading.': '物品正在拆封、分類並準備評級。',
  'Your submission is being researched so each item can be correctly identified on the PSA label.': '我們正在研究你的提交物品，以便在標籤上正確識別每件物品。',
  'Your submission is going through the authentication and grading process.': '你的提交物品正在進行鑑定及評級。',
  'PSA labels are being printed and each eligible item is being sonically sealed within a PSA holder.': 'PSA 標籤正在印製，每件符合資格的物品正被超聲波封入 PSA 保護殼。',
  'A final quality check is performed on every slab before it ships.': '每個封裝在寄出前都會進行最終品質檢查。',
  'Your grades are ready to be revealed.': '你的評級結果已可揭曉。',
  'Your order has been completed. You’ll receive an email when cards are ready for pickup at HobbyX Store.': '你的訂單已完成。當卡牌可於 HobbyX 門市取貨時，你將收到電子郵件通知。',
  'Your order is complete and on its way to you.': '你的訂單已完成，正在寄送途中。',
  'Login successful': '登入成功',
  'Details unavailable': '詳情暫不可用',
  'Mark all read': '全部標為已讀',
  'Delete': '刪除',
  'Estimated Completion Date': '預計完成日期',
  'Completion date': '完成日期',
  'Est. completion': '預計完成',
  'Estimated completion': '預計完成',
  'graded': '已評級',
  'Grading progress': '評級進度',
  'Estimated\nCompletion Date': '預計\n完成日期',
  'Business Turnaround Days': '營業處理天數',
  'About this date': '關於此日期',
  'Estimated completion date is calculated based your service level and its turnaround time in number of business days. The date will calculate once your order is entered into PSA Grading system and is not guaranteed.': '預計完成日期是根據你的服務級別及其以營業日數計算的處理時間而定。日期會在你的訂單進入 PSA 評級系統後才會計算，並不獲保證。',
  // —— order / service names ——
  'Autograph Series — Mackenyu': '簽名系列 — Mackenyu',
  'Value Plus Review': 'Value Plus 評估',
  'Regular Order': '標準訂單',
  'Reholder — High Value': '重新封裝 — 高價值',
  'Walk Through Crossover': 'Walk Through Crossover',
  'Super Express Order': '特快訂單',
  // —— notifications ——
  'Grades are ready to reveal': '評級已可揭曉',
  'Value Plus Review — 44 items are graded.': 'Value Plus 評估 — 44 件已完成評級。',
  'Now grading': '正在評級',
  'Regular Order moved to Grading.': '標準訂單已進入評級階段。',
  'Order shipped': '訂單已寄出',
  'Super Express Order is on the way.': '特快訂單正在寄送途中。',
  'Order arrived': '訂單已到達',
  'Walk Through Crossover arrived at the facility.': 'Walk Through Crossover 已送達評級中心。',
  '2h ago': '2 小時前',
  '1d ago': '1 日前',
  '3d ago': '3 日前',
  '5d ago': '5 日前',
  // —— auth UX: validation / password / phone ——
  'Demo login': '示範登入',
  'Only numbers are allowed.': '只允許輸入數字。',
  'No internet connection. Check your network and try again.': '沒有網絡連線。請檢查你的網絡後再試一次。',
  'Passwords match': '密碼相符',
  'Password strength': '密碼強度',
  'Weak': '弱',
  'Fair': '一般',
  'Good': '良好',
  'Strong': '強',
  'At least 8 characters': '最少 8 個字元',
  'One uppercase letter (A–Z)': '一個大階字母 (A–Z)',
  'One lowercase letter (a–z)': '一個小階字母 (a–z)',
  'One number (0–9)': '一個數字 (0–9)',
  'One special character (!@#$…)': '一個特殊符號 (!@#$…)',
  // —— countries ——
  'Hong Kong': '香港',
  'China': '中國',
  'Taiwan': '台灣',
  'Singapore': '新加坡',
  'Malaysia': '馬來西亞',
  'Japan': '日本',
  'South Korea': '南韓',
  'United States': '美國',
  'Canada': '加拿大',
  'United Kingdom': '英國',
  'Australia': '澳洲',
  'Germany': '德國',
  'France': '法國',
  'India': '印度',
  'United Arab Emirates': '阿拉伯聯合酋長國',
  // —— card categories ——
  'Pokémon': '寶可夢',
  'Football': '足球',
  'Basketball': '籃球',
  'One Piece': '海賊王',
  'Yu-Gi-Oh!': '遊戲王',
  // —— empty / offline / image states ——
  'No image': '沒有圖片',
  'You’re offline — showing your last saved data': '你目前離線 — 正顯示上次儲存的資料',
  'Try a different search term or status filter.': '請嘗試其他搜尋字詞或狀態篩選。',
  'Clear filters': '清除篩選',
  'No completed orders yet': '尚未有已完成的訂單',
  'No orders in progress': '沒有處理中的訂單',
  'Graded orders you receive back will appear here.': '你收回的已評級訂單會在此顯示。',
  'Submit cards for grading and track their progress here.': '提交卡牌進行評級，並在此追蹤進度。',
  'more': '更多',
  'No grades to reveal yet': '尚無可揭曉的評級',
  'Grades will appear here once this order reaches the Grades Ready stage.': '當此訂單進入「評級完成」階段後，評級結果會在此顯示。',
  'Reveal next': '揭曉下一張',
  'Card': '卡牌',
  'Graded': '已評級',
  'Tap to open': '輕觸開封',
  'Estimated value': '估計價值',
  'Finish': '完成',
  'Reveal again': '再次揭曉',
  'You’re all caught up': '你已查看所有通知',
  'Updates about your grading orders will show up here.': '有關你評級訂單的更新會在此顯示。',
  'On track for est. completion': '按預計完成日期進行中',
  'On track for estimated completion': '按預計完成日期進行中',
  'Est. Shipment': '預計寄送',
  'Est. Turnaround': '預計處理時間',
  'Completed ahead of schedule!': '比預計時間提前完成！',
  'Wrapped up on': '完成於',
  'day': '天',
  'days': '天',
  'early': '提前',
  'Order no': '訂單編號',
  // —— additional order / service names ——
  'Bulk Submission #7': '散裝提交 #7',
  'Express QA Batch': '特快品檢批次',
  'Final Pack — Personal': '最終包裝 — 個人',
  'Anime Series Draft': '動畫系列草稿',
  'Legacy Duel Order': '經典決鬥訂單',
  // —— account info form ——
  'First name': '名字',
  'Last name': '姓氏',
  'Email address': '電郵地址',
  'Phone Number': '電話號碼',
  'Password change': '更改密碼',
  'Current password (leave blank to leave unchanged)': '目前密碼（留空則不更改）',
  'New password (leave blank to leave unchanged)': '新密碼（留空則不更改）',
  'Confirm new password': '確認新密碼',
  'Payout Preference': '收款偏好',
  'Please make sure you enter your payout preference correctly, as the information will not be editable again.': '請確保正確輸入你的收款偏好，因為此資料其後將無法再修改。',
  'Payout Methods': '收款方式',
  'Select your payout method': '選擇你的收款方式',
  'Preferred language for receiving emails': '接收電郵的偏好語言',
  'Select your preferred language': '選擇你的偏好語言',
  'I have reviewed my settings and confirm I want to update my account information. I have read and agree to the': '我已檢視我的設定，並確認要更新我的帳戶資料。我已閱讀並同意',
  'Terms and Conditions': '條款及細則',
  'and': '及',
  'Saved': '已儲存',
  'Save Changes': '儲存變更',
  'Before you can sell on HobbyX Marketplace, please': '在你於 HobbyX 市場出售之前，請先',
  'your payout preference.': '你的收款偏好。',
  'Bank Transfer': '銀行轉帳',
  'Store Credit': '商店積分',
  'Cheque': '支票',
  'English': '英文',
  // —— legal placeholder ——
  'Final legal text will be supplied by HobbyX and Volk Innovatives before launch — covering how grading order data, account details and contact information are collected, stored and used.': '最終法律條文將由 HobbyX 及 Volk Innovatives 於推出前提供，內容涵蓋評級訂單資料、帳戶詳情及聯絡資訊如何被收集、儲存及使用。',
  'This screen exists so the link target is wired and reviewable in the prototype.': '此畫面用於連結原型中的目標頁面，方便檢視。',
  // —— register verification ——
  'Verify your email': '驗證你的電郵',
  'We’ve sent a verification link to': '我們已傳送驗證連結至',
  'Please check your inbox and click the link to activate your account.': '請查看你的收件匣，並點擊連結以啟用你的帳戶。',
  'Didn’t receive it? Check your spam folder or': '沒有收到？請檢查你的垃圾郵件，或',
  'try again': '再試一次',
  'Go to Login': '前往登入',
  // —— login errors ——
  'We couldn’t find an account with that email address.': '找不到使用此電郵地址的帳戶。',
  'Incorrect password. Please try again.': '密碼不正確。請再試一次。'
};
const langSubs = new Set();
if (typeof window.__lang === 'undefined') {
  try {
    window.__lang = localStorage.getItem('hobbyx_lang') || 'en';
  } catch (e) {
    window.__lang = 'en';
  }
}
function setLang(l) {
  window.__lang = l;
  try {
    localStorage.setItem('hobbyx_lang', l);
  } catch (e) {}
  langSubs.forEach(fn => fn());
}
/* Traditional → Simplified character map — covers every Chinese character used in ZH.
   Characters identical in both scripts are omitted (left unchanged). */
const T2S_PAIRS = '\u4e9e\u4e9a\u4e26\u5e76\u4f86\u6765\u5011\u4eec\u500b\u4e2a\u5099\u5907\u50b3\u4f20\u50c5\u4ec5\u50f9\u4ef7\u5132\u50a8\u5169\u4e24\u518a\u518c\u5225\u522b\u522a\u5220\u5247\u5219\u52d5\u52a8\u52d9\u52a1\u5354\u534f\u53c3\u53c2\u54e1\u5458\u55ae\u5355\u5617\u5c1d\u570b\u56fd\u5716\u56fe\u5834\u573a\u5922\u68a6\u5bf6\u5b9d\u5c07\u5c06\u5c0b\u5bfb\u5e33\u8d26\u5eab\u5e93\u5f35\u5f20\u5f37\u5f3a\u5f8c\u540e\u614b\u6001\u6232\u620f\u6236\u6237\u64c7\u62e9\u64ca\u51fb\u64da\u636e\u6578\u6570\u65bc\u4e8e\u6642\u65f6\u66ab\u6682\u66c9\u6653\u6703\u4f1a\u689d\u6761\u696d\u4e1a\u6a19\u6807\u6aa2\u68c0\u6bbc\u58f3\u6c7a\u51b3\u6c92\u6ca1\u6dfa\u6d45\u6e96\u51c6\u7063\u6e7e\u70ba\u4e3a\u7121\u65e0\u71df\u8425\u72c0\u72b6\u7372\u83b7\u73fe\u73b0\u756b\u753b\u7576\u5f53\u767c\u53d1\u76e1\u5c3d\u78ba\u786e\u78bc\u7801\u7a31\u79f0\u7a4d\u79ef\u7bc4\u8303\u7be9\u7b5b\u7c3d\u7b7e\u7c43\u7bee\u7c64\u7b7e\u7d1a\u7ea7\u7d30\u7ec6\u7d42\u7ec8\u7d50\u7ed3\u7d61\u7edc\u7d71\u7edf\u7d93\u7ecf\u7db2\u7f51\u7dda\u7ebf\u7de8\u7f16\u806f\u8054\u8072\u58f0\u8207\u4e0e\u820a\u65e7\u84cb\u76d6\u8655\u5904\u865f\u53f7\u88dd\u88c5\u88fd\u5236\u8996\u89c6\u89c0\u89c2\u89f8\u89e6\u8a02\u8ba2\u8a08\u8ba1\u8a0a\u8baf\u8a18\u8bb0\u8a2d\u8bbe\u8a31\u8bb8\u8a3b\u6ce8\u8a55\u8bc4\u8a5e\u8bcd\u8a66\u8bd5\u8a71\u8bdd\u8a73\u8be6\u8a8d\u8ba4\u8a9e\u8bed\u8acb\u8bf7\u8b49\u8bc1\u8b58\u8bc6\u8b77\u62a4\u8b80\u8bfb\u8b8a\u53d8\u8ca8\u8d27\u8cc7\u8d44\u8cca\u8d3c\u8cea\u8d28\u8e64\u8e2a\u8f15\u8f7b\u8f38\u8f93\u8f49\u8f6c\u9023\u8fde\u9032\u8fdb\u904a\u6e38\u9054\u8fbe\u9078\u9009\u90f5\u90ae\u9280\u94f6\u9451\u9274\u9577\u957f\u9580\u95e8\u958b\u5f00\u9593\u95f4\u95b1\u9605\u95dc\u5173\u968e\u9636\u96aa\u9669\u96b1\u9690\u96e2\u79bb\u96fb\u7535\u97d3\u97e9\u9801\u9875\u9805\u9879\u9810\u9884\u985e\u7c7b\u986f\u663e\u99ac\u9a6c\u9a57\u9a8c\u9b25\u6597\u9ede\u70b9\u5553\u542f\u5167\u5185';
const T2S = {};
for (let i = 0; i < T2S_PAIRS.length; i += 2) {
  T2S[T2S_PAIRS[i]] = T2S_PAIRS[i + 1];
}
function isSimp(l) {
  return l === 'zh-Hans' || l === 'zh-CN' || l === 'zh-SG';
}
function tx(s) {
  const l = window.__lang;
  if (!l || l === 'en' || s == null) return s;
  const t = ZH[s] || s; // Traditional (or English passthrough)
  return isSimp(l) ? t.replace(/[\u3400-\u9fff]/g, c => T2S[c] || c) : t;
}
function useLang() {
  const [, force] = useI18nState(0);
  useI18nEffect(() => {
    const fn = () => force(x => x + 1);
    langSubs.add(fn);
    return () => langSubs.delete(fn);
  }, []);
  return [window.__lang, setLang];
}

/* language picker — English, Traditional Chinese, Simplified Chinese */
const LANGS = [['en', 'English'], ['zh-Hant', '繁體中文'], ['zh-Hans', '简体中文']];
/* normalise any legacy stored value to one of the three options */
function normLang(l) {
  if (l === 'en') return 'en';
  return isSimp(l) ? 'zh-Hans' : 'zh-Hant';
}
function LangToggle({
  className = ''
}) {
  const [lang, set] = useLang();
  const val = normLang(lang);
  return /*#__PURE__*/React.createElement("div", {
    className: 'inline-flex items-center ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative inline-flex items-center"
  }, /*#__PURE__*/React.createElement("select", {
    value: val,
    onChange: e => set(e.target.value),
    "aria-label": "Language",
    style: {
      minWidth: '7rem'
    },
    className: "max-w-[140px] cursor-pointer appearance-none rounded-full border border-border bg-card py-1 pl-3 pr-7 text-xs font-bold text-foreground transition-colors hover:bg-accent focus:border-ring focus:outline-none"
  }, LANGS.map(([k, l]) => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, l))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    className: "pointer-events-none absolute right-2 h-3.5 w-3.5 text-muted-foreground",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(window, {
  tx,
  useLang,
  setLang,
  LangToggle
});

/* ===== app2/icons.jsx ===== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* HobbyX — lucide-style icons (shadcn uses lucide) */
const sx = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};
const Icon = {
  bell: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  })),
  search: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  sliders: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx, {
    style: {
      stroke: "rgb(25, 28, 36)"
    }
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "21",
    x2: "4",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "10",
    x2: "4",
    y2: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "21",
    x2: "20",
    y2: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "20",
    y2: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "7",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "16",
    x2: "23",
    y2: "16"
  })),
  sort: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "m3 16 4 4 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 20V4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 8-4-4-4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 4v16"
  })),
  chevR: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })),
  chevD: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6",
    style: {
      stroke: "rgb(25, 28, 36)"
    }
  })),
  chevL: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  })),
  check: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  lock: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })),
  more: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "2"
  })),
  close: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })),
  truck: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M14 18V6a1 1 0 0 0-1-1H2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 9h4l4 4v4a1 1 0 0 1-1 1h-1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6.5",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "18",
    r: "2"
  })),
  trash: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6l-.8 13a2 2 0 0 1-2 1.8H7.8a2 2 0 0 1-2-1.8L5 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11v6M14 11v6"
  })),
  copy: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })),
  clock: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  sparkles: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"
  })),
  layers: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "m12 2 9 5-9 5-9-5 9-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 12 9 5 9-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 17 9 5 9-5"
  })),
  upload: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M12 15V3m0 0-4 4m4-4 4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  })),
  share: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M12 15V3m0 0-4 4m4-4 4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  })),
  vault: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v1M12 15v1M8 12h1M15 12h1"
  })),
  user: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  pin: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  card: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20"
  })),
  sun: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })),
  moon: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
  })),
  globe: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"
  })),
  help: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  doc: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6M8 13h8M8 17h6"
  })),
  signout: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17l5-5-5-5M21 12H9"
  })),
  eye: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  eyeOff: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l18 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.6 6.1A9.7 9.7 0 0 1 12 6c6.5 0 10 6 10 6a15.6 15.6 0 0 1-3.1 3.6M6.2 6.3A15.4 15.4 0 0 0 2 12s3.5 7 10 7a9.5 9.5 0 0 0 4.2-.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 9.6a3 3 0 0 0 4.2 4.2"
  })),
  image: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-4.5-4.5L3 21"
  })),
  wifiOff: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M2 2l20 20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 16.5a5 5 0 0 1 7 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 12.9a10 10 0 0 1 5.2-2.8M2 8.8a15 15 0 0 1 4.2-2.5M22 8.8a15 15 0 0 0-6.4-3.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12.9a10 10 0 0 0-2-1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20h.01"
  })),
  alert: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  })),
  inbox: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-6l-2 3h-4l-2-3H2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"
  })),
  refresh: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 1 15-6.7L21 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 3v5h-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 1-15 6.7L3 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21v-5h5"
  })),
  mail: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 7 10 6 10-6"
  })),
  external: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14 21 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  })),
  tag: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M3 11V5a2 2 0 0 1 2-2h6l9 9-8 8z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  })),
  trash: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11v6M14 11v6"
  })),
  facebook: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  })),
  instagram: /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, sx), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5",
    ry: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17.5",
    y1: "6.5",
    x2: "17.51",
    y2: "6.5"
  }))
};
Object.assign(window, {
  Icon
});

/* ===== app2/ui.jsx ===== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* HobbyX — shadcn UI primitives + shared pieces */
const {
  useState,
  useEffect
} = React;

/* Badge — neutral by default; colour only for success / primary intents */
function Badge({
  intent = 'neutral',
  children,
  className = ''
}) {
  // Each intent maps to its own token (own light + dark value). To recolour a
  // badge in one mode only, edit that token's value in :root (light) or .dark
  // (dark) in HobbyX App.html — never hard-code a colour here.
  const map = {
    neutral: 'bg-badge-neutral text-badge-neutral-foreground',
    primary: 'bg-badge-ready/10 text-badge-ready',
    success: 'bg-badge-done/10 text-badge-done'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: 'inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ' + map[intent] + ' ' + className
  }, children);
}

/* Progress — single subtle neutral fill, thin (3px) */
function Progress({
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "h-[3px] w-full overflow-hidden rounded-full bg-muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full bg-foreground/30 transition-all duration-500",
    style: {
      width: value + '%',
      backgroundColor: 'rgb(46, 138, 84)'
    }
  }));
}

/* Button — shadcn variants */
function Button({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[.99]';
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-background text-foreground hover:bg-accent',
    ghost: 'text-foreground hover:bg-accent',
    dark: 'bg-foreground text-background hover:bg-foreground/90'
  };
  const sizes = {
    default: 'h-11 px-5 text-[15px]',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-12 px-6 text-base',
    icon: 'h-10 w-10'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    className: base + ' ' + variants[variant] + ' ' + sizes[size] + ' ' + className
  }, props), children);
}

/* Icon button (round, ghost) */
function IconBtn({
  children,
  className = '',
  dot = false,
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: 'relative inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors ' + className
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "h-5 w-5"
  }, children), dot && /*#__PURE__*/React.createElement("span", {
    className: "absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-background"
  }));
}

/* Avatar */
function Avatar({
  size = 'h-9 w-9',
  text = 'text-sm',
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: 'inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold ' + size + ' ' + text
  }, ACCOUNT.initials);
}

/* Switch — shadcn toggle. Primary when on, muted track when off. */
function Switch({
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange(!checked),
    className: 'relative inline-flex h-[26px] w-[44px] shrink-0 items-center rounded-full transition-colors ' + (checked ? 'bg-primary' : 'bg-input') + (disabled ? ' opacity-40 pointer-events-none' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: 'inline-block h-[20px] w-[20px] rounded-full bg-white shadow transition-transform ' + (checked ? 'translate-x-[21px]' : 'translate-x-[3px]')
  }));
}

/* online/offline detection */
function useOnline() {
  const [online, setOnline] = useState(typeof navigator === 'undefined' ? true : navigator.onLine);
  useEffect(() => {
    const on = () => setOnline(true),
      off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);
  return online;
}

/* bundled real card art — reliable fallback so a card always shows when a CDN image
   is blocked / offline (instead of an empty "No image" placeholder). */
const CARD_FALLBACK = 'assets/pikachu-card.png';

/* Img — real photo with graceful fallback on load failure (CDN down / offline). */
function Img({
  src,
  alt,
  fit = 'object-cover',
  fallback = null
}) {
  const [err, setErr] = useState(false);
  useEffect(() => {
    setErr(false);
  }, [src]);
  const showFallback = (err || !src) && fallback;
  if ((err || !src) && !fallback) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex h-full w-full flex-col items-center justify-center gap-1 bg-muted text-muted-foreground"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-5 w-5 opacity-50"
    }, Icon.image), /*#__PURE__*/React.createElement("span", {
      className: "px-1 text-center text-[8px] font-bold uppercase tracking-wide opacity-70"
    }, tx('No image')));
  }
  return /*#__PURE__*/React.createElement("img", {
    src: showFallback ? fallback : src,
    alt: alt,
    loading: "lazy",
    draggable: false,
    onError: () => setErr(true),
    className: 'block h-full w-full ' + fit
  });
}

/* CardImage — shows a real card photo when `src` is provided, otherwise an
   image-slot the user can fill. Same slot id reused everywhere a card shows. */
function CardImage({
  cert,
  category,
  src,
  className = '',
  radius = 0
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("div", {
      className: 'relative overflow-hidden bg-muted ' + className,
      style: {
        borderRadius: 0
      }
    }, /*#__PURE__*/React.createElement(Img, {
      src: src,
      alt: (category || 'Card') + ' card',
      fallback: category === 'Pokémon' ? CARD_FALLBACK : null
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: 'relative overflow-hidden bg-muted ' + className
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: slotId(cert),
    shape: "rect",
    radius: 0,
    src: "assets/card-no-image.png",
    placeholder: (category || 'Card') + ' image',
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }));
}

/* tiny PSA-style mark (generic shield, not a logo copy) */
function PsaMark({
  h = 10
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center justify-center font-black leading-none text-[#c8102e]",
    style: {
      fontSize: h,
      letterSpacing: '-.5px'
    }
  }, "PSA");
}
function Barcode({
  className = '',
  h = 10
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      height: h,
      background: 'repeating-linear-gradient(90deg,#111 0 1px, #fff 1px 2px, #111 2px 3px, #fff 3px 5px)'
    }
  });
}
function Qr({
  s = 20
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: s,
      height: s,
      background: '#fff',
      padding: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      backgroundImage: 'repeating-linear-gradient(0deg,#111 0 2px,transparent 2px 4px), repeating-linear-gradient(90deg,#111 0 2px,transparent 2px 4px)',
      backgroundSize: '4px 4px'
    }
  }));
}

/* generic graded card back (neutral — not a brand copy) */
function CardBack({
  category
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "assets/card-back.png",
    alt: (category || 'Trading') + ' card back',
    draggable: false,
    className: "block h-full w-full object-cover"
  });
}

/* Slab — PSA-style graded holder. face: 'front' (label + card) or 'back' (cert holo + back). */
function Slab({
  item,
  className = '',
  radius = 0,
  big = false,
  face = 'front',
  style = null,
  hideNotes = false
}) {
  const num = (item.grade || '').replace(/PSA\s*/i, '').trim();
  const word = (item.sub || '').replace(/\s*[\d.]+$/, '').trim();
  const L = item.lbl || {};
  const caseStyle = {
    borderRadius: radius,
    background: 'linear-gradient(150deg,#d9dbe0 0%,#f1f2f5 22%,#c5c8ce 60%,#e6e8ec 100%)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.6), inset 0 0 6px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.28)',
    padding: big ? '6%' : '8%'
  };

  // Grader-notes badge — a small white disc with a document glyph, shown on the
  // bottom-right of the slab only when this item actually has grader notes.
  const notesBadge = item.notes && !hideNotes && face !== 'back' ? /*#__PURE__*/React.createElement("div", {
    className: "absolute z-10 flex items-center justify-center rounded-full bg-white text-neutral-700 shadow-[0_1px_4px_rgba(0,0,0,.4)] ring-1 ring-black/10",
    style: {
      right: '6%',
      bottom: '5%',
      width: big ? 30 : 17,
      height: big ? 30 : 17
    },
    title: "Grader notes",
    "aria-label": "Grader notes"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: big ? 15 : 9,
      height: big ? 15 : 9
    }
  }, Icon.doc)) : null;
  if (face === 'back') {
    // Real PSA slab-back photo (holder chrome + Pokémon card back) — used everywhere a back is shown.
    return /*#__PURE__*/React.createElement("div", {
      className: 'relative overflow-hidden ' + className,
      style: {
        borderRadius: radius,
        boxShadow: caseStyle.boxShadow,
        ...(style || {})
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/slab-back.png",
      alt: "graded slab back",
      draggable: false,
      className: "block h-full w-full object-cover"
    }));
  }

  // FRONT — if a real slab photo is supplied, show it full-bleed (no synthetic holder).
  if (item.slab) {
    return /*#__PURE__*/React.createElement("div", {
      className: 'relative overflow-hidden ' + className,
      style: {
        borderRadius: radius,
        boxShadow: caseStyle.boxShadow,
        background: '#d7d9dd',
        ...(style || {})
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: item.slab,
      alt: item.name,
      draggable: false,
      className: "block h-full w-full object-cover"
    }), notesBadge);
  }

  // FRONT
  return /*#__PURE__*/React.createElement("div", {
    className: 'relative flex flex-col overflow-hidden ' + className,
    style: {
      ...caseStyle,
      ...(style || {})
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shrink-0 rounded-[2px] bg-white",
    style: {
      border: (big ? 2 : 1.5) + 'px solid #c8102e'
    }
  }, big ? /*#__PURE__*/React.createElement("div", {
    className: "px-1.5 py-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "truncate text-[8.5px] font-extrabold uppercase leading-[1.15] text-neutral-900"
  }, L.set || item.name), /*#__PURE__*/React.createElement("div", {
    className: "truncate text-[8.5px] font-extrabold uppercase leading-[1.15] text-neutral-900"
  }, L.nm), L.va ? /*#__PURE__*/React.createElement("div", {
    className: "truncate text-[8px] font-bold uppercase leading-[1.15] text-neutral-700"
  }, L.va) : null), /*#__PURE__*/React.createElement("div", {
    className: "shrink-0 text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[8px] font-bold text-neutral-700"
  }, L.no), /*#__PURE__*/React.createElement("div", {
    className: "text-[8px] font-extrabold uppercase leading-tight text-neutral-800"
  }, word), /*#__PURE__*/React.createElement("div", {
    className: "text-[20px] font-black leading-none text-neutral-900"
  }, num))), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 flex items-end gap-1.5"
  }, /*#__PURE__*/React.createElement(Barcode, {
    className: "w-[42%]",
    h: 11
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 text-center"
  }, /*#__PURE__*/React.createElement(PsaMark, {
    h: 11
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-[8px] font-bold tabular-nums text-neutral-700"
  }, item.cert))) : /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 px-1 py-0.5"
  }, /*#__PURE__*/React.createElement(PsaMark, {
    h: 7
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-auto text-[11px] font-black leading-none text-neutral-900"
  }, num))), /*#__PURE__*/React.createElement("div", {
    className: "mt-[6%] min-h-0 flex-1 overflow-hidden rounded-[3px] bg-neutral-200",
    style: {
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)'
    }
  }, item.img ? /*#__PURE__*/React.createElement(Img, {
    src: item.img,
    alt: (item.category || 'Card') + ' card',
    fallback: item.category === 'Pokémon' ? CARD_FALLBACK : null
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: slotId(item.cert),
    shape: "rect",
    radius: 0,
    src: "assets/card-no-image.png",
    placeholder: (item.category || 'Card') + ' image',
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  })), notesBadge);
}
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-[54px] shrink-0 items-center justify-between px-8 text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base font-bold tabular-nums"
  }, "12:41"), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-[9px] h-[30px] w-[108px] -translate-x-1/2 rounded-[18px] bg-black"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "12",
    viewBox: "0 0 18 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "5",
    rx: ".6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "4.5",
    width: "3",
    height: "7.5",
    rx: ".6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2",
    width: "3",
    height: "10",
    rx: ".6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "12",
    rx: ".6"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 3c2.1 0 4 .8 5.4 2.2l1-1A9 9 0 0 0 8 1a9 9 0 0 0-6.4 3.2l1 1A7.5 7.5 0 0 1 8 3z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "9.8",
    r: "1.5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "12",
    viewBox: "0 0 26 13",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "21",
    height: "11",
    rx: "3",
    stroke: "currentColor",
    strokeOpacity: ".4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "2.5",
    width: "15",
    height: "8",
    rx: "1.5",
    fill: "currentColor"
  }))));
}

/* App bar with back / title / action */
function AppBar({
  onBack,
  title,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 px-3 py-2"
  }, onBack ? /*#__PURE__*/React.createElement(IconBtn, {
    onClick: onBack
  }, Icon.chevL) : /*#__PURE__*/React.createElement("div", {
    className: "w-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 truncate text-center text-[17px] font-bold text-foreground"
  }, title), right || /*#__PURE__*/React.createElement("div", {
    className: "w-10"
  }));
}

/* Segmented tabs (shadcn TabsList) — optional count pill per tab */
function Tabs({
  value,
  onChange,
  tabs
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-5 mb-3 flex h-10 items-center rounded-lg bg-muted p-1 text-muted-foreground"
  }, tabs.map(t => {
    const sel = value === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => onChange(t.key),
      className: 'inline-flex h-8 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-3 text-sm font-semibold transition-all ' + (sel ? 'bg-background text-foreground shadow-sm' : 'hover:text-foreground')
    }, tx(t.label), t.count != null && /*#__PURE__*/React.createElement("span", {
      className: 'inline-flex min-w-[18px] items-center justify-center rounded-full px-1 py-0.5 text-[11px] font-bold leading-none tabular-nums ' + (sel ? 'bg-primary/10 text-primary' : 'bg-foreground/10 text-muted-foreground')
    }, t.count));
  }));
}

/* Vertical stepper — neutral, one accent on the active step */
function Stepper({
  order
}) {
  const current = STEP_INDEX[order.status];
  const isComplete = order.status === 'complete';
  return /*#__PURE__*/React.createElement("div", {
    className: "pt-1"
  }, PIPELINE.map((s, i) => {
    const done = i < current || isComplete;
    const active = i === current && !isComplete;
    const future = i > current && !isComplete;
    const last = i === PIPELINE.length - 1;
    const date = order.dates && order.dates[s.key];
    return /*#__PURE__*/React.createElement("div", {
      key: s.key,
      className: "grid grid-cols-[24px_1fr_auto] gap-x-3.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: 'flex h-6 w-6 items-center justify-center rounded-full ' + (done && last && isComplete ? 'bg-success text-white ring-4 ring-success/15' : done ? 'bg-foreground text-background' : active ? 'bg-primary text-primary-foreground ring-4 ring-primary/15' : 'border-2 border-border bg-card')
    }, done && /*#__PURE__*/React.createElement("span", {
      className: "h-3.5 w-3.5"
    }, Icon.check), active && /*#__PURE__*/React.createElement("span", {
      className: "h-3 w-3"
    }, Icon.clock)), !last && /*#__PURE__*/React.createElement("div", {
      className: 'my-1 w-0.5 flex-1 ' + (i < current || isComplete ? 'bg-foreground/70' : 'bg-border'),
      style: {
        minHeight: 18
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "pb-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: 'text-[15px] ' + (last && isComplete ? 'font-bold text-success' : future ? 'font-medium text-muted-foreground' : 'font-semibold text-foreground')
    }, tx(s.label)), active && /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-[13px] leading-snug text-muted-foreground"
    }, tx(s.desc))), /*#__PURE__*/React.createElement("div", {
      className: 'pt-1 text-[12px] font-medium whitespace-nowrap ' + (last && isComplete ? 'text-success' : 'text-muted-foreground')
    }, date || ''));
  }));
}

/* Persistent footer credit — shows on every screen */
function FooterCredit() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex shrink-0 flex-col items-center justify-center gap-0.5 border-t border-border bg-background pt-2 pb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-bold uppercase tracking-wide text-muted-foreground/60"
  }, "Developed by"), /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-bold tracking-tight text-muted-foreground/90"
  }, "Volk Innovatives"));
}

/* Empty / error state block */
function EmptyState({
  icon = 'inbox',
  title,
  body,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center px-8 py-14 text-center"
  }, icon && Icon[icon] && /*#__PURE__*/React.createElement("div", {
    className: "flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-7 w-7"
  }, Icon[icon])), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-[15px] font-bold leading-snug text-foreground"
  }, title), body && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 max-w-[260px] text-[13px] font-medium leading-relaxed text-muted-foreground"
  }, body), action && /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, action));
}

/* Offline banner (thin, dismissible-free, theme-aware) */
function OfflineBanner({
  show
}) {
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex shrink-0 items-center justify-center gap-2 bg-foreground px-4 py-1.5 text-background"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-3.5 w-3.5"
  }, Icon.wifiOff), /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-semibold"
  }, tx('You’re offline — showing your last saved data')));
}

/* Inline alert (form / server errors) */
function Alert({
  children,
  tone = 'error'
}) {
  const map = {
    error: 'border-red-400/40 bg-red-500/[0.07] text-red-600 dark:text-red-400',
    warn: 'border-amber-400/40 bg-amber-400/[0.08] text-amber-700 dark:text-amber-400'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'flex items-start gap-2.5 rounded-md border px-3 py-2.5 ' + map[tone]
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-px h-4 w-4 shrink-0"
  }, Icon.alert), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] font-semibold leading-snug"
  }, children));
}

/* ---------- password helpers + UI ---------- */
function pwChecks(v) {
  return {
    len: (v || '').length >= 8,
    upper: /[A-Z]/.test(v || ''),
    lower: /[a-z]/.test(v || ''),
    digit: /\d/.test(v || ''),
    special: /[^A-Za-z0-9]/.test(v || '')
  };
}
function pwAllOk(v) {
  const c = pwChecks(v);
  return c.len && c.upper && c.lower && c.digit && c.special;
}
function pwStrengthMeta(v) {
  const n = Object.values(pwChecks(v)).filter(Boolean).length;
  if (!v) return {
    n: 0,
    label: '',
    cls: '',
    bar: ''
  };
  if (n <= 2) return {
    n,
    label: 'Weak',
    cls: 'text-red-500',
    bar: 'bg-red-500'
  };
  if (n === 3) return {
    n,
    label: 'Fair',
    cls: 'text-amber-500',
    bar: 'bg-amber-500'
  };
  if (n === 4) return {
    n,
    label: 'Good',
    cls: 'text-amber-500',
    bar: 'bg-amber-500'
  };
  return {
    n,
    label: 'Strong',
    cls: 'text-success',
    bar: 'bg-success'
  };
}

/* strength bar + label */
function PwStrength({
  value
}) {
  const m = pwStrengthMeta(value);
  if (!value) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'h-1 flex-1 rounded-full transition-colors ' + (i < m.n ? m.bar : 'bg-muted')
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'mt-1.5 text-[11px] font-bold ' + m.cls
  }, tx('Password strength'), ": ", tx(m.label)));
}

/* live criteria checklist */
function PwCriteria({
  value
}) {
  const c = pwChecks(value);
  const items = [['len', 'At least 8 characters'], ['upper', 'One uppercase letter (A–Z)'], ['lower', 'One lowercase letter (a–z)'], ['digit', 'One number (0–9)'], ['special', 'One special character (!@#$…)']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5 space-y-1.5 rounded-md border border-border bg-muted/40 px-3 py-2.5"
  }, items.map(([k, label]) => {
    const ok = c[k];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: 'flex items-center gap-2 text-[12px] font-medium ' + (ok ? 'text-success' : 'text-muted-foreground')
    }, /*#__PURE__*/React.createElement("span", {
      className: 'flex h-4 w-4 shrink-0 items-center justify-center rounded-full ' + (ok ? 'bg-success/15 text-success' : 'bg-foreground/10 text-muted-foreground')
    }, ok ? /*#__PURE__*/React.createElement("span", {
      className: "h-2.5 w-2.5"
    }, Icon.check) : /*#__PURE__*/React.createElement("span", {
      className: "h-1 w-1 rounded-full bg-current"
    })), tx(label));
  }));
}

/* ---------- country / phone input ---------- */
/* Full ISO-3166 country list with international dial codes. Flag emoji is derived
   from the 2-letter code (regional-indicator symbols) so the table stays compact. */
const COUNTRY_DATA = [['HK', '852', 'Hong Kong'], ['CN', '86', 'China'], ['TW', '886', 'Taiwan'], ['MO', '853', 'Macau'], ['SG', '65', 'Singapore'], ['MY', '60', 'Malaysia'], ['JP', '81', 'Japan'], ['KR', '82', 'South Korea'], ['US', '1', 'United States'], ['CA', '1', 'Canada'], ['GB', '44', 'United Kingdom'], ['AU', '61', 'Australia'], ['DE', '49', 'Germany'], ['FR', '33', 'France'], ['IN', '91', 'India'], ['AE', '971', 'United Arab Emirates'], ['AF', '93', 'Afghanistan'], ['AL', '355', 'Albania'], ['DZ', '213', 'Algeria'], ['AD', '376', 'Andorra'], ['AO', '244', 'Angola'], ['AG', '1268', 'Antigua and Barbuda'], ['AR', '54', 'Argentina'], ['AM', '374', 'Armenia'], ['AT', '43', 'Austria'], ['AZ', '994', 'Azerbaijan'], ['BS', '1242', 'Bahamas'], ['BH', '973', 'Bahrain'], ['BD', '880', 'Bangladesh'], ['BB', '1246', 'Barbados'], ['BY', '375', 'Belarus'], ['BE', '32', 'Belgium'], ['BZ', '501', 'Belize'], ['BJ', '229', 'Benin'], ['BT', '975', 'Bhutan'], ['BO', '591', 'Bolivia'], ['BA', '387', 'Bosnia and Herzegovina'], ['BW', '267', 'Botswana'], ['BR', '55', 'Brazil'], ['BN', '673', 'Brunei'], ['BG', '359', 'Bulgaria'], ['BF', '226', 'Burkina Faso'], ['BI', '257', 'Burundi'], ['KH', '855', 'Cambodia'], ['CM', '237', 'Cameroon'], ['CV', '238', 'Cape Verde'], ['CF', '236', 'Central African Republic'], ['TD', '235', 'Chad'], ['CL', '56', 'Chile'], ['CO', '57', 'Colombia'], ['KM', '269', 'Comoros'], ['CG', '242', 'Congo'], ['CD', '243', 'Congo (DRC)'], ['CR', '506', 'Costa Rica'], ['CI', '225', 'Côte d’Ivoire'], ['HR', '385', 'Croatia'], ['CU', '53', 'Cuba'], ['CY', '357', 'Cyprus'], ['CZ', '420', 'Czechia'], ['DK', '45', 'Denmark'], ['DJ', '253', 'Djibouti'], ['DM', '1767', 'Dominica'], ['DO', '1809', 'Dominican Republic'], ['EC', '593', 'Ecuador'], ['EG', '20', 'Egypt'], ['SV', '503', 'El Salvador'], ['GQ', '240', 'Equatorial Guinea'], ['ER', '291', 'Eritrea'], ['EE', '372', 'Estonia'], ['SZ', '268', 'Eswatini'], ['ET', '251', 'Ethiopia'], ['FJ', '679', 'Fiji'], ['FI', '358', 'Finland'], ['GA', '241', 'Gabon'], ['GM', '220', 'Gambia'], ['GE', '995', 'Georgia'], ['GH', '233', 'Ghana'], ['GR', '30', 'Greece'], ['GD', '1473', 'Grenada'], ['GT', '502', 'Guatemala'], ['GN', '224', 'Guinea'], ['GW', '245', 'Guinea-Bissau'], ['GY', '592', 'Guyana'], ['HT', '509', 'Haiti'], ['HN', '504', 'Honduras'], ['HU', '36', 'Hungary'], ['IS', '354', 'Iceland'], ['ID', '62', 'Indonesia'], ['IR', '98', 'Iran'], ['IQ', '964', 'Iraq'], ['IE', '353', 'Ireland'], ['IL', '972', 'Israel'], ['IT', '39', 'Italy'], ['JM', '1876', 'Jamaica'], ['JO', '962', 'Jordan'], ['KZ', '7', 'Kazakhstan'], ['KE', '254', 'Kenya'], ['KI', '686', 'Kiribati'], ['KW', '965', 'Kuwait'], ['KG', '996', 'Kyrgyzstan'], ['LA', '856', 'Laos'], ['LV', '371', 'Latvia'], ['LB', '961', 'Lebanon'], ['LS', '266', 'Lesotho'], ['LR', '231', 'Liberia'], ['LY', '218', 'Libya'], ['LI', '423', 'Liechtenstein'], ['LT', '370', 'Lithuania'], ['LU', '352', 'Luxembourg'], ['MG', '261', 'Madagascar'], ['MW', '265', 'Malawi'], ['MV', '960', 'Maldives'], ['ML', '223', 'Mali'], ['MT', '356', 'Malta'], ['MH', '692', 'Marshall Islands'], ['MR', '222', 'Mauritania'], ['MU', '230', 'Mauritius'], ['MX', '52', 'Mexico'], ['FM', '691', 'Micronesia'], ['MD', '373', 'Moldova'], ['MC', '377', 'Monaco'], ['MN', '976', 'Mongolia'], ['ME', '382', 'Montenegro'], ['MA', '212', 'Morocco'], ['MZ', '258', 'Mozambique'], ['MM', '95', 'Myanmar'], ['NA', '264', 'Namibia'], ['NR', '674', 'Nauru'], ['NP', '977', 'Nepal'], ['NL', '31', 'Netherlands'], ['NZ', '64', 'New Zealand'], ['NI', '505', 'Nicaragua'], ['NE', '227', 'Niger'], ['NG', '234', 'Nigeria'], ['MK', '389', 'North Macedonia'], ['NO', '47', 'Norway'], ['OM', '968', 'Oman'], ['PK', '92', 'Pakistan'], ['PW', '680', 'Palau'], ['PS', '970', 'Palestine'], ['PA', '507', 'Panama'], ['PG', '675', 'Papua New Guinea'], ['PY', '595', 'Paraguay'], ['PE', '51', 'Peru'], ['PH', '63', 'Philippines'], ['PL', '48', 'Poland'], ['PT', '351', 'Portugal'], ['QA', '974', 'Qatar'], ['RO', '40', 'Romania'], ['RU', '7', 'Russia'], ['RW', '250', 'Rwanda'], ['KN', '1869', 'Saint Kitts and Nevis'], ['LC', '1758', 'Saint Lucia'], ['VC', '1784', 'Saint Vincent and the Grenadines'], ['WS', '685', 'Samoa'], ['SM', '378', 'San Marino'], ['ST', '239', 'São Tomé and Príncipe'], ['SA', '966', 'Saudi Arabia'], ['SN', '221', 'Senegal'], ['RS', '381', 'Serbia'], ['SC', '248', 'Seychelles'], ['SL', '232', 'Sierra Leone'], ['SK', '421', 'Slovakia'], ['SI', '386', 'Slovenia'], ['SB', '677', 'Solomon Islands'], ['SO', '252', 'Somalia'], ['ZA', '27', 'South Africa'], ['SS', '211', 'South Sudan'], ['ES', '34', 'Spain'], ['LK', '94', 'Sri Lanka'], ['SD', '249', 'Sudan'], ['SR', '597', 'Suriname'], ['SE', '46', 'Sweden'], ['CH', '41', 'Switzerland'], ['SY', '963', 'Syria'], ['TJ', '992', 'Tajikistan'], ['TZ', '255', 'Tanzania'], ['TH', '66', 'Thailand'], ['TL', '670', 'Timor-Leste'], ['TG', '228', 'Togo'], ['TO', '676', 'Tonga'], ['TT', '1868', 'Trinidad and Tobago'], ['TN', '216', 'Tunisia'], ['TR', '90', 'Turkey'], ['TM', '993', 'Turkmenistan'], ['TV', '688', 'Tuvalu'], ['UG', '256', 'Uganda'], ['UA', '380', 'Ukraine'], ['UY', '598', 'Uruguay'], ['UZ', '998', 'Uzbekistan'], ['VU', '678', 'Vanuatu'], ['VA', '379', 'Vatican City'], ['VE', '58', 'Venezuela'], ['VN', '84', 'Vietnam'], ['YE', '967', 'Yemen'], ['ZM', '260', 'Zambia'], ['ZW', '263', 'Zimbabwe']];
const codeToFlag = code => code.toUpperCase().replace(/./g, ch => String.fromCodePoint(127397 + ch.charCodeAt(0)));
const COUNTRIES = COUNTRY_DATA.map(([code, dial, name]) => ({
  code,
  dial: '+' + dial,
  flag: codeToFlag(code),
  name
})).sort((a, b) => a.name.localeCompare(b.name)); // alphabetical by country name

function PhoneInput({
  country = 'HK',
  onCountry,
  value,
  onChange,
  invalid
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const c = COUNTRIES.find(x => x.code === country) || COUNTRIES[0];
  const term = q.trim().toLowerCase();
  const list = term ? COUNTRIES.filter(x => x.name.toLowerCase().includes(term) || x.dial.replace('+', '').includes(term.replace('+', '')) || x.code.toLowerCase() === term) : COUNTRIES;
  const choose = code => {
    onCountry && onCountry(code);
    setOpen(false);
    setQ('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'flex h-11 items-stretch rounded-md border bg-background transition-shadow focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 ' + (invalid ? 'border-red-400' : 'border-input')
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    className: "flex items-center gap-1.5 rounded-l-md pl-3 pr-2 text-[15px] font-semibold text-foreground transition-colors hover:bg-accent active:bg-accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base leading-none"
  }, c.flag), /*#__PURE__*/React.createElement("span", {
    className: "tabular-nums"
  }, c.dial), /*#__PURE__*/React.createElement("span", {
    className: "h-3.5 w-3.5 shrink-0 opacity-60"
  }, Icon.chevD)), /*#__PURE__*/React.createElement("div", {
    className: "my-2 w-px self-stretch bg-border"
  }), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    inputMode: "numeric",
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: "9123 4567",
    className: "min-w-0 flex-1 rounded-r-md bg-transparent px-3 text-[15px] font-medium text-foreground placeholder:font-normal placeholder:text-muted-foreground focus:outline-none"
  })), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-20",
    onClick: () => {
      setOpen(false);
      setQ('');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 right-0 z-30 mt-1 rounded-md border border-border bg-popover p-1 shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative px-1 pt-1 pb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
  }, Icon.search), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: tx('Search country or code'),
    className: "h-9 w-full rounded-sm border border-input bg-background pl-8 pr-3 text-sm font-medium text-foreground placeholder:font-normal placeholder:text-muted-foreground focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
  })), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar max-h-56 overflow-y-auto overscroll-contain"
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-6 text-center text-sm font-medium text-muted-foreground"
  }, tx('No countries found')) : list.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.code,
    type: "button",
    onClick: () => choose(x.code),
    className: 'flex w-full items-center gap-2.5 rounded-sm px-2 py-2 text-left text-sm hover:bg-accent ' + (x.code === country ? 'bg-accent/60' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base leading-none"
  }, x.flag), /*#__PURE__*/React.createElement("span", {
    className: "min-w-0 flex-1 truncate font-medium text-popover-foreground"
  }, x.name), /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 tabular-nums font-semibold text-muted-foreground"
  }, x.dial)))))));
}
Object.assign(window, {
  Badge,
  Progress,
  Button,
  IconBtn,
  Avatar,
  CardImage,
  Img,
  Slab,
  CardBack,
  StatusBar,
  AppBar,
  Tabs,
  Stepper,
  Switch,
  FooterCredit,
  EmptyState,
  OfflineBanner,
  Alert,
  useOnline,
  pwChecks,
  pwAllOk,
  pwStrengthMeta,
  PwStrength,
  PwCriteria,
  COUNTRIES,
  PhoneInput
});

/* ===== app2/grading.jsx ===== */
/* HobbyX — grading screens (shadcn) */
const {
  useState: useStateG
} = React;

// tab badges: active (in-progress) count + graded (completed) count
const TABS_WITH_COUNTS = TABS.map(t => ({
  ...t,
  count: ORDERS.filter(o => t.key === 'completed' ? o.group === 'completed' : o.group === 'progress').length
}));

/* dropdown menu */
function Menu({
  items,
  current,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute z-30 mt-2 w-56 rounded-md border border-border bg-popover p-1 shadow-lg"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    onClick: () => onPick(it.key),
    className: "flex w-full items-center justify-between rounded-sm px-2 py-2 text-sm font-medium text-popover-foreground hover:bg-accent"
  }, it.label, current === it.key && /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4 text-primary"
  }, Icon.check))));
}
function FilterBtn({
  icon,
  label,
  active,
  open,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: 'inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md border bg-background px-3 text-sm font-semibold text-foreground transition ' + (active || open ? 'border-ring ring-2 ring-ring/30' : 'border-input hover:bg-accent')
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4 shrink-0"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "max-w-[130px] truncate"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "h-3.5 w-3.5 shrink-0 opacity-60"
  }, Icon.chevD));
}

/* ---------- LIST ---------- */
function ListScreen({
  tab: tabProp,
  setTab,
  openOrder,
  openNotifs,
  openAccount,
  unread,
  offline,
  empty,
  gradingOnly,
  highlightId,
  clearHighlight
}) {
  const tab = tabProp;
  const [q, setQ] = useStateG('');
  const [sort, setSort] = useStateG('newest');
  const [statusF, setStatusF] = useStateG('all');
  const [menu, setMenu] = useStateG(null);
  const [tip, setTip] = useStateG(null);
  // collapsing search/filter bar: hide while scrolling down the rows, reveal on scroll up
  const scrollRef = React.useRef(null);
  const lastY = React.useRef(0);
  const [hideBar, setHideBar] = useStateG(false);
  const onListScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const y = el.scrollTop,
      max = el.scrollHeight - el.clientHeight,
      dy = y - lastY.current;
    // Freeze toggling near the bottom: collapsing the bar reflows the list height,
    // which clamps scrollTop and would otherwise feed back into a flicker loop.
    if (max - y < 56) {
      lastY.current = y;
      return;
    }
    if (y < 8) setHideBar(false);else if (dy > 6) setHideBar(true);else if (dy < -6) setHideBar(false);
    lastY.current = y;
  };

  // notification → list: clear the orange highlight once its glow has played
  React.useEffect(() => {
    if (!highlightId) return;
    const t = setTimeout(() => clearHighlight && clearHighlight(), 3000);
    return () => clearTimeout(t);
  }, [highlightId]);
  const base = empty ? [] : gradingOnly ? tab === 'completed' ? ORDERS.filter(o => o.group === 'completed') : [] : ORDERS.filter(o => tab === 'completed' ? o.group === 'completed' : o.group === 'progress');
  let rows = base;
  if (q.trim()) rows = rows.filter(o => (o.name + ' ' + o.category).toLowerCase().includes(q.toLowerCase()));
  if (tab === 'progress' && statusF !== 'all') rows = rows.filter(o => o.status === statusF);
  rows = rows.slice().sort((a, b) => sort === 'newest' ? Date.parse(b.arrived) - Date.parse(a.arrived) : Date.parse(a.arrived) - Date.parse(b.arrived));
  const filtered = q.trim() || statusF !== 'all';
  const clearFilters = () => {
    setQ('');
    setSort('newest');
    setStatusF('all');
    setMenu(null);
  };
  const showClear = !!q.trim() || sort !== 'newest' || tab === 'progress' && statusF !== 'all';
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background",
    onClick: () => {
      if (menu) setMenu(null);
      if (tip) setTip(null);
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "flex items-center justify-between px-5 pt-2 pb-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-extrabold tracking-tight text-foreground"
  }, tx('Grading Orders')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(IconBtn, {
    dot: unread > 0,
    onClick: openNotifs
  }, Icon.bell), /*#__PURE__*/React.createElement(Avatar, {
    onClick: openAccount
  }))), !empty && /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: hideBar ? 0 : 320,
      opacity: hideBar ? 0 : 1,
      overflow: menu ? 'visible' : 'hidden',
      transition: 'max-height .3s ease, opacity .25s ease'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: t => {
      setTab(t);
      setMenu(null);
    },
    tabs: gradingOnly ? TABS.map(t => ({
      ...t,
      count: t.key === 'completed' ? ORDERS.filter(o => o.group === 'completed').length : 0
    })) : TABS_WITH_COUNTS
  }), (!gradingOnly || tab === 'completed') && /*#__PURE__*/React.createElement("div", {
    className: "px-5 pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground"
  }, Icon.search), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: tx('Search by service name'),
    className: "h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm font-medium text-foreground placeholder:font-normal placeholder:text-muted-foreground focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-2.5 flex gap-2",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(FilterBtn, {
    icon: Icon.sort,
    label: tx(SORTS.find(s => s.key === sort).short),
    active: sort !== 'newest',
    open: menu === 'sort',
    onClick: () => setMenu(menu === 'sort' ? null : 'sort')
  }), menu === 'sort' && /*#__PURE__*/React.createElement(Menu, {
    items: SORTS,
    current: sort,
    onPick: k => {
      setSort(k);
      setMenu(null);
    }
  })), tab === 'progress' && /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(FilterBtn, {
    icon: Icon.sliders,
    label: statusF === 'all' ? tx('Status') : tx(PIPELINE[STEP_INDEX[statusF]].label),
    active: statusF !== 'all',
    open: menu === 'status',
    onClick: () => setMenu(menu === 'status' ? null : 'status')
  }), menu === 'status' && /*#__PURE__*/React.createElement(Menu, {
    items: STATUS_FILTERS,
    current: statusF,
    onPick: k => {
      setStatusF(k);
      setMenu(null);
    }
  })), showClear && /*#__PURE__*/React.createElement("button", {
    onClick: clearFilters,
    title: tx('Clear all filters'),
    "aria-label": tx('Clear all filters'),
    className: "ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors hover:bg-accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4"
  }, Icon.close))))), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar flex-1 space-y-2.5 overflow-y-auto px-5 pb-8",
    ref: scrollRef,
    onScroll: onListScroll
  }, rows.length === 0 && (filtered ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: null,
    title: tx('No orders match'),
    body: tx('Try a different search term or status filter.')
  }) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "inbox",
    title: tab === 'completed' ? tx('No completed orders yet') : tx('No orders in progress'),
    body: tab === 'completed' ? tx('Graded orders you receive back will appear here.') : tx('Submit cards for grading and track their progress here.')
  })), rows.map(o => {
    const pct = Math.round(progressFor(o.status) * 100);
    const oReady = o.items.some(it => it.grade || it.img || it.slab);
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      onClick: () => o.locked ? window.toast(tx('Details unavailable'), 'primary') : openOrder(o.id),
      className: 'group flex w-full items-center gap-4 rounded-lg border border-border bg-[#F5F6F8] p-3 text-left transition-colors dark:bg-card ' + (highlightId === o.id ? 'notif-glow ' : '') + (o.locked ? (highlightId === o.id ? '' : 'opacity-60 ') + 'active:scale-[.995]' : 'hover:border-foreground/15 hover:bg-accent/40 active:scale-[.995]')
    }, o.group === 'completed' ? /*#__PURE__*/React.createElement(Slab, {
      item: o.items[0],
      className: "h-[84px] w-[60px] shrink-0 shadow-sm"
    }) : /*#__PURE__*/React.createElement(CardImage, {
      cert: o.items[0].cert,
      category: o.category,
      src: o.items[0].img,
      className: "h-[84px] w-[60px] shrink-0 shadow-sm"
    }), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 truncate text-[15px] font-semibold leading-tight text-foreground"
    }, tx(o.service))), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 truncate whitespace-nowrap text-xs font-medium text-muted-foreground",
      style: {
        fontSize: "13px"
      }
    }, (o.shipment || tx(o.category)) + (oReady ? ' · ' + o.itemCount + ' ' + tx(o.itemCount === 1 ? 'item' : 'items') : '')), o.locked && /*#__PURE__*/React.createElement("div", {
      className: "mt-2 flex"
    }, /*#__PURE__*/React.createElement(Badge, {
      intent: "neutral",
      className: "shrink-0"
    }, tx('Order Arrived'))), !o.locked && o.group !== 'completed' && /*#__PURE__*/React.createElement("div", {
      className: "mt-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex"
    }, /*#__PURE__*/React.createElement(Badge, {
      intent: statusIntent(o.status),
      className: "shrink-0"
    }, tx(PIPELINE[STEP_INDEX[o.status]].label))), /*#__PURE__*/React.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/React.createElement(Progress, {
      value: pct
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-2.5 text-[13px] font-medium leading-snug text-muted-foreground"
    }, tx('Estimated completion'), ": ", /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-foreground"
    }, o.est))), o.group === 'completed' && /*#__PURE__*/React.createElement("div", {
      className: "mt-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex"
    }, /*#__PURE__*/React.createElement(Badge, {
      intent: statusIntent(o.status),
      className: "shrink-0"
    }, tx(PIPELINE[STEP_INDEX[o.status]].label))), /*#__PURE__*/React.createElement("div", {
      className: "mt-2.5 text-[13px] font-medium leading-snug text-muted-foreground"
    }, tx('Completion date'), ": ", /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-foreground"
    }, o.completedOn)))), !o.locked && /*#__PURE__*/React.createElement("span", {
      className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
    }, Icon.chevR));
  })), (empty || gradingOnly && tab === 'progress') && /*#__PURE__*/React.createElement("div", {
    className: "shrink-0 border-t border-border px-5 pt-3 pb-5"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://hobbyxstore.com/pages/hobbyx-grading-submission-services",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex h-12 items-center justify-center gap-2 rounded-md bg-primary text-[15px] font-bold text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[.99]"
  }, tx('Get your cards graded'), /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4"
  }, Icon.external)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 flex items-center justify-center gap-1 text-[11px] font-medium text-muted-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3"
  }, Icon.external), tx('Opens the HobbyX website in your browser'))));
}

/* ---------- DETAIL ---------- */
function DetailScreen({
  order,
  goBack,
  openItems,
  openCard,
  startReveal,
  revealed,
  markRevealed
}) {
  const completed = order.group === 'completed';
  // Grades become revealable once the order reaches "Grades Ready" (ready → completing → complete)
  const gradesReady = STEP_INDEX[order.status] >= STEP_INDEX.ready;
  const PREVIEW = 4;
  const previewItems = order.items.slice(0, PREVIEW);
  const moreCount = order.itemCount - previewItems.length;
  const canViewAll = !(gradesReady && !revealed);
  const imagesReady = order.items.some(it => it.grade || it.img || it.slab);
  const [tip, setTip] = useStateG(false);
  const [confirmSkip, setConfirmSkip] = useStateG(false);
  // View all is always available once images are ready. If grades aren't revealed
  // yet, confirm that the user wants to skip the reveal before jumping to the list.
  const handleViewAll = () => {
    if (canViewAll) {
      openItems();
    } else {
      setConfirmSkip(true);
    }
  };
  const confirmAndView = () => {
    markRevealed && markRevealed();
    setConfirmSkip(false);
    openItems();
  };
  const _cd = order.completedOn ? new Date(order.completedOn) : null;
  const _ed = order.est ? new Date(order.est) : null;
  const daysEarly = _cd && _ed ? Math.round((_ed - _cd) / 86400000) : 0;
  const aheadOfSchedule = completed && daysEarly > 0;
  const behind = !completed && !order.locked && _ed && _ed < TODAY;
  // move the service name into the header once it scrolls out of view
  const detailScrollRef = React.useRef(null);
  const [showHdrTitle, setShowHdrTitle] = useStateG(false);
  const onDetailScroll = () => {
    const el = detailScrollRef.current;
    if (el) setShowHdrTitle(el.scrollTop > 30);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background"
  }, /*#__PURE__*/React.createElement(AppBar, {
    onBack: goBack,
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: showHdrTitle ? 1 : 0,
        transition: 'opacity .2s ease'
      }
    }, tx(order.service))
  }), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar flex-1 overflow-y-auto px-5 pb-8",
    ref: detailScrollRef,
    onScroll: onDetailScroll
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-[26px] font-extrabold leading-tight tracking-tight text-foreground"
  }, tx(order.service)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-[15px] font-semibold text-primary"
  }, order.shipment || tx(order.category)), imagesReady && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-sm font-medium text-muted-foreground"
  }, order.itemCount, " ", tx(order.itemCount === 1 ? 'item' : 'items')), !completed && /*#__PURE__*/React.createElement("div", {
    className: "relative mt-4 rounded-lg border border-border bg-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 divide-x divide-border"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-[26px] items-start text-[11px] font-semibold uppercase leading-tight tracking-wider text-muted-foreground"
  }, tx('Business Turnaround Days')), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-sm font-semibold text-foreground"
  }, order.turnaround || order.estDays)), /*#__PURE__*/React.createElement("div", {
    className: "relative px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-[26px] items-start pr-7 text-[11px] font-semibold uppercase leading-tight tracking-wider text-muted-foreground",
    style: {
      whiteSpace: 'pre-line'
    }
  }, tx('Estimated\nCompletion Date')), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-sm font-semibold text-foreground"
  }, order.est), /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: 0,
    "aria-label": tx('About this date'),
    onClick: () => setTip(v => !v),
    className: "absolute right-1.5 top-1.5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-muted active:bg-muted"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block h-[18px] w-[18px] text-muted-foreground"
  }, Icon.help)), tip && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-20",
    onClick: () => setTip(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-full z-30 mt-1.5 w-[228px] rounded-xl bg-neutral-800 p-3.5 text-[12px] font-medium leading-relaxed text-white shadow-xl dark:bg-neutral-700"
  }, tx('Estimated completion date is calculated based your service level and its turnaround time in number of business days. The date will calculate once your order is entered into PSA Grading system and is not guaranteed.')))))), completed && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center gap-1.5 text-sm font-bold text-success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4"
  }, Icon.check), tx('Completion date'), " : ", order.completedOn), imagesReady && /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex w-full items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whitespace-nowrap text-base font-bold text-foreground"
  }, order.itemCount, " ", tx(order.itemCount === 1 ? 'Item' : 'Items')), /*#__PURE__*/React.createElement("button", {
    onClick: handleViewAll,
    className: "flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-semibold text-muted-foreground transition-opacity active:opacity-60"
  }, tx('View all'), " ", /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4"
  }, Icon.chevR))), /*#__PURE__*/React.createElement("div", {
    className: imagesReady ? 'mt-3' : 'mt-6'
  }, !imagesReady ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 rounded-lg border border-dashed border-border bg-muted/40 px-4 py-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[18px] w-[18px]"
  }, Icon.clock)), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-medium leading-snug text-muted-foreground"
  }, tx('Your items are currently being reviewed and will appear here soon.'))) : /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar -mx-5 flex items-stretch gap-2.5 overflow-x-auto px-5 pb-1"
  }, previewItems.map((it, i) => {
    const blurred = gradesReady && !revealed;
    return /*#__PURE__*/React.createElement("button", {
      key: it.cert,
      onClick: handleViewAll,
      className: "shrink-0 transition-transform active:scale-95"
    }, it.grade ? /*#__PURE__*/React.createElement(Slab, {
      item: it,
      className: "h-[92px] w-[66px] shadow-sm",
      style: blurred ? {
        filter: 'blur(2.5px)'
      } : null
    }) : /*#__PURE__*/React.createElement(CardImage, {
      cert: it.cert,
      category: it.category,
      src: it.img,
      className: "h-[92px] w-[66px] shadow-sm"
    }));
  }), moreCount > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: handleViewAll,
    className: "flex h-[92px] w-[66px] shrink-0 flex-col items-center justify-center rounded-[10px] border border-dashed border-border bg-muted/60 text-center transition-colors hover:bg-muted"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-extrabold text-foreground"
  }, "+", moreCount), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold text-muted-foreground"
  }, tx('more'))), /*#__PURE__*/React.createElement("div", {
    className: "w-1 shrink-0"
  }))), gradesReady && /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    className: "mt-5 w-full",
    onClick: startReveal
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-5 w-5"
  }, Icon.sparkles), " ", revealed ? tx('Reveal again') : tx('Start Grade Reveal')), /*#__PURE__*/React.createElement("div", {
    className: "mt-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 text-base font-bold text-foreground"
  }, tx('Status')), /*#__PURE__*/React.createElement(Stepper, {
    order: order
  }))), confirmSkip && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-40 flex items-end justify-center bg-black/50 p-4",
    onClick: () => setConfirmSkip(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-[400px] rounded-2xl bg-card p-5 shadow-xl",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[22px] w-[22px]"
  }, Icon.sparkles)), /*#__PURE__*/React.createElement("h2", {
    className: "mt-3.5 text-lg font-extrabold leading-tight text-foreground"
  }, tx('View all grades now?')), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-[13px] font-medium leading-relaxed text-muted-foreground"
  }, tx('We\u2019ll take you straight to the full list with every grade shown. You can always start the grade reveal later whenever you like.')), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-col gap-2.5"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    className: "w-full",
    onClick: confirmAndView
  }, tx('View all')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmSkip(false),
    className: "flex h-12 w-full items-center justify-center rounded-md text-[15px] font-bold text-foreground transition-colors hover:bg-accent active:scale-[.99]"
  }, tx('Cancel'))))));
}

/* ---------- ITEMS ---------- */
function ItemsScreen({
  order,
  goBack,
  openCard
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background"
  }, /*#__PURE__*/React.createElement(AppBar, {
    onBack: goBack,
    title: order.itemCount + ' ' + tx('Items')
  }), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar flex-1 overflow-y-auto px-5 pb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 pt-1"
  }, order.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.cert,
    className: "rounded-lg border border-border bg-card p-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openCard(i),
    className: "flex w-full items-center gap-3.5 text-left"
  }, it.grade ? /*#__PURE__*/React.createElement(Slab, {
    item: it,
    className: "h-[74px] w-[53px] shrink-0 shadow-sm"
  }) : /*#__PURE__*/React.createElement(CardImage, {
    cert: it.cert,
    category: it.category,
    src: it.img,
    className: "h-[74px] w-[53px] shrink-0 shadow-sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-medium text-muted-foreground"
  }, "#", it.cert), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-foreground"
  }, tx(it.name)), it.grade ? /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-sm font-bold text-foreground"
  }, it.grade, " ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-muted-foreground"
  }, "\xB7 ", it.sub.replace(/\s*\d+$/, '')), it.auto ? /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-muted-foreground"
  }, " \xB7 ", it.auto) : null) : /*#__PURE__*/React.createElement(Badge, {
    intent: "neutral",
    className: "mt-1.5"
  }, tx(order.group === 'completed' ? 'Shipping to you' : 'In grading'))), /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4 shrink-0 text-muted-foreground"
  }, Icon.chevR)))))));
}

/* ---------- CARD DETAIL ---------- */
function CardDetail({
  item,
  close
}) {
  const [view, setView] = useStateG(0); // 0 Front · 1 Back · 2 Slab(both)
  const graded = !!item.grade;
  const Front = () => graded ? /*#__PURE__*/React.createElement(Slab, {
    item: item,
    big: true,
    face: "front",
    hideNotes: true,
    className: "h-full w-full shadow-md",
    radius: 0
  }) : /*#__PURE__*/React.createElement(CardImage, {
    cert: item.cert,
    category: item.category,
    src: item.img,
    className: "aspect-[5/7] w-full",
    radius: 0
  });
  const Back = () => graded ? /*#__PURE__*/React.createElement(Slab, {
    item: item,
    big: true,
    face: "back",
    className: "h-full w-full shadow-md",
    radius: 0
  }) : /*#__PURE__*/React.createElement("div", {
    className: "aspect-[5/7] w-full overflow-hidden"
  }, /*#__PURE__*/React.createElement(CardBack, {
    category: item.category
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background"
  }, /*#__PURE__*/React.createElement(AppBar, {
    onBack: close,
    title: graded && item.cert ? /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        const a = document.createElement('a');
        a.href = 'https://www.psacard.com/cert/' + item.cert + '/psa';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        a.remove();
      },
      className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[15px] font-bold text-primary underline decoration-primary/40 decoration-1 underline-offset-[3px] transition-colors active:bg-primary/20"
    }, '#' + item.cert, /*#__PURE__*/React.createElement("span", {
      className: "h-3.5 w-3.5"
    }, Icon.external)) : '#' + item.cert
  }), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar flex-1 overflow-y-auto px-5 pb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center rounded-xl border border-border bg-muted/40 p-7"
  }, view === 2 ? /*#__PURE__*/React.createElement("div", {
    className: "flex w-full items-stretch justify-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[47%]",
    style: graded ? {
      aspectRatio: '0.62'
    } : null
  }, /*#__PURE__*/React.createElement(Front, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-[47%]",
    style: graded ? {
      aspectRatio: '0.62'
    } : null
  }, /*#__PURE__*/React.createElement(Back, null))) : /*#__PURE__*/React.createElement("div", {
    className: "mx-auto",
    style: {
      width: '72%',
      ...(graded ? {
        aspectRatio: '0.62'
      } : {})
    }
  }, view === 0 ? /*#__PURE__*/React.createElement(Front, null) : /*#__PURE__*/React.createElement(Back, null))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex justify-center gap-2.5"
  }, ['Front', 'Back', 'Slab'].map((v, i) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setView(i),
    className: 'rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ' + (i === view ? 'bg-foreground text-background' : 'bg-secondary text-secondary-foreground')
  }, tx(v)))), /*#__PURE__*/React.createElement("h1", {
    className: "mt-5 text-center text-lg font-bold leading-snug text-foreground"
  }, tx(item.name)), graded && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-stretch justify-center gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
  }, tx('Card Grade')), /*#__PURE__*/React.createElement("div", {
    className: "text-[28px] font-extrabold leading-none text-foreground"
  }, item.grade), /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] font-semibold uppercase tracking-wide text-muted-foreground"
  }, item.sub.replace(/\s*\d+$/, ''))), item.auto && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
  }, tx('Autograph')), /*#__PURE__*/React.createElement("div", {
    className: "text-[28px] font-extrabold leading-none text-foreground"
  }, item.auto.replace(/AUTO\s*/i, '')), /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] font-semibold uppercase tracking-wide text-muted-foreground"
  }, tx('PSA/DNA')))), graded && item.notes && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 rounded-lg border border-border bg-card p-4 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-2 text-[11px] font-bold uppercase tracking-wider text-foreground"
  }, tx('Grader Notes')), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-medium leading-relaxed text-muted-foreground"
  }, item.notes)))));
}

/* ---------- GRADE REVEAL ---------- */
function GradeReveal({
  order,
  show,
  close,
  onRevealed
}) {
  const graded = order.items.filter(i => i.grade);
  const [idx, setIdx] = useStateG(0);
  const [phase, setPhase] = useStateG('rise'); // rise → ready → slice → open → emerge → reveal
  const timers = React.useRef([]);
  const sparkRef = React.useRef(null);
  const rootRef = React.useRef(null);
  const openedRef = React.useRef(false);
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const after = (ms, fn) => {
    timers.current.push(setTimeout(fn, ms));
  };
  const spawnSparks = (count, spread, lift) => {
    const node = sparkRef.current;
    if (!node) return;
    for (let k = 0; k < count; k++) {
      const s = document.createElement('span');
      s.className = 'gr-spark';
      const ang = Math.random() * Math.PI * 2;
      const dist = spread * (0.35 + Math.random() * 0.65);
      s.style.setProperty('--tx', (Math.cos(ang) * dist).toFixed(0) + 'px');
      s.style.setProperty('--ty', (Math.sin(ang) * dist - lift).toFixed(0) + 'px');
      s.style.setProperty('--d', (Math.random() * 0.28).toFixed(2) + 's');
      s.style.setProperty('--s', (4 + Math.random() * 9).toFixed(0) + 'px');
      node.appendChild(s);
      setTimeout(() => s.remove(), 1500);
    }
  };
  const runOpen = () => {
    if (openedRef.current) return;
    openedRef.current = true;
    clearTimers(); // cancel the auto-open fallback
    setPhase('slice');
    after(420, () => setPhase('open'));
    after(720, () => {
      setPhase('emerge');
      spawnSparks(10, 120, 36);
    });
    after(1660, () => {
      setPhase('flip');
      spawnSparks(16, 190, 58);
      if (navigator.vibrate) {
        try {
          navigator.vibrate(16);
        } catch (e) {}
      }
    });
    after(2820, () => {
      setPhase('reveal');
      spawnSparks(30, 250, 74);
      if (navigator.vibrate) {
        try {
          navigator.vibrate(28);
        } catch (e) {}
      }
    });
  };
  const startTimeline = () => {
    clearTimers();
    openedRef.current = false;
    setPhase('rise');
    after(1100, () => setPhase('ready'));
    after(2900, () => runOpen()); // auto-open if the user doesn't tap
  };
  React.useEffect(() => {
    if (!show) return undefined;
    startTimeline();
    return clearTimers;
  }, [show, idx]);

  // 3D tilt — the scene leans with the phone's tilt (or pointer on desktop).
  // Subtle: capped to a few degrees, eased, and disabled under reduced-motion.
  React.useEffect(() => {
    if (!show) return undefined;
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const el = rootRef.current;
    if (!el) return undefined;
    const MAX_X = 6,
      MAX_Y = 8; // max degrees (pitch, yaw)
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      el.style.setProperty('--gr-tx', cx.toFixed(2) + 'deg');
      el.style.setProperty('--gr-ty', cy.toFixed(2) + 'deg');
      el.style.setProperty('--gr-shine-x', (cx * 2.6).toFixed(1) + 'px');
      el.style.setProperty('--gr-shine-y', (cy * 2.6).toFixed(1) + 'px');
      if (Math.abs(tx - cx) > 0.04 || Math.abs(ty - cy) > 0.04) raf = requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const clamp = (v, m) => v < -m ? -m : v > m ? m : v;
    const onOrient = e => {
      if (e.gamma == null || e.beta == null) return;
      const g = clamp(e.gamma, 24); // left/right tilt
      const b = clamp(e.beta - 40, 24); // front/back, around a natural hold (~40°)
      tx = g / 24 * MAX_Y; // yaw follows left/right
      ty = -(b / 24) * MAX_X; // pitch follows front/back
      schedule();
    };
    const onPointer = e => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2 * MAX_Y;
      ty = -((e.clientY - r.top) / r.height - 0.5) * 2 * MAX_X;
      schedule();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      schedule();
    };
    window.addEventListener('pointermove', onPointer, {
      passive: true
    });
    el.addEventListener('pointerleave', onLeave);
    let orientBound = false;
    const bindOrient = () => {
      if (orientBound) return;
      orientBound = true;
      window.addEventListener('deviceorientation', onOrient, {
        passive: true
      });
    };
    const DOE = window.DeviceOrientationEvent;
    let askOnTap = null;
    if (DOE && typeof DOE.requestPermission === 'function') {
      askOnTap = () => {
        DOE.requestPermission().then(s => {
          if (s === 'granted') bindOrient();
        }).catch(() => {});
      };
      window.addEventListener('pointerdown', askOnTap, {
        once: true
      });
    } else if (DOE) {
      bindOrient();
    }
    return () => {
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('deviceorientation', onOrient);
      if (askOnTap) window.removeEventListener('pointerdown', askOnTap);
      el.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
      el.style.removeProperty('--gr-tx');
      el.style.removeProperty('--gr-ty');
      el.style.removeProperty('--gr-shine-x');
      el.style.removeProperty('--gr-shine-y');
    };
  }, [show]);
  if (!show) return null;
  if (graded.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 z-40 flex flex-col items-center justify-center bg-background px-8 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-7 w-7"
    }, Icon.sparkles)), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 text-[15px] font-bold text-foreground"
    }, tx('No grades to reveal yet')), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 max-w-[260px] text-[13px] font-medium leading-relaxed text-muted-foreground"
    }, tx('Grades will appear here once this order reaches the Grades Ready stage.')), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      className: "mt-5",
      onClick: close
    }, tx('Back')));
  }
  const item = graded[idx];
  const last = idx >= graded.length - 1;
  const num = (item.grade || '').replace(/PSA\s*/i, '').trim();
  const goNext = () => {
    clearTimers();
    setPhase('exit'); // current card floats up & fades
    after(500, () => setIdx(i => i + 1)); // then swap → effect restarts the timeline at 'rise'
  };
  const finishClose = () => {
    onRevealed && onRevealed();
    setIdx(0);
    close();
  };
  const doClose = () => {
    setIdx(0);
    close();
  };
  const onStageTap = () => {
    if (phase === 'ready') runOpen();
  };
  const HX_LOGO = typeof window !== 'undefined' && window.__resources && window.__resources.hobbyxLogo || 'assets/hobbyx-logo.png';
  return /*#__PURE__*/React.createElement("div", {
    className: "gr",
    "data-phase": phase,
    ref: rootRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-vignette"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-flash"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'gr-bar' + ((idx + 1) / graded.length >= 0.8 ? ' is-high' : ''),
    role: "progressbar",
    "aria-valuenow": idx + 1,
    "aria-valuemin": 0,
    "aria-valuemax": graded.length
  }, graded.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'gr-seg' + (i <= idx ? ' on' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-seg-fill"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "gr-top-actions"
  }, /*#__PURE__*/React.createElement(IconBtn, {
    className: "!text-white hover:!bg-white/10",
    onClick: doClose
  }, Icon.close))), /*#__PURE__*/React.createElement("div", {
    className: "gr-stage",
    onClick: onStageTap
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-scene"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-rays"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-slab"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-slab-rise"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-slab-bob"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-slab-tilt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-slab-flip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-face gr-face-front"
  }, /*#__PURE__*/React.createElement(Slab, {
    item: item,
    big: true,
    face: "front",
    className: "h-full w-full",
    radius: 0
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-gloss"
  })), /*#__PURE__*/React.createElement("div", {
    className: "gr-face gr-face-back"
  }, /*#__PURE__*/React.createElement(Slab, {
    item: item,
    face: "back",
    className: "h-full w-full",
    radius: 0
  })), /*#__PURE__*/React.createElement("div", {
    className: "gr-edge gr-edge-right"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-edge gr-edge-left"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-edge gr-edge-bottom"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-edge gr-edge-top"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "gr-pack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-sheen"
  })), /*#__PURE__*/React.createElement("div", {
    className: "gr-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-label"
  }, /*#__PURE__*/React.createElement("img", {
    className: "gr-logo",
    src: HX_LOGO,
    alt: "HobbyX",
    draggable: false
  })), /*#__PURE__*/React.createElement("div", {
    className: "gr-tag"
  }, tx('Graded'))), /*#__PURE__*/React.createElement("div", {
    className: "gr-mouth"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-burst"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-cutflash"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-crimp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-crimp-foil"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-crimp-stamp"
  }, "HOBBYX")), /*#__PURE__*/React.createElement("div", {
    className: "gr-blade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-blade-steel"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-blade-edge"
  })), /*#__PURE__*/React.createElement("div", {
    className: "gr-glint"
  })), /*#__PURE__*/React.createElement("div", {
    className: "gr-sparks",
    ref: sparkRef
  }))), /*#__PURE__*/React.createElement("div", {
    className: "gr-hint"
  }, tx('Tap to open')), /*#__PURE__*/React.createElement("div", {
    className: "gr-info"
  }, item.auto ? /*#__PURE__*/React.createElement("div", {
    className: "gr-grades"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-gradecol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-gradeline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gr-psa"
  }, "PSA"), /*#__PURE__*/React.createElement("span", {
    className: "gr-grade"
  }, num)), /*#__PURE__*/React.createElement("div", {
    className: "gr-sub"
  }, item.sub.replace(/\s*\d+$/, ''))), /*#__PURE__*/React.createElement("div", {
    className: "gr-gdiv"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gr-gradecol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gr-gradeline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gr-psa"
  }, "AUTO"), /*#__PURE__*/React.createElement("span", {
    className: "gr-grade"
  }, item.auto.replace(/AUTO\s*/i, ''))), /*#__PURE__*/React.createElement("div", {
    className: "gr-sub"
  }, tx('PSA/DNA')))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "gr-gradeline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gr-psa"
  }, "PSA"), /*#__PURE__*/React.createElement("span", {
    className: "gr-grade"
  }, num)), /*#__PURE__*/React.createElement("div", {
    className: "gr-sub"
  }, item.sub.replace(/\s*\d+$/, ''))), /*#__PURE__*/React.createElement("div", {
    className: "gr-name"
  }, tx(item.name)), /*#__PURE__*/React.createElement("button", {
    className: "gr-cta",
    onClick: e => {
      e.stopPropagation();
      last ? finishClose() : goNext();
    }
  }, last ? tx('Done') + ` · ${graded.length} ${graded.length === 1 ? tx('card') : tx('cards')} ${tx('revealed')}` : tx('Reveal next') + ` (${idx + 2}/${graded.length})`)));
}

/* ---------- NOTIFICATIONS ---------- */
/* iOS-style swipe-left row: drag the content left to reveal a Delete button */
function SwipeRow({
  children,
  onDelete
}) {
  const OPEN = 88;
  const [offset, setOffset] = useStateG(0);
  const st = React.useRef({
    x: 0,
    base: 0,
    dragging: false,
    moved: false,
    pid: null,
    el: null
  });
  const onDown = e => {
    st.current = {
      x: e.clientX,
      base: offset,
      dragging: true,
      moved: false,
      pid: e.pointerId,
      el: e.currentTarget
    };
  };
  const onMove = e => {
    if (!st.current.dragging) return;
    const dx = e.clientX - st.current.x;
    if (!st.current.moved && Math.abs(dx) > 4) {
      st.current.moved = true;
      try {
        st.current.el.setPointerCapture(st.current.pid);
      } catch (_) {}
    }
    if (st.current.moved) setOffset(Math.min(0, Math.max(-OPEN, st.current.base + dx)));
  };
  const onUp = () => {
    if (!st.current.dragging) return;
    st.current.dragging = false;
    setOffset(o => o < -OPEN / 2 ? -OPEN : 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden border-b border-border"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    "aria-label": tx('Delete'),
    className: "absolute inset-y-0 right-0 flex flex-col items-center justify-center gap-1 text-[12px] font-bold text-white",
    style: {
      width: OPEN,
      backgroundColor: '#e5484d'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[22px] w-[22px]"
  }, Icon.trash), tx('Delete')), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-background",
    style: {
      transform: `translateX(${offset}px)`,
      transition: st.current.dragging ? 'none' : 'transform .24s cubic-bezier(.2,.7,.2,1)',
      touchAction: 'pan-y'
    },
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    onClickCapture: e => {
      if (st.current.moved) {
        e.stopPropagation();
        e.preventDefault();
        st.current.moved = false;
        return;
      }
      if (offset !== 0) {
        e.stopPropagation();
        e.preventDefault();
        setOffset(0);
      }
    }
  }, children));
}
function NotificationsScreen({
  goBack,
  openOrder,
  empty
}) {
  const [list, setList] = useStateG(empty ? [] : NOTIFICATIONS);
  const anyUnread = list.some(n => n.unread);
  const markAll = () => setList(l => l.map(n => ({
    ...n,
    unread: false
  })));
  const del = id => setList(l => l.filter(n => n.id !== id));
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background"
  }, /*#__PURE__*/React.createElement(AppBar, {
    onBack: goBack,
    title: tx('Notifications')
  }), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar flex-1 overflow-y-auto pb-4"
  }, list.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    icon: "bell",
    title: tx('You’re all caught up'),
    body: tx('Updates about your grading orders will show up here.')
  }), list.map(n => /*#__PURE__*/React.createElement(SwipeRow, {
    key: n.id,
    onDelete: () => del(n.id)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openOrder(n.orderId),
    className: 'flex w-full items-start gap-3.5 px-5 py-4 text-left transition-colors hover:bg-accent/40 ' + (n.unread ? 'bg-primary/[0.035]' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-5 w-5"
  }, Icon[n.icon])), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm font-bold text-foreground"
  }, tx(n.title), n.unread && /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-primary"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-[13px] font-medium leading-snug text-muted-foreground"
  }, tx(n.body)), n.ship && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-muted-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3"
  }, Icon.truck), n.ship), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-xs font-medium text-muted-foreground/70"
  }, tx(n.time))), /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4 shrink-0 self-center text-muted-foreground"
  }, Icon.chevR))))), list.length > 0 && anyUnread && /*#__PURE__*/React.createElement("div", {
    className: "shrink-0 border-t border-border px-5 pt-3 pb-5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: markAll,
    className: "flex h-12 w-full items-center justify-center gap-2 rounded-md bg-secondary text-[15px] font-bold text-foreground transition-colors hover:bg-secondary/80 active:scale-[.99]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4"
  }, Icon.check), tx('Mark all read'))));
}

/* ---------- ACCOUNT ---------- */
function DelSk({
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'animate-pulse rounded bg-muted ' + (c || '')
  });
}
function DeleteActivitySkeleton() {
  return /*#__PURE__*/React.createElement("div", {
    className: "delete-account-section rounded-lg border border-amber-400/40 bg-amber-400/[0.08] p-3"
  }, /*#__PURE__*/React.createElement(DeleteSectionLabel, null, tx('Active activity')), /*#__PURE__*/React.createElement("div", {
    className: "delete-account-activity"
  }, [0, 1].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "delete-account-activity__item"
  }, /*#__PURE__*/React.createElement(DelSk, {
    c: "h-8 w-8 shrink-0 rounded-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement(DelSk, {
    c: "h-3.5 w-4/5 rounded"
  }), /*#__PURE__*/React.createElement(DelSk, {
    c: "mt-2 h-3 w-full rounded"
  }))))), /*#__PURE__*/React.createElement(DelSk, {
    c: "mt-2.5 h-3 w-2/3 rounded"
  }));
}
function DeleteConfirmSkeleton({
  rows = 2
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "delete-account-section"
  }, /*#__PURE__*/React.createElement(DeleteSectionLabel, {
    spacious: true
  }, tx('Confirm you understand')), /*#__PURE__*/React.createElement("div", {
    className: "delete-account-acks"
  }, Array.from({
    length: rows
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "delete-account-ack pointer-events-none"
  }, /*#__PURE__*/React.createElement(DelSk, {
    c: "h-4 w-4 shrink-0 rounded"
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement(DelSk, {
    c: "h-3.5 w-2/5 rounded"
  }), /*#__PURE__*/React.createElement(DelSk, {
    c: "mt-2 h-3 w-full rounded"
  }))))));
}
function DeleteSectionLabel({
  children,
  spacious = false
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: 'text-[11px] font-bold uppercase tracking-wide text-muted-foreground ' + (spacious ? 'mb-3' : 'mb-2')
  }, children);
}
function DeleteActivityItem({
  icon,
  title,
  detail,
  clear = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "delete-account-activity__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'delete-account-activity__icon' + (clear ? ' delete-account-activity__icon--clear' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4"
  }, icon)), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-bold leading-snug text-foreground"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-[12px] font-medium leading-snug text-muted-foreground"
  }, detail)));
}
function DeleteAckRow({
  checked,
  onChange,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "delete-account-ack"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: e => onChange(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "min-w-0"
  }, title ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "delete-account-ack__title"
  }, title), children && /*#__PURE__*/React.createElement("span", {
    className: "delete-account-ack__detail"
  }, children)) : /*#__PURE__*/React.createElement("span", {
    className: "delete-account-ack__title"
  }, children)));
}
function AccountScreen({
  goBack,
  theme,
  setTheme,
  onSignOut,
  openAccountInfo,
  onDeleteAccount,
  emptyActivity = false,
  autoOpenDelete = false,
  onAutoOpenDeleteHandled,
  skeleton = false
}) {
  const [notif, setNotif] = useStateG(true);
  const [showPolicies, setShowPolicies] = useStateG(false);
  const POLICIES = [['Privacy Policy', 'https://hobbyxmarketplace.com/privacy-policy/'], ['Terms of Use', 'https://hobbyxmarketplace.com/terms-and-conditions/'], ['Shipping Policy', 'https://hobbyxmarketplace.com/shipping-policy/']];
  const openExt = url => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const [confirmDelete, setConfirmDelete] = useStateG(false);
  const [ackSubmissions, setAckSubmissions] = useStateG(false);
  const [ackListings, setAckListings] = useStateG(false);
  const [ackGeneral, setAckGeneral] = useStateG(false);
  const [deleteActivityLoading, setDeleteActivityLoading] = useStateG(false);
  const inProgressCount = emptyActivity ? 0 : ORDERS.filter(o => o.group === 'progress').length;
  const listingCount = emptyActivity ? 0 : ACCOUNT.marketplaceListings || 0;
  const hasSubmissions = inProgressCount > 0;
  const hasListings = listingCount > 0;
  const hasActiveRisks = hasSubmissions || hasListings;
  const canDelete = !deleteActivityLoading && (hasActiveRisks ? (!hasSubmissions || ackSubmissions) && (!hasListings || ackListings) : ackGeneral);
  React.useEffect(() => {
    if (!autoOpenDelete) return;
    setAckSubmissions(false);
    setAckListings(false);
    setAckGeneral(false);
    setConfirmDelete(true);
    onAutoOpenDeleteHandled && onAutoOpenDeleteHandled();
  }, [autoOpenDelete]);
  React.useEffect(() => {
    if (!confirmDelete || !skeleton) {
      setDeleteActivityLoading(false);
      return;
    }
    setDeleteActivityLoading(true);
    const t = setTimeout(() => setDeleteActivityLoading(false), 2000);
    return () => clearTimeout(t);
  }, [confirmDelete, skeleton]);
  const closeDelete = () => {
    setConfirmDelete(false);
    setAckSubmissions(false);
    setAckListings(false);
    setAckGeneral(false);
  };
  const openDeleteConfirm = () => {
    setAckSubmissions(false);
    setAckListings(false);
    setAckGeneral(false);
    setConfirmDelete(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background"
  }, /*#__PURE__*/React.createElement(AppBar, {
    onBack: goBack,
    title: tx('Account')
  }), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar flex-1 overflow-y-auto px-5 pb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 rounded-lg border border-border bg-card p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground"
  }, ACCOUNT.initials), /*#__PURE__*/React.createElement("div", {
    className: "flex min-w-0 flex-col justify-center gap-0.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-extrabold tracking-tight text-foreground"
  }, ACCOUNT.name), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-medium text-muted-foreground/80"
  }, tx(ACCOUNT.member)))), ACCOUNT.groups.map((grp, gi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: gi
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-2 px-1 text-xs font-bold uppercase tracking-wide text-muted-foreground"
  }, tx(grp.group)), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-lg border border-border bg-card"
  }, grp.items.map(([label, ic], ii) => {
    const isDelete = label === 'Delete Account';
    const danger = label === 'Sign Out';
    const isAppearance = label === 'Appearance';
    const isLanguage = label === 'Language';
    const isNotifications = label === 'Notifications';
    const isControl = isAppearance || isLanguage || isNotifications;
    const isHelp = label === 'Help Centre';
    const isPolicies = label === 'Terms & Policies';
    const onRow = label === 'Account Info' ? openAccountInfo : isHelp ? () => openExt('https://hobbyxmarketplace.com/faq/') : isPolicies ? () => setShowPolicies(v => !v) : isDelete ? openDeleteConfirm : danger ? onSignOut : undefined;
    const rowInner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: 'flex items-center gap-3 text-[15px] font-semibold ' + (isDelete ? 'text-red-600 dark:text-red-500' : danger ? 'text-primary' : 'text-foreground')
    }, /*#__PURE__*/React.createElement("span", {
      className: 'h-[18px] w-[18px] ' + (isDelete ? 'text-red-600 dark:text-red-500' : 'text-muted-foreground')
    }, Icon[ic]), tx(label)), isAppearance ? /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center rounded-md bg-muted p-0.5"
    }, [['light', 'Light'], ['dark', 'Dark']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setTheme(k),
      className: 'rounded px-2.5 py-1 text-xs font-bold transition-colors ' + (theme === k ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground')
    }, tx(l)))) : isLanguage ? /*#__PURE__*/React.createElement(LangToggle, null) : isNotifications ? /*#__PURE__*/React.createElement(Switch, {
      checked: notif,
      onChange: setNotif
    }) : !danger && !isDelete && /*#__PURE__*/React.createElement("span", {
      className: 'h-4 w-4 text-muted-foreground transition-transform ' + (isPolicies && showPolicies ? 'rotate-90' : '')
    }, isHelp ? Icon.external : Icon.chevR));
    const rowCls = 'flex w-full items-center justify-between px-4 py-3.5 ' + (ii > 0 ? 'border-t border-border' : '');
    if (isControl) return /*#__PURE__*/React.createElement("div", {
      key: ii,
      className: rowCls
    }, rowInner);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: ii
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onRow,
      className: rowCls + ' text-left transition-colors hover:bg-accent/40'
    }, rowInner), isPolicies && showPolicies && /*#__PURE__*/React.createElement("div", {
      className: "border-t border-border bg-muted/40"
    }, POLICIES.map(([plabel, purl]) => /*#__PURE__*/React.createElement("button", {
      key: plabel,
      onClick: () => openExt(purl),
      className: "flex w-full items-center justify-between py-2.5 pl-12 pr-4 text-left transition-colors hover:bg-accent/40"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[14px] font-medium text-muted-foreground"
    }, tx(plabel)), /*#__PURE__*/React.createElement("span", {
      className: "h-3.5 w-3.5 text-muted-foreground/70"
    }, Icon.external)))));
  }))), grp.group === 'Preferences' && /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-2 px-1 text-xs font-bold uppercase tracking-wide text-muted-foreground"
  }, tx('Contact Us')), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-lg border border-border bg-card"
  }, [['Facebook', 'facebook', 'https://www.facebook.com/HobbyXStore', '@HobbyXStore'], ['Instagram', 'instagram', 'https://www.instagram.com/hobbyxmarketplace', '@hobbyxmarketplace']].map(([label, ic, url, handle], si) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => openExt(url),
    className: 'flex w-full items-center justify-between px-4 py-3.5 text-left transition-colors hover:bg-accent/40 ' + (si > 0 ? 'border-t border-border' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-3 text-[15px] font-semibold text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[18px] w-[18px] text-muted-foreground"
  }, Icon[ic]), tx(label)), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] font-medium text-muted-foreground"
  }, handle))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 flex flex-col items-center gap-4 border-t border-border pt-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "whitespace-nowrap text-center text-[11px] font-medium text-muted-foreground/80"
  }, "\xA9 2025 HobbyX Marketplace Limited. ", tx('All Rights Reserved')))), confirmDelete && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-40 flex items-end justify-center overflow-hidden bg-black/50 p-4",
    onClick: closeDelete
  }, /*#__PURE__*/React.createElement("div", {
    className: "delete-account-sheet rounded-2xl bg-card shadow-xl",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "delete-account-sheet__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[22px] w-[22px]"
  }, Icon.trash)), /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-extrabold leading-tight text-foreground"
  }, tx('Delete your account?'))), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-[14px] font-semibold leading-snug text-foreground"
  }, tx('This is permanent and cannot be undone.'))), /*#__PURE__*/React.createElement("div", {
    className: "delete-account-sheet__body no-scrollbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "delete-account-section"
  }, /*#__PURE__*/React.createElement(DeleteSectionLabel, null, tx('What will be deleted')), /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-medium leading-relaxed text-muted-foreground"
  }, tx('Profile, saved cards, preferences, and other personal data linked to your account.'))), /*#__PURE__*/React.createElement("div", {
    className: "delete-account-note"
  }, /*#__PURE__*/React.createElement(DeleteSectionLabel, null, tx('Data we may retain')), /*#__PURE__*/React.createElement("p", {
    className: "text-[12px] font-medium leading-relaxed text-muted-foreground"
  }, tx('Transaction records required for legal, tax, or accounting purposes. Not used for marketing.'))), deleteActivityLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteActivitySkeleton, null), /*#__PURE__*/React.createElement(DeleteConfirmSkeleton, null)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "delete-account-section rounded-lg border border-amber-400/40 bg-amber-400/[0.08] p-3"
  }, /*#__PURE__*/React.createElement(DeleteSectionLabel, null, tx('Active activity')), /*#__PURE__*/React.createElement("div", {
    className: "delete-account-activity"
  }, /*#__PURE__*/React.createElement(DeleteActivityItem, {
    icon: hasSubmissions ? Icon.layers : Icon.check,
    clear: !hasSubmissions,
    title: hasSubmissions ? inProgressCount + ' ' + tx(inProgressCount === 1 ? 'grading submission in progress' : 'grading submissions in progress') : tx('No grading submissions in progress'),
    detail: hasSubmissions ? tx('You will lose access to tracking and submission details.') : tx('You have no submissions currently being processed.')
  }), /*#__PURE__*/React.createElement(DeleteActivityItem, {
    icon: hasListings ? Icon.doc : Icon.check,
    clear: !hasListings,
    title: hasListings ? listingCount + ' ' + tx(listingCount === 1 ? 'card on HobbyX Marketplace' : 'cards on HobbyX Marketplace') : tx('No marketplace listings'),
    detail: hasListings ? tx('Listings will be removed and sale information will no longer be accessible.') : tx('You have no cards listed for sale on HobbyX Marketplace.')
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2.5 text-[12px] font-semibold leading-snug text-foreground"
  }, tx(hasActiveRisks ? 'Please resolve these before deleting your account.' : 'You can proceed once you confirm below.'))), /*#__PURE__*/React.createElement("div", {
    className: "delete-account-section"
  }, /*#__PURE__*/React.createElement(DeleteSectionLabel, {
    spacious: true
  }, tx('Confirm you understand')), /*#__PURE__*/React.createElement("div", {
    className: "delete-account-acks"
  }, hasSubmissions && /*#__PURE__*/React.createElement(DeleteAckRow, {
    checked: ackSubmissions,
    onChange: setAckSubmissions,
    title: tx('Grading submissions')
  }, tx('I accept responsibility for any loss of access to in-progress submission data.')), hasListings && /*#__PURE__*/React.createElement(DeleteAckRow, {
    checked: ackListings,
    onChange: setAckListings,
    title: tx('Marketplace listings')
  }, tx('I accept responsibility for removing listings and completing active sales first.')), !hasActiveRisks && /*#__PURE__*/React.createElement(DeleteAckRow, {
    checked: ackGeneral,
    onChange: setAckGeneral,
    title: tx('Permanent deletion')
  }, tx('I understand this permanently deletes my account and cannot be undone.')))))), /*#__PURE__*/React.createElement("div", {
    className: "delete-account-sheet__actions"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: !canDelete,
    onClick: () => {
      closeDelete();
      onDeleteAccount && onDeleteAccount();
    },
    className: "flex h-12 w-full items-center justify-center rounded-md bg-red-600 text-[15px] font-bold text-white transition-colors hover:bg-red-700 active:scale-[.99] disabled:pointer-events-none disabled:opacity-50"
  }, tx('Delete account')), /*#__PURE__*/React.createElement("button", {
    onClick: closeDelete,
    className: "flex h-12 w-full items-center justify-center rounded-md text-[15px] font-bold text-foreground transition-colors hover:bg-accent active:scale-[.99]"
  }, tx('Cancel'))))));
}

/* ---------- ACCOUNT INFO (editable form) ---------- */
const acInputCls = 'h-11 w-full rounded-md border border-input bg-background px-3.5 text-[15px] font-medium text-foreground placeholder:font-normal placeholder:text-muted-foreground focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30';
function AcField({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-1.5 block text-sm font-semibold text-foreground"
  }, label), children);
}
function AcPassword({
  value,
  onChange,
  placeholder
}) {
  const [show, setShow] = useStateG(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: show ? 'text' : 'password',
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    className: acInputCls + ' pr-11'
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    tabIndex: -1,
    onClick: () => setShow(s => !s),
    className: "absolute right-2 inline-flex h-8 w-8 items-center justify-center rounded text-muted-foreground hover:text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[18px] w-[18px]"
  }, show ? Icon.eyeOff : Icon.eye)));
}
function AcSelect({
  value,
  onChange,
  placeholder,
  options
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange(e.target.value),
    className: acInputCls + ' appearance-none pr-10 ' + (value ? '' : 'text-muted-foreground')
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    className: "text-foreground"
  }, tx(o)))), /*#__PURE__*/React.createElement("span", {
    className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
  }, Icon.chevD));
}
function AccountInfoScreen({
  goBack,
  openLegal
}) {
  const i = ACCOUNT.info;
  const [f, setF] = useStateG({
    first: i.first,
    last: i.last,
    email: i.email,
    phone: (i.phone || '').replace(/^\+\d+\s*/, ''),
    phoneCountry: 'HK',
    cur: '',
    npw: '',
    cpw: '',
    payout: '',
    lang: ''
  });
  const set = k => v => setF(s => ({
    ...s,
    [k]: v
  }));
  const [agree, setAgree] = useStateG(false);
  const [saved, setSaved] = useStateG(false);
  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background"
  }, /*#__PURE__*/React.createElement(AppBar, {
    onBack: goBack,
    title: tx('Account Info')
  }), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar flex-1 overflow-y-auto px-5 pb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-1 grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(AcField, {
    label: tx('First name')
  }, /*#__PURE__*/React.createElement("input", {
    value: f.first,
    onChange: e => set('first')(e.target.value),
    className: acInputCls
  })), /*#__PURE__*/React.createElement(AcField, {
    label: tx('Last name')
  }, /*#__PURE__*/React.createElement("input", {
    value: f.last,
    onChange: e => set('last')(e.target.value),
    className: acInputCls
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement(AcField, {
    label: tx('Email address')
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: f.email,
    onChange: e => set('email')(e.target.value),
    autoCapitalize: "none",
    className: acInputCls
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement(AcField, {
    label: tx('Phone Number')
  }, /*#__PURE__*/React.createElement(PhoneInput, {
    country: f.phoneCountry,
    onCountry: set('phoneCountry'),
    value: f.phone,
    onChange: set('phone')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 border-b border-border pb-2 text-base font-bold text-foreground"
  }, tx('Password change')), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-4"
  }, /*#__PURE__*/React.createElement(AcField, {
    label: tx('Current password (leave blank to leave unchanged)')
  }, /*#__PURE__*/React.createElement(AcPassword, {
    value: f.cur,
    onChange: set('cur'),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  })), /*#__PURE__*/React.createElement(AcField, {
    label: tx('New password (leave blank to leave unchanged)')
  }, /*#__PURE__*/React.createElement(AcPassword, {
    value: f.npw,
    onChange: set('npw'),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), f.npw.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PwStrength, {
    value: f.npw
  }), /*#__PURE__*/React.createElement(PwCriteria, {
    value: f.npw
  }))), /*#__PURE__*/React.createElement(AcField, {
    label: tx('Confirm new password')
  }, /*#__PURE__*/React.createElement(AcPassword, {
    value: f.cpw,
    onChange: set('cpw'),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), f.cpw.length > 0 && f.npw !== f.cpw && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-xs font-semibold text-red-500"
  }, tx('Passwords don’t match.')), f.cpw.length > 0 && f.npw === f.cpw && f.npw.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-3.5 w-3.5"
  }, Icon.check), tx('Passwords match')))), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    className: "mt-7 w-full",
    onClick: save
  }, saved ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "h-5 w-5"
  }, Icon.check), " ", tx('Saved')) : tx('Save Changes'))));
}

/* ---------- NOTIFICATIONS ---------- */

/* ---------- LOADING SKELETON ---------- */
/* Shown for ~2s whenever a page is opened while the "Loading" phase is active.
   `variant` mirrors the layout of the screen that is loading so the skeleton
   matches what's about to appear (header, content blocks) with pulsing placeholders. */
function SkBlock({
  c,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'animate-pulse rounded bg-muted ' + (c || ''),
    style: style
  });
}
/* Stacked-screen app bar during loading: real back chevron + (real title when static). */
function SkAppBar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 px-3 py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted-foreground"
  }, Icon.chevL), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 justify-center"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "truncate text-[17px] font-bold text-foreground"
  }, title) : /*#__PURE__*/React.createElement(SkBlock, {
    c: "h-4 w-32 rounded"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-10"
  }));
}
function SkeletonScreen({
  variant = 'list'
}) {
  /* ---- LIST ---- */
  if (variant === 'list') {
    const SkRow = () => /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 rounded-lg border border-border bg-[#F5F6F8] p-3 dark:bg-card"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-[84px] w-[60px] shrink-0 rounded-md"
    }), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 flex-1"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-3.5 w-2/3 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2 h-3 w-2/5 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-3 h-5 w-24 rounded-full"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2.5 h-[3px] w-full rounded-full"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2.5 h-3 w-1/2 rounded"
    })));
    return /*#__PURE__*/React.createElement("div", {
      className: "flex h-full flex-col bg-background",
      "aria-busy": "true"
    }, /*#__PURE__*/React.createElement("header", {
      className: "flex items-center justify-between px-5 pt-2 pb-4"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-extrabold tracking-tight text-foreground"
    }, tx('Grading Orders')), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-5 w-5"
    }, Icon.bell)), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-10 w-10 rounded-full"
    }))), /*#__PURE__*/React.createElement(Tabs, {
      value: "progress",
      onChange: () => {},
      tabs: TABS_WITH_COUNTS
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-5 pb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative flex items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground"
    }, Icon.search), /*#__PURE__*/React.createElement("input", {
      disabled: true,
      placeholder: tx('Search by service name'),
      className: "h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm font-medium text-foreground placeholder:font-normal placeholder:text-muted-foreground"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-2.5 flex gap-2"
    }, /*#__PURE__*/React.createElement(FilterBtn, {
      icon: Icon.sort,
      label: tx(SORTS.find(s => s.key === 'newest').short),
      active: false,
      open: false,
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(FilterBtn, {
      icon: Icon.sliders,
      label: tx('Status'),
      active: false,
      open: false,
      onClick: () => {}
    }))), /*#__PURE__*/React.createElement("div", {
      className: "no-scrollbar flex-1 space-y-2.5 overflow-y-auto px-5 pb-8"
    }, /*#__PURE__*/React.createElement(SkRow, null), /*#__PURE__*/React.createElement(SkRow, null), /*#__PURE__*/React.createElement(SkRow, null), /*#__PURE__*/React.createElement(SkRow, null)));
  }

  /* ---- DETAIL ---- */
  if (variant === 'detail') {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex h-full flex-col bg-background",
      "aria-busy": "true"
    }, /*#__PURE__*/React.createElement(SkAppBar, null), /*#__PURE__*/React.createElement("div", {
      className: "no-scrollbar flex-1 overflow-y-auto px-5 pb-8"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-7 w-3/4 rounded-md"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2.5 h-4 w-2/5 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2 h-3 w-1/4 rounded"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 grid grid-cols-2 gap-3 rounded-lg border border-border p-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-3 w-4/5 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2 h-4 w-1/2 rounded"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-3 w-4/5 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2 h-4 w-1/2 rounded"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-4 w-20 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-4 w-16 rounded"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex gap-2.5"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-[92px] w-[66px] rounded-md"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-[92px] w-[66px] rounded-md"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-[92px] w-[66px] rounded-md"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-[92px] w-[66px] rounded-md"
    })), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-7 h-4 w-16 rounded"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 space-y-4"
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-8 w-8 shrink-0 rounded-full"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-3.5 w-1/2 rounded"
    }))))));
  }

  /* ---- ITEMS ---- */
  if (variant === 'items') {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex h-full flex-col bg-background",
      "aria-busy": "true"
    }, /*#__PURE__*/React.createElement(SkAppBar, null), /*#__PURE__*/React.createElement("div", {
      className: "no-scrollbar flex-1 overflow-y-auto px-5 pb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 pt-1"
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex items-center gap-3.5 rounded-lg border border-border p-3"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-[74px] w-[53px] shrink-0 rounded-md"
    }), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 flex-1"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-3 w-1/3 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2 h-3.5 w-4/5 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2 h-4 w-1/2 rounded"
    })), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-4 w-4 shrink-0 rounded"
    }))))));
  }

  /* ---- CARD DETAIL ---- */
  if (variant === 'card') {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex h-full flex-col bg-background",
      "aria-busy": "true"
    }, /*#__PURE__*/React.createElement(SkAppBar, null), /*#__PURE__*/React.createElement("div", {
      className: "no-scrollbar flex flex-1 flex-col justify-center px-5 pb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center rounded-xl border border-border p-7"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "rounded-lg",
      style: {
        width: '72%',
        aspectRatio: '0.62'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 flex justify-center gap-2.5"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-7 w-16 rounded-md"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-7 w-16 rounded-md"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-7 w-16 rounded-md"
    })), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mx-auto mt-5 h-5 w-1/2 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mx-auto mt-3 h-16 w-2/3 rounded-lg"
    })));
  }

  /* ---- NOTIFICATIONS ---- */
  if (variant === 'notifs') {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex h-full flex-col bg-background",
      "aria-busy": "true"
    }, /*#__PURE__*/React.createElement(SkAppBar, {
      title: tx('Notifications')
    }), /*#__PURE__*/React.createElement("div", {
      className: "no-scrollbar flex-1 overflow-y-auto"
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex items-start gap-3.5 border-b border-border px-5 py-4"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-10 w-10 shrink-0 rounded-lg"
    }), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 flex-1"
    }, /*#__PURE__*/React.createElement(SkBlock, {
      c: "h-3.5 w-2/5 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2 h-3 w-4/5 rounded"
    }), /*#__PURE__*/React.createElement(SkBlock, {
      c: "mt-2 h-3 w-1/4 rounded"
    }))))));
  }

  /* ---- ACCOUNT / ACCOUNT INFO ---- */
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background",
    "aria-busy": "true"
  }, /*#__PURE__*/React.createElement(SkAppBar, {
    title: tx('Account')
  }), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar flex-1 overflow-y-auto px-5 pb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 rounded-lg border border-border p-4"
  }, /*#__PURE__*/React.createElement(SkBlock, {
    c: "h-16 w-16 shrink-0 rounded-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement(SkBlock, {
    c: "h-5 w-2/5 rounded"
  }), /*#__PURE__*/React.createElement(SkBlock, {
    c: "mt-2.5 h-3.5 w-3/5 rounded"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-3"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-center justify-between rounded-lg border border-border px-4 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(SkBlock, {
    c: "h-5 w-5 rounded"
  }), /*#__PURE__*/React.createElement(SkBlock, {
    c: "h-3.5 w-28 rounded"
  })), /*#__PURE__*/React.createElement(SkBlock, {
    c: "h-4 w-4 rounded"
  }))))));
}
Object.assign(window, {
  ListScreen,
  DetailScreen,
  ItemsScreen,
  CardDetail,
  GradeReveal,
  NotificationsScreen,
  AccountScreen,
  AccountInfoScreen,
  SkeletonScreen
});

/* ===== app2/auth.jsx ===== */
/* HobbyX — auth screens (shadcn) */
const {
  useState: useAuthState,
  useEffect: useAuthEffect
} = React;
const HX_LOGO = 'assets/hobbyx-logo.png';
const VOLK_LOGO = 'assets/volk-logo.png';
const SPLASH_IMG = 'assets/splash-collage.jpg';
const SPLASH_LOGO = 'assets/hobbyx-logo-white.png';
const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || '').trim());

/* labelled input (shadcn Field) */
function Field({
  label,
  req,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-foreground"
  }, label, req && /*#__PURE__*/React.createElement("span", {
    className: "text-muted-foreground"
  }, "*"), hint && /*#__PURE__*/React.createElement("span", {
    className: "inline-flex h-4 w-4 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground",
    title: hint
  }, "?")), children, error && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-xs font-semibold text-red-500"
  }, error));
}
const inputCls = 'h-11 w-full rounded-md border border-input bg-background px-3.5 text-[15px] font-medium text-foreground placeholder:font-normal placeholder:text-muted-foreground focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30';
function PwInput({
  value,
  onChange,
  placeholder,
  invalid
}) {
  const [show, setShow] = useAuthState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: show ? 'text' : 'password',
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    className: inputCls + ' pr-11' + (invalid ? ' border-red-400' : '')
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    tabIndex: -1,
    onClick: () => setShow(s => !s),
    className: "absolute right-2 inline-flex h-8 w-8 items-center justify-center rounded text-muted-foreground hover:text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[18px] w-[18px]"
  }, show ? Icon.eyeOff : Icon.eye)));
}
function pwScore(v) {
  let s = 0;
  if (v.length >= 8) s++;
  if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++;
  if (/\d/.test(v)) s++;
  if (/[^A-Za-z0-9]/.test(v)) s++;
  return s;
}
function Brand({
  className = 'h-7',
  wrap = 'pt-11 pb-2'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'flex justify-center ' + wrap
  }, /*#__PURE__*/React.createElement("img", {
    src: HX_LOGO,
    alt: "HobbyX",
    className: className + ' w-auto dark:brightness-0 dark:invert'
  }));
}
function VolkCredit({
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'flex flex-col items-center gap-0.5 ' + className
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-medium text-muted-foreground/80"
  }, tx('Developed by')), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] font-bold tracking-tight text-muted-foreground"
  }, "Volk Innovatives"));
}
function Legal({
  go
}) {
  const openExt = url => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const [pending, setPending] = useAuthState(null); // { label, url }
  const links = [{
    label: 'Privacy Policy',
    url: 'https://hobbyxmarketplace.com/privacy-policy/'
  }, {
    label: 'Terms of Use',
    url: 'https://hobbyxmarketplace.com/terms-and-conditions/'
  }, {
    label: 'Shipping Policy',
    url: 'https://hobbyxmarketplace.com/shipping-policy/'
  }];
  const host = pending ? new URL(pending.url).host : '';
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-7 flex flex-col items-center gap-4 border-t border-border pt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-2.5 text-xs font-semibold text-muted-foreground"
  }, links.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l.label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPending(l),
    className: "whitespace-nowrap hover:text-foreground"
  }, tx(l.label))))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExt('https://www.facebook.com/HobbyXStore'),
    "aria-label": "Facebook",
    className: "flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[18px] w-[18px]"
  }, Icon.facebook)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openExt('https://www.instagram.com/hobbyxmarketplace'),
    "aria-label": "Instagram",
    className: "flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[18px] w-[18px]"
  }, Icon.instagram))), /*#__PURE__*/React.createElement("p", {
    className: "whitespace-nowrap text-center text-[11px] font-medium text-muted-foreground/80"
  }, "\xA9 2025 HobbyX Marketplace Limited. ", tx('All Rights Reserved')), pending && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4",
    onClick: () => setPending(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-[400px] rounded-2xl bg-card p-5 text-left shadow-xl",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[22px] w-[22px]"
  }, Icon.external)), /*#__PURE__*/React.createElement("h2", {
    className: "mt-3.5 text-lg font-extrabold leading-tight text-foreground"
  }, tx('Leaving HobbyX')), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-[13px] font-medium leading-relaxed text-muted-foreground"
  }, tx('You’ll open the'), " ", tx(pending.label), " ", tx('page on'), " ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-foreground"
  }, host), " ", tx('in your browser.')), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-col gap-2.5"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    className: "w-full",
    onClick: () => {
      openExt(pending.url);
      setPending(null);
    }
  }, tx('Continue')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPending(null),
    className: "flex h-12 w-full items-center justify-center rounded-md text-[15px] font-bold text-foreground transition-colors hover:bg-accent active:scale-[.99]"
  }, tx('Cancel'))))));
}

/* SPLASH */
function Splash({
  onDone,
  showCredit = true
}) {
  const [leaving, setLeaving] = useAuthState(false);
  useAuthEffect(() => {
    const a = setTimeout(() => setLeaving(true), 2600),
      b = setTimeout(onDone, 3150);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: 'hx-splash' + (leaving ? ' is-leaving' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-splash-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hx-splash-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-splash-ring"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-splash-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: SPLASH_IMG,
    alt: "",
    draggable: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-splash-holo"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hx-splash-brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hx-splash-logo",
    src: SPLASH_LOGO,
    alt: "HobbyX"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hx-splash-tag"
  }, tx('Grading, tracked.'))), showCredit && /*#__PURE__*/React.createElement("div", {
    className: "hx-splash-volk"
  }, /*#__PURE__*/React.createElement("span", {
    className: "by"
  }, tx('Developed by')), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, "Volk Innovatives")));
}

/* LOGIN */
const DEMO_EMAIL = 'user@gmail.com',
  DEMO_PW = 'Test@123';
function Login({
  go,
  onAuthed,
  offline
}) {
  const [email, setEmail] = useAuthState('');
  const [pw, setPw] = useAuthState('');
  const [keep, setKeep] = useAuthState(false);
  const [t, setT] = useAuthState(false);
  const [load, setLoad] = useAuthState(false);
  const [err, setErr] = useAuthState(null);
  const valid = emailOk(email) && pw.length >= 1;
  const submit = () => {
    setT(true);
    setErr(null);
    if (!valid) return;
    if (offline) {
      setErr('no-connection');
      return;
    }
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      // demo credentials: user@gmail.com / Test@123
      if (email.trim().toLowerCase() !== DEMO_EMAIL) {
        setErr('no-account');
        return;
      }
      if (pw !== DEMO_PW) {
        setErr('bad-password');
        return;
      }
      if (keep) localStorage.setItem('hobbyx_keep', '1');
      onAuthed();
    }, 700);
  };
  const errMsg = {
    'no-connection': 'No internet connection. Check your network and try again.',
    'no-account': 'We couldn’t find an account with that email address.',
    'bad-password': 'Incorrect password. Please try again.'
  }[err];
  const pwErr = err === 'bad-password';
  const emErr = err === 'no-account';
  return /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-full flex-col justify-center px-7 py-8"
  }, /*#__PURE__*/React.createElement(Brand, {
    className: "h-12",
    wrap: "pb-2"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "mt-4 text-center text-[28px] font-extrabold tracking-tight text-foreground"
  }, tx('Log In')), err && /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(Alert, null, tx(errMsg))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-4"
  }, /*#__PURE__*/React.createElement(Field, {
    label: tx('E-mail'),
    req: true,
    error: t && !emailOk(email) ? tx('Enter a valid email address.') : null
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      setErr(null);
    },
    placeholder: "you@email.com",
    autoCapitalize: "none",
    className: inputCls + (t && !emailOk(email) || emErr ? ' border-red-400' : '')
  })), /*#__PURE__*/React.createElement(Field, {
    label: tx('Password'),
    req: true,
    error: t && pw.length < 1 ? tx('Password is required.') : null
  }, /*#__PURE__*/React.createElement(PwInput, {
    value: pw,
    onChange: v => {
      setPw(v);
      setErr(null);
    },
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    invalid: t && pw.length < 1 || pwErr
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setKeep(k => !k),
    className: "mt-4 flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'flex h-5 w-5 items-center justify-center rounded border-2 transition-colors ' + (keep ? 'border-foreground bg-foreground text-background' : 'border-input')
  }, keep && /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3"
  }, Icon.check)), /*#__PURE__*/React.createElement("span", {
    className: "whitespace-nowrap text-sm font-semibold text-muted-foreground"
  }, tx('Keep me signed in'))), /*#__PURE__*/React.createElement(Button, {
    className: "mt-6 w-full",
    size: "lg",
    disabled: load,
    onClick: submit
  }, load ? /*#__PURE__*/React.createElement("span", {
    className: "spin"
  }) : tx('Login')), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center justify-center gap-2 rounded-md bg-muted/60 px-3 py-2 text-[11px] font-semibold text-muted-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-3.5 w-3.5"
  }, Icon.user), tx('Demo login'), ": user@gmail.com / Test@123"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('reset'),
    className: "mt-3 block w-full text-center text-sm font-semibold text-muted-foreground hover:text-foreground"
  }, tx('Forgot your password?')), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 text-center text-sm font-medium text-muted-foreground"
  }, tx('Need an account?'), " ", /*#__PURE__*/React.createElement("button", {
    onClick: () => go('register'),
    className: "whitespace-nowrap font-bold text-primary"
  }, tx('Sign Up'))), /*#__PURE__*/React.createElement(Legal, {
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    className: "h-4"
  }));
}

/* REGISTER */
function Register({
  go,
  onAuthed,
  offline
}) {
  const [f, setF] = useAuthState({
    first: '',
    last: '',
    email: '',
    pw: '',
    cpw: '',
    phone: '',
    country: 'HK'
  });
  const set = k => v => setF(s => ({
    ...s,
    [k]: v
  }));
  const [phoneBad, setPhoneBad] = useAuthState(false);
  const onPhone = v => {
    const cleaned = v.replace(/[^\d\s]/g, '');
    setPhoneBad(v !== cleaned);
    setF(s => ({
      ...s,
      phone: cleaned
    }));
  };
  const [t, setT] = useAuthState(false);
  const [load, setLoad] = useAuthState(false);
  const [err, setErr] = useAuthState(null);
  const [emailBlur, setEmailBlur] = useAuthState(false);
  const emailErr = (emailBlur || t) && f.email.length > 0 && !emailOk(f.email);
  const match = f.pw.length > 0 && f.pw === f.cpw;
  const mismatch = f.cpw.length > 0 && f.pw !== f.cpw; // live mismatch (no submit needed)
  const pwOk = pwAllOk(f.pw);
  const phoneDigits = f.phone.replace(/\D/g, '').length;
  const [sent, setSent] = useAuthState(false);
  const valid = f.first.trim() && f.last.trim() && emailOk(f.email) && pwOk && match && phoneDigits >= 6;
  const submit = () => {
    setT(true);
    setErr(null);
    if (!valid) return;
    if (offline) {
      setErr('offline');
      return;
    }
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      setSent(true);
    }, 800);
  };
  const phoneError = phoneBad ? tx('Only numbers are allowed.') : t && phoneDigits < 6 ? tx('Enter a valid number.') : null;
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex min-h-full flex-col items-center justify-center px-7 py-12 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex h-[72px] w-[72px] items-center justify-center rounded-full bg-success/10 text-success"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-9 w-9"
    }, Icon.check)), /*#__PURE__*/React.createElement("h1", {
      className: "mt-5 text-[24px] font-extrabold tracking-tight text-foreground"
    }, tx('Verify your email')), /*#__PURE__*/React.createElement("p", {
      className: "mx-auto mt-3 max-w-[300px] text-sm font-medium leading-relaxed text-muted-foreground"
    }, tx('We’ve sent a verification link to'), " ", /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-foreground"
    }, f.email), ". ", tx('Please check your inbox and click the link to activate your account.')), /*#__PURE__*/React.createElement("p", {
      className: "mx-auto mt-3 max-w-[300px] text-[13px] font-medium leading-relaxed text-muted-foreground"
    }, tx('Didn’t receive it? Check your spam folder or'), " ", /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setSent(false);
        setLoad(false);
      },
      className: "font-bold text-primary"
    }, tx('try again')), "."), /*#__PURE__*/React.createElement(Button, {
      className: "mt-6 w-full",
      size: "lg",
      onClick: () => go('login')
    }, tx('Go to Login')));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "px-7"
  }, /*#__PURE__*/React.createElement(Brand, {
    className: "h-12",
    wrap: "pt-[58px] pb-0"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "mt-5 text-center text-[28px] font-extrabold leading-none tracking-tight text-foreground"
  }, tx('Create account')), err && /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement(Alert, null, tx('No internet connection. Check your network and try again.'))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 space-y-4"
  }, /*#__PURE__*/React.createElement(Field, {
    label: tx('First Name'),
    req: true,
    error: t && !f.first.trim() ? tx('Required') : null
  }, /*#__PURE__*/React.createElement("input", {
    value: f.first,
    onChange: e => set('first')(e.target.value),
    placeholder: "Alex",
    className: inputCls + (t && !f.first.trim() ? ' border-red-400' : '')
  })), /*#__PURE__*/React.createElement(Field, {
    label: tx('Last Name'),
    req: true,
    error: t && !f.last.trim() ? tx('Required') : null
  }, /*#__PURE__*/React.createElement("input", {
    value: f.last,
    onChange: e => set('last')(e.target.value),
    placeholder: "Carter",
    className: inputCls + (t && !f.last.trim() ? ' border-red-400' : '')
  })), /*#__PURE__*/React.createElement(Field, {
    label: tx('E-mail Address'),
    req: true,
    error: emailErr ? tx('Enter a valid email address.') : t && !f.email.trim() ? tx('Required') : null
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: f.email,
    onChange: e => {
      set('email')(e.target.value);
      if (emailBlur) setEmailBlur(false);
    },
    onBlur: () => setEmailBlur(true),
    placeholder: "you@email.com",
    autoCapitalize: "none",
    className: inputCls + (emailErr || t && !f.email.trim() ? ' border-red-400' : '')
  })), /*#__PURE__*/React.createElement(Field, {
    label: tx('Password'),
    req: true
  }, /*#__PURE__*/React.createElement(PwInput, {
    value: f.pw,
    onChange: set('pw'),
    placeholder: tx('Create a password'),
    invalid: t && !pwOk
  }), /*#__PURE__*/React.createElement(PwStrength, {
    value: f.pw
  }), /*#__PURE__*/React.createElement(PwCriteria, {
    value: f.pw
  })), /*#__PURE__*/React.createElement(Field, {
    label: tx('Confirm Password'),
    req: true,
    error: mismatch ? tx('Passwords don’t match.') : null
  }, /*#__PURE__*/React.createElement(PwInput, {
    value: f.cpw,
    onChange: set('cpw'),
    placeholder: tx('Re-enter password'),
    invalid: mismatch
  }), f.cpw.length > 0 && match && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-3.5 w-3.5"
  }, Icon.check), tx('Passwords match'))), /*#__PURE__*/React.createElement(Field, {
    label: tx('Mobile Number'),
    req: true,
    error: phoneError
  }, /*#__PURE__*/React.createElement(PhoneInput, {
    country: f.country,
    onCountry: set('country'),
    value: f.phone,
    onChange: onPhone,
    invalid: !!phoneError
  }))), /*#__PURE__*/React.createElement(Button, {
    className: "mt-6 w-full",
    size: "lg",
    disabled: load,
    onClick: submit
  }, load ? /*#__PURE__*/React.createElement("span", {
    className: "spin"
  }) : tx('Register')), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-center text-[13px] font-medium leading-relaxed text-muted-foreground"
  }, tx('By signing up, you agree to the'), " ", /*#__PURE__*/React.createElement("button", {
    onClick: () => go('legal:Terms of Service'),
    className: "font-bold text-primary"
  }, tx('Terms of Service')), " & ", /*#__PURE__*/React.createElement("button", {
    onClick: () => go('legal:Privacy Policy'),
    className: "font-bold text-primary"
  }, tx('Privacy Policy')), "."), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 text-center text-sm font-medium text-muted-foreground"
  }, tx('Already have an account?'), " ", /*#__PURE__*/React.createElement("button", {
    onClick: () => go('login'),
    className: "font-bold text-primary"
  }, tx('Log In'))), /*#__PURE__*/React.createElement("div", {
    className: "h-4"
  }));
}

/* RESET */
function Reset({
  go,
  offline
}) {
  const [v, setV] = useAuthState('');
  const [t, setT] = useAuthState(false);
  const [sent, setSent] = useAuthState(false);
  const [load, setLoad] = useAuthState(false);
  const [err, setErr] = useAuthState(null);
  const valid = v.trim().length > 2;
  const submit = () => {
    setT(true);
    setErr(null);
    if (!valid) return;
    if (offline) {
      setErr('offline');
      return;
    }
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      setSent(true);
    }, 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "px-7"
  }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('login'),
    className: "mt-3 inline-flex items-center gap-1 text-[15px] font-bold text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-5 w-5"
  }, Icon.chevL), tx('Back')), !sent ? /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-center text-[28px] font-extrabold tracking-tight text-foreground"
  }, tx('Password Reset')), /*#__PURE__*/React.createElement("p", {
    className: "mx-auto mt-2 max-w-[300px] text-center text-sm font-medium leading-relaxed text-muted-foreground"
  }, tx('To reset your password, please enter your email address or username below.')), err && /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement(Alert, null, tx('No internet connection. Check your network and try again.'))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => {
      setV(e.target.value);
      setErr(null);
    },
    placeholder: tx('Enter your username or email'),
    autoCapitalize: "none",
    className: inputCls + (t && !valid ? ' border-red-400' : '')
  }), t && !valid && /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 text-xs font-semibold text-red-500"
  }, tx('Enter your email or username.'))), /*#__PURE__*/React.createElement(Button, {
    className: "mt-6 w-full",
    size: "lg",
    disabled: load,
    onClick: submit
  }, load ? /*#__PURE__*/React.createElement("span", {
    className: "spin"
  }) : tx('Reset password'))) : /*#__PURE__*/React.createElement("div", {
    className: "mt-8 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-success/10 text-success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-9 w-9"
  }, Icon.check)), /*#__PURE__*/React.createElement("h1", {
    className: "mt-5 text-[24px] font-extrabold tracking-tight text-foreground"
  }, tx('Check your email')), /*#__PURE__*/React.createElement("p", {
    className: "mx-auto mt-2 max-w-[300px] text-sm font-medium leading-relaxed text-muted-foreground"
  }, tx('If an account matches'), " ", /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-foreground"
  }, v), tx(', we’ve sent a link to reset your password.')), /*#__PURE__*/React.createElement(Button, {
    className: "mt-6 w-full",
    size: "lg",
    onClick: () => go('login')
  }, tx('Back to Login'))), /*#__PURE__*/React.createElement(Legal, {
    go: go
  }));
}

/* LEGAL */
function LegalPage({
  title,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-7"
  }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('login'),
    className: "mt-3 inline-flex items-center gap-1 text-[15px] font-bold text-foreground"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-5 w-5"
  }, Icon.chevL), tx('Back')), /*#__PURE__*/React.createElement("h1", {
    className: "mt-4 text-[24px] font-extrabold tracking-tight text-foreground"
  }, tx(title)), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-sm font-medium leading-relaxed text-muted-foreground"
  }, tx('Final legal text will be supplied by HobbyX and Volk Innovatives before launch — covering how grading order data, account details and contact information are collected, stored and used.')), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm font-medium leading-relaxed text-muted-foreground"
  }, tx('This screen exists so the link target is wired and reviewable in the prototype.')));
}
Object.assign(window, {
  Splash,
  Login,
  Register,
  Reset,
  LegalPage
});

/* ===== app2/tweaks-panel.jsx ===== */
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});

/* ===== app2/root.jsx ===== */
/* HobbyX — root: router (auth → grading), phone frame, theme */
const {
  useState: useRootState,
  useEffect: useRootEffect
} = React;

// global toast helper — dispatch from anywhere; rendered by <Toaster/> in the phone frame
window.toast = (msg, variant) => window.dispatchEvent(new CustomEvent('hobbyx-toast', {
  detail: {
    msg,
    variant
  }
}));
function Toaster() {
  const [toast, setToast] = useRootState(null); // single toast — never stacks
  const timer = React.useRef(null);
  useRootEffect(() => {
    const handler = e => {
      const {
        msg,
        variant
      } = e.detail || {};
      if (timer.current) clearTimeout(timer.current);
      setToast({
        id: Date.now() + Math.random(),
        msg,
        variant
      });
      timer.current = setTimeout(() => setToast(null), 2600);
    };
    window.addEventListener('hobbyx-toast', handler);
    return () => {
      window.removeEventListener('hobbyx-toast', handler);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);
  const style = toast && toast.variant === 'success' ? {
    background: 'hsl(var(--success))',
    color: '#fff'
  } : toast && toast.variant === 'primary' ? {
    background: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))'
  } : {
    background: 'hsl(var(--foreground))',
    color: 'hsl(var(--background))'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-x-0 bottom-12 z-[70] flex flex-col items-center px-6"
  }, toast && /*#__PURE__*/React.createElement("div", {
    key: toast.id,
    className: "hobbyx-toast pointer-events-auto max-w-full rounded-full px-4 py-2.5 text-[13px] font-semibold shadow-xl",
    style: style
  }, toast.msg));
}
function GradingApp({
  theme,
  setTheme,
  offline,
  empty,
  gradingOnly,
  skeleton,
  emptyActivity
}) {
  const [tab, setTab] = useRootState('progress');
  const [stack, setStack] = useRootState([{
    name: 'list'
  }]);
  const [card, setCard] = useRootState(null);
  const [reveal, setReveal] = useRootState(false);
  const [revealedIds, setRevealedIds] = useRootState([]);
  const [highlightId, setHighlightId] = useRootState(null);
  const [emptyDeletePreview, setEmptyDeletePreview] = useRootState(false);
  const top = stack[stack.length - 1];
  const order = top.orderId ? ORDERS.find(o => o.id === top.orderId) : null;
  const unread = empty ? 0 : NOTIFICATIONS.filter(n => n.unread).length;
  const push = s => setStack(st => [...st, s]);
  const pop = () => setStack(st => st.length > 1 ? st.slice(0, -1) : st);
  const onTab = t => {
    setTab(t);
    setStack([{
      name: 'list'
    }]);
    setCard(null);
    setReveal(false);
  };
  useRootEffect(() => {
    if (!emptyActivity) {
      setEmptyDeletePreview(false);
      return;
    }
    setStack([{
      name: 'list'
    }, {
      name: 'account'
    }]);
    setEmptyDeletePreview(true);
  }, [emptyActivity]);

  // "Loading" phase: show a matching skeleton for ~2s every time a page is opened,
  // then reveal the real screen — all without leaving the Loading tab.
  const skVariant = card != null ? 'card' : top.name === 'accountinfo' ? 'account' : top.name;
  const screenKey = skeleton ? card != null ? 'card' : top.name + ':' + (top.orderId || '') + ':' + tab : 'static';
  const [booting, setBooting] = useRootState(!!skeleton);
  useRootEffect(() => {
    if (!skeleton) return;
    setBooting(true);
    const t = setTimeout(() => setBooting(false), 2000);
    return () => clearTimeout(t);
  }, [screenKey, skeleton]);
  if (skeleton && booting) {
    return /*#__PURE__*/React.createElement("div", {
      className: "relative h-full bg-background"
    }, /*#__PURE__*/React.createElement(SkeletonScreen, {
      variant: skVariant
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "relative h-full bg-background"
  }, top.name === 'list' && /*#__PURE__*/React.createElement(ListScreen, {
    tab: tab,
    setTab: onTab,
    unread: unread,
    offline: offline,
    empty: empty,
    gradingOnly: gradingOnly,
    highlightId: highlightId,
    clearHighlight: () => setHighlightId(null),
    openOrder: id => push({
      name: 'detail',
      orderId: id
    }),
    openNotifs: () => push({
      name: 'notifs'
    }),
    openAccount: () => push({
      name: 'account'
    })
  }), top.name === 'notifs' && /*#__PURE__*/React.createElement(NotificationsScreen, {
    goBack: pop,
    empty: empty,
    openOrder: id => {
      const o = ORDERS.find(x => x.id === id);
      if (!o || o.locked) {
        setTab('progress');
        setStack([{
          name: 'list'
        }]);
        setHighlightId(id);
      } else {
        setStack([{
          name: 'list'
        }, {
          name: 'detail',
          orderId: id
        }]);
      }
    }
  }), top.name === 'account' && /*#__PURE__*/React.createElement(AccountScreen, {
    goBack: pop,
    theme: theme,
    setTheme: setTheme,
    emptyActivity: emptyActivity,
    autoOpenDelete: emptyDeletePreview,
    onAutoOpenDeleteHandled: () => setEmptyDeletePreview(false),
    skeleton: skeleton,
    openAccountInfo: () => push({
      name: 'accountinfo'
    }),
    onSignOut: () => {
      try {
        localStorage.removeItem('hobbyx_keep');
      } catch (e) {}
      window.location.href = 'index.html';
    },
    onDeleteAccount: () => {
      try {
        localStorage.removeItem('hobbyx_keep');
      } catch (e) {}
      window.location.href = 'index.html';
    }
  }), top.name === 'accountinfo' && /*#__PURE__*/React.createElement(AccountInfoScreen, {
    goBack: pop,
    openLegal: () => {}
  }), top.name === 'detail' && order && /*#__PURE__*/React.createElement(DetailScreen, {
    order: order,
    goBack: pop,
    revealed: revealedIds.includes(order.id),
    openItems: () => order.items.length && push({
      name: 'items',
      orderId: order.id
    }),
    openCard: i => setCard(i),
    startReveal: () => setReveal(true),
    markRevealed: () => setRevealedIds(ids => ids.includes(order.id) ? ids : [...ids, order.id])
  }), top.name === 'items' && order && /*#__PURE__*/React.createElement(ItemsScreen, {
    order: order,
    goBack: pop,
    openCard: i => setCard(i)
  }), card != null && order && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-30 bg-background"
  }, /*#__PURE__*/React.createElement(CardDetail, {
    item: order.items[card],
    close: () => setCard(null)
  })), order && /*#__PURE__*/React.createElement(GradeReveal, {
    order: order,
    show: reveal,
    close: () => setReveal(false),
    onRevealed: () => setRevealedIds(ids => ids.includes(order.id) ? ids : [...ids, order.id])
  }));
}
function AuthFlow({
  onAuthed,
  showCredit,
  offline
}) {
  const [route, setRoute] = useRootState('splash');
  const go = r => setRoute(r);
  const splashDone = () => {
    if (localStorage.getItem('hobbyx_keep') === '1') {
      onAuthed();
      return;
    }
    setRoute('login');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background"
  }, /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar relative flex-1 overflow-y-auto"
  }, route !== 'splash' && /*#__PURE__*/React.createElement(LangToggle, {
    className: "absolute right-5 top-3 z-10"
  }), route === 'splash' && /*#__PURE__*/React.createElement(Splash, {
    onDone: splashDone,
    showCredit: showCredit
  }), route === 'login' && /*#__PURE__*/React.createElement(Login, {
    go: go,
    onAuthed: onAuthed,
    offline: offline
  }), route === 'register' && /*#__PURE__*/React.createElement(Register, {
    go: go,
    onAuthed: onAuthed,
    offline: offline
  }), route === 'reset' && /*#__PURE__*/React.createElement(Reset, {
    go: go,
    offline: offline
  }), route.startsWith('legal:') && /*#__PURE__*/React.createElement(LegalPage, {
    title: route.slice(6),
    go: go
  })));
}

/* tweak defaults */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "volkCredit": true,
  "accent": "#FF6400",
  "radius": 11
} /*EDITMODE-END*/;
function hexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255,
    g = parseInt(hex.slice(3, 5), 16) / 255,
    b = parseInt(hex.slice(5, 7), 16) / 255;
  const mx = Math.max(r, g, b),
    mn = Math.min(r, g, b);
  let h,
    s,
    l = (mx + mn) / 2;
  if (mx === mn) {
    h = s = 0;
  } else {
    const d = mx - mn;
    s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    switch (mx) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return Math.round(h * 360) + ' ' + Math.round(s * 100) + '% ' + Math.round(l * 100) + '%';
}
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useLang(); // re-render whole tree when language changes
  const [theme, setTheme] = useRootState(() => localStorage.getItem('hobbyx_theme') || 'light');
  const [phase, setPhase] = useRootState('auth'); // auth | app
  const [simOffline, setSimOffline] = useRootState(false);
  const realOnline = useOnline();
  const offline = simOffline || !realOnline;
  const [scale, setScale] = useRootState(1);
  const PW = 390,
    PH = 820;
  useRootEffect(() => {
    localStorage.setItem('hobbyx_theme', theme);
  }, [theme]);
  useRootEffect(() => {
    const fit = () => {
      const aH = window.innerHeight - 130,
        aW = window.innerWidth - 40;
      setScale(Math.max(.3, Math.min(aW / PW, aH / PH, 1.04)));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  const accentHsl = hexToHsl(t.accent);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-1 rounded-full bg-white p-1 shadow-md ring-1 ring-black/5"
  }, [['auth', 'Auth'], ['app', 'Grading'], ['empty', 'Empty Grading'], ['gradingonly', 'Only Grading'], ['emptyactivity', 'Empty Activity'], ['loading', 'Loading']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setPhase(k),
    className: 'whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors ' + (phase === k ? 'bg-neutral-900 text-white' : 'text-neutral-500')
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-1 rounded-full bg-white p-1 shadow-md ring-1 ring-black/5"
  }, [['light', 'Light', Icon.sun], ['dark', 'Dark', Icon.moon]].map(([k, l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTheme(k),
    className: 'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors ' + (theme === k ? 'bg-neutral-900 text-white' : 'text-neutral-500')
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4"
  }, ic), l))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSimOffline(o => !o),
    title: "Simulate offline",
    className: 'inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-bold shadow-md ring-1 ring-black/5 transition-colors ' + (offline ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-500')
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4"
  }, Icon.wifiOff), offline ? 'Offline' : 'Online')), /*#__PURE__*/React.createElement("div", {
    style: {
      width: PW * scale,
      height: PH * scale,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: theme === 'dark' ? 'dark' : '',
    style: {
      width: PW,
      height: PH,
      transform: `scale(${scale})`,
      transformOrigin: 'top center',
      borderRadius: 46,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 40px 90px rgba(0,0,0,.22), 0 0 0 11px #0c0c0c, 0 0 0 12px #2a2a2a',
      '--primary': accentHsl,
      '--ring': accentHsl,
      '--radius': t.radius + 'px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col bg-background"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(OfflineBanner, {
    show: offline
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-h-0 flex-1"
  }, phase === 'auth' ? /*#__PURE__*/React.createElement(AuthFlow, {
    onAuthed: () => {
      setPhase('app');
      window.toast(tx('Login successful'), 'success');
    },
    showCredit: t.volkCredit,
    offline: offline
  }) : /*#__PURE__*/React.createElement(GradingApp, {
    theme: theme,
    setTheme: setTheme,
    offline: offline,
    empty: phase === 'empty',
    gradingOnly: phase === 'gradingonly',
    skeleton: phase === 'loading',
    emptyActivity: phase === 'emptyactivity'
  })), /*#__PURE__*/React.createElement(Toaster, null), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute bottom-2 left-1/2 z-50 h-[5px] w-[135px] -translate-x-1/2 rounded-full bg-foreground/30"
  })))), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Brand"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Volk credit (splash)",
    value: t.volkCredit,
    onChange: v => setTweak('volkCredit', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent",
    value: t.accent,
    options: ['#FF6400', '#0660F5', '#1F8A5B', '#E0A23C'],
    onChange: v => setTweak('accent', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Shape"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Corner radius",
    value: t.radius,
    min: 4,
    max: 18,
    unit: "px",
    onChange: v => setTweak('radius', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
