const Welcome = () => {
    let allowedAge = 18;
    let name = prompt('Enter Your Name');

    if (name === '') {
        alert('you didnt enter your name. Please try again');

    } else {
        alert(`Welcome ${name} to your web sports shop.
    (You must be of legal age to make purchases). 
    To continue press accept`);
    }

    if (name !== '') {
        let age = Number(prompt('Enter your age'));

        if (age < allowedAge) {
            alert(`Since you are ${age} years old, we cannot allow you to make purchases on our website.
        But you are free to see our content. 
        Press accept to go to store`);
        } else {
            prompt(`Welcome ${name}, ${age} years old, enjoy your purchase
        Press accept to continue to the store`)
        }

        

    }


}

Welcome();