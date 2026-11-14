export type Product = {
  id: string; name: string; category: string; description: string;
  price: number | null; unit: string; kind: "STANDARD" | "CUSTOM";
  image: string; featured?: boolean;
};

export const products: Product[] = [
  {id:"red-velvet",name:"Червоний оксамит",category:"Класичні торти",description:"Ніжні червоні бісквітні коржі та крем-чиз.",price:null,unit:"за кг",kind:"STANDARD",image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",featured:true},
  {id:"medovyk",name:"Домашній медовик",category:"Класичні торти",description:"Тонкі медові коржі та ніжний сметанковий крем.",price:null,unit:"за кг",kind:"STANDARD",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"},
  {id:"chocolate",name:"Шоколадний торт",category:"Класичні торти",description:"Шоколадний бісквіт та насичений крем.",price:null,unit:"за кг",kind:"STANDARD",image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85"},
  {id:"bento",name:"Бенто-торт",category:"Бенто",description:"Маленький торт з індивідуальним написом.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=85",featured:true},
  {id:"eclairs",name:"Домашні еклери",category:"Пирожні",description:"Заварне тісто з ніжним кремом.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://i.etsystatic.com/58367985/r/il/67154d/6803522872/il_fullxfull.6803522872_2shf.jpg"},
  {id:"tartlets",name:"Ягідні тарталетки",category:"Пирожні",description:"Хрустка основа, крем та ягоди.",price:null,unit:"за шт.",kind:"STANDARD",image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85"},
  {id:"cupcakes",name:"Капкейки",category:"Капкейки",description:"Повітряний крем та декор на ваш вибір.",price:null,unit:"за 6 шт.",kind:"STANDARD",image:"https://images.squarespace-cdn.com/content/v1/54a04011e4b0d1a214af85a9/1514235769552-1SFUAQZ8KAJ4S0SX43Q4/orange%2Bcupcakes%2B2.jpg?format=2500w"},
  {id:"spiderman",name:"Торт з Людиною-павуком",category:"Тематичні торти",description:"Дитячий торт з тематичним декором та ім'ям.",price:null,unit:"індивідуальна ціна",kind:"CUSTOM",image:"https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85"},
  {id:"fondant",name:"Мастичний торт",category:"Тематичні торти",description:"Фігурки, персонажі та складний авторський декор.",price:null,unit:"індивідуальна ціна",kind:"CUSTOM",image:"/images/custom.svg"},
];