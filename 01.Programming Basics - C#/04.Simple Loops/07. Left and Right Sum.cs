using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Left_and_Right_Sum_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int leftSum = 0;
            int rightSum = 0;
            
            for (int i = 0; i < n; i++)
            {
                int leftNumber = int.Parse(Console.ReadLine());
                leftSum = leftNumber + leftSum;
            }
            for (int i = 0; i < n; i++)
            {
                int rightNumber = int.Parse(Console.ReadLine());
                rightSum = rightNumber + rightSum;
            }
            if (leftSum == rightSum)
            {
                Console.WriteLine($"Yes, sum = {rightSum}");
            }
            else
            {
                Console.WriteLine($"No, diff = {Math.Abs(rightSum-leftSum)}");
            }
        }
    }
}
