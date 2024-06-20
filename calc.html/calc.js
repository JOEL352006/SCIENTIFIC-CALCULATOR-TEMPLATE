document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.main-display');
    const input = document.querySelector('.input');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (button.classList.contains('center-shift')) {
                // Handle special functionalities (shift, alpha, etc.)
                if (button.classList.contains('ac')) {
                    display.textContent = '0';
                    input.textContent = '';
                } else if (button.classList.contains('del')) {
                    display.textContent = display.textContent.slice(0, -1) || '0';
                } else if (button.classList.contains('equals')) {
                    try {
                        display.textContent = eval(display.textContent);
                    } catch (error) {
                        display.textContent = 'Error';
                    }
                } else {
                    input.textContent += buttonText;
                    display.textContent += buttonText;
                }
            } else if (button.classList.contains('mode')) {
                display.textContent = '0';
                input.textContent = '';
            } else {
                input.textContent += buttonText;
                display.textContent = display.textContent === '0' ? buttonText : display.textContent + buttonText;
            }
        });
    });
});
