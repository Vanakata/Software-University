using System;

namespace _3._English_Name_оf_the_Last_Digit
{
    class Program
    {
        static void Main(string[] args)
        {

            GetLastDigit();
        }
        static void GetLastDigit()
        {
            string number = Console.ReadLine();

            if (number.EndsWith("1"))
            {
                Console.WriteLine("one");
            }
            else if (number.EndsWith("2"))
            {
                Console.WriteLine("two");
            }
            else if (number.EndsWith("3"))
            {
                Console.WriteLine("three");
            }
            else if (number.EndsWith("4"))
            {
                Console.WriteLine("four");
            }
            else if (number.EndsWith("5"))
            {
                Console.WriteLine("five");
            }
            else if (number.EndsWith("6"))
            {
                Console.WriteLine("six");
            }
            else if (number.EndsWith("7"))
            {
                Console.WriteLine("seven");
            }
            else if (number.EndsWith("8"))
            {
                Console.WriteLine("eight");
            }
            else if (number.EndsWith("9"))
            {
                Console.WriteLine("nine");
            }
            else
            {
                Console.WriteLine("zero");
            }
        }
    }
}
