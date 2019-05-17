using System;
using System.Collections.Generic;
using System.Linq;

namespace _Practice_
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] input = Console.ReadLine().Split().Select(double.Parse).ToArray();
            SortedDictionary<double, int> numbers = new SortedDictionary<double, int>();

            foreach (var nums in input)
            {
                if (!numbers.ContainsKey(nums))
                {
                    numbers.Add(nums, 0);
                }
                numbers[nums]++;

            }
            foreach (var number in numbers)
            {
                Console.WriteLine($"{number.Key} -> {number.Value}");
            }
        }

    }
}
