import builderStore from "@/store/modules/builder.store";
import cartStore from "@/store/modules/cart.store";
import authStore from "@/store/modules/auth.store";
import ordersStore from "@/store/modules/orders.store";

export default {
  Orders: ordersStore,
  Builder: builderStore,
  Cart: cartStore,
  Auth: authStore,
};
