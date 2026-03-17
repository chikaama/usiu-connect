// src/Product.java
public class Product {
    private String name;
    private int stock;

    public Product(String name, int stock) {
        this.name = name;
        this.stock = stock;
    }

    public String getName() { return name; }
    public int getStock() { return stock; }
    public void addStock(int quantity) { this.stock += quantity; }
    public void reduceStock(int quantity) { this.stock -= quantity; }
}
