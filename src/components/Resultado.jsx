import styled from "@emotion/styled";

const Resultados = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  flex-direction: column;
  margin-bottom: 30px;
  
  @media only screen and (min-width: 450px) {
  flex-direction: row;
  }
`;
const Texto = styled.p`
  font-size: 16px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Image = styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Resultados>
      <Image
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen criptomoneda"
      />

      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Resultados>
  );
};

export default Resultado;
