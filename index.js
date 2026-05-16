async function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');
    loading.classList += ' modal__overlay--visible';

    await emailjs.sendForm(
        'service_7390c3r',
        'template_752zz5b',
        event.target,
        'CRPour4rksWN7eSjg'
    );
}
