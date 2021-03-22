using Piranha.AttributeBuilder;
using Piranha.CMS.Regions;
using Piranha.Extend;
using Piranha.Models;

namespace Piranha.CMS.Models
{
    [PageType(Title = "Complex Page", UseBlocks = false)]
    public class ComplexPage : Page<ComplexPage>
    {
        [Region]
        public ColouredTextRegion ColouredText { get; set; }
    }
}
