let words = document.querySelectorAll(".word");
    const animateAll = (animate) => {
        setTimeout(() => {
            animate(words[0]);
            setTimeout(() => {
                animate(words[1]);
                setTimeout(() => {
                    animate(words[2]);
                }, 1000)
            }, 1000)
        }, 1000)
    }
    const animate = (word) => {
        word.classList.add("animate");
    }
 
   animateAll(animate);

    //Main function
const mainFunction = (callback) => {
  setTimeout(() => {
      callback([2, 3, 4]);
  }, 2000)
}

// Add function
const add = (array) => {
  let sum = 0;
  for(let i of array) {
      sum += i;
      console.log(sum);
  }
  console.log(sum);
}

// Calling main function
mainFunction(add);
