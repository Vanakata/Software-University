using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            if (n>=1 && n <=12)
            {
                int factorial = 1;
                int sum = 0;
                int temp = 0
				
                for (int i =1; i <= n; i++)
                {
                    temp = factorial * i;
                    factorial = temp;
                }
                Console.WriteLine(factorial);
            }
        }

    }

}
