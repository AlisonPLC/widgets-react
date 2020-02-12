const dummy_weather = {
  //primeiramente se cria o objeto
  weater: [
    //em seguida cria-se o array
    {
      id: 1, //necessário identificar outros itens
      img: "", //get image acording to situation (Sun/Rain)
      date: "segunda",
      temperatura: [50, 30, 20] //temperatura max/med/min também em um array
    }, //vírgula para criar mais de um
    {
      id: 2,
      img: "",
      date: "terça",
      temperatura: [50, 30, 20]
    },
    {
      id: 3,
      img: "",
      date: "quarta",
      temperatura: [50, 30, 20]
    },
    {
      id: 4,
      img: "",
      date: "quinta",
      temperatura: [50, 30, 20]
    }
  ]
};
export default dummy_weather; // nao se esquecer de exportar
