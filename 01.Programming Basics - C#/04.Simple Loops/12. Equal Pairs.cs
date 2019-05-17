using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Equal_Pairs_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double sum = 0;
            double lastSum = 0;
            double diff = 0;
			
            for (int i = 0; i < n; i++)
            {
                int number1 = int.Parse(Console.ReadLine());
                int number2 = int.Parse(Console.ReadLine());
                sum = number2 + number1;
                
                if (i >0)
                {
                    diff = lastSum - sum;
                    diff = Math.Abs(diff);
                }
                lastSum = sum;
            }
            if (diff == 0)
            {
                Console.WriteLine($"Yes, value={sum}");
            }
            else if (diff != 0)
            {
                Console.WriteLine($"No maxdiff={diff}");
            }

        }
    }
}
