using System;

namespace PriceCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // Test the price calculation with different quantities
            Console.WriteLine("Price Calculator Program");
            Console.WriteLine("========================");
            Console.WriteLine();

            // Test cases based on the image
            TestPriceCalculation(0);
            TestPriceCalculation(5);
            TestPriceCalculation(50);
            TestPriceCalculation(100);
            TestPriceCalculation(150);

            Console.WriteLine();
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }

        static void TestPriceCalculation(int quantity)
        {
            double price = CalculatePrice(quantity);
            Console.WriteLine($"Quantity: {quantity,3} | Price per item: ${price:F2}");
        }

        static double CalculatePrice(int quantity)
        {
            double price;

            if (quantity <= 0)
            {
                price = 0;
            }
            else if (quantity < 100)
            {
                price = 9.50;
            }
            else
            {
                price = 7.75;
            }

            return price;
        }
    }
}