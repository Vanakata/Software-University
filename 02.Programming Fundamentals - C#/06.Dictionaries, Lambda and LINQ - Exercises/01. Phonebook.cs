using System;
using System.Collections.Generic;
using System.Linq;

namespace _Practice_
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> phonebook = new Dictionary<string, string>();

            while (true)
            {
                List<string> commands = Console.ReadLine().Split().ToList();

                for (int i = 0; i < commands.Count; i++)
                {

                    if (commands[i] == "A")
                    {
                        commands.RemoveAt(i);
                        string name = commands[i];
                        string number = commands[i + 1];
                        if (phonebook.ContainsKey(name))
                        {
                            phonebook[name] = number;
                        }
                        else
                        {
                            phonebook.Add(name, number);
                        }
                    }
                    else if (commands[i] == "S")
                    {
                        commands.RemoveAt(i);
                        string name = commands[i];

                        for (int j = 0; j < commands.Count; j++)
                        {
                            if (phonebook.ContainsKey(name))
                            {
                                string foundNumber = phonebook[name];
                                Console.WriteLine($"{name} -> {foundNumber}");
                            }
                            else
                            {
                                Console.WriteLine($"Contact {name} does not exist.");
                            }
                        }
                    }
                    else if (commands[i] == "END")
                    {
                        return;
                    }
                }
            }
        }
    }
}
