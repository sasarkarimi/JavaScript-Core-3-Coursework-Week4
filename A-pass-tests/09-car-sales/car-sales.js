function sales(carsSold) {
    let temp={};
    carsSold.forEach(car => {
        if(temp.hasOwnProperty(car.make)){
            temp[car.make]=temp[car.make]+ car.price;
        }else{
            temp[car.make]=car.price;
        }
    });
  
    return temp;
}

module.exports = sales;
