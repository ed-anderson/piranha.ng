using Piranha.Extend;
using Piranha.Extend.Fields;

namespace Piranha.CMS.Regions
{
    public class WelcomeMessageRegion
    {
        [Field(Title = "Welcome Message")] public TextField WelcomeMessage { get; set; }

        [Field(Title = "Colour")] public ColorField Colour { get; set; }
    }
}