public class Main {
    public static void main(String[] args) {
        Product product = new Product("Laptop", 5);
        Supplier supplier = new Supplier();
        Inventory inventory = new Inventory(product, supplier);
        Warehouse warehouse = new Warehouse(inventory);
        Order order = new Order(warehouse);
        Customer customer = new Customer(order);

        customer.buyProduct(3);   // Order within stock
        customer.buyProduct(10);  // Order requiring restock
    }
}
