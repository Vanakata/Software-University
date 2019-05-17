using System;
using System.Collections.Generic;
using System.Linq;

namespace Practice_1
{
    class Program
    {
        static void Main(string[] args)

        {
            List<int> numbers = Console.ReadLine().Split().Select(int.Parse).ToList();
            int[] sum = new int[numbers.Count - 1];
            bool isCondensed = false;

            while (numbers.Count > 1)
            {
                for (int i = 0; i < numbers.Count - 1; i++)
                {
                    sum[i] = numbers[i] + numbers[i + 1];
                }
                numbers.RemoveAt(0);
                for (int i = 0; i < numbers.Count; i++)
                {
                    numbers[i] = sum[i];
                    isCondensed = true;
                }
            }
            if (isCondensed == true)
            {
                Console.WriteLine(numbers[0]);
                return;
            }
            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}





