/* eslint-disable react/prop-types */
const CartModal = ({ onClose, cartItems, totalQuantity, totalPrice, onContinueShopping, productColors }) => {
    
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target.id === "cart-modal-overlay") onClose();
      }}
      id="cart-modal-overlay"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-xl p-11 relative w-[651px]">
        <h2 className="text-2xl font-bold mb-4 text-[#364A63]">Your Cart</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse"><thead>
            <tr className="text-[#8091A7] border-b">
              <th className="text-left py-2 font-normal">Item</th>
              <th className="text-left py-2 font-normal">Color</th>
              <th className="text-left py-2 font-normal">Size</th>
              <th className="text-left py-2 font-normal">Qnt</th>
              <th className="text-right py-2 font-normal">Price</th>
            </tr>
          </thead>
            <tbody>
              {cartItems.map((item, index) => {
                const colorInfo = productColors.find(c => c.color === item.color);
                return (
                  <tr key={index} className="border-b text-[#364A63]">
                    <td className="py-3 flex items-center space-x-4">
                      <img
                        src={colorInfo?.image}
                        alt={item.color}
                        className="w-10 h-10 object-cover rounded-md"
                      />
                      <span className="font-normal">{item.name}</span>
                    </td>
                    <td className="py-3 text-left font-normal">{item.color}</td>
                    <td className="py-3 text-center font-bold">{item.size}</td>
                    <td className="py-3 text-center font-bold">{item.quantity}</td>
                    <td className="py-3 text-right font-bold">
                      ${item.totalPrice.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-[#364A63]">
                <td className="font-bold py-2">Total</td>
                <td></td>
                <td></td>
                <td className="font-bold text-center">{totalQuantity}</td>
                <td className="font-bold text-right">${totalPrice.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex justify-end space-x-4 mt-6 font-bold">
          <button
            onClick={onContinueShopping}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-200"
          >
            Continue Shopping
          </button>
          <button className="px-4 py-2 bg-[#6576FF] text-white rounded hover:bg-[#7988fd]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;