using System;
using System.Linq;

namespace _01._Numbers_1_N_with_Step_3
{
    class Program
    {
        static void Main(string[] args)
        {
            double century = double.Parse(Console.ReadLine());
            double years = century * 100;
            double days = Math.Round(years * 365.2422);
            double hours = days * 24;
            double minutes = hours * 60;

            Console.WriteLine($"{century} centirues = {years} years = {days} days = {hours} hours = {minutes} minutes");

        }    
    }
}


