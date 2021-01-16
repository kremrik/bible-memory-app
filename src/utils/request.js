const axios = require("axios");


async function queryBible(passage) {
    try {
        const url = `http://127.0.0.1:8001/passage/${passage}`;
        return await axios.get(url);
    } catch (err) {
        console.error(err);
    }
}


// console.log(queryBible("colossians+3:1-3").then(x => x.data.passages[0]));


export default queryBible;
// module.exports = queryBible;
