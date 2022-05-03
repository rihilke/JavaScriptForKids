/* 2. Предложить, как должны выглядеть эти структуры в памяти (например, javascript), 
оптимизировано для быстрого поиска
*/
/*
var webs = {

  Ashan : {
    name : "Ашан",
    formats : {
      Ashan700m : {
        name : "Ашан-700метров",
        points : {
          Ashan700ShEntusiastov10 : {
            name : "Ашан-700метров Шоссе Энтузиастов 10",
            idPoint : 1,
            //id : 2,
          },
        },
      },
      Ashan1200m : {
        name : "Ашан-1200метров",
      },
    },
  },

  Perekrestok : {
    name : "Перекресток",
    formats : [
      PerekrestokGiper = {
        name : "Перекресток-гипер",
        points : [
          PerekrestokGiperTaganskaya3 = {
            name : "Перекресток-гипер Таганская 3",
            idPoint : 2,
            //id : 3,
          }
        ],
      },
      PerekrestokSuper = {
        name : "Перекресток-супер",
        points : [],
      },
    ],
  }
};
*/

///////////////

var webs = [Ashan, Perekrestok];

var Ashan  = {
  name : "Ашан",
  //как сюда обратиться по имени
  formats : [Ashan700m, Ashan1200m],
  points : [ShEntusiastov10],
}

var Ashan700m = {
  name : "Ашан-700метров",
  web : Ashan,
  points : [ShEntusiastov10],
}

var Ashan1200m = {
  name : "Ашан-1200метров",
  web : Ashan,
  points : [],
}
var ShEntusiastov10 = {
  name : "Ашан-700метров Шоссе Энтузиастов 10",
  format : Ashan700m,
  web : Ashan,
  shop_id : 1,
}

var Perekrestok = {
  name : "Перекресток",
  formats : [Giper, Super],
  points : [Taganskaya3]
}

var Giper = {
  name : "Перекресток-гипер",
  web : Perekrestok,
  points : [],
}

var Super = {
  name : "Перекресток-супер",
  web : Perekrestok,
  points : [],
}

var Taganskaya3 = {
  name : "Перекресток-гипер Таганская 3",
  format : Giper,
  web : Perekrestok,
  shop_id : 2,
}

/* - */

var goodsTree = {
  name : "Товары",
  Drinks : {
    name : "Напитки",
    soda : {
      name : "Газировка",
      
    },
    energy : {
      name : "Энергетики",
    }
  },
}

function get_skus_list(shop_id,options)
{
  return {
    categories:[],// массив категорий,
    skus: [],// массив товаров
  };
}