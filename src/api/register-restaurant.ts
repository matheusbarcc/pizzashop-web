import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
  password: string;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
  password,
}: RegisterRestaurantBody) {
  await api.post("/restaurants", {
    restaurantName,
    managerName,
    email,
    phone,
    password,
  });
}
