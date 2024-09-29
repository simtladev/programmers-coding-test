function solution(price) {
    
    if(price >= 500000){
        return Math.floor(price - (price * (20/100)));
    }
    
    if(price >= 300000){
        return Math.floor(price - (price * (10/100)));
    }
    
    if(price >= 100000){
        return Math.floor(price - (price * (5/100)));
    }
    
 
   
    
    return price;
}