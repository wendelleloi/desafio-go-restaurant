
export interface Food {
  available: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  price: string;
}

export type FoodForm = Omit<Food, "available">;