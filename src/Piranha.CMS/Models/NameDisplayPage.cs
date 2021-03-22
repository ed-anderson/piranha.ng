using Piranha.AttributeBuilder;
using Piranha.CMS.Regions;
using Piranha.Extend;
using Piranha.Models;

namespace Piranha.CMS.Models
{
    [PageType(Title = "Name Display Page", UseBlocks = false)]
    public class NameDisplayPage : Page<NameDisplayPage>
    {
        [Region] public FullNameRegion FullNameRegion { get; set; }
    }
}