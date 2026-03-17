// Warehouse.java
public class Warehouse {
    private Inventory inventory;

    public Warehouse(Inventory inventory) {
        this.inventory = inventory;
    }

    public boolean requestAvailability(int quantity) {
        if (!inventory.checkStock(quantity)) {
            inventory.restock(quantity * 2); // restock more than needed
        }
        return inventory.checkStock(quantity);
    }

    public void updateCapacity(int quantity) {
        inventory.updateStock(quantity);
    }
}
