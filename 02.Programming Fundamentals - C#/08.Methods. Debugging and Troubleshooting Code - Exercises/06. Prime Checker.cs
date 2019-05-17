using System;

namespace _06._Prime_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(IsPrime());


        }
        static string IsPrime()
        {
            double num = double.Parse(Console.ReadLine());
            string True = "True";
            if (num < 2)
            {
                True = "False";
            }
            else
            {
                for (int i = 2; i <= Math.Sqrt(num); i++)
                {
                    if (num % i == 0)
                    {
                        True = "False";
                        break;
                    }
                }
            }
            return True;
        }
    }
}
