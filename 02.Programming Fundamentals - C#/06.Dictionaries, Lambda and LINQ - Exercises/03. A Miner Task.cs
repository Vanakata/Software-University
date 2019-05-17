using System;
using System.Collections.Generic;
using System.Linq;

namespace _Practice_
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> output = new Dictionary<string, int>();

            while (true)
            {
                string commands = Console.ReadLine();
                if (commands == "stop")
                {
                    foreach (var item in output)
                    {
                        Console.WriteLine($"{item.Key} -> {item.Value}");
                    }
                    return;
                }
                int quantity = int.Parse(Console.ReadLine());
                if (!output.ContainsKey(commands))
                {
                    output.Add(commands, quantity);
                }
                else
                {
                    output[commands] += quantity;
                }
            }
        }
    }
}
