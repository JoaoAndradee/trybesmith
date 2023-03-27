export interface IProducts {
  id?: number;
  name: string;
  amount: string;
  orderId?: string;
}

export interface IUser {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface TokenPayLoad {
  id?: number;
  username: string,
  exp?: number;
}

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface ILogin {
  username: string;
  password: string;
}
