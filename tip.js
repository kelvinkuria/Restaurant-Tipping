function tippingRestaurant(message){
    switch (message) {
        case "excellent":
        return "Thank you so much!;";
            
        case "good":
        return "Thank you!  ";

        case "average":
        return "Thanks.";

        case "poor":
        return "We'll do better next time";
    
        default:
            return "Sorry to hear that.";
    }

}