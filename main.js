const compress = new Pen;

console.log('1');

const data = {
    'URL'   : 'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCX2FZdrCPbQ24t8Ah6eTPF69xXOPFgmIM&id=UCJFeg4cV7kM4QsECKcx_eEA&part=snippet,status',
    'HTML_Request' : 'GET'
}

compress.typists(data,(response) => {

    // const fake = JSON.parse(response);
    // console.log(fake[0].fake_key);

    console.log(JSON.parse(response));
});
console.log('2');