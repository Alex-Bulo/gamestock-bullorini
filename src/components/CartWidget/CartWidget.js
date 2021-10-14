import './CartWidget.css'

function CartWidget() {
   
    return (
        <div className="CartWidget">
            {/* deberia ser el Cart outline (no solido), pero es pago. No encontré */}
            <i className="fas fa-shopping-cart"></i>
            <p className='cartQty'>0</p>

        </div>
    );
}

export default CartWidget
