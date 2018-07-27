let dataObj = {
    "one":     {
        id: 1,
        image_url : ["assets/eiffel_tower.jpg","assets/eiffel_tower1.jpg","assets/eiffel_tower2.jpg","assets/pic1.jpg","assets/pic2.jpg","assets/pic3.jpg","assets/pic4.jpg"],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$37",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    },
    "two":{
        id: 2,
        "image_url" : ["assets/pic5.jpg","assets/pic6.jpg","assets/eiffel_tower.jpg","assets/eiffel_tower1.jpg","assets/eiffel_tower2.jpg","assets/pic1.jpg","assets/pic2.jpg"],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$17",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    },
    "three":{
        id: 3,
        image_url : ["assets/pic4.jpg","assets/eiffel_tower.jpg","assets/eiffel_tower1.jpg","assets/eiffel_tower2.jpg","assets/pic5.jpg","assets/pic6.jpg"],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$42",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    },
    "four":{
        id: 4,
        image_url : ["assets/pic1.jpg","assets/eiffel_tower1.jpg","assets/eiffel_tower2.jpg","assets/pic1.jpg","assets/pic2.jpg","assets/pic4.jpg","assets/pic5.jpg"],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$7",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    },
    "five":{
        id: 5,
        image_url : ["assets/eiffel_tower2.jpg","assets/pic1.jpg","assets/pic2.jpg","assets/pic3.jpg","assets/pic4.jpg","assets/pic5.jpg","assets/pic6.jpg","assets/pic1.jpg","assets/pic2.jpg"],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$27",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    },
    "six":{
        id: 6,
        image_url : ["assets/pic3.jpg","assets/pic4.jpg","assets/pic5.jpg","assets/pic6.jpg","assets/eiffel_tower.jpg","assets/eiffel_tower1.jpg"],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$33",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    },
    "four1":{
        id: 4,
        image_url : ["assets/eiffel_tower1.jpg","assets/eiffel_tower2.jpg","assets/pic1.jpg","assets/pic2.jpg","assets/pic3.jpg","assets/pic4.jpg","assets/pic5.jpg"],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$12",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    },
    "five1":{
        id: 5,
        image_url : ["assets/pic2.jpg","assets/pic1.jpg","assets/pic2.jpg","assets/pic3.jpg","assets/pic4.jpg","assets/pic5.jpg","assets/pic6.jpg","assets/pic1.jpg","assets/pic2.jpg"],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$10",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    },
    "six1":{
        id: 6,
        image_url : ["assets/pic6.jpg","assets/pic4.jpg","assets/pic5.jpg","assets/pic6.jpg","assets/eiffel_tower.jpg","assets/eiffel_tower1.jpg",],
        place: "Empire State Building",
        title : "Skip the Line: Empire State Building Observatory",
        cost: "$50",
        description: "Make your way to the Empire State Building Observatory and catch amazing 360-degree views of New York City from the 86th floor of this iconic building. A building that defined the essence of New York's architecture, the Empire State Building is one of the most recognizable buildings in the world and no true New York experience is complete without visiting this NYC icon."
    }
}

function getLocationPrice(priceString){

    if(priceString != undefined){
        // let tempLocation = ['Mumbai', 'Delhi', 'Bangalore'];
        let priceDecider = 1;
        
        
        if(localStorage.priceDecider == undefined){
            let randomValue = Math.floor(Math.random() * Math.floor(3));
            if(randomValue == 0){
                priceDecider = 0.5;    
            }else if(randomValue == 1){
                priceDecider = 0.6;
            }else if(randomValue == 2){
                priceDecider = 0.7;
            }

            localStorage.priceDecider = priceDecider;
        }
        

        
        let price = Number(priceString.replace('$',''));
        return (price + (localStorage.priceDecider * price));
    }
}


