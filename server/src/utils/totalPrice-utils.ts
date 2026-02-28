import { FoodModel } from "../models";

type OrderItemType = {
  food: string;
  quantity: string;
};

export const TotalPriceUtils = async (orderItems: OrderItemType[]) => {
  const allFoods = Promise.all(
    orderItems.map(
      async ({ food, quantity }: { food: String; quantity: String }) => {
        const foundFood = await FoodModel.findById(food);

        return Number(foundFood?.price) * Number(quantity);
      },
    ),
  );

  const orderedItems = await allFoods;

  const total = orderedItems.reduce((acc, item) => acc + item, 0);
  return total;
};
