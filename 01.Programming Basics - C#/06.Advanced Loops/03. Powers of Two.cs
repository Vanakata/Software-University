using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Powers_of_Two_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int number = 1;
			
            for (int i = 1; i <= n+1; i++)
            {
                Console.WriteLine(number);
                number = number * 2;
            }
        }
    }
}
