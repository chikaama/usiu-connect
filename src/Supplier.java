// Supplier.java
public class Supplier {
    public void deliver(Product product, int quantity) {
        System.out.println("Supplier delivers " + quantity + " units of " + product.getName());
        product.addStock(quantity);
    }
}
