using System;
using System.Collections.Generic;
using System.Linq;

namespace Practice_1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int[] arr;

            if (numbers.Length == 1)
            {
                Console.WriteLine(numbers[0]);
                return;
            }
            else if (numbers.Length % 2 == 0)
            {
                arr = new int[2];
                arr[0] = numbers[numbers.Length / 2 - 1];
                arr[1] = numbers[numbers.Length / 2];
            }
            else 
            {
                arr = new int[3];
                arr[0] = numbers[numbers.Length / 2 - 1];
                arr[1] = numbers[numbers.Length / 2];
                arr[2] = numbers[numbers.Length/2 + 1];
            }
            Console.WriteLine(string.Join(", ", arr));
        }
    }
}





