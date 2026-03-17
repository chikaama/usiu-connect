// Inventory.java
public class Inventory {
    private Product product;
    private Supplier supplier;

    public Inventory(Product product, Supplier supplier) {
        this.product = product;
        this.supplier = supplier;
    }

    public boolean checkStock(int quantity) {
        return product.getStock() >= quantity;
    }

    public void restock(int quantity) {
        System.out.println("Inventory requests restock...");
        supplier.deliver(product, quantity);
    }

    public void updateStock(int quantity) {
        product.reduceStock(quantity);
        System.out.println("Inventory updates stock. Remaining: " + product.getStock());
    }
}
