$( document ).ready(function() {
    console.log( "Im here and ready!" );
    $('#popoverContent').html('<div class="row"><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6"><div class="inner-img"><img class="dress-img" src="https://d2zk4u3pjs0oai.cloudfront.net/assets/yellow-dress-laydown-2408ab6c320f7b43a46a896c47ace1fa.png"></div></div><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6"><div class="pop-text-cont"><h2 class="top-pop-txt">Want to save 30% on your new look?</h2><a class="code-btn" href="#"><button class="get-offer-btn" id="getOfferBtn">Yes! Get Code</button></a><a class="exit-link" href="#"><p class="btm-pop-txt">No thank you, keep shopping</p></a></div></div></row>')

    $('#getOfferBtn').on('click',function(){
        $('#popoverContent').html('<div class="animation-pop"><div class="row"><div class="generate-txt-contianer"><h1 class="generate-txt">Generating 30% Off Code</h1></div></div><div class="row"><div class="spin-container"><img class="spin-img" src="./images/dress.png"></div></div><div class="row"><div class="btm-generate-txt-contianer"><div class="loading">Please Wait<span class="one">.</span><span class="two">.</span><span class="three">.</span></div></div></div></div>');
        setTimeout(function() {
            $('#popoverContent').html('<div class="done-pop"><div class="row"><div class="done-txt-top"><h1>Use Code <span class="extra-bold">"30for3"</span> at Checkout and save 30% for the First Three Months</h1></div></div><div class="row"><div class="redirct-btn-ctn"><a href="#"><button class="rediret-btn">Click Here to Apply Code!</button></a></div></div></div>')
        }, 5000)   
    });
});