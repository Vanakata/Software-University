using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Square_of_Stars_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            for (int r = 0; r < n; r++)
            {
                Console.Write("*");
                for (int c = 1; c < n; c++)
                {
                    Console.Write(" *");
                }
                Console.WriteLine();
            }
        }
    }
}
