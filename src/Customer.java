// Customer.java
public class Customer {
    private Order order;

    public Customer(Order order) {
        this.order = order;
    }

    public void buyProduct(int quantity) {
        System.out.println("Customer places order for " + quantity + " units.");
        boolean success = order.placeOrder(quantity);
        if (success) {
            System.out.println("Customer: Order successful!");
        } else {
            System.out.println("Customer: Order could not be fulfilled.");
        }
    }
}
