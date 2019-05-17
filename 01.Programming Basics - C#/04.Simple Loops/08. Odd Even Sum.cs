using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Odd_Even_Sum_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int evenSum = 0;
            int oddSum = 0;
			
            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());
                if (i %2 ==0)
                {
                    evenSum = number + evenSum;
                }
                else
                {
                    oddSum = number + oddSum;
                }
            }
            if (oddSum == evenSum)
            {
                Console.WriteLine($"Yes, sum = {oddSum}");
            }
            else
            {
                Console.WriteLine($"No, diff = {Math.Abs(oddSum - evenSum)}");
            }
        }
    }
}
