using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rectangle_of_N_x_N_Stars_S
{
    class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine());
            string stars = new string('*', size);
            for (int i = 0; i < size; i++)
            {
                Console.WriteLine(stars);
            }
        }
    }
}
