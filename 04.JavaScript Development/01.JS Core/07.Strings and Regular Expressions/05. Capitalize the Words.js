function capitalPutter(text) {

    let lower = text.toLowerCase();
   
    let capitalize = lower.replace(/\b\w/g, (l) => l.toUpperCase())
    console.log(capitalize);
 }