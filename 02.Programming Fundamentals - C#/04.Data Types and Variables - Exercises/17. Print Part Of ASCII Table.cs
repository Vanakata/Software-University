using System;

namespace _17._Print_Part_Of_ASCII_Table
{
    class Program
    {
        static void Main(string[] args)
        {
            int symbol = int.Parse(Console.ReadLine());
            int symbol1 = int.Parse(Console.ReadLine());

            for (char j = Convert.ToChar(symbol); j <= symbol1; j++)
            {
                Console.Write(j + " ");
            }
            Console.WriteLine();


        }
    }
}
