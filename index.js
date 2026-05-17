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


function toggleModal() {
  document.body.classList.toggle("modal--open");
}


const landing = document.querySelector("#landing");
const celestials = document.querySelectorAll(".celestial");

landing.addEventListener("mousemove", (event) => {
  const rect = landing.getBoundingClientRect();

  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  celestials.forEach((celestial, index) => {
    const movement = (index + 1) * 8;

    celestial.style.transform = `
      translate(${x * movement}px, ${y * movement}px)
    `;
  });
});

landing.addEventListener("mouseleave", () => {
  celestials.forEach((celestial) => {
    celestial.style.transform = "translate(0, 0)";
  });
});

const footer = document.querySelector("footer");

const footerCelestials = document.querySelectorAll(
  ".celestial--footer-star-1, .celestial--footer-star-2, .celestial--footer-moon"
);

footer.addEventListener("mousemove", (event) => {
  const rect = footer.getBoundingClientRect();

  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  footerCelestials.forEach((celestial, index) => {
    const movement = (index + 1) * 2;

    celestial.style.transform = `
      translate(${x * movement}px, ${y * movement}px)
    `;
  });
});

footer.addEventListener("mouseleave", () => {
  footerCelestials.forEach((celestial) => {
    celestial.style.transform = "translate(0, 0)";
  });
});

