using System;

namespace _07._Math_Power
{
    class Program
    {
        static void Main(string[] args)
        {
            double number = double.Parse(Console.ReadLine());
            double power = double.Parse(Console.ReadLine());
            Console.WriteLine(NumberPower(number,power));
        }
        static double NumberPower(double number,double power)
        {
            return Math.Pow(number, power);
        }
    }
}
