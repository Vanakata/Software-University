using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int lastDigit = 0;
            int sum = 0;
            int temp = 0;

            for (; num > 0;)
            {
                lastDigit = num % 10;
                temp = num / 10;
                sum = sum + lastDigit;
                num = temp;
            }
            Console.WriteLine(sum);
        }

    }

}
