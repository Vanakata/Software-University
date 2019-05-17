using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Numbers_1_N_with_Step_3_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int number;
			
            for (int i = 1; i <= n; i+=3)
            {
                number = i;
                Console.WriteLine(number);
                
            }
            

        }
    }
}
