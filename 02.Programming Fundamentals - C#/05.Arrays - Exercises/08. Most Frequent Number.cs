using System;
using System.Linq;

namespace _19._Thea_The_Photographer
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int maxCounter = 0;
            int maxNumber = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                int counter = 0;

                for (int j = i; j < numbers.Length; j++)
                {

                    if (numbers[i] == numbers[j])
                    {
                        counter++;
                    }
                }

                if (counter > maxCounter)
                {
                    maxCounter = counter;
                    maxNumber = numbers[i];
                }

            }
            Console.WriteLine(maxNumber);
        
        }
    }
}
