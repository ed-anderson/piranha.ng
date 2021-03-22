using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Piranha.CMS.Controllers
{
    public class CmsController : Controller
    {
        private readonly IApi _api;

        /// <summary>
        /// Default constructor.
        /// </summary>
        /// <param name="api">The current api</param>
        public CmsController(IApi api)
        {
            _api = api;
        }

        /// <summary>
        /// Gets the page with the given id.
        /// </summary>
        /// <param name="id">The unique page id</param>
        /// <param name="draft">If a draft is requested</param>
        [Route("pages")]
        public async Task<IActionResult> GetPageById(Guid id)
        {
            try
            {
                var model = await _api.Pages.GetByIdAsync(id);
                return Json(model);
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized();
            }
        }

        /// <summary>
        /// Gets the sitemap.
        /// </summary>
        [Route("sitemap")]
        public async Task<IActionResult> GetSitemap()
        {
            try
            {
                var sitemap = await _api.Sites.GetSitemapAsync();
                return Json(sitemap);
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized();
            }
        }
    }
}
