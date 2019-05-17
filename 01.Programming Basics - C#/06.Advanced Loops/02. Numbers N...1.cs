using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Numbers_N_1_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int number;
			
            for (int i = n; i >= 1; i--)
            {
                number = i;
                Console.WriteLine(number);
            }

        }
    }
}
