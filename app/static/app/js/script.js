const headerButton = document.querySelector('.header-button');
const subButtonLinkBackground = document.getElementById('submitButton');
const cartButtonShoppingButtonWidth2 = document.querySelector('.cart-button.shopping__button_width2');
const sodcor = document.querySelector('.sodcor');
const cartButtonShoppingButtonWidth1 = document.querySelector('.cart-button.shopping__button_width1');

const txtcor = document.createElement('h1');
document.body.appendChild(txtcor);


const cartButtonShoppingButtonForm1 = document.getElementById('cart-button-shopping__button-form1')
const cartButtonShoppingButtonForm2 = document.getElementById('cart-button-shopping__button-form2')

// Выводит value в console
headerButton.addEventListener('click', function() {
    const headerInput = document.querySelector('.header-input').value;      
    console.log(headerInput);
});

subButtonLinkBackground.addEventListener('click', function() {
    const subInput = document.querySelector('.sub-input').value;      
    console.log(subInput);
});


cartButtonShoppingButtonWidth2.addEventListener('click', function() {
    window.location.href = "{% url \"product\" %}";
});

cartButtonShoppingButtonWidth1.addEventListener('click', function() {
    sodcor.remove();
    txtcor.classList.add("txtcorclass");
    sodcor.innerHTML = 'Тапсырыс себетіңіз бос!';
});

cartButtonShoppingButtonForm1.addEventListener('click', function() {
    const ShippingInput1 = document.querySelector('#Shipping__input1').value;
    const ShippingInput2 = document.querySelector('#Shipping__input2').value;
    const ShippingInput3 = document.querySelector('#Shipping__input3').value;
    
    console.log('Город: ' + ShippingInput1,'\n','Штат: ' + ShippingInput2,'\n','Пост код \ zip: ' + ShippingInput3 );
});

cartButtonShoppingButtonForm2.addEventListener('click', function() {
    const Shippinginput4 = document.querySelector('#Shipping__input4').value;
    console.log('Код бонусного купона: ', Shippinginput4);
});



//
const LogButton = document.querySelector('.register-button');

const LogWindow = document.querySelector('.window-log');

const CloseWindow = document.querySelector('.close-window');

const CloseWindowDouble = document.querySelector('#close-window-double');

const SignButton = document.querySelector('.button-s-in');

const SignWindow = document.querySelector('.window-sign');

const LogButtonEnd = document.querySelector('.button-l-in-end');


LogButton.addEventListener('click', function(){
    LogWindow.style.display = 'block';
    console.log('asd');
});
CloseWindow.addEventListener('click', function() {
    LogWindow.style.display = 'none';
   
});
CloseWindowDouble.addEventListener('click', function() {
    SignWindow.style.display = 'none';
   
});
SignButton.addEventListener('click', function() {
    SignWindow.style.display = 'block';
    LogWindow.style.display = 'none';
});
LogButtonEnd.addEventListener('click', function() {
    LogWindow.style.display = 'block';
    SignWindow.style.display = 'none';
});
//