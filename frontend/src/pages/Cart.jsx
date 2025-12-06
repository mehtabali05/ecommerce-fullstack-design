import { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'T-shirts with multiple colors, for men',
      price: 10.30,
      quantity: 2,
      size: 'Medium',
      color: 'Blue',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200',
      seller: 'Seller: ABC Electronics',
    },
    {
      id: '2',
      name: 'T-shirts with multiple colors, for men',
      price: 10.30,
      quantity: 1,
      size: 'Large',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=200',
      seller: 'Seller: Tech World',
    },
    {
      id: '3',
      name: 'T-shirts with multiple colors, for men',
      price: 10.30,
      quantity: 1,
      size: 'Small',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200',
      seller: 'Seller: Fashion Store',
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 60;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-1 max-w-[1400px] mx-auto px-4 py-6 w-full">

        <h1 className="text-2xl font-semibold mb-6">My Cart ({cartItems.length})</h1>

        <div className="grid grid-cols-12 gap-6">
          {/* Cart Items */}
          <div className="col-span-8">
            <div className="bg-white rounded-lg border border-gray-200">
              {cartItems.map((item, idx) => (
                <div key={item.id} className={`p-6 ${idx !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 p-3 bg-gray-100 object-cover rounded border border-gray-200"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      <div className="flex gap-4 text-gray-500">
                        <span>Size: {item.size}</span>
                        <span>Color: {item.color}</span>
                        <span>Material: Plastic</span>
                      </div>
                      <p className="text-gray-500 mb-2">{item.seller}</p>

                      <div>
                        <button className='text-red-500 border border-gray-300 px-2 py-1 rounded-md mr-3'>Remove</button>
                        <button className='text-blue-500 border border-gray-300 px-2 py-1 rounded-md'>Save to later</button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <div className="text-right">
                        <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        <select name="" id="" className='border border-gray-300 px-3 mt-2 py-2'>
                          <option value=""> Qty : {item.quantity} </option>
                          <option value=""> Qty: {item.quantity} </option>   
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Saved for Later */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Saved for later</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200"
                    alt="Saved item"
                    className="w-24 h-24 object-cover rounded border border-gray-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">T-shirts with multiple colors, for men</h3>
                    <p className="text-sm text-gray-600 mb-2">Seller: ABC Electronics</p>
                    <div className="flex items-center gap-4">
                      <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                        Move to cart
                      </button>
                      <button className="text-sm text-gray-500 hover:text-red-500">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-lg font-semibold">$10.30</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-span-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-red-500">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium mb-3">
                Proceed to checkout
              </button>
              
              <Link
                to="/"
                className="block text-center text-blue-500 hover:text-blue-600 font-medium"
              >
                Continue shopping
              </Link>
            </div>

            {/* Coupon Code */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4">
              <h3 className="font-semibold mb-3">Have a coupon?</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 font-medium">
                  Apply
                </button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4">
              <h3 className="font-semibold mb-3">We accept</h3>
              <div className="flex gap-2">
                <div className="px-3 py-2 border border-gray-200 rounded">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa"
                    className="h-6"
                  />
                </div>
                <div className="px-3 py-2 border border-gray-200 rounded">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    className="h-6"
                  />
                </div>
                <div className="px-3 py-2 border border-gray-200 rounded">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    alt="PayPal"
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
