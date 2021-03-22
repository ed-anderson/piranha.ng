using Piranha.AttributeBuilder;
using Piranha.CMS.Regions;
using Piranha.Extend;
using Piranha.Models;

namespace Piranha.CMS.Models
{
    [PageType(Title = "Select Item Page", UseBlocks = false)]
    public class SelectItemPage : Page<SelectItemPage>
    {
        [Region] public SelectItemRegion SelectItemRegion { get; set; }
    }
}