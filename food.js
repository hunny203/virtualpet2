class Food {
    constructor(foodS){
        this.image = loadImage("Milk.png");
        this.foodS = foodS;        
        this.lastFed = lastFed;   
    }
    
    getFoodStock(){      
        return foodS;
    }
    updateFoodStock(x){
        
        if(x <= 0){
            x=0;
        }else{
            x=x-1;
        }
        foodS = x;
    }
    }