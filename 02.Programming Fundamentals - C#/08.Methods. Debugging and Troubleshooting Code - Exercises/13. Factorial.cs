using System;
using System.Numerics;



namespace _13.Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            BigInteger factorial = BigInteger.Parse(Console.ReadLine());

            BigInteger sum = 1;

            for (int i = 1; i < factorial; i++)
            {
                sum = sum+(sum * i);
            }
            Console.WriteLine(sum);
        }
    }
}
