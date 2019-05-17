using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            int sum = 0;
            int magicNumber = 0;
            bool temp = false;
			
            for (int ch = 1; ch <= number; ch++)
            {
                magicNumber = ch;
                while (ch > 0)
                {
                    sum += ch % 10;
                    ch = ch / 10;
                }
                temp = (sum == 5) || (sum == 7) || (sum == 11);
                Console.WriteLine($"{magicNumber} -> {temp}");
                sum = 0;
                ch = magicNumber;
            }


        }
    }
}


