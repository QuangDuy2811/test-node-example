const fs = require('fs');
const path = require('path');
const  processTemplate  = require('./templateProcessor');

const testTemplatePath = path.join(__dirname, 'test_template.txt');
const testOutputPath = path.join(__dirname, 'test_result.txt');

afterEach(() => {
  // Xoá file test kết quả sau mỗi test
  if (fs.existsSync(testOutputPath)) {
    fs.unlinkSync(testOutputPath);
  }
  if (fs.existsSync(testTemplatePath)) {
    fs.unlinkSync(testTemplatePath);
  }
});

test('processTemplate replaces single param correctly', () => {
  fs.writeFileSync(testTemplatePath, 'Hello {{name}}!', 'utf-8');
  processTemplate(testTemplatePath, testOutputPath, { name: 'Jonny' });
  const result = fs.readFileSync(testOutputPath, 'utf-8');
  expect(result).toBe('Hello Jonny!');
});

test('processTemplate replaces multiple params', () => {
  fs.writeFileSync(testTemplatePath, 'Name: {{name}}, Age: {{age}}', 'utf-8');
  processTemplate(testTemplatePath, testOutputPath, { name: 'Alice', age: 25 });
  const result = fs.readFileSync(testOutputPath, 'utf-8');
  expect(result).toBe('Name: Alice, Age: 25');
});

test('processTemplate leaves missing param unchanged', () => {
  fs.writeFileSync(testTemplatePath, 'Hello {{name}}, your city is {{city}}.', 'utf-8');
  processTemplate(testTemplatePath, testOutputPath, { name: 'Tom' });
  const result = fs.readFileSync(testOutputPath, 'utf-8');
  expect(result).toBe('Hello Tom, your city is {{city}}.');
});

test('processTemplate works with empty template', () => {
  fs.writeFileSync(testTemplatePath, '', 'utf-8');
  processTemplate(testTemplatePath, testOutputPath, { name: 'Tom' });
  const result = fs.readFileSync(testOutputPath, 'utf-8');
  expect(result).toBe('');
});
