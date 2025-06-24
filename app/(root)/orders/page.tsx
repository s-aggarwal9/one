import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Orders = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await getMyOrders(userId);

  return (
    <div>
      <div>
        <h1>Orders</h1>
        {orders.length === 0 ? (
          <div>
            <p>You have not placed any orders yet</p>
          </div>
        ) : (
          <div>
            {orders.map((order) => (
              <div key={order.orderNumber}>
                <h2>Order {order.orderNumber}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
