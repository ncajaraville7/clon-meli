import './MenuResponsive.css';

const MenuResponsive = () => {
    return (
        <div className="menu-responsive">
            <div className="menu-responsive__img">
                <p>aca va</p>    
            </div>
            <div className="menu-responsive__content">
                <h3>Bienvenido</h3>
                <p>Ingresa a tu cuenta para ver tus compras, favoritos, etc.</p>
                <div className="menu-responsive__content__buttons">
                    <button>Ingresa</button>
                    <button>Crea tu cuenta</button>
                </div>
            </div>
        </div>
    )
}

export default MenuResponsive;