// Styling Imports
import { HomeContainer, BannerContainer, BannerInfos, BannerBenefits, CoffeeListContainer, CoffeeCardsContainer } from "./styles";

// Components Imports
import { Card } from "../../components/Card";

// Strategic Imports
import { coffees } from "../../../data.json";

// Icons Imports
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

// Image Imports
import coffeeImage from "/public/assets/coffee-image.png";
import heroBg from "/public/assets/hero-bg.png";

export function Home() {

  return (
    <HomeContainer>
      <BannerContainer>
        <BannerInfos>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <BannerBenefits>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </BannerBenefits>
        </BannerInfos>

        <img src={coffeeImage} alt="Imagem de um copo de café do Coffee Delivery" />
      </BannerContainer>
      <img src={heroBg} id="bg-image" />

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeCardsContainer>
          {
            coffees.map(item => (
              <Card 
                key={item.id}
                coffee={item}
              />
            ))
          }
        </CoffeeCardsContainer>
      </CoffeeListContainer>
    </HomeContainer>
  );
}
