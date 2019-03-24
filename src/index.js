module.exports = function check(str, bracketsConfig) {
 
  let stack = [];
  let variable;
  let countAll = 0;
  let countPipe = 0;
  let count_7 = 0;
  let count_8 = 0;

  for (let i = 0; i < str.length; i++) {  
    if (str[i] == '(') {
      stack.push ('(');
      countAll++;
    }
    if (str[i] == '[') {
      stack.push ('[');
      countAll++;
    }
    if (str[i] == '{') {
      stack.push ('{');
      countAll++;
    }
    if (str[i] == '1') {
      stack.push ('1');
      countAll++;
    }
    if (str[i] == '3') {
      stack.push ('3');
      countAll++;
    }
    if (str[i] == '5') {
      stack.push ('5');
      countAll++;
    }
    if (str[i] == '|' ) {
      if (countPipe % 2 == 0) {
        stack.push ('|');
      }
    countAll++;
    countPipe++;
    }

    if (str[i] == '7' ) {
      if (count_7 % 2 == 0) {
      stack.push ('7');
      }
    countAll++;
    count_7++;
    }

    if (str[i] == '8' ) {
    if (count_8 % 2 == 0) {
      stack.push ('8');
    }
    countAll++;
    count_8++;
}

    if (str[i] == ')' || str[i] == ']' || str[i] == '}' || str[i] == '2' || str[i] == '4' || str[i] == '6') {
      variable = stack.pop();

      if (variable == '(' && str[i] == ')') countAll--;
      if (variable == '[' && str[i] == ']') countAll--;
      if (variable == '{' && str[i] == '}') countAll--;
      if (variable == '1' && str[i] == '2') countAll--;
      if (variable == '3' && str[i] == '4') countAll--;
      if (variable == '5' && str[i] == '6') countAll--;
      }

      if (str[i] == '|' && countPipe % 2 == 0) {
        variable = stack.pop();

        if (variable == '|' && str[i] == '|') {
          countAll = countAll - 2;
          countPipe = countPipe - 2;
        }
      }

      if (str[i] == '7' && count_7 % 2 == 0) {
        variable = stack.pop();

        if (variable == '7' && str[i] == '7') {
          countAll = countAll - 2;
          count_7 = count_7 - 2;
        }
      }

      if (str[i] == '8' && count_8 % 2 == 0) {
        variable = stack.pop();

        if (variable == '8' && str[i] == '8') {
          countAll = countAll - 2;
          count_8 = count_8 - 2;
        }
      }
  }

  if ((countAll == 0 && countPipe == 0 && count_7 == 0 && count_8 == 0 && str.length % 2 == 0)) return true;
  else return false;
}
