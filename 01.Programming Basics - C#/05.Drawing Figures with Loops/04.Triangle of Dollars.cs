using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Triangle_of_Dollars_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            for (int col = 0; col < n; col++)
            {
                Console.Write("$");
                for (int row = 0; row < col; row++)
                {
                    Console.Write(" $");
                }
                Console.WriteLine();
            }

        }
    }
}
