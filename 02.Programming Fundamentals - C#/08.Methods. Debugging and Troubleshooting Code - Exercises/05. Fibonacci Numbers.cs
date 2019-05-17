using System;
using System.Linq;

namespace _07._Primes_in_Given_Range
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            FibonacciNumbers();
        }
        static int FibonacciNumbers()
        {
            int number = int.Parse(Console.ReadLine());
            int fNumber = 1;
            int fNumber1 = 1;
            int sum = 0;
            if (number < 2)
            {
                Console.WriteLine("1");
            }
            else
            {
                for (int i = 2; i <= number; i++)
                {
                    sum = fNumber + fNumber1;
                    fNumber = fNumber1;
                    fNumber1 = sum;
                }
                Console.WriteLine(fNumber1);
            }
            return fNumber1;
        }

    }
}
