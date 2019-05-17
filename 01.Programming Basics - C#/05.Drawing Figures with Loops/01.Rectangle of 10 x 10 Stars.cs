using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rectangle_of_10_x_10_Stars_S
{
    class Program
    {
        static void Main(string[] args)
        {
            string stars = new string('*', 10);
			
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(stars);
            }
        }
    }
}
