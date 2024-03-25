// callback hell
function timer() {
  setTimeout(() => {
    setTimeout(() => {
      console.log('Izvrsavam');
      setTimeout(() => {
        setTimeout(() => {
          console.log('Izvrsavam');
        }, 1000);
        console.log('Izvrsavam');
      }, 1000);
    }, 1000);
    console.log('Izvrsavam');
  }, 1000);
}

// timer();

function loop() {
  let counter = 0;
  setTimeout(() => {
    console.log('Gotovo');
  }, 1);
  while (counter < 1000) {
    console.log(counter);
    counter++;
  }
}

// loop();
