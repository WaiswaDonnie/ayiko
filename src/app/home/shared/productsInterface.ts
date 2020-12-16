
export interface Iproducts {
  productId?: number;
  productName?: string;
  price?: number;
  delivery?: string;
  productImage?: string;
  description?: string;
  hotel?: string;
  phoneContact?: number;
}

export interface Inurse{
  nurseId?: number;
  nurseName?: string;
  nurseImage?: string;
  nurseContact?: number;
  nurseServices?: string;
}

export interface Ispecial{
  specialId?: number;
  name?: string;
  carType?: string;
  carImage?: string;
  phoneContact?: number;
}

export interface Itech{
  serviceId?: number;
  name?: string;
  serviceImage?: string;
  services?: string;
  phoneContact?: number;
}

export interface Iadvert{
  advertName?: string;
  advertImage?: string;
}
