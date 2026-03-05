// 1. Select the element
const myButton = document.querySelector('#login-btn');

// 2. Listen for an event
myButton.addEventListener('click', () => {
    
    // 3. Act!
    alert('You clicked the button!');
    console.log('User interaction detected.');
});
