using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Volleyball_S
{
    class Program
    {
        static void Main(string[] args)
        {
            string typeYear = Console.ReadLine();
            int holidays = int.Parse(Console.ReadLine());
            int homeTownWeekends = int.Parse(Console.ReadLine());
            int volleyballWeekends = 48;
            int weeekendsInSofia = volleyballWeekends - homeTownWeekends;
            double sofiaWeekendsGames = weeekendsInSofia * (3.0 / 4);
            double holidaysGames = holidays * (2.0 / 3);
            double totalGames = homeTownWeekends + sofiaWeekendsGames + holidaysGames;
			
            if (typeYear == "leap")
            {
                var leapYearGames = (totalGames * 0.15) + totalGames;
                Console.WriteLine(Math.Truncate(leapYearGames));
            }
            else if (typeYear == "normal")
            {
                Console.WriteLine(Math.Truncate(totalGames));
            }
        }
    }
}
