import axios from 'axios';

const BOOK_API_REST_URL = "http://localhost:8080/books";

class APIService {

  getBooks() {
    return axios.get(BOOK_API_REST_URL);
  }

}

export default new APIService();

// var AIMLInterpreter = require('aimlinterpreter');

// var aimlInterpreter = new AIMLInterpreter({ name: 'WireInterpreter', age: '42' });
// aimlInterpreter.loadAIMLFilesIntoArray(['./sample.aiml']);
// var callback = function (answer, wildCardArray, input) {
//   console.log(answer + ' | ' + wildCardArray + ' | ' + input);
// };

// aimlInterpreter.findAnswerInLoadedAIMLFiles('What is your name?', callback);
// aimlInterpreter.findAnswerInLoadedAIMLFiles('My name is Ben.', callback);
// aimlInterpreter.findAnswerInLoadedAIMLFiles('What is my name?', callback);
