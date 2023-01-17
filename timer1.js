const myDelays = process.argv.slice(2);// created a variable called myDelays, takes in node input by using process.argv minus first to arguments
const beep = function(times) {// created a function called beep with an arguement called times
  for (let i = 0; i <= times.length; i++) {// running a loop as long as variable i is less than or equal to times length
    const delay = times[i] * 1000;//created variable called delay, which is the current iteration value times 1000 (this converts milliseconds to seconds)
    setTimeout(() => {//
      process.stdout.write('.');
    }, delay);//prints '.' to the terminal at every delay and prints on the same line using process.stdout.write
  }
};

beep(myDelays);//calling beep function and inserting variable myDelays as arguement, which containts the terminal arguments listed below.

// Example Usage:
// node timer1.js 10 3 5 15 9 