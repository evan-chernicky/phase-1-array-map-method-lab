const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  
  let breakWords = [];
  let capitalizedWords;
  let constructWords;
  
  
  const titleCased = () => {
  
    for(let tutorial of tutorials) {
      
      breakWords.push(...tutorial.split(" "))
  
  
  
    }
  
    capitalizedWords = breakWords.map( el => el[0].toUpperCase() + el.substring(1))
  
    constructWords = capitalizedWords.join(' ')
  
    console.log(breakWords)
  
  return
  
  }
  
  titleCased()
  
  