using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

using Bamboo.Prevalence;

namespace BambooBreizhCamp
{
    class MoteurPrevalence
    {
        internal static PrevalenceEngine Moteur;

        static MoteurPrevalence()
        {
            Moteur = PrevalenceActivator.CreateEngine(typeof(Stockage), Path.Combine(Path.GetTempPath(), "Persistance"));
        }
    }
}
