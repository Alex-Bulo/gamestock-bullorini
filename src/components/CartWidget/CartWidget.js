import './CartWidget.css'

function CartWidget(props) {
   
    return (
        <div className="CartWidget">
            {/* deberia ser el Cart outline (no solido), pero es pago. No encontré */}
            <i className="fas fa-shopping-cart"></i>

        </div>
    );
}

export default CartWidget
