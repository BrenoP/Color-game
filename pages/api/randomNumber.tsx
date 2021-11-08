// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const colors = [
    { name: 'Azul', color: '#28ABF4' },
    { name: 'Vermelho', color: '#F42828' },
    { name: 'Verde', color: '#28F43C' },
    { name: 'Amarelo', color: '#F4E028' },
    { name: 'Roxo', color: '#A728F4' },
    { name: 'Laranja', color: '#F48A28' },
    { name: 'Marrom', color: '#4D1504' },
    { name: 'Cinza', color: '#8E8E8E' },
    { name: 'Preto', color: '#1B1B1B' },
    { name: 'Branco', color: '#EEEEEE' }
  ];

  const arrayColors = [];
  const arrayNumbers = [];
  const arrayNames = [];

  for (let index = 0; index < 4; index++) {
    let numberName = Math.floor(Math.random() * 10);
    let numberColor = Math.floor(Math.random() * 10);

    if(index === 0) {
      arrayNames.push(numberName);
      arrayNumbers.push(numberColor);
    } else {
      while (
        (arrayNames.includes(numberName)) ||
        (arrayNumbers.includes(numberColor))
      ) {
        numberName = Math.floor(Math.random() * 10);
        numberColor = Math.floor(Math.random() * 10);
      }
      arrayNames.push(numberName);
      arrayNumbers.push(numberColor);
    }

    arrayColors.push({
      indexName: numberName,
      indexColor: numberColor,
      name: colors[numberName].name, 
      color: colors[numberColor].color
    });
  }

  let firstNumber = Math.floor(Math.random() * 4);
  let seccondNumber = Math.floor(Math.random() * 10);
  let nameColor = "";

  colors.forEach(color => {
    if(color.color === arrayColors[firstNumber].color) {
      nameColor = color.name
    }
  });

  res.status(200).json({
    allColors: colors,
    arrayColors: arrayColors, 
    rightColor: {
      indexName: nameColor,
      indexColor: colors[seccondNumber],
      name: nameColor, 
      color: colors[seccondNumber].color
    }
  });
}
