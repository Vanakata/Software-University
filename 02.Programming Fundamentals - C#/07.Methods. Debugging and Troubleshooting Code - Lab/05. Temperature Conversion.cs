using System;

namespace _05._Temperature_Conversion
{
    class Program
    {
        static void Main(string[] args)
        {
            double temp = double.Parse(Console.ReadLine());
            Console.WriteLine($"{FahrenheitToCelsiusConverter(temp):f2}");
            
        }
        static double FahrenheitToCelsiusConverter(double fahrenheit)
        {
            return (fahrenheit - 32) * 5 / 9;
        }
    }
}
