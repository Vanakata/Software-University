using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            int fibonaci1 = 1;
            int fibonaci2 = 1;
            int sumFibonaci = 0;
			
            if (number<2)
            {
                Console.WriteLine("1");
            }
            else 
            {
                for (int i = 0; i < number; i++)
                {
                    sumFibonaci = fibonaci1 + fibonaci2;
                    fibonaci1 = fibonaci2;
                    fibonaci2 = sumFibonaci;
                }
                Console.WriteLine(fibonaci1);
            }
            
        }

    }

}


