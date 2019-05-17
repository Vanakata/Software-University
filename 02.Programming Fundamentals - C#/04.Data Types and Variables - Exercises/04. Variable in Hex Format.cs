using System;

namespace _04._Variable_in_Hex_Format
{
    class Program
    {
        static void Main(string[] args)
        {
            string num1 = Console.ReadLine();
            Console.WriteLine(Convert.ToInt32(num1, 16));
        }
    }
}
