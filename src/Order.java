// Order.java
public class Order {
    private Warehouse warehouse;

    public Order(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    public boolean placeOrder(int quantity) {
        System.out.println("Order system: Requesting product availability...");
        boolean available = warehouse.requestAvailability(quantity);
        if (available) {
            warehouse.updateCapacity(quantity);
            System.out.println("Order confirmed!");
            return true;
        } else {
            System.out.println("Order failed: Product unavailable.");
            return false;
        }
    }
}
