function solve(input, criteria) {
	
    class Ticket {

        constructor(destination, price, status) {

            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }
    let unsortedTickets = [];

    for (let ticket of input) {

        let arr = ticket.split("|");
        let destination = arr[0];
        let price = arr[1];
        let status = arr[2];
        unsortedTickets.push(new Ticket(destination,price,status));
    }
    unsortedTickets.sort((a,b)=> a[criteria] > b[criteria]);
    return unsortedTickets;

}