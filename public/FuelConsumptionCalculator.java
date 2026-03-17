import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class FuelConsumptionCalculator extends JFrame {
    private JTextField distanceField;
    private JTextField fuelField;
    private JLabel resultLabel;

    public FuelConsumptionCalculator() {
        setTitle("Fuel Consumption Calculator");
        setSize(350, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(4, 2, 5, 5));

        add(new JLabel("Distance (km):"));
        distanceField = new JTextField();
        add(distanceField);

        add(new JLabel("Fuel used (litres):"));
        fuelField = new JTextField();
        add(fuelField);

        JButton calcButton = new JButton("Calculate");
        add(calcButton);

        resultLabel = new JLabel("Fuel consumption: -- km/l");
        add(resultLabel);

        calcButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    double distance = Double.parseDouble(distanceField.getText());
                    double fuel = Double.parseDouble(fuelField.getText());

                    if (fuel <= 0) {
                        JOptionPane.showMessageDialog(null,
                                "Fuel used must be greater than zero.",
                                "Error", JOptionPane.ERROR_MESSAGE);
                        return;
                    }

                    double consumption = distance / fuel;
                    resultLabel.setText("Fuel consumption: " + consumption + " km/l");
                } catch (Exception ex) {
                    JOptionPane.showMessageDialog(null,
                            "Please enter valid numbers.",
                            "Input Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new FuelConsumptionCalculator().setVisible(true);
        });
    }
}
