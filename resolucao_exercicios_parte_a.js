//Parte A - Aquecimento Arrow Function

//Transforme as funções declarativas abaixo em Arrow Functions
//CONCLUIDO
const upperName =  (name) => {
    return name.toUpperCase();
  };
  const parte = (p1, p2) => {
    return p1 * p2;
  }
  const celsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
  }

  //Destructuring - Desestruturação
  //Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
  //CONCLUIDO
  const event = ["clienteX", "clienteY"]
  
  function handleMouseMove(event) {
    const [cliente1, cliente2] = event
    console.log(cliente1, cliente2);
  }
  handleMouseMove(event)
  
  //A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
  //CONCLUIDO
  const obj = { first: 'Jane', last: 'Doe' };
  const {first} = obj
  console.log(first)

  
  //A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
  // NAO SEI FAZER, TENHO DÚVIDAS
  company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };
  
  //Rest & Spread
  //Utilizando um operador clone o objeto c​lothes
  // NAO SEI FAZER, TENHO DÚVIDAS
  const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };
  
  //Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
  
  //Arrays e seus métodos
  //A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
  //CONCLUIDO
  var numbers = [4, 9, 16, 25];
  var raiz = numbers.map((num)=>{
    return num * num
  })
  console.log(raiz)
  
  //A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
  //CONCLUIDO
  var numbers = [65, 44, 12, 4];
  var XDez = numbers.map((number)=>{
    return number * 10
  })
  console.log(XDez)
  
  //A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
  //CONCLUIDO
  var ages = [32, 33, 16, 40];
  var age = ages.filter((idade)=>{
    return idade >=18;
  }) 
  console.log(age)
  
  //A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
  //CONCLUIDO
  data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];

  let b = data.filter((tipo)=>{
    return tipo.type == "dog"   
  })

  let a = b.map((idade)=>{
    return parseInt(idade.age)
  }).reduce((soma, cachorro)=>{
    return soma + cachorro
  })
  
  console.log(a,b)
  //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
  
  