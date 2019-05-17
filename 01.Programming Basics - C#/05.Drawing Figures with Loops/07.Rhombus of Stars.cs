using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int row = 1; row <= n; row++)
            {
                for (int interval = 1; interval <= n - row; interval++)
                {
                    Console.Write(" ");
                }
                Console.Write("*");
                for (int col = 1; col <= row-1; col++)
                {
                    Console.Write(" *");
                }
                Console.WriteLine();
            }
            for (int row = n-1; row >= 1; row--)
            {
                for (int interval = 1; interval <= n-row; interval++)
                {
                    Console.Write(" ");
                }
                Console.Write("*");
                for (int col = 1; col <= row-1 ; col++)
                {
                    Console.Write(" *");
                }
                Console.WriteLine();
            }
        }
    }
}


