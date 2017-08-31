//Program a deck of cards
//Then make a function to shuffle the deck and pick a random card

var deck = [];

var suit = ["Spades", "Diamonds", "Clubs", "Hearts"];

var name = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

//build the deck
name.forEach(function(element) {
    for(i = 0; i < suit.length; i++){
        newCard = element + " of " + suit[i];
        deck.push(newCard);
    }
}, this);

function shuffle(array) {
    console.log("Shuffling...")
    var b, c, d;
    for (d = array.length; d; d--) {
        //picking a random index
        b = Math.floor(Math.random() * d);
        //decrease counter by one
        c = array[d - 1];
        //swap the last element with it
        array[d - 1] = array[b];
        array[b] = c;
    }
}

function drawCard(array2) {
    //pick a random index
    index = Math.floor(Math.random() * array2.length);
    
    //picks a card
    yourCard = array2[index];
    console.log("Your card is the: " + yourCard)
}

shuffle(deck);
drawCard(deck);
