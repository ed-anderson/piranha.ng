using Piranha.AttributeBuilder;
using Piranha.CMS.Regions;
using Piranha.Extend;
using Piranha.Models;

namespace Piranha.CMS.Models
{
    [PageType(Title = "Simple Page", UseBlocks = false)]
    public class SimplePage : Page<SimplePage>
    {
        [Region]
        public SimpleRegion PersonalInfo { get; set; }
    }
}
