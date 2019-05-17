using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fruit_or_fruit_S
{
    class Program
    {
        static void Main(string[] args)
        {
            string fruit = Console.ReadLine();
			
            if (fruit == "banana"|| fruit == "apple" || fruit == "kiwi" || fruit == "cherry" || fruit == "lemon" || fruit == "grapes")
            {
                Console.WriteLine("fruit");
            }
            else if (fruit == "tomato"|| fruit == "cucumber" || fruit == "carrot" || fruit == "pepper")
            {
                Console.WriteLine("vegetable");
            }
            else
            {
                Console.WriteLine("unknown");
            }
        }
    }
}
