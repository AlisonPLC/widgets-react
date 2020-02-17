
//testing this 
import Rainy from "./Images/Rainy.svg";
import Sunny from "./Images/Sunny.svg";
import Clowdy from "./Images/Clowdy.svg";

const dummy_weather = {
  //primeiramente se cria o objeto
  weater: [
    //em seguida cria-se o array
    {
      id: 1, //necessário identificar outros itens
      img: Rainy, //get image acording to situation (Sunny/Clowdy/Rainy)
      date: "segunda",
      temperatura: 25 //temperatura max/min também em um array
    }, //vírgula para criar mais de um
    {
      id: 2,
      img: Sunny,
      date: "terça",
      temperatura: 30
    },
    {
      id: 3,
      img: Clowdy,
      date: "quarta",
      temperatura: 20
    },
    {
      id: 4,
      img: Rainy,
      date: "quinta",
      temperatura: 19
    },
    {
      id: 5,
      img: Clowdy,
      date: "sexta",
      temperatura: 20
    },
    {
      id: 6,
      img: Sunny,
      date: "sabado",
      temperatura: 25
    },
    {
      id: 7,
      img: Clowdy,
      date: "domingo",
      temperatura: 22
    }
  ]
};
export default dummy_weather; // nao se esquecer de exportar
