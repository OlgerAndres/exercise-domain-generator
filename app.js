
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domin = ['.gov', '.com', '.es'];


let array = [];

pronoun.forEach(element1 => {

    adj.forEach(element2 => {

        noun.forEach(element3 => {

            domin.forEach(element4 => {

                let sum = element1 + element2 + element3 + element4;
                array.push(sum);

            });
        });
    });
});

console.log(array);



