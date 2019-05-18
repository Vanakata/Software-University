function productList(input) {

    let catalogue = new Map;

    for (let i = 0; i < input.length; i++) {

        let current = input[i].split(":");
        let productName = current[0];
        let productPrice = +current[1];
        let productFirstLetter = productName[0];

        if (!catalogue.has(productFirstLetter)) {
            catalogue.set(productFirstLetter, new Map());

        }if(!catalogue.get(productFirstLetter).has(productName)){
            catalogue.get(productFirstLetter).set(productName,0);
        }
        catalogue.get(productFirstLetter).set(productName,productPrice);

    }
   function alphabeticalSort(a,b){
       return a[0].localeCompare(b[0])
   }
   let sortedInitials = [...catalogue].sort(alphabeticalSort);

   for (let [key,value] of sortedInitials){

    console.log(key);
    let sortedProducts = [...value].sort(alphabeticalSort);

    for(let [products,price] of sortedProducts){
        console.log("  " + products.trim() + ": " + price);
    }
    
   }
}