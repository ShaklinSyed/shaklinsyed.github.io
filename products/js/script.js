$(document).ready(function(){

    getLocationPrice();
    
    Object.keys(dataObj).forEach((ele) => {
        $(".products-container").append(' \
        <div class="card" data-productId='+ ele+'> \
            <img src='+ dataObj[ele].image_url[0]+' alt="">\
            <div class="card-info">\
                <div class="card-info-place"> \
                    <p>'+ dataObj[ele].place+'</p> \
                    <p>'+ dataObj[ele].title+'</p> \
                </div>\
                <div class="card-info-price">\
                    <p>from</p>\
                    <p><span>$</span>'+ getLocationPrice(dataObj[ele].cost)  +'</p>\
                </div>\
            </div>\
        </div>');
    });

    $('.card').on('click', function(){
        let selectedId = $(this).attr('data-productId');

        if(typeof localStorage != undefined){
            localStorage.selectedProductId = selectedId;
            window.open('./product_page.html','_blank');
        }
    });
});

