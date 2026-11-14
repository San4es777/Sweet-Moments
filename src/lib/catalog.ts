export type Product = {
  id: string; name: string; category: string; description: string;
  price: number | null; unit: string; kind: "STANDARD" | "CUSTOM";
  image: string; featured?: boolean;
};

export const products: Product[] = [
  {id:"red-velvet",name:"Червоний оксамит",category:"Класичні торти",description:"Ніжні червоні бісквітні коржі та крем-чиз.",price:null,unit:"за кг",kind:"STANDARD",image:"https://cdn11.bigcommerce.com/s-vm6doh2w4n/images/stencil/original/products/7619/19480/r6ckgg721bmu4rfllfre__35483.1697527722.jpg?c=1",featured:true},
  {id:"medovyk",name:"Домашній медовик",category:"Класичні торти",description:"Тонкі медові коржі та ніжний сметанковий крем.",price:null,unit:"за кг",kind:"STANDARD",image:"https://cdn.7days.ru/pic/e18/1027710/1788707/86.jpg"},
  {id:"chocolate",name:"Шоколадний торт",category:"Класичні торти",description:"Шоколадний бісквіт та насичений крем.",price:null,unit:"за кг",kind:"STANDARD",image:"https://bluebellscakery.com/cdn/shop/files/ChatGPT_Image_May_15_2026_10_21_57_AM.png?v=1778797344"},
  {id:"bento",name:"Бенто-торт",category:"Бенто",description:"Маленький торт з індивідуальним написом.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=85",featured:true},
  {id:"eclairs",name:"Домашні еклери",category:"Пирожні",description:"Заварне тісто з ніжним кремом.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://dulcinella.md/sites/default/files/os/candy/basic/mini_ecler_cu_zahar_pudra.jpg"},
  {id:"tartlets",name:"Ягідні тарталетки",category:"Пирожні",description:"Хрустка основа, крем та ягоди.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://www.aromsa.com/assets/images/news/unlu-mamuller-02.jpg"},
  {id:"cupcakes",name:"Капкейки",category:"Капкейки",description:"Повітряний крем та декор на ваш вибір.",price:null,unit:"за 6 шт.",kind:"STANDARD",image:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85"},
  {id:"spiderman",name:"Торт у стилі Людини-павука",category:"Тематичні торти",description:"Дитячий торт з тематичним декором та ім'ям.",price:null,unit:"індивідуальна ціна",kind:"CUSTOM",image:"https://www.padocabakery.com/cdn/shop/files/IMG_6979.jpg?v=1781189236"},
  {id:"fondant",name:"Авторський мастичний торт",category:"Тематичні торти",description:"Фігурки, персонажі та складний авторський декор.",price:null,unit:"індивідуальна ціна",kind:"CUSTOM",image:"https://i.pinimg.com/736x/07/92/48/0792486c398fea6e37786e6d542f0d90.jpg"},
];