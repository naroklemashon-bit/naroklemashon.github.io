document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // Slide to Register form
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    // Slide back to Login form
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
});