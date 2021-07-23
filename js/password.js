const input = document.querySelector('.form-control');
const btnErase = document.querySelector('.btn-erase');
const btnReveal = document.querySelector('.btn-reveal');
const liList = document.querySelectorAll('.li-list');
const displayPwd = document.querySelector('.display-pwd');



// function that erases the input
const erase_input = () =>
{
    input.value = '';
    displayPwd.textContent = '';
};


// when we click on the erase button
btnErase.addEventListener('click', erase_input);


const setGrid = () =>
{
    for(items of liList)
    {
        const arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const randomPick = Math.floor(Math.random() * arrayNumber.length);
        items.textContent = randomPick;
        items.value = randomPick;
    }
};

// when we load the page
window.onload = setGrid;


// when we enter the password
liList.forEach(items =>
    {   
        items.addEventListener('click', () =>
        {
            input.value += items.value;
        });
    }
);

// when we click to the reveal button
btnReveal.addEventListener('click', () =>
{
    displayPwd.textContent = input.value;
})



