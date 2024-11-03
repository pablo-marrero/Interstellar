using Interstellar.Data;
using Microsoft.AspNetCore.Mvc;
using Interstellar.Models;


namespace Interstellar.Areas.Destination
{
    [Area("Destination")]
    public class DestinationController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DestinationController(ApplicationDbContext context){
            _context = context;
        }



        [HttpGet]
        public async Task<IActionResult> Index(string destination)
        {
            destination = string.IsNullOrWhiteSpace(destination) ? "Moon" : destination;

            var dataDestination = await Task.Run(() =>
                _context._JsonData.Destinations
                .FirstOrDefault(x => x.Name.Equals(destination, StringComparison.CurrentCultureIgnoreCase)) // Devuelve el primero que coincida
                );
                return View (dataDestination);
        }


        #region
        [HttpGet]
         public async Task<IActionResult> SearchData(string destinationName){    
            var dataDestination = await Task.Run(() =>
                _context._JsonData.Destinations
                .FirstOrDefault(x => x.Name.Equals(destinationName, StringComparison.CurrentCultureIgnoreCase)) // Devuelve el primero que coincida
                );

             return RedirectToAction("Index", new { destination = dataDestination.Name });
        }
        #endregion
    }
}
