// Array to store sample data (e.g., products)
const products = ["Product 1", "Product 2", "Product 3"];

// Loop to dynamically display product data
// Only display products on the Home page
function displayProducts() {
    const main = document.querySelector('main');

    // Check if we are on the Home page by using the document title or another unique identifier
    if (document.title === "Home") {
        const productList = document.createElement('ul');

        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product;
            productList.appendChild(li);
        });

        main.appendChild(productList);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.title === "Home") {
        displayProducts();
    }
});


// Event Listener: On button click, add a new product
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Product';
    document.querySelector('main').appendChild(addButton);

    addButton.addEventListener('click', function () {
        const newProduct = prompt("Enter new product name:");
        if (newProduct) {
            products.push(newProduct);
            document.querySelector('ul').remove(); // Remove old list
            displayProducts(); // Re-display updated list
        }
    });

    displayProducts();
});

document.addEventListener('DOMContentLoaded', function () {
    // Form validation
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === '' || email === '') {
            formMessage.textContent = 'Please fill in all required fields.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Form submitted successfully!';
            formMessage.style.color = 'green';
            // Optionally store form data in localStorage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Dynamically display features
    const features = ["Feature 1: Responsive Design", "Feature 2: Dynamic Content", "Feature 3: Event Handling"];
    const featuresList = document.getElementById('featuresList');

    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Toggle visibility of additional feature
    const toggleFeatureBtn = document.getElementById('toggleFeatureBtn');
    const additionalFeature = document.getElementById('additionalFeature');

    toggleFeatureBtn.addEventListener('click', function () {
        if (additionalFeature.style.display === 'none') {
            additionalFeature.style.display = 'block';
        } else {
            additionalFeature.style.display = 'none';
        }
    });
});

