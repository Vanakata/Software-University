using System;
using System.Linq;

namespace _05._Rounding_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] numbers = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            for (int i = 0; i < numbers.Length; i++)
            {
                double temp = 0;
                temp = numbers[i];
                numbers[i] = Math.Round(temp,MidpointRounding.AwayFromZero);
                Console.WriteLine($"{temp} => {numbers[i]}");
            }
        }
    }
}
