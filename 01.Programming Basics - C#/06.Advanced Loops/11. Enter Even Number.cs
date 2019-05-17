using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                try
                {
                    int number = int.Parse(Console.ReadLine());

                    if (number % 2 == 0)
                    {
                        Console.WriteLine($"Even number entered: {number}");
                        break;
                    }
                    else
                    {
                        Console.WriteLine("The number is not even.");
                    }

                }
                catch (Exception)
                {
                    Console.WriteLine("Invalid number!");
                    
                }

            }

        }

    }

}


