export type Product = {
  id: string; name: string; category: string; description: string;
  price: number | null; unit: string; kind: "STANDARD" | "CUSTOM";
  image: string; featured?: boolean;
};

export const products: Product[] = [
  {id:"red-velvet",name:"Червоний оксамит",category:"Класичні торти",description:"Ніжні червоні бісквітні коржі та крем-чиз.",price:null,unit:"за кг",kind:"STANDARD",image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",featured:true},
  {id:"medovyk",name:"Домашній медовик",category:"Класичні торти",description:"Тонкі медові коржі та ніжний сметанковий крем.",price:null,unit:"за кг",kind:"STANDARD",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"},
  {id:"chocolate",name:"Шоколадний торт",category:"Класичні торти",description:"Шоколадний бісквіт та насичений крем.",price:null,unit:"за кг",kind:"STANDARD",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"},
  {id:"bento",name:"Бенто-торт",category:"Бенто",description:"Маленький торт з індивідуальним написом.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=85",featured:true},
  {id:"eclairs",name:"Домашні еклери",category:"Пирожні",description:"Заварне тісто з ніжним кремом.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://images.unsplash.com/photo-1551024506-0d0d6f2c5b0d?auto=format&fit=crop&w=900&q=85"},
  {id:"tartlets",name:"Ягідні тарталетки",category:"Пирожні",description:"Хрустка основа, крем та ягоди.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85"},
  {id:"cupcakes",name:"Капкейки",category:"Капкейки",description:"Повітряний крем та декор на ваш вибір.",price:null,unit:"за 6 шт.",kind:"STANDARD",image:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85"},
  {id:"spiderman",name:"Торт з Людиною-павуком",category:"Тематичні торти",description:"Дитячий торт з тематичним декором та ім'ям.",price:null,unit:"індивідуальна ціна",kind:"CUSTOM",image:"https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85"},
  {id:"fondant",name:"Мастичний торт",category:"Тематичні торти",description:"Фігурки, персонажі та складний авторський декор.",price:null,unit:"індивідуальна ціна",kind:"CUSTOM",image:"/images/custom.svg"},
];