using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Christmas_Tree_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string middle = " | ";
			
            for (int row = 0; row <= n; row++)
            {
                for (int i = 0; i < n-row; i++)
                {
                    Console.Write(" ");
                }
                for (int i = 0; i < row; i++)
                {
                    Console.Write("*");
                }
                Console.Write(middle);

                for (int i = 0; i < row; i++)
                {
                    Console.Write("*");
                }
                Console.WriteLine(); 
            }
        }
    }
}
