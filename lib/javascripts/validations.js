module.exports = function (input) {
  console.log(input);
  var errors = [];
  if(input.title === '') {
    errors.push('Please Add a Title')
  }
  if(input.excerpt === '') {
    errors.push('Please Add an Excerpt')
  }
  if(input.body === '') {
    errors.push('Please Add a Body')
  }
  return errors;
}
