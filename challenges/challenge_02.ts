/** Constants */
const enum Operation {
  Increase = "#",
  Decrease = "@",
  Multiply = "*",
  Print = "&"
}

const OperationEnum = [Operation.Increase, Operation.Decrease, Operation.Multiply, Operation.Print]


/** Functions */
const isValidOperation = (char: string): boolean => OperationEnum.includes(char as Operation);

const executeOperation = (currentValue: number, operation: string): number => {
  switch (operation) {
    case Operation.Increase:
      return currentValue + 1;
    case Operation.Decrease:
      return currentValue - 1;
    case Operation.Multiply:
      return currentValue * currentValue;
    default:
      return currentValue;
  }
};

export const compile = (program: string): string => {
  let output = '', currentValue = 0

  const chars = program.split('')

  for (const char of chars) {
    if (!isValidOperation(char)) {
      console.error(`Invalid operation: ${char}`)
      continue;
    }

    currentValue = executeOperation(currentValue, char)

    if (Operation.Print === char) {
      output += currentValue
      continue
    }
  }

  return output
}