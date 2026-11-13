export type Product = {
  id: string; name: string; category: string; description: string;
  price: number | null; unit: string; kind: "STANDARD" | "CUSTOM";
  image: string; featured?: boolean;
};

export const products: Product[] = [
  {id:"red-velvet",name:"Червоний оксамит",category:"Класичні торти",description:"Ніжні червоні бісквітні коржі та крем-чиз.",price:950,unit:"за кг",kind:"STANDARD",image:"/images/red-velvet.svg",featured:true},
  {id:"medovyk",name:"Домашній медовик",category:"Класичні торти",description:"Тонкі медові коржі та ніжний сметанковий крем.",price:850,unit:"за кг",kind:"STANDARD",image:"/images/medovyk.svg"},
  {id:"chocolate",name:"Шоколадний торт",category:"Класичні торти",description:"Шоколадний бісквіт та насичений крем.",price:990,unit:"за кг",kind:"STANDARD",image:"/images/chocolate.svg"},
  {id:"bento",name:"Бенто-торт",category:"Бенто",description:"Маленький торт з індивідуальним написом.",price:650,unit:"за шт.",kind:"STANDARD",image:"/images/bento.svg",featured:true},
  {id:"eclairs",name:"Домашні еклери",category:"Пирожні",description:"Заварне тісто з ніжним кремом.",price:110,unit:"за шт.",kind:"STANDARD",image:"/images/eclairs.svg"},
  {id:"tartlets",name:"Ягідні тарталетки",category:"Пирожні",description:"Хрустка основа, крем та ягоди.",price:130,unit:"за шт.",kind:"STANDARD",image:"/images/tartlets.svg"},
  {id:"cupcakes",name:"Капкейки",category:"Капкейки",description:"Повітряний крем та декор на ваш вибір.",price:540,unit:"за 6 шт.",kind:"STANDARD",image:"/images/cupcakes.svg"},
  {id:"spiderman",name:"Торт з Людиною-павуком",category:"Тематичні торти",description:"Дитячий торт з тематичним декором та ім'ям.",price:null,unit:"індивідуальна ціна",kind:"CUSTOM",image:"/images/custom.svg"},
  {id:"fondant",name:"Мастичний торт",category:"Тематичні торти",description:"Фігурки, персонажі та складний авторський декор.",price:null,unit:"індивідуальна ціна",kind:"CUSTOM",image:"/images/custom.svg"},
];