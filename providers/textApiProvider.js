const axios = require('axios');

const baseUrl = 'http://loremipsum.net/api';

exports.getRandomText = async () =>{
    let response = await axios.get(baseUrl + '/PlainText', {responseType: 'text'});
    return response.data;
}