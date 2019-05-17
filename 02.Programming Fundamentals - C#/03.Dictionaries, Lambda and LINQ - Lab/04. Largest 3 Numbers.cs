using System;
using System.Collections.Generic;
using System.Linq;

namespace _Practice_
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Split().Select(x => int.Parse(x)).ToList();

            Console.WriteLine(string.Join(" ",nums.OrderByDescending(x => x).Take(3)));

        }

    }
}
