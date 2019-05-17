using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Half_Sum_Element_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double result = 0;
            double sum = 0;
            int element = int.MinValue;
            

            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());
                sum = number + sum;
                if (number  > element)
                {
                    element = number;
                }

                if (sum - element == 0)
                {
                    result = element;
                }
                         
            }
            if (element == sum - element)
            {
                Console.WriteLine("Yes");
                Console.WriteLine($"Sum = {element}");

            }
            else
            {
                var diff = (sum - element) - (element);
                Console.WriteLine("No");
                Console.WriteLine($"Diff = {Math.Abs(diff)}");
            }

        }
    }
}
