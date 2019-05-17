using System;

namespace _09._Reversed_chars
{
    class Program
    {
        static void Main(string[] args)
        {
            char symbol = char.Parse(Console.ReadLine());
            char symbol1 = char.Parse(Console.ReadLine());
            char symbol2= char.Parse(Console.ReadLine());

            Console.Write($"{symbol2}{symbol1}{symbol}");
            Console.WriteLine();
        }
    }
}
