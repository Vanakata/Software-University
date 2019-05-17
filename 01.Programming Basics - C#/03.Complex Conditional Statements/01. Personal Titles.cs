using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Personal_Titles_S
{
    class Program
    {
        static void Main(string[] args)
        {
            double age = double.Parse(Console.ReadLine());
            string sex = Console.ReadLine().ToLower();
            if (age>=16 && sex == "m")
            {
                Console.WriteLine("Mr.");
            }
            else if (age <= 16 && sex == "m")
            {
                Console.WriteLine("Master");
            }
            if(age >=16 && sex == "f")
            {
                Console.WriteLine("Ms.");
            }
            else if (age<=16 && sex == "f")
            {
                Console.WriteLine("Miss");
            }
        }
    }
}
