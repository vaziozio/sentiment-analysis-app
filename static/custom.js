$(document).ready(function() {
    // check conditions and sentiment before feeding scores
    function checkToPlot(sentiment) {
        switch (sentiment) {
            case 'Negativo':
               $('.counted-negative').text(cNeg+1)
               break;
            case 'Positivo':
               $('.counted-good').text(cGood+1)
               break;
            case 'Neutro':
               $('.counted-neutral').text(cNeut+1)
               break;
        }
    }
    // variables to feed counter
    cGood = 0;
    cNeut = 0;
    cNeg = 0;
    tweetText = '';

    // function to get '/data'
    (function worker() {
         $.get('/api', function(data) {
         console.log(data.tweet)
         //updating counter values
         cGood = parseInt($('.counted-good').text());
         cNeut = parseInt($('.counted-neutral').text());
         cNeg = parseInt($('.counted-negative').text());

         //asserting conditions and prepending tweet text w/ color analysis based on sentiment
         if (data.tweet != "" && data.tweet != tweetText) {
              $(".message_holder").prepend('<div class="msg_bbl predicted'+data.sentiment+'"><i class="fab fa-twitter"></i> '+data.tweet+'</div><br />');
              checkToPlot(data.sentiment);
         }
         tweetText = data.tweet
         //running timeout to refresh get
         setTimeout(worker, 100);
         });
    })();
});