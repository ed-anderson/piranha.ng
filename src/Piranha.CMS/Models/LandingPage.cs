using Piranha.AttributeBuilder;
using Piranha.CMS.Regions;
using Piranha.Extend;
using Piranha.Models;

namespace Piranha.CMS.Models
{
    [PageType(Title = "Landing Page", UseBlocks = false)]
    public class LandingPage : Page<LandingPage>
    {
        [Region] public WelcomeMessageRegion WelcomeMessageRegion { get; set; }
    }
}