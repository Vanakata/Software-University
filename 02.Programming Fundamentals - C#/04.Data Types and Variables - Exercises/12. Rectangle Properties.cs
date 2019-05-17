using System;

namespace _12._Rectangle_Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            double width = double.Parse(Console.ReadLine());
            double height = double.Parse(Console.ReadLine());

            double perimeter = 2 * (width + height);
            Console.WriteLine(perimeter);
            double area = width * height;
            Console.WriteLine(area);
            double diagonal = width * width + height * height;
            Console.WriteLine(Math.Sqrt(diagonal));
        }
    }
}
