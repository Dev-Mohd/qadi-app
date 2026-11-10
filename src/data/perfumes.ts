export type Family = 'شرقي' | 'خشبي' | 'زهري' | 'حمضي' | 'جلدي' | 'فواكه';
export type Gender = 'رجالي' | 'نسائي' | 'للجنسين';

export type Perfume = {
  id: string;
  name: string;
  nameAr: string;
  brand: string;
  year: number;
  family: Family;
  gender: Gender;
  notes: { top: string[]; heart: string[]; base: string[] };
};

export const FAMILIES: Family[] = ['شرقي', 'خشبي', 'زهري', 'حمضي', 'جلدي', 'فواكه'];

// بيانات أولية للتجربة — تُستبدل لاحقاً بقاعدة بيانات.
export const PERFUMES: Perfume[] = [
  {
    id: 'sauvage',
    name: 'Sauvage',
    nameAr: 'سوفاج',
    brand: 'Dior',
    year: 2015,
    family: 'حمضي',
    gender: 'رجالي',
    notes: { top: ['برغموت', 'فلفل'], heart: ['لافندر', 'جيرانيوم'], base: ['أمبروكسان', 'أرز'] },
  },
  {
    id: 'bleu-de-chanel',
    name: 'Bleu de Chanel',
    nameAr: 'بلو دو شانيل',
    brand: 'Chanel',
    year: 2010,
    family: 'خشبي',
    gender: 'رجالي',
    notes: { top: ['جريب فروت', 'ليمون'], heart: ['زنجبيل', 'ياسمين'], base: ['بخور', 'صندل'] },
  },
  {
    id: 'aventus',
    name: 'Aventus',
    nameAr: 'أفينتوس',
    brand: 'Creed',
    year: 2010,
    family: 'فواكه',
    gender: 'رجالي',
    notes: {
      top: ['أناناس', 'برغموت'],
      heart: ['بتولا', 'باتشولي'],
      base: ['مسك', 'طحلب السنديان'],
    },
  },
  {
    id: 'oud-wood',
    name: 'Oud Wood',
    nameAr: 'عود وود',
    brand: 'Tom Ford',
    year: 2007,
    family: 'خشبي',
    gender: 'للجنسين',
    notes: { top: ['هيل', 'خشب الورد'], heart: ['عود', 'صندل'], base: ['فانيلا', 'عنبر'] },
  },
  {
    id: 'baccarat-rouge-540',
    name: 'Baccarat Rouge 540',
    nameAr: 'باكارات روج 540',
    brand: 'Maison Francis Kurkdjian',
    year: 2015,
    family: 'شرقي',
    gender: 'للجنسين',
    notes: { top: ['زعفران', 'ياسمين'], heart: ['خشب العنبر'], base: ['راتنج التنوب', 'أرز'] },
  },
  {
    id: 'black-opium',
    name: 'Black Opium',
    nameAr: 'بلاك أوبيوم',
    brand: 'Yves Saint Laurent',
    year: 2014,
    family: 'شرقي',
    gender: 'نسائي',
    notes: { top: ['كمثرى', 'فلفل وردي'], heart: ['قهوة', 'ياسمين'], base: ['فانيلا', 'باتشولي'] },
  },
  {
    id: 'coco-mademoiselle',
    name: 'Coco Mademoiselle',
    nameAr: 'كوكو مادموزيل',
    brand: 'Chanel',
    year: 2001,
    family: 'زهري',
    gender: 'نسائي',
    notes: { top: ['برتقال', 'برغموت'], heart: ['ورد', 'ياسمين'], base: ['باتشولي', 'فانيلا'] },
  },
  {
    id: 'la-vie-est-belle',
    name: 'La Vie Est Belle',
    nameAr: 'لا في إيه بيل',
    brand: 'Lancôme',
    year: 2012,
    family: 'زهري',
    gender: 'نسائي',
    notes: { top: ['كشمش أسود', 'كمثرى'], heart: ['سوسن', 'ياسمين'], base: ['برالين', 'فانيلا'] },
  },
  {
    id: 'tobacco-vanille',
    name: 'Tobacco Vanille',
    nameAr: 'توباكو فانيل',
    brand: 'Tom Ford',
    year: 2007,
    family: 'شرقي',
    gender: 'للجنسين',
    notes: { top: ['تبغ', 'توابل'], heart: ['فانيلا', 'كاكاو'], base: ['فواكه مجففة', 'أخشاب'] },
  },
  {
    id: 'terre-d-hermes',
    name: "Terre d'Hermès",
    nameAr: 'تير دي هيرميس',
    brand: 'Hermès',
    year: 2006,
    family: 'خشبي',
    gender: 'رجالي',
    notes: { top: ['برتقال', 'جريب فروت'], heart: ['فلفل', 'جيرانيوم'], base: ['فيتيفر', 'أرز'] },
  },
  {
    id: 'acqua-di-gio',
    name: 'Acqua di Giò',
    nameAr: 'أكوا دي جيو',
    brand: 'Giorgio Armani',
    year: 1996,
    family: 'حمضي',
    gender: 'رجالي',
    notes: { top: ['ليمون', 'برغموت'], heart: ['نوتات بحرية', 'ياسمين'], base: ['مسك', 'أرز'] },
  },
  {
    id: 'ombre-leather',
    name: 'Ombré Leather',
    nameAr: 'أومبريه ليذر',
    brand: 'Tom Ford',
    year: 2018,
    family: 'جلدي',
    gender: 'للجنسين',
    notes: { top: ['هيل'], heart: ['جلد', 'ياسمين'], base: ['عنبر', 'باتشولي'] },
  },
];

export function getPerfume(id: string) {
  return PERFUMES.find((p) => p.id === id);
}
