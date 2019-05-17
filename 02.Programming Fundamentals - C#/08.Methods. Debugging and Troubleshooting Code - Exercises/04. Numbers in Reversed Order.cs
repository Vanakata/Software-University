using System;

namespace _04._Numbers_in_Reversed_Order
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(StringReverse());
        }
        static string StringReverse()
        {
            string text = Console.ReadLine();
            char[] cArray = text.ToCharArray();
            Array.Reverse(cArray);
            return new string(cArray);
        }
    }
}
