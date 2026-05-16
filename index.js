function toggleContrast() {
  document.body.classList.toggle("dark-theme");
}

async function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    const error = document.querySelector('.modal__overlay--error');

    loading.classList.add('modal__overlay--visible');

    try {
        await emailjs.sendForm(
            'service_7390c3r',
            'template_752zz5b',
            event.target,
            'CRPour4rksWN7eSjg'
        );

        loading.classList.remove('modal__overlay--visible');

        success.classList.add('modal__overlay--visible');

    } catch (err) {

        loading.classList.remove('modal__overlay--visible');

        error.classList.add('modal__overlay--visible');

        console.error(err);
    }
}


let isModalOpen = false;
function toggleModal() {

    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
      
    }
    isModalOpen = true;
    document.body.classList += ' modal--open';
}

