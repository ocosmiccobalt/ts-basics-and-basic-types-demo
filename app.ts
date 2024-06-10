let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

// This function never produces a value, never returns anything.
// It always crashes the script (or this part of the script):
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // or:
  // while (true) {}
}

generateError('An error occured!', 500);
