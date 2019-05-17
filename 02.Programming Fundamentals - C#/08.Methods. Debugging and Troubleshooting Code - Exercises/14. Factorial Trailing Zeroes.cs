using System;
using System.Numerics;

namespace _14._Factorial_Trailing_Zeroes
{
    class Program
    {
        static void Main(string[] args)
        {
            BigInteger factorial = BigInteger.Parse(Console.ReadLine());
            BigInteger sum = 1;
            long counter = 0;

            for (int i = 1; i < factorial; i++)
            {
                sum = sum + (sum * i);
            }
            string trailingZeroes = Convert.ToString(sum);
            string newNumber = "";

            while (trailingZeroes.EndsWith("0"))
            {
                newNumber = trailingZeroes.Remove(trailingZeroes.Length - 1);
                counter++;
                trailingZeroes = newNumber;
            }
            Console.WriteLine(counter);
            
            
        }
    }
}
