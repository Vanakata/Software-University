using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Odd__Even_Position_S
{
    class Program
    {
        static void Main(string[] args)
        {
            string n = (Console.ReadLine());
            int result = 0;

            for (int i = 0; i < n.Length; i++)
            {
                char curentChar = n[i];
                if (curentChar == 'a')
                {
                    result = result + 1;
                }
                else if (curentChar == 'e')
                {
                    result = result + 2;
                }
                else if (curentChar == 'i')
                {
                    result = result + 3;
                }
                else if (curentChar == 'o')
                {
                    result = result + 4;
                }
                else if (curentChar == 'u')
                {
                    result = result + 5;
                }
            }
            Console.WriteLine(result);

        }
    }
}
