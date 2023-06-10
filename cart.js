// const cartToggle = document.getElementById("cart_toggle");

function toggleCart() {
  const cart = document.getElementById("cart");
  let isOpen = false;

  console.log(cart);
  if (isOpen) {
    cart.classList.add("hidden");
    // cart.classList.remove("translate-x-0");
    // cart.classList.add("translate-x-full");
  } else {
    cart.classList.remove("hidden");
    // cart.classList.remove("translate-x-full");
    // cart.classList.add("translate-x-0");
  }
  updateCartUI();
  isOpen = !isOpen;

  console.log(isOpen);
}

const closeCart = () => {
  const cart = document.getElementById("cart");
  cart.classList.add("hidden");
};

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the product container element
  var productContainer = document.getElementById("product-container");

  // Add a click event listener to the product container
  // productContainer.addEventListener('click', function(event) {
  //   // Check if the clicked element is the "Add to Cart" button
  //   if (event.target.classList.contains('add-to-cart')) {
  //     // Get the product name
  //     var productName = event.target.parentNode.querySelector('h3').textContent;

  //     // Call the function to add the product to the cart
  //     addToCart(productName);
  //   }
  // });

  // Function to add a product to the cart
});

function addToCart({ id, name, price, category, quantity, image }) {
  console.log(id, name, price, category, quantity, image);
  // Create a new list item element
  const cartItemElement = document.createElement("li");

  var product = {
    name,
    image,
    price,
    category,
    quantity,
    id,
  };

  // Add the product to local storage
  addToLocalStorage(product);
}


function addToLocalStorage(product) {
  var cartItems = localStorage.getItem("cartItems");
  var cart = [];

  if (cartItems) {
    cart = JSON.parse(cartItems);
  }

  var existingProduct = cart.find(function (item) {
    return item.id === product.id;
  });

  if (existingProduct) {
    existingProduct.quantity += parseInt(product.quantity);
  } else {
    cart.push(product);
  }
  localStorage.setItem("cartItems", JSON.stringify(cart));
  console.log(cart);
}

function updateCartUI() {
  var cartItems = localStorage.getItem("cartItems");
  var cartItemsElement = document.getElementById("cart-items");

  if (cartItems) {
    var cart = JSON.parse(cartItems);
    cartItemsElement.innerHTML = "";

    cart.forEach(function (product) {
      var cartItem = document.createElement("li");
      cartItem.innerHTML = `<li class="flex py-6">
      <div 
      class="product h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 font:'Pacifico' "
      >
        <img
          src="${product.image}"
          alt="Beginner Punjabi Course"
          class="h-full w-full object-contain object-center"
        />
      </div>

      <div class="ml-4 flex flex-1 flex-col">
        <div>
          <div
            class="flex justify-between text-base font-medium text-gray-900"
          >
            <h3>
              <a href="/#Courses"
                >${product.name}</a
              >
            </h3>
            <p class="price ml-4" id="total-price">Rs. ${product.price}</p>
          </div>
          <p class="mt-1 text-sm text-gray-500">${product.category}</p>
        </div>
        <div
          class="flex flex-1 items-end justify-between text-sm"
        >
          <p class="quantity text-gray-500" id="total-quantity">${product.quantity}</p>

          <div class="flex">
            <button
              type="button"
              class="remove font-medium text-indigo-600 hover:text-indigo-500"
              onclick="removeFromCart(${product.id})"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>`;
      cartItemsElement.appendChild(cartItem);
    });

    // var cartTotal = document.getElementById("cart-total");
    updateTotalPrice();
  }
}
function removeFromCart(productId) {
  var cartItems = localStorage.getItem("cartItems");
  var cart = [];

  if (cartItems) {
    cart = JSON.parse(cartItems);

    // Find the index of the product with the specified ID
    var productIndex = cart.findIndex(function (item) {
      return item.id === productId;
    });

    if (productIndex !== -1) {
      // Get the product
      var product = cart[productIndex];

      // Decrement the quantity if it is greater than 1
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        // Remove the product from the cart if the quantity is 1
        cart.splice(productIndex, 1);
      }

      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }

  updateCartUI();
}

function updateTotalPrice() {
  var cartItems = localStorage.getItem("cartItems");
  var totalPriceElement = document.getElementById("cart-total");
  var totalQuantityElement = document.getElementById("total-quantity");

  if (cartItems) {
    var cart = JSON.parse(cartItems);

    // Use the reduce() method to calculate the total price and quantity
    var totalPrice = cart.reduce(
      function (total, product) {
        var price = parseFloat(product.price);
        var quantity = parseInt(product.quantity);

        // Increment the total quantity
        total.quantity += quantity;

        // Increment the total price
        total.price += price * quantity;

        return total;
      },
      { price: 0, quantity: 0 }
    );

    totalPriceElement.textContent = "Rs." + totalPrice.price.toFixed(2);
    totalQuantityElement.textContent = totalPrice.quantity;
  } else {
    totalPriceElement.textContent = "Rs. 0.00";
    totalQuantityElement.textContent = "0";
  }
}