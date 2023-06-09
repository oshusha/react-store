import PropTypes from 'prop-types';

function ShopItemFunc({brand, coat, description, descriptionFull, currency, price}) {

    return (  
        <div className="main-content">
            <h2>{brand}</h2>
            <h1>{coat}</h1>
            <h3>{description}</h3>
            <div className="description">
                {descriptionFull}
            </div>
            <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{currency}{price}.00</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
}

ShopItemFunc.propTypes = {
    brand: PropTypes.string,
    coat: PropTypes.string, 
    description: PropTypes.string, 
    descriptionFull: PropTypes.string, 
    currency: PropTypes.string, 
    price: PropTypes.number
}

export default ShopItemFunc;