const fs = require('fs');

/**
 * @param {string} templateFilePath - đường dẫn đến file template gốc
 * @param {string} outputFilePath - đường dẫn đến file kết quả
 * @param {object} params - các giá trị thay thế, ví dụ: { name: 'Jonny' }
 */
function processTemplate(templateFilePath, outputFilePath, params) {
  const template = fs.readFileSync(templateFilePath, 'utf-8');

  const filledTemplate = template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return params[key] !== undefined ? params[key] : `{{${key}}}`;
  });

  fs.writeFileSync(outputFilePath, filledTemplate, 'utf-8');
}

module.exports = processTemplate ;
