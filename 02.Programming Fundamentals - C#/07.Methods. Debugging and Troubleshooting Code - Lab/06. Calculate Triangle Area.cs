using System;

namespace _06._Calculate_Triangle_Area
{
    class Program
    {
        static void Main(string[] args)
        {
            double width = double.Parse(Console.ReadLine());
            double height = double.Parse(Console.ReadLine());
            double areaTriangle = TriangleArea(width, height);
            Console.WriteLine(areaTriangle);


        }
        static double TriangleArea(double width,double height)
        {
            return (width * height) / 2;
        }
    }
}
