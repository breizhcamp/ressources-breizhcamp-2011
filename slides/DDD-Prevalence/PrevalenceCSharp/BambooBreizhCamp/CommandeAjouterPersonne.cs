using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bamboo.Prevalence;

namespace BambooBreizhCamp
{
    [Serializable]
    class CommandeAjouterPersonne : ICommand
    {
        private string Nom;
        private string Prenom;
        private int Age;

        public CommandeAjouterPersonne(string Nom, string Prenom, int Age)
        {
            this.Nom = Nom;
            this.Prenom = Prenom;
            this.Age = Age;
        }

        public object Execute(object system)
        {
            (system as Stockage).ListePersonnes.Add(new Personne() { Nom = Nom, Prenom = Prenom, Age = Age });
            return null;
        }
    }
}
