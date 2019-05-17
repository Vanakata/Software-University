using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinema_S
{
    class Program
    {
        static void Main(string[] args)
        {
            string projections = Console.ReadLine();
            int rows = int.Parse(Console.ReadLine());
            int columns = int.Parse(Console.ReadLine());
            double premiere = 12.00;
            double normal = 7.50;
            double discount = 5.00;
			
            if (projections == "Premiere")
            {
                double income = premiere * rows * columns;
                Console.WriteLine($"{income:f2}");
                Console.WriteLine("leva");
            }
            else if (projections == "Normal")
            {
                double income = normal * rows * columns;
                Console.WriteLine($"{income:f2}");
                Console.WriteLine("leva");
            }
            else if (projections == "Discount")
            {
                double income = discount * rows * columns;
                Console.WriteLine($"{income}:f2");
                Console.WriteLine("leva");
            }
                
        }
    }
}
