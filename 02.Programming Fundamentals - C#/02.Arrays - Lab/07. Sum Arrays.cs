using System;
using System.Linq;

namespace Practice_1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers1 = Console.ReadLine().Split().Select(x => int.Parse(x)).ToArray();

            int[] numbers2 = Console.ReadLine().Split().Select(x => int.Parse(x)).ToArray();
            int[] sum = new int[Math.Max(numbers1.Length, numbers2.Length)];

            for (int i = 0; i <= sum.Length; i++)
            {
                if (i >= sum.Length)
                {
                    break;
                }
                sum[i] = numbers1[i % numbers1.Length] + numbers2[i % numbers2.Length];
            }
            Console.WriteLine(string.Join(" ", sum));

        }
    }
}





