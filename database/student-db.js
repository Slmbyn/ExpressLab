const students = [
    {name: 'Max', pass: true},
    {name: 'Lauren', pass: false},
    {name: 'Harry', pass: false}
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  };