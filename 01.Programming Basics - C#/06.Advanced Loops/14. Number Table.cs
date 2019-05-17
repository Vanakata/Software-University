using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int number = 0;
			
            for (int row = 0; row < n; row++)
            {
                for (int col = 0; col < n; col++)
                {
                    number = row + col + 1;
                    if (number > n)
                    {
                        number = 2 * n - number;
                    }
                    Console.Write(number + " ");
                    
                }
                Console.WriteLine();
            }
        }

    }

}


