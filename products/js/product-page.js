$(document).ready(function(){
    createContent();

    $('.images img').hover(function(){
        $('#selected-image').attr('src', $(this).attr('src'));
    });
});

function createSliderImages(imageArray){
    let sliderImages = "";

    imageArray.forEach(element => {
        sliderImages += '<img class="icons" src="' + element + '" alt="">';
    });
    return sliderImages;
}

function createContent(){
    if(typeof localStorage != undefined){
        let selectedProductId = localStorage.selectedProductId;
        console.log(dataObj[selectedProductId]);

        $('title').html(dataObj[selectedProductId].place + ' ' + dataObj[selectedProductId].title);
        $('.product-wrapper').append( '<div class="gallery"> \
            <img src="'+ dataObj[selectedProductId].image_url[0]+'" id="selected-image"> \
                <div class="images"> \
                    '+createSliderImages(dataObj[selectedProductId].image_url)+' \
                </div> \
            </div> \
            <div class="product-info"> \
                <div class="prod-text"> \
                    <p class="prod-place">'+ dataObj[selectedProductId].place +'</p> \
                    <p class="prod-title">'+ dataObj[selectedProductId].title +'</p> \
                    <p class="prod-description">'+ dataObj[selectedProductId].description+'</p> \
                </div> \
                <div class="buy-btn-cont"> \
                    <button type="button"><span>$</span>'+ getLocationPrice(dataObj[selectedProductId].cost)+'</button> \
                </div> \
            </div>'
        );
    }
}

