using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Small_Shop_S
{
    class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine();
            string town = Console.ReadLine();
            double amount = double.Parse(Console.ReadLine());
            if (product == "coffee" && town == "Sofia") 
            {
                Console.WriteLine(amount * 0.50);
            }
            if (product == "water" && town == "Sofia")
            {
                Console.WriteLine(amount * 0.80);
            }
            if (product == "beer" && town == "Sofia")
            {
                Console.WriteLine(amount * 1.20);
            }
            if (product == "sweets" && town == "Sofia")
            {
                Console.WriteLine(amount * 1.45);
            }
            if (product == "peanuts" && town == "Sofia")
            {
                Console.WriteLine(amount * 1.60);
            }
            if (product == "coffee" && town == "Plovdiv")
            {
                Console.WriteLine(amount * 0.40);
            }
            if (product == "water" && town == "Plovdiv")
            {
                Console.WriteLine(amount * 0.70);
            }
            if (product == "beer" && town == "Plovdiv")
            {
                Console.WriteLine(amount * 1.15);
            }
            if (product == "sweets" && town == "Plovdiv")
            {
                Console.WriteLine(amount * 1.30);
            }
            if (product == "peanuts" && town == "Plovdiv")
            {
                Console.WriteLine(amount * 1.50);
            }
            if (product == "coffee" && town == "Varna")
            {
                Console.WriteLine(amount * 0.45);
            }
            if (product == "water" && town == "Varna")
            {
                Console.WriteLine(amount * 0.70);
            }
            if (product == "beer" && town == "Varna")
            {
                Console.WriteLine(amount * 1.10);
            }
            if (product == "sweets" && town == "Varna")
            {
                Console.WriteLine(amount * 1.35);
            }
            if (product == "peanuts" && town == "Varna")
            {
                Console.WriteLine(amount * 1.55);
            }
        }
    }
}
