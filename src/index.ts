import Config from 'config';
import Server from './Server';

const orderSubscription = Server.subscribe('admin.orders', { shopId: Config.get('shopId') }); // Subscribe to orders for the current shop. Does not need to be repeated.
const orders = Server.collection('shop.orders');

orders.onChange((order) => {
    if (!order.changed) return;
    const oldOrder = order.changed.prev;
    const currentOrder = order.changed.next;

    if (!oldOrder.paid && currentOrder.paid) { // Order changed from unpaid to paid.
        console.log(currentOrder) // Your order.
    }
});