using System;

namespace _14._Integer_to_Hex_and_Binary
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            string hexValue = number.ToString("X");
            Console.WriteLine(hexValue);
            int binValue = Convert.ToInt32(hexValue, 16);
            Console.WriteLine(Convert.ToString(binValue,2)); 
            
        }
    }
}
