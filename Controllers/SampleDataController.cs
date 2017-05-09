using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;

namespace WebApplicationBasic.Controllers
{
    //[Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static readonly RandomNumberGenerator generator = RandomNumberGenerator.Create();

        [Route("api/token/{size}")]
        [HttpGet("{size}")]
        public JsonResult WeatherForecasts(int size)
        {
            if (size > 10000) size = 10000;
            var token = new byte[size];
            generator.GetBytes(token);
            string result = Convert.ToBase64String(token);
            string res = "";
            for (int i = 0; i < size; i++)
            {
                if (result[i] == '+' || result[i] == '/')
                {
                    i++;
                    size++;
                }
                res += result[i];
            }

            return Json(res);
        }


    }
}
