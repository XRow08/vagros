import axios from "axios";
import { useState, useEffect } from "react";

export function useGetUSDT() {
  const [price, setPrice] = useState(1);
  const [amount, setAmount] = useState("1");
  const [priceCicle, setPriceCicle] = useState("150000");
  const priceReal = Number(priceCicle) * Number(price) * Number(amount);

  useEffect(() => {
    async function getUSDT() {
      try {
        const { data } = await axios.get(
          "https://economia.awesomeapi.com.br/last/USDT-BRL"
        );
        setPrice(Number(data.USDBRLT.high));
      } catch (error) {
        console.error(error);
      }
    }
    getUSDT();
  }, []);

  return { setAmount, amount, priceReal, price, priceCicle, setPriceCicle };
}
