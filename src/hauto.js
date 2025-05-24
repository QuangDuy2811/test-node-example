// expressionEvaluator.js

// Hàm lấy độ ưu tiên của toán tử
function precedence(op) {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  return 0;
}

// Hàm chuyển trung tố sang hậu tố
function infixToPostfix(infix) {
  const stack = [];
  let postfix = '';

  for (let c of infix) {
    if (c === ' ') continue; // bỏ qua khoảng trắng

    if (/[a-zA-Z0-9]/.test(c)) {
      // nếu là toán hạng (chữ hoặc số)
      postfix += c;
    } else if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        postfix += stack.pop();
      }
      if (stack.length) stack.pop(); // bỏ dấu '('
    } else {
      // là toán tử
      while (
        stack.length &&
        precedence(stack[stack.length - 1]) >= precedence(c)
      ) {
        postfix += stack.pop();
      }
      stack.push(c);
    }
  }

  // lấy hết các toán tử còn lại trong stack
  while (stack.length) {
    postfix += stack.pop();
  }

  return postfix;
}

// Hàm tính giá trị biểu thức hậu tố
function evaluatePostfix(postfix) {
  const stack = [];

  for (let c of postfix) {
    if (c === ' ') continue; // bỏ qua khoảng trắng

    if (/\d/.test(c)) {
      // xử lý số nhiều chữ số
      // nếu cần, có thể mở rộng để xử lý số nhiều chữ số
      stack.push(parseInt(c, 10));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      switch (c) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
      }
    }
  }
  return stack.pop();
}

module.exports = {
  infixToPostfix,
  evaluatePostfix,
};

//hauto