class FizzBuzzCalculations {

  getFizzBuzz(int_value){
    if ((int_value % 3 === 0) && (int_value % 5 === 0)) {
      return "FizzBuzz";
    }
    else if (int_value % 5 === 0) {
      return "Buzz";
    }
    else if (int_value % 3 === 0) {
      return "Fizz"
    }
    else {
      return parseInt(int_value, 10);
    }
  }

  isInRange(int_value) {
    return ((int_value > 0) && (int_value < 101))
  }

  getValue(input) {
    const value = parseInt(input, 10);
    if (Number.isInteger(value) && this.isInRange(value)) { return this.getFizzBuzz(value) }
    else if (input === '') {
      return "Waiting for input..."
    }
    else if (!Number.isInteger(value)) {
      return "Error, not a number"
    }
    else if (!this.isInRange(value)){
      return "Error, out of range"
    }
    else { return "Error, invalid input" }
  }

}

export default FizzBuzzCalculations;