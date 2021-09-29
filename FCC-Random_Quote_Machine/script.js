const settings = {
  "url": "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
  "method": "GET"
}

var quote;

var randomizer = () => {
  return Math.floor(Math.random()*102)
}

$.ajax(settings).done(function (response) {
  const data = JSON.parse(response);
    $(document).ready(function() {
    $('#new-quote').click(function() {
      const random = randomizer();
      const quote = data['quotes'][random]['quote'];
      const author = data['quotes'][random]['author'];
      $('#text').html(quote);
      $('#author').html('- '+author); 
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text='+ quote+' - '+author+'&hashtags=randomQuoteMachine,freeCodeCamp');  
    });
  });
  const random = randomizer();
      const quote = data['quotes'][random]['quote'];
      const author = data['quotes'][random]['author'];
      $('#text').html(quote);
      $('#author').html('- '+author); 
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text='+ quote+' - '+author+'&hashtags=randomQuoteMachine,freeCodeCamp');
});