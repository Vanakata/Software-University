using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int counter = 1;

            for (int row = 1; row <= n; row++)
            {
                for (int col = 0; col < row; col++)
                {
                    if (counter > n)
                    {
                        return;
                    }
                    Console.Write(counter+ " ");
                    counter++;
                }
                Console.WriteLine();
                
            }
        }

    }

}


