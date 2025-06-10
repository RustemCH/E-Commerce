import elements from "./helpers.js";

// ! Localstorage'a ekleme yapan fonksiyon
const saveToLocalStorage = (cart) => {
  // Dışarıdan verilen elemanı string e çevir ve localstorage'a ekle
  localStorage.setItem("cart", JSON.stringify(cart));
};

// ! Localstorage'dan eleman çağıran fonksiyon
const getFromLocalStorage = () => {
  // cart keyindeki tüm elemanları localstorage'dan al
  const strData = localStorage.getItem("cart");

  // !Eğer strData varsa bunu JSON.parse ile dönüştür ve return et eğer yoksa boş bir dizi return et
  return strData ? JSON.parse(strData) : [];
};

// ! Sepet toplamını hesaplayan fonksiyon
const calculateCartTotal = (cart) => {
  // cart'daki ürünlerin miktar ve fiyatını çarparak toplam sonucu elde et
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

};

const updateCartIcon = (cart) => {
  //! Septteki toplam ürün miktarını hesapla
  let totalQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  //! Septteki ürün miktarını dinamik şekilde render et
  elements.icon.setAttribute("data-quantity", totalQuantity);

  //! setAttribute bir elemana attribute eklemek için kullanılır
};

export {
  saveToLocalStorage,
  getFromLocalStorage,
  calculateCartTotal,
  updateCartIcon,
};