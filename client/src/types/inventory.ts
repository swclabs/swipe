export interface Item {
  id: number;
  product_img: string;
  product_name: string;
  item_code: string;
  price: string;
  category: string;
  color: string;
  specs: Specs;
}

interface Specs {
  ssd: string;
  ram: string;
  desc: string;
  connection: string;
}
