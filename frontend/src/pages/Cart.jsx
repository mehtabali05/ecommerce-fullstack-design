import { MdLock } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import PromoBanner from '../components/PromoBanner';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';


export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  // Logic for totals
  const discount = 20;
  const tax = 5;
  const finalTotal = totalPrice > 0 ? (totalPrice - discount + tax) : 0;

  if (cart?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4 bg-gray-50">
        <BsCart3 className="text-8xl text-gray-200" />
        <h2 className="text-2xl font-semibold text-gray-400">Your cart is empty</h2>
        <Link to="/products" className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 shadow-lg transition-all">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">

        <h1 className="text-2xl font-semibold mb-6">My Cart ({cart?.length})</h1>

        <div className="grid grid-cols-12 gap-6">
          {/* Cart Items */}
          <div className="col-span-8">
            <div className="bg-white rounded-lg p-2 border border-gray-200">
              {JSON.stringify(cart,null,4)}
              {cart?.map((item,idx) => (
                <div key={item._id} className={`p-6 ${idx !== cart?.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex gap-4">
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="w-24 h-24 p-3 bg-gray-100 object-cover rounded border border-gray-200"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      <div className="flex gap-4 text-gray-500">
                        <span>Size: Small</span>
                        <span>Color: Black</span>
                        <span>Material: Plastic</span>
                      </div>
                      <p className="text-gray-500 mb-2">Mehtab Ali</p>

                      <div>
                        <button onClick={() => removeFromCart(item._id)} className='text-red-500 cursor-pointer border border-gray-300 px-2 py-1 rounded-md mr-3'>Remove</button>
                        <button className='text-blue-500 border cursor-pointer border-gray-300 px-2 py-1 rounded-md'>Save for later</button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <div className="text-right">
                        <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        <select 
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
                          className='border border-gray-300 rounded-md px-3 mt-2 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none'
                          >
                          {[...Array(10).keys()].map((q) => (
                            <option key={q + 1} value={q + 1}>Qty: {q + 1}</option>
                          ))}   
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className='flex justify-between p-4 border-t border-gray-200'>
              <button 
              onClick={() => navigate('/products')}
              className='flex items-center gap-3 bg-blue-500 text-white cursor-pointer p-2 rounded-lg'
              >
                <FaArrowLeft /> Back to shop</button>
              <button className='text-blue-500 cursor-pointer p-2 rounded-lg border border-gray-300'>Remove all</button>
            </div>
            </div>


              {/* Services Section */}
            <div className='flex gap-8 mt-8'>
              <div className='flex items-center gap-5'>
                <div className='bg-gray-300 p-4 rounded-full'>
                <MdLock className='text-xl text-gray-700' />
                </div>
                <div className='flex flex-col'>
                  <span>Secure payment</span>
                  <span className='text-gray-500'>Have you ever finally just</span>
                </div>
              </div>  
              <div className='flex items-center gap-5'>
                <div className='bg-gray-300 p-4 rounded-full'>
                <MdMessage className='text-xl text-gray-700' />
                </div>
                <div className='flex flex-col'>
                  <span>Customer Support</span>
                  <span className='text-gray-500'>Have you ever finally just</span>
                </div>
              </div>  
              <div className='flex items-center gap-5'>
                <div className='bg-gray-300 p-4 rounded-full'>
                <GrDeliver className='text-xl text-gray-700' />
                </div>
                <div className='flex flex-col'>
                  <span>Free Delivery</span>
                  <span className='text-gray-500'>Have you ever finally just</span>
                </div>
              </div>
            </div>

            {/* Saved for Later */}
            <div className="mt-6 mb-6 bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Saved for later</h2>
              <div className="flex gap-3">
                {[1, 2, 3, 4].map((i,idx) => (         
                  <div className="flex flex-col gap-4 w-50" key={idx}>
                    <div className='flex items-center justify-center bg-gray-300 '>
                      <img
                        src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200"
                        alt="Saved item"
                        className="w-[80%] h-[80%] object-cover rounded border border-gray-200"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold">$10.30</p>
                      <h3 className="text-xl text-gray-400 mb-1 mt-1">T-shirts with multiple colors, for men</h3>
                      
                      <div className="flex items-center gap-4">
                        <button className="flex gap-3 text-xl items-center text-blue-500 border border-gray-300 p-3 rounded-lg hover:text-blue-600 font-medium">
                          <BsCart3 className='w-6 h-6' />
                          Move to cart
                        </button>
                      </div>
                    </div>   
                  </div>
                ))}
              </div>
            </div>

            
            <PromoBanner />
          </div>

          {/* Order Summary */}
          <div className="col-span-4">
            {/* Coupon Code */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h3 className="font-semibold mb-3">Have a coupon?</h3>
              <div className="flex border border-gray-300 rounded-lg">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 px-4 py-2  focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-2 border-l border-gray-300 text-gray-700 hover:bg-gray-200 font-medium">
                  Apply
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-red-500">-${discount}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>+${tax}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              <button className="w-full text-xl px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-blue-600 font-medium mb-3">
                Checkout
              </button>

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
                <div className="px-3 py-2 border border-gray-200 rounded">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZbsxfN5Kq7rN_6CQmWwrgZ2xHU_VKmI2cQ&s"
                    alt="apple-pay"
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
