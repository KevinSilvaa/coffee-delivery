// Styling Imports
import { HeaderContainer } from "./styles";

// Strategic Imports
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

// Icons Imports
import { ShoppingCart, MapPin } from "phosphor-react";

// Image Imports
import logoCoffeeDelivery from "/assets/logo-coffee-delivery.svg"

export function Header() {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} />
      </Link>

      <nav>
        <NavLink to={"https://maps.app.goo.gl/WR2kAXgeUjiMXBPy7"} target="_blank" title="Localização da loja">
          <MapPin
            size={22}
            weight="fill"
          />
          Porto Alegre, RS
        </NavLink>
        <NavLink to="/cart" title="Carrinho de compras">
          <ShoppingCart
            size={22}
            weight="fill"
          />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
