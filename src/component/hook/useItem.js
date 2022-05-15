import { useEffect, useState } from "react";

const useItems = () => {
      const [items, setItems] = useState([]);
      useEffect(() => {
            fetch('https://hidden-mountain-97145.herokuapp.com/manageItem')
                  .then(res => res.json())
                  .then(data => setItems(data));
      }, []);
      return [items, setItems]
}
export default useItems

