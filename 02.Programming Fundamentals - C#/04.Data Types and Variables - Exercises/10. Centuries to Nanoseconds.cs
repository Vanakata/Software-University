using System;

namespace _10._Centuries_to_Nanoseconds
{
    class Program
    {
        static void Main(string[] args)
        {
            int century = int.Parse(Console.ReadLine());
            int years = 100 * century;
            double days = Math.Truncate(365.2422 * years);
            double hours = 24 * days;
            double minutes = 60 * hours;
            double seconds = 60 * minutes;
            double milliseconds = 1000 * seconds;
            decimal microseconds = (Convert.ToDecimal(1000 * milliseconds));
            decimal nanoseconds = 1000 * microseconds;

            Console.WriteLine($"{century} centuries = {years} years = {days} days = {hours} hours = {minutes} minutes = {seconds} seconds = {milliseconds} milliseconds = {microseconds} microseconds = {nanoseconds} nanoseconds");

        }
    }
}
